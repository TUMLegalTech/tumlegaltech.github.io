# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public website of the **TUM Legal Tech Group** (Prof. Matthias Grabmair, TU Munich), built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Self-hosted at `https://ltvm5.cit.tum.de` (planned cutover to `https://lt.cit.tum.de`); also published to <https://tum-legal-tech.github.io> as a fallback. Most edits are content edits in `_pages/`, `_people/`, `_projects/`, `_news/`, `_teaching/`, `_funding/`, and `_bibliography/papers.bib` — not theme/layout work.

`README.md`, `INSTALL.md`, `CUSTOMIZE.md`, and `FAQ.md` are upstream al-folio docs. They describe theme features, not this group's site, and are kept around mainly to ease future template syncs.

## Local development

Docker is the recommended path (Ruby + Jekyll + Jekyll Scholar deps are heavy):

```bash
docker compose up        # serves at http://localhost:8080, live-reload on 35729
```

Without Docker:

```bash
bundle install
bundle exec jekyll serve --lsi   # http://localhost:4000
```

The `--lsi` flag enables Latent Semantic Indexing for "related posts" — slow but matches what CI builds. `bin/cibuild` is just `bundle exec jekyll build --lsi`.

`bin/deploy` exists from upstream al-folio for manual `gh-pages` deploys; **do not run it** — deployment is automated (see below).

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main`/`master` and ships the same `_site/` artifact to two destinations:

1. The `gh-pages` branch — published by GitHub Pages at `tum-legal-tech.github.io` (fallback).
2. `/srv/tumlegaltech/_site/` on `ltvm5.cit.tum.de` via `rsync --delete` over SSH — served by Caddy with a TUM/DFN-issued TLS certificate (the canonical production URL).

There is no separate staging; pushing to `main` updates both. The VM has no source code, no Ruby, no Docker build tooling — CI builds, the VM serves. See [DEPLOY.md](DEPLOY.md) for the full operational runbook (secrets, SSH key generation, cert renewal, hostname migration to `lt.cit.tum.de`).

`docker-compose.yml` and `Dockerfile` exist solely for **local development** (`docker compose up`); they are not used in production. `compose.prod.yaml` and `Caddyfile` configure the running Caddy container on the VM.

## Content model

Jekyll **collections** (configured in `_config.yml`) drive most pages. Each collection is a folder of Markdown files with YAML frontmatter:

| Collection     | Folder           | Notes                                                                                          |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| `people`       | `_people/`       | One file per group member. `category` controls the section on `/people/`; `importance` orders within section. The set of categories is hard-coded in `_pages/people.md` as `display_categories`. |
| `projects`     | `_projects/`     | `_pages/projects.md` lists them; `importance` orders them.                                     |
| `news`         | `_news/`         | Items show on the home page (`_pages/about.md`).                                               |
| `funding`      | `_funding/`      | Funder cards shown at the bottom of the home page.                                             |
| `teaching`     | `_teaching/`     | Note: contains both flat files AND semester subfolders (`SS2025/`, `WS2024-25/`).              |

`_templates/` contains skeletons for new people, courses, and projects — copy from there.

## Publications (Jekyll Scholar)

All publications live in `_bibliography/papers.bib` and are rendered on `/publications/` via `jekyll-scholar` (configured under `scholar:` in `_config.yml`). Two project-specific conventions:

1. **The publications page has client-side filters** (year / author / document type) implemented in `_pages/publications.md`. The type filter reads the BibTeX `keywords` field — every entry should be tagged with one of: `peer-reviewed-conference`, `academic-legal`, `magazine`, or `blog`. Without a matching keyword, an entry is hidden when any type other than "all" is selected.
2. The author filter matches against last names from `site.people` — adding a new group member to `_people/` automatically adds them to the author filter dropdown.

PDFs go in `assets/pdf/`; reference them in bib entries with `pdf = {filename.pdf}`. Other supported bib fields are listed in `filtered_bibtex_keywords` in `_config.yml` and rendered as buttons by `_layouts/bib.html`.

## Layouts and includes

- `_layouts/` — page templates referenced by `layout:` in frontmatter (`about`, `page`, `profiles`, `post`, `people`, `funding-post`, `bib`, `distill`, `cv`).
- `_includes/` — partials assembled into pages (`person.html`, `projects.html`, `news.html`, `selected_papers.html`, `head.html`, `footer.html`, etc.).
- `_sass/` — styles. Theme color is `--global-theme-color` in `_sass/_themes.scss`.
- `_plugins/` — small custom Ruby plugins (cache busting, details blocks, file-exists check). Note that custom Ruby plugins mean the site **cannot** be built by GitHub Pages' built-in Jekyll — that's why deployment goes through Actions.

## Things to know before changing build config

- **`jekyll-imagemagick` is intentionally disabled** in `_config.yml` (`imagemagick.enabled: false`). It was disabled in commit d98683b because WebP variants weren't being generated in CI, causing broken images on first load. Don't re-enable it without verifying the CI behavior.
- The site uses `jekyll-minifier`, which can swallow errors silently when JS/HTML is malformed — disable it temporarily in `_config.yml` if debugging mysterious production-only breakage.
- `_bibliography/papers_backup.bib` and `papers copy.bib` are stale snapshots — `papers.bib` is the source of truth.
