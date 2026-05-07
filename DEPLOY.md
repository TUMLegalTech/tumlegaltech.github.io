# Production deployment

The TUM Legal Tech website is hosted on the CIT VM **`ltvm5.cit.tum.de`** (alias `LT-HP`) and served publicly at **`https://legaltech.cit.tum.de`**. GitHub Pages also publishes the same site at <https://tum-legal-tech.github.io> as a fallback during the VM-soak period.

## Architecture

```
┌─────────────────────┐                          ┌──────────────────────────────────────────┐
│ GitHub repo         │  push to main            │ GitHub Actions (job: build)              │
│ TUMLegalTech/...    ├───────────────────────►  │ jekyll build --lsi + purgecss            │
└─────────────────────┘                          │ html-proofer (internal links + HTML)     │
                                                 └──────────────────┬───────────────────────┘
                                                                    │ passes? upload _site/ artifact
                                                                    │
                                                 ┌──────────────────▼───────────────────────┐
                                                 │ GitHub Actions (job: deploy)             │
                                                 │ download artifact → push to branches     │
                                                 └──────┬───────────────────────┬───────────┘
                                                        │                       │
                                           ┌────────────▼─────┐   ┌────────────▼─────────┐
                                           │ branch:          │   │ branch:              │
                                           │ production       │   │ gh-pages             │
                                           │ (canonical)      │   │ (fallback only)      │
                                           └────────┬─────────┘   └──────────┬───────────┘
                                                    │                        │
                                git fetch every 2 min                        │ GitHub Pages
                                                    │                        │
                                           ┌────────▼──────────────┐   ┌────▼──────────────┐
                                           │ /srv/tumlegaltech/    │   │ tum-legal-tech    │
                                           │   _site/  ◄── pull   │   │ .github.io        │
                                           │   (sanity-checked)    │   │ (fallback)        │
                                           │   Caddyfile           │   │                   │
                                           │   compose.prod.yaml   │   │                   │
                                           │   Caddy + rbg-cert    │   │                   │
                                           └───────────────────────┘   └───────────────────┘
```

The VM has **no inbound network dependency** beyond ports 80/443 — no SSH from the public internet, no GitHub Actions secrets to manage. The deploy direction is pull, not push: a systemd timer on the VM polls the `production` branch every 2 minutes and rsyncs the new content into the directory Caddy serves.

The `production` branch is only updated when the CI build and tests pass — a broken build or a failing html-proofer run leaves `production` (and therefore the live site) unchanged. The `gh-pages` branch is published in parallel as a fallback at `tum-legal-tech.github.io`; once the VM has been stable for a release cycle, drop the `Publish to gh-pages branch (fallback)` step from `.github/workflows/deploy.yml` to fully decouple from GitHub Pages.

## What's on the VM

| Path | Purpose |
| --- | --- |
| `/srv/tumlegaltech/_site/` | Rendered site, replaced on every pull |
| `/srv/tumlegaltech/Caddyfile` | Caddy config, kept in sync with the repo |
| `/srv/tumlegaltech/compose.prod.yaml` | Compose file defining the Caddy service |
| `/var/lib/tumlegaltech/build/` | Shallow clone of the `production` branch |
| `/var/lib/tumlegaltech/pull.lock` | flock guard for the pull script |
| `/usr/local/bin/pull-from-production` | Pull script (sourced from `bin/` in this repo) |
| `/etc/systemd/system/tumlegaltech-pull.{service,timer}` | systemd units (sourced from `deploy/systemd/`) |
| `/etc/caddy/tls/{fullchain,privkey}.pem` | TLS cert installed by the rbg-cert hook |
| `/usr/local/cert.d/50-tumlegaltech-caddy` | Hook that copies certs and reloads Caddy |
| Caddy container (`tumlegaltech-caddy-1`) | Long-running, serves :80/:443 |

## Deploys

Every push to `main`:

1. CI (job: **build**) builds the site (`bundle exec jekyll build --lsi` + `purgecss`).
2. CI runs `html-proofer` against `_site/` — checks internal links, image sources, and HTML structure. If this fails, the pipeline stops here; `production` is not updated and the live site is unaffected.
3. CI uploads `_site/` as a workflow artifact, then the **deploy** job downloads it and pushes it to the `production` branch (and to `gh-pages` while the fallback is active).
4. Within ~2 minutes, the VM's `tumlegaltech-pull.timer` fires.
5. The pull script `git fetch`es `production`. If unchanged, exits in milliseconds. If changed, `git reset --hard`, then runs a sanity check (≥20 HTML files, `index.html` ≥ 10 KB) before `rsync --delete` into `/srv/tumlegaltech/_site/`. If the sanity check fails, the old site stays live and the error is logged to the systemd journal.
6. Caddy serves the new content immediately — it reads files live from the bindmount, no reload needed.

To check the status from the VM:

```bash
systemctl status tumlegaltech-pull.timer
journalctl -u tumlegaltech-pull.service -n 20
```

To force a deploy without waiting for the timer:

```bash
sudo systemctl start tumlegaltech-pull.service
```

## Rollback

Each push to `production` is a commit on that branch — the history is your rollback ladder.

To roll back to a previous build:

```bash
# pick the SHA you want from `git log origin/production`
git push origin <good-sha>:production --force
```

Within 2 minutes the VM reverts. The same SHA is also tagged on `gh-pages` while the fallback is active, so GitHub Pages reverts automatically too.

To roll back the *source* and let CI rebuild, `git revert <bad-commit>` on `main` produces a fresh CI run, which produces a new commit on `production`.

## TLS certificate

`rbg-cert` (TUM CIT) issues and renews the certificate. A daily systemd timer (`rbg-cert.timer`) checks for expiry; renewal is automatic ~30 days before the cert runs out.

When `rbg-cert` installs a renewed cert, it runs every executable in `/usr/local/cert.d/` via `run-parts(8)`. The hook at `/usr/local/cert.d/50-tumlegaltech-caddy` (sourced from `bin/cert-renew-hook` in this repo) copies `fullchain.pem` and `privkey.pem` into `/etc/caddy/tls/` and tells Caddy to reload.

To re-issue the cert manually (e.g. after adding a new SAN to StrukturDB):

```bash
sudo rbg-cert --force-request
# Wait a few minutes, then:
sudo rbg-cert            # this installs the issued cert and runs the hook
```

## Hostname migration: `ltvm5.cit.tum.de` → `legaltech.cit.tum.de`

The `Caddyfile` already accepts both names. To complete the cutover:

1. **StrukturDB** — add `legaltech.cit.tum.de` to the host entry so `rbg-cert` includes it in the cert SAN. Run `sudo rbg-cert --force-request` afterwards.
2. **DNS** — request CIT IT to add `A 131.159.30.175` and `AAAA 2a09:80c0:30::175` for `legaltech.cit.tum.de`.
3. **Caddyfile** — once both are live and verified, drop `ltvm5.cit.tum.de` from the site block. Optionally keep a stub `ltvm5.cit.tum.de { redir https://legaltech.cit.tum.de{uri} permanent }` for one release cycle, then remove that too.

## VM provisioning (one-time)

Recorded for posterity / future re-provisioning. None of this is required during normal operation.

```bash
# packages
sudo apt update
sudo apt install -y docker.io docker-compose-v2 git rsync

# deploy user (system user; runs the pull timer)
sudo useradd --system --create-home --home-dir /var/lib/tumlegaltech \
             --shell /usr/sbin/nologin \
             --comment "tumlegaltech.github.io deploy" tumlegaltech

# served-content directory
sudo install -d -o tumlegaltech -g ltvm5-admin -m 2775 /srv/tumlegaltech
sudo install -d -o tumlegaltech -g ltvm5-admin -m 2775 /srv/tumlegaltech/_site

# place Caddyfile + compose.prod.yaml (one-off; rare changes)
# (copy from this repo or from a tagged commit)

# rbg-cert renewal hook
sudo install -m 0755 bin/cert-renew-hook /usr/local/cert.d/50-tumlegaltech-caddy

# initial cert (idempotent; safe to re-run)
sudo rbg-cert --force-request && sleep 60 && sudo rbg-cert

# pull script + systemd timer
sudo install -m 0755 bin/pull-from-production /usr/local/bin/pull-from-production
sudo install -m 0644 deploy/systemd/tumlegaltech-pull.service /etc/systemd/system/
sudo install -m 0644 deploy/systemd/tumlegaltech-pull.timer   /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now tumlegaltech-pull.timer

# bring Caddy up
cd /srv/tumlegaltech
docker compose -f compose.prod.yaml up -d caddy
```

After this, all subsequent deploys are driven by CI; the VM is set-and-forget.
