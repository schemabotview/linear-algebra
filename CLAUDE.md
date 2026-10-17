# CLAUDE.md — linear-algebra

> The GraphL concept app for **Linear Algebra**. Scaffolded from `content-repo-template`; the
> invariants below are inherited from it and hold here unchanged. The syllabus is
> `LINEAR-ALGEBRA-COURSE-PLAN.md`; the authoring order and density method are `AUTHORING-PLAN.md`.

## What this repo is

A GraphL concept app: one concept, N courses, each course a list of sections. A **section** is
`(scene, slide, narration)` and is one segment of the course video. One section = one slide.

The render engine is `@graphlearning/flow`; the app shell is `@graphlearning/shell`. Both are
**published packages pinned by version** (`flow@^1.4.0`, `shell@^0.8.0`). This repo's own surface is
`src/content/`, `src/scenes/`, `src/main.tsx` and `src/theme.css` — nothing else.

## Route contract and course arc

One concept (Linear Algebra), **12 courses = the 12 chapters**, **80 sections = the 80 plan sections**.
Routes are `#/<courseId>-<sectionId>`; audio is `public/audio/<courseId>/<sectionId>.wav`.

| # | course id | chapter | sections |
| --- | --- | --- | --- |
| 1 | `vectors` | Vectors, Coordinates, and Linear Relationships | 6 |
| 2 | `matrices` | Matrices and Linear Transformations | 7 |
| 3 | `systems` | Linear Systems and Elimination | 7 |
| 4 | `spaces` | Vector Spaces, Bases, and Rank | 7 |
| 5 | `invertibility` | Invertibility, Factorisation, and Coordinate Changes | 6 |
| 6 | `determinants` | Determinants and Volume | 7 |
| 7 | `orthogonality` | Inner Products, Orthogonality, and QR | 7 |
| 8 | `least-squares` | Least Squares and Approximate Solutions | 7 |
| 9 | `eigen` | Eigenvalues, Eigenvectors, and Dynamics | 6 |
| 10 | `symmetric` | Symmetric Matrices and Quadratic Forms | 7 |
| 11 | `svd` | Singular Value Decomposition and Low-Rank Structure | 7 |
| 12 | `numerical` | Numerical Reliability and Integrated Applications | 6 |

Course ids are permanent once wavs exist — renaming one orphans its audio.

## Scene vocabulary for this subject

- **Vectors, maps, projections, residuals** → `kind: 'plot'` with `equal: true` (distance and right
  angles are the content). A vector is a `segment` with **`arrow: true, dashed: false`** (flow ≥
  1.4.0): a solid shaft, a filled head at `to`, and the label drawn at the tip. **Segments are dashed
  unless `dashed: false` is set**, which is what residuals, projection drop-lines and guides want.
  The head is `1.5 × size` px (default `size` 7). Label series directly (`label`), never with a
  legend.
- **Colour is identity on a plot.** The default series ramp has four hues and then repeats, so a
  fifth series silently matches the first. Set `color` explicitly whenever a plot has more than four
  series, and give one vector one colour: copies of v, or v moved head to tail, share v's hue.
  Series draw in order, so put a long arrow (2u) *before* the short one it covers (u).
- **Stack plot over table (`TB`) and widen the plot's x-range with real content** (another copy, a
  scaled vector, a contrasting case) until the stack matches the pane. Side-by-side (`LR`) was tried
  in chapter 1 and is worse: it shrinks everything, table text included.
- **Data axes are not geometry.** Leave `equal` off when x and y measure different things (t against
  y, k against a norm). `equal: true` on such a plot only makes it tall and narrow.
- **Magnitudes that differ by orders** (singular values, log errors) → a stem plot of `segment`s on a
  zero-based plot, or log₁₀ values. Not `kind: 'evolution'`: it enforces a minimum column height and
  drew σ = 0.164 at a third the height of 16.87.
- **Graphs with cycles** (a flow network's loop edges) lay out with edges stacked on one line. Show the
  incidence matrix as a table instead; it is the content anyway.
- **Matrices and augmented matrices** → `kind: 'table'` with `headers` / `values`; a pivot or the
  entry being eliminated is the section's `focus`.
- **Algorithms (elimination, Gram–Schmidt, LU/QR steps)** → a `TB` chain of leaf cards, one card per
  step; `kind: 'code'` only for the optional NumPy illustrations.
- **Taxonomies (four subspaces, definiteness classes, LU/QR/Cholesky/SVD choice)** → a `group`
  container with `cols: 2`.
- **The workshop resource model** is one shared node factory (a module with no `Scene` id) reused
  across chapters, so the recurring example looks the same every time it appears:
  `src/scenes/workshop.ts`. Plot and table builders shared by every chapter (`arrow`, `image`,
  `circle`, `sample`, `lineEq`, `augmented`, `matrixTable`, `fmt`) are in `src/scenes/plot-kit.ts`;
  `check` sees node ids passed to `augmented()`, `resourceTable()` and `matrixTable()`.
- **Every number on screen is computed.** Fits, decompositions, condition numbers and stability tables
  were produced by running numpy and rounded for display; the scene file's comment says what was run.

## Invariants — do not break

- **Never write `x` or `y`.** Scenes are declarative: nodes, edges, nesting. `computeLayout` is not
  exported, so there is no way around this, and that is the point — reproducible frames.
- **Do not reimplement the shell.** `SectionView`, `CourseIndex`, `SlidePanel` and the hooks are
  withheld on purpose. The route contract (`#/<courseId>-<sectionId>`, `?capture=1`,
  `window.__scene.plan()`) is what every recorder drives, and it holds only if every repo composes
  the pieces identically.
- **`SiteHeader` goes on the catalog page only** — never on a section. A section is a video frame.
- **Three stylesheets, in cascade order**, imported in `main.tsx`. The order is load-bearing:
  1. `@graphlearning/flow/styles.css` — react-flow plus the IBM Plex faces the engine is
     *calibrated* to. `codeMetrics` sizes code nodes from a measured 9.02px glyph advance, so a
     different monospace face mis-sizes every code card. Carries the `.tok-*` colours.
  2. `@graphlearning/shell/styles.css` — the shell paints the canvas (`--bg: #1a1d23`; SceneView
     draws its dots at `#2a2f38` assuming a dark surface).
  3. `./theme.css` — this repo's three brand tokens. **Last, or the brand loses to the defaults.**
- **`file:../ui-flow` / `file:../ui-shell` must never be committed.** Local engine work only; CI has
  no sibling checkout.
- **Narration is never hand-produced.** `.tts` → `.wav` via Colab + Chatterbox only.

## Layout rules the frames actually care about

`npm run check` (`scripts/check-content.mjs`) models four silent failures — each builds green and
breaks only on screen. Its comments carry the measured constants; the short version:

- **Leaf cards are a fixed 210×96** with a ~134px text column. Only containers grow to fit. Keep the
  `label` to 2 wrapped lines; 2 label lines + 2 sub lines fits. Watch unbreakable tokens — `_`, `.`
  and `/` are **not** break opportunities in CSS, so `snake_case` and paths overflow sideways in a
  way the height model cannot see.
- **Slides do not scale to fit.** Type size is fixed by the frame (`zoom = paneWidth / 806`,
  width-proportional only), so an over-long slide **clips at the bottom** with no error.
  `check` fails over 1000 modelled design px; the band below gives the floor too. Bullets cost far
  more than prose of the same length.
- **A `focus:` that names no node in its scene is a silent no-op** — nothing lights up.
- **`icon:` names are NOT guarded.** The engine's lucide registry is `Record<string, LucideIcon>`
  and does not enumerate its keys, so a wrong name type-checks, passes `check`, builds, and renders
  a card with no glyph. There are ~75 valid keys; copy one off an existing scene rather than
  guessing a lucide name (`volume`, `move`, `maximize` and `git` are all absent, for instance).
- **A section with no wav narrates silence** and records a silent segment. Audio resolves purely by
  convention: `public/audio/<course>/<section-id>.wav`.

What `check` does *not* model: an edge label landing on top of a card, or whether the frame is too
empty. Look at the route.

### Density targets — the frame must use the space it has

The guarded failure is a slide that overflows. The unguarded one is its opposite: a frame that
builds green, reads correctly, and leaves half its pane empty. Against the ~1080 design px pane:

| | target | why |
| --- | --- | --- |
| slide height | **80–95 %** of the pane (≈ 865–1025px; `SLIDE_H_MAX` caps the top at 1000) | below 80 % the right half looks empty; above ~95 % it risks clipping |
| scene, binding axis | ≥ 0.85 of the pane | the board should reach the edge it is limited by |
| scene, area | ≥ 0.55 of the pane (w × h) | a wide board that fills the width but a third of the height wastes the pane |
| eyebrow | no node under the top-left eyebrow label | boards that bind on height run up to y≈30 |

Levers: **add real content, not padding**; **restack** a board toward the pane's ~1:1 aspect; lower
scene `padding` to 0.04 for boards that float, **raise** it (0.12–0.17) for tall boards that touch
the eyebrow.

These are read off the rendered route by eye — `check` models no density at all. The two ratios come
from one repo's ~80 frames of diagram-and-code-card boards, so a deliberately sparse board can sit
under them. Targets, not thresholds.

## Guards before handing over

```sh
npm run build && npx tsc --noEmit && npm run check
CHROME_PATH=/opt/pw-browsers/chromium npm run density   # report + density/<slug>.png per route
```

**The slide band is narrow.** `check`'s model over-reserves bullets, so a slide must model ≤ 1000
while rendering ≥ 0.80 of the pane. Author to a model of about 930–995. To gain rendered height
cheaply, lengthen an existing paragraph by a line; to lose model height, turn bullets into prose.

`npm run density` (`scripts/density.mjs`) measures the floor that `check` does not: slide fill,
scene fill and eyebrow overlap, on the rendered route. It judges slide fill on the rendered height,
because the shared slide model (`scripts/slide-model.mjs`) over-reserves by up to ~75px, which is
safe for the ceiling and misleading for the floor.

All three are a **floor, not proof** — they pass on frames that are visually wrong. The rendered
route is the real bar, and the owner reviews it.

## Working agreement

- **Author the whole unit, then hand over the route.** Scenes, slides and narration together.
- **No ASCII sketches of scenes.** A sketch cannot show what the layout engine will do, which is the
  only thing worth looking at.
- **No silent scaffolding**, no work outside the ask. Say plainly what was built, what was verified,
  and what was left out.
