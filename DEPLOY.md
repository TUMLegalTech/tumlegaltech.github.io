# Production deployment

The TUM Legal Tech website is hosted on the CIT VM **`ltvm5.cit.tum.de`** (alias `LT-HP`). GitHub Pages also publishes the same site at <https://tum-legal-tech.github.io> as a fallback.

## Architecture

```
┌──────────────────┐    push to main    ┌──────────────────────────────┐
│ GitHub repo      ├───────────────────►│ GitHub Actions               │
│ TUMLegalTech/... │                    │ .github/workflows/deploy.yml │
└──────────────────┘                    └──────┬──────────────┬────────┘
                                               │              │
                              build + purgecss │              │
                                               │              │
                                       ┌───────▼───────┐ ┌────▼────────────────┐
                                       │ gh-pages      │ │ rsync over SSH      │
                                       │ branch        │ │ (LT_HP_DEPLOY_KEY)  │
                                       └───────┬───────┘ └────┬────────────────┘
                                               │              │
                                  ┌────────────▼─────┐   ┌────▼────────────────┐
                                  │ tum-legal-tech   │   │ ltvm5.cit.tum.de    │
                                  │ .github.io       │   │ /srv/tumlegaltech/  │
                                  │ (fallback)       │   │   _site/   ◄── rsync│
                                  │                  │   │   Caddyfile         │
                                  │                  │   │   compose.prod.yaml │
                                  │                  │   │ Caddy + rbg-cert    │
                                  └──────────────────┘   └─────────────────────┘
```

The VM has **no source code, no `.git`, no Ruby, no Jekyll** — only the rendered `_site/`. CI does all the building.

## What's on the VM

| Path | Purpose |
| --- | --- |
| `/srv/tumlegaltech/_site/` | Rendered site, replaced on every CI deploy via rsync |
| `/srv/tumlegaltech/Caddyfile` | Caddy config, kept in sync with the repo |
| `/srv/tumlegaltech/compose.prod.yaml` | Compose file defining the Caddy service |
| `/etc/caddy/tls/{fullchain,privkey}.pem` | TLS cert installed by the rbg-cert hook |
| `/usr/local/cert.d/50-tumlegaltech-caddy` | Hook that copies certs and reloads Caddy |
| Caddy container (`tumlegaltech-caddy-1`) | Long-running, serves :80/:443 |

## Deploys

Every push to `main` automatically:
1. CI builds the site (`bundle exec jekyll build --lsi` + `purgecss`).
2. The build is published to the `gh-pages` branch (so GitHub Pages refreshes).
3. The same `_site/` is rsynced (with `--delete`) to `/srv/tumlegaltech/_site/` on LT-HP.
4. Caddy serves the new content immediately — it reads files live from the bindmount, no reload required.

To deploy a fix manually outside of a push, run the **deploy** workflow from <https://github.com/TUMLegalTech/tumlegaltech.github.io/actions> via "Run workflow" (the workflow accepts `workflow_dispatch`).

## Rollback

The `_site/` artifact is uploaded as a workflow artifact and retained for 7 days. To roll back:

1. Find the last good run in the Actions tab.
2. Re-run that workflow (keeps its old commit context).

Alternatively, `git revert <bad-commit>` on `main` produces a fresh CI run with the rolled-back content.

## Required GitHub Actions secrets

The deploy step reads two secrets. Set them in `Settings → Secrets and variables → Actions` on the repo:

| Secret | Contents |
| --- | --- |
| `LT_HP_DEPLOY_KEY` | Private SSH key authorized for the `tumlegaltech` user on the VM |
| `LT_HP_KNOWN_HOSTS` | One-line `ssh-keyscan -H ltvm5.cit.tum.de` output (host key pin) |

If either is missing, the workflow logs a warning and skips the VM deploy (the GH Pages step still runs).

### Generating / rotating the deploy key

On any machine with `ssh-keygen`:

```bash
ssh-keygen -t ed25519 -f lt-hp-deploy -N "" -C "github-actions deploy → ltvm5.cit.tum.de"
```

Produces `lt-hp-deploy` (private) and `lt-hp-deploy.pub` (public).

1. Append `lt-hp-deploy.pub` to `/var/lib/tumlegaltech/.ssh/authorized_keys` on LT-HP. Keep the SSH options restrictive — see [next section](#hardening-the-deploy-account).
2. Paste the contents of `lt-hp-deploy` (private key, including the `-----BEGIN`/`-----END` lines) into the `LT_HP_DEPLOY_KEY` secret.
3. Run `ssh-keyscan -H ltvm5.cit.tum.de` and paste the output (typically several lines for ed25519 / rsa / ecdsa) into `LT_HP_KNOWN_HOSTS`.
4. Delete the `lt-hp-deploy` private key file from your local machine.

### Hardening the deploy account

The `tumlegaltech` user only needs to receive rsync into `/srv/tumlegaltech/_site/`. It does **not** need a shell, Docker, or any other capabilities. Recommended `authorized_keys` line:

```
restrict,command="rrsync /srv/tumlegaltech/_site" ssh-ed25519 AAAA... github-actions deploy
```

`rrsync` (`/usr/share/doc/rsync/scripts/rrsync.gz` on Ubuntu) constrains the SSH session to rsync into the given path. Even if the deploy key is exfiltrated, the attacker can only replace `/srv/tumlegaltech/_site/` — not modify the Caddyfile, install software, or run other commands.

## TLS certificate

`rbg-cert` (TUM CIT) issues and renews the certificate. A daily systemd timer (`rbg-cert.timer`) checks for expiry; renewal is automatic ~30 days before the cert runs out.

When `rbg-cert` installs a renewed cert, it runs every executable in `/usr/local/cert.d/` via `run-parts(8)`. The hook at `/usr/local/cert.d/50-tumlegaltech-caddy` (sourced from `bin/cert-renew-hook` in this repo) copies `fullchain.pem` and `privkey.pem` into `/etc/caddy/tls/` and tells Caddy to reload.

To re-issue the cert manually (e.g. after adding a new SAN to StrukturDB):

```bash
sudo rbg-cert --force-request
# Wait a few minutes, then:
sudo rbg-cert            # this installs the issued cert and runs the hook
```

## Hostname migration: `ltvm5.cit.tum.de` → `lt.cit.tum.de`

The `Caddyfile` already accepts both names. To complete the cutover:

1. **StrukturDB** — add `lt.cit.tum.de` to the host entry so `rbg-cert` includes it in the cert SAN. Run `sudo rbg-cert --force-request` afterwards.
2. **DNS** — request CIT IT to add `A 131.159.30.175` and `AAAA 2a09:80c0:30::175` for `lt.cit.tum.de`.
3. **Caddyfile** — once both are live and verified, drop `ltvm5.cit.tum.de` from the site block. Optionally keep a stub `ltvm5.cit.tum.de { redir https://lt.cit.tum.de{uri} permanent }` for one release cycle, then remove that too.

## VM provisioning (one-time)

Recorded for posterity / future re-provisioning. None of this is required during normal operation.

```bash
# packages
sudo apt update
sudo apt install -y docker.io docker-compose-v2 rsync

# deploy user (no shell access beyond rsync; see "Hardening the deploy account")
sudo useradd --system --create-home --home-dir /var/lib/tumlegaltech \
             --shell /bin/bash --comment "tumlegaltech.github.io deploy" tumlegaltech

# repo target dir
sudo install -d -o tumlegaltech -g ltvm5-admin -m 2775 /srv/tumlegaltech
sudo install -d -o tumlegaltech -g ltvm5-admin -m 2775 /srv/tumlegaltech/_site

# place Caddyfile + compose.prod.yaml (one-off; rare changes)
# (copy from this repo or from the corresponding git ref)

# rbg-cert renewal hook
sudo install -m 0755 bin/cert-renew-hook /usr/local/cert.d/50-tumlegaltech-caddy

# initial cert (idempotent; safe to re-run)
sudo rbg-cert --force-request && sleep 60 && sudo rbg-cert

# bring Caddy up
cd /srv/tumlegaltech
docker compose -f compose.prod.yaml up -d caddy
```

After this, all subsequent deploys are driven by CI; the VM is set-and-forget.
