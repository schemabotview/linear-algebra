# linear-algebra

The GraphL concept app for **Linear Algebra — from vectors to structure and reliable computation**:
12 courses (one per chapter), 80 sections, each section one `(scene, slide, narration)` video segment.

Scaffolded from [`content-repo-template`](https://github.com/schemabotview/content-repo-template).

- `LINEAR-ALGEBRA-COURSE-PLAN.md` — the syllabus: audience, learning spine, chapters and sections.
- `AUTHORING-PLAN.md` — how the syllabus becomes sections, in what order, and the density check.
- `CLAUDE.md` — route contract, course ids, scene vocabulary, and the invariants inherited from the
  template.

## Running it

```sh
npm ci
npm run dev          # http://localhost:5173
```

Routes are `#/<course>-<section>`, e.g. `#/vectors-dot-products`. `#/` is the catalog.

## Verifying a change

```sh
npm run build && npx tsc --noEmit && npm run check
```

All three are a floor. The rendered route is the real bar — see the density targets in `CLAUDE.md`.
