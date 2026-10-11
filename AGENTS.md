# Working in this repository (Base44 sandbox notes)

## What the project is
A build-free static marketing site for Yan's-Net Academy: `index.html`, `style.css`,
`script.js` and image assets (`*.png`, `*.jpeg`) at the repo root. There is no
package manager, no bundler, no backend and no test suite — no `npm install`,
migration or seed step is needed or possible.

## Running it
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
One `web` service: stock `nginx:alpine` serving the repository root read-only at
`/usr/share/nginx/html`, published on host port 3000. `.base44/nginx.conf` keeps
dotfiles (`.git`, `.base44`) and this compose file from being downloadable
through the preview — extend that config rather than serving the root raw if
more repo metadata appears.

## Edit loop
There is no live-reload server and nothing to compile: nginx reads the bind-mounted
files per request, so an edit is live as soon as the page is reloaded. In the
Base44 preview, call `reload_preview` after a change so the iframe picks it up.

## External services
- Registration and newsletter forms POST to `https://formsubmit.co/` (no API key;
  the first real submission asks the mailbox owner to confirm the address).
- Google Fonts, plus social/WhatsApp deep links.
None of these require credentials, so `.base44/environment.json` declares no secrets.

## Quirks worth knowing (pre-existing, not sandbox issues)
- `script.js` attaches two `submit` handlers to `#regForm`; the second
  (`mailto:` redirect) runs after the first (`formsubmit.co` + WhatsApp popup).
- Several nav links point at the absolute `https://yansacad.github.io/...` URL,
  so those jump out of the preview to the published GitHub Pages site.
- `index.html` contains two `<div id="ai-launchpad">` (a section and a nested div)
  and inline `Impact-Site-Verification:` text as the first line of `<body>`.
