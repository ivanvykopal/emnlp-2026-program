# EMNLP 2026 Program — Conference, Tutorials & Workshops

One page with a **common schedule of EMNLP 2026** (October 24–29, 2026, Budapest):
the main conference (Oct 24–27, `workshops/main-conference.js`) and all workshops
(Oct 28–29), including invited speakers and keynote titles where announced.
Static site: no build step, no dependencies, no tracking.

## Features

- **Schedule view** (default): every timed event from every workshop, grouped by
  day and start time. Keynotes show the speaker, affiliation, and talk title
  (or "Title TBA"). Parallel breaks are merged into one row.
- Workshops without a timed program are listed under each day with their
  announced speakers and titles, so known keynotes always show up.
- **Events view**: one card per event (main conference, tutorials, each workshop) with status, speakers, full program, and notes.
- Filters: day, workshop, keynotes only, hide breaks, full-text search. Filters
  are stored in the URL hash, so links like `#day=thu&keynotes=1` can be shared.
- Past events are grayed out and events happening right now get a **Now** badge, based on
  the current time in Budapest (`TZ` and each day's `date` in `workshops/index.js`). Updates live.

## Layout

```text
index.html               page + loader (loads the files listed in workshops/index.js)
workshops/index.js       site config (dates, last-updated) + WORKSHOP_FILES list
workshops/<id>.js        one file per workshop: addWorkshop({...})
workshops/_template.js   annotated template for new workshops
assets/app.js            rendering and filters (vanilla JS)
assets/style.css         styles (light/dark)
tools/validate.mjs       data checker (run before pushing)
```

## Adding or updating a workshop

1. Copy `workshops/_template.js` to `workshops/<id>.js` and fill it in. Only
   `name` and `day` are required. Leave `schedule: []` until the program is out.
2. Add `"<id>"` to `WORKSHOP_FILES` in `workshops/index.js`.
3. Bump `LAST_UPDATED` in `workshops/index.js`.
4. Run `node tools/validate.mjs` and open the page locally.

Schema, in short:

- `day`: a key from `DAYS` in `workshops/index.js` (`"sat"` … `"thu"`), or an array for multi-day events
  (e.g. `["wed", "thu"]`). In multi-day files, each schedule entry gets its own `day`.
- `main: true` (main conference only) lists the entry first.
- `speakers[]`: `{ name, affiliation, title }`, where `title` is the keynote title (`null` until announced).
- `schedule[]`: `{ time: "09:00–10:00", type, title, speaker?, details? }`, with
  `type` one of `keynote | tutorial | talk | poster | panel | session | break | other`.
  Use `time: ""` for tentative items that have no time yet.
  On keynotes, set `speaker` to a name from `speakers[]`. The title and
  affiliation are then filled in from `speakers[]`, so a newly announced title
  only needs to be entered once.
- `status` is derived automatically: a timed schedule means published; speakers
  or untimed items mean partial; otherwise not announced. Set it explicitly only
  to override this.

## Deploy (GitHub Pages)

Live at **https://ivanvykopal.github.io/emnlp-2026-program/**.

Pages serves the `main` branch root directly (**Settings → Pages → Deploy from a branch**,
`main`, `/ (root)`); `.nojekyll` turns off Jekyll. Every push to `main` is live within a
minute or two. Run `node tools/validate.mjs` before pushing.

## Local preview

```bash
python -m http.server 8000   # http://localhost:8000
```

Opening `index.html` directly (`file://`) also works, because there is no `fetch()`.

## Data sources

https://2026.emnlp.org/program/workshops/ and each workshop's own site. Times
are Budapest local time (CET, UTC+1) as published. At collection time,
ClimateNLP, FinNLP, MathNLP, MRL, NLP4PI, and BabyLM had no official site linked.

Unofficial community aggregation; not affiliated with EMNLP. Always check the official pages.
