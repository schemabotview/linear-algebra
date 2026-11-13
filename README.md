# linear-algebra

The GraphL concept app for **Linear Algebra — from vectors to structure and reliable computation**:
12 courses (one per chapter), 80 sections, each section one `(scene, narration)` chapter of a single
film. Scenes render with `@graphlearning/graphl-flow`; the app shell is `@graphlearning/shell`.

Scaffolded from [`content-repo-template`](https://github.com/schemabotview/content-repo-template).

- `LINEAR-ALGEBRA-COURSE-PLAN.md` — the syllabus: audience, learning spine, chapters and sections.
- `AUTHORING-PLAN.md` — how the syllabus becomes sections, in what order, and the density check.
- `CLAUDE.md` — route contract, course ids, the board frame, scene vocabulary, invariants, and the
  migration status.

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

All three are a floor. Then `npm run shots -- <course>` and look at `out/shots/`: the rendered frame
is the real bar.

## The film

```sh
npm run record:all   # every course → scripts/segments/
npm run film         # one MP4 with chapters → scripts/out/
```
