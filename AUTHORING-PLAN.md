# Authoring plan — Linear Algebra

How `LINEAR-ALGEBRA-COURSE-PLAN.md` becomes 80 recorded sections, and how each frame is checked for
density as well as overflow. The course ids and scene vocabulary are in `CLAUDE.md`.

## Mapping

- **Concept** = Linear Algebra. **Course** = chapter (12). **Section** = plan section (80).
- The plan's per-chapter **Worked illustrations** become scenes. Its **Objective**, **Outcome** and
  **Bridge** lines are not separate sections: the objective goes into the first section's
  narration, and the outcome and bridge go into the last.
- Each section follows the plan's teaching method, compressed to one frame: motivating question
  (narration opening) → definition (slide lead) → worked calculation (scene) → why / failure
  contrast (slide `###` blocks) → bridge (narration close).
- Section id = a short kebab form of the section title (`dot-products`, `rank-nullity`,
  `pivoted-lu`). Ids are permanent once wavs exist.

## The unit of work: one chapter

For each chapter, in this order:

1. **Scenes first.** Draft every scene for the chapter. Scenes are shared where the same object recurs
   (the workshop matrix, the 2×2 shear), so drafting them together avoids near-duplicates.
2. **Slides.** Write each slide to the density band below, not just under the ceiling.
3. **Narration.** 130–170 words per section (≈ 50–70 s at a measured ~150 wpm). Opens with the
   motivating question and closes on the bridge to the next section.
4. **Guards.** `npm run build && npx tsc --noEmit && npm run check && npm run density`.
5. **Look at every route**, then hand the chapter over as a route list for review.
6. **Audio** after review, in one Colab + Chatterbox pass per chapter. Never by hand.

**Chapter 1 (`vectors`, 6 sections) is the pilot.** It calibrates the density tool against real
rendered frames and settles the slide shape. Chapters 2–12 go one at a time after you sign off on it.

## Density check

`npm run check` guards only the **ceiling**: slides over 1000px, overflowing cards, dead `focus`
values and missing wavs. Nothing guards the **floor**, and the template's own demo slides prove the
gap: they model at **739px and 777px**, which is 68–72% of the pane, and still pass. So the floor
needs its own tool.

### `npm run density`: proposed new script, `scripts/density.mjs`

**Slide (static, no browser).** Reuse `slideHeight()` from `check-content.mjs`, exported rather than
copied so the two cannot drift. Report every slide's modelled height. Flag anything under **865px**
(80%) as `thin` and anything in 1000–1025 as `tight`. Over 1000 already fails `check`.

**Scene (rendered, Puppeteer, which is already a devDependency).** Build the snapshot, serve it, and
open each route at 1920×1080 with `?capture=1`. Get the route list from `window.__scene.plan()`, the
same contract the recorders use. For each route, measure:

| metric | how | target |
| --- | --- | --- |
| binding-axis fill | union bbox of `.react-flow__node` ÷ scene pane, max(w, h) ratio | ≥ 0.85 |
| area fill | (bbox w × h) ÷ (pane w × h) | ≥ 0.55 |
| eyebrow clearance | eyebrow rect ∩ any node rect | empty |
| slide, measured | slide content height ÷ pane height | 0.80–0.95 |

The measured slide ratio also checks the static model: if the two disagree by more than ~3% on the
pilot, I'll recalibrate before trusting the model on the other 74 slides. The script writes a table
plus one screenshot per route to a gitignored `density/` folder, so a review can work from images.

Output is a **report, not a gate**, because CLAUDE.md calls these targets, not thresholds, and some
boards are meant to be sparse. Only eyebrow overlap exits non-zero.

### What this means for authoring, decided up front

- **Slide shape.** The demo's shape (H2 + lead + 2 × `###` with 3 bullets) lands around 750px. The
  working shape here is H2 + lead + **three** `###` blocks, usually *Definition / Worked / Watch
  out*, which puts the model in the band. Prefer prose lines to bullets when near the ceiling, since
  bullets cost more height.
- **Plot scenes cannot stand alone.** A `plot` is a fixed ~760×460 data area: wide and short in a
  roughly 1:1 pane, so it fills the width but fails the 0.55 area target. Stack it `TB` with what the
  plot is *of*: the matrix as a `table`, the computation as a short card chain, or a before/after
  second plot. That is real content and restores the aspect ratio.
- **Tall elimination chains** (ch 3, 5) tend to bind on height and run into the eyebrow. Raise
  `padding` to 0.12–0.17 there. Small floating boards (single-concept taxonomies) drop to 0.04.

## Scene plan by chapter

| course | dominant scene shapes |
| --- | --- |
| `vectors` | origin plots with vector segments; a translated-line vs line-through-origin pair; the workshop bundle as a table |
| `matrices` | a grid before/after under a map (paired plots); column-combination as table → plot; composition-order contrast |
| `systems` | augmented-matrix tables with a focused pivot; a `TB` elimination chain; a three-case solution-set taxonomy |
| `spaces` | span/affine plane plots; the four fundamental subspaces as a 2×2 `group`; pivot columns in a table |
| `invertibility` | injective vs surjective contrast; an LU/PA = LU factor chain; one vector in two bases (paired plots) |
| `determinants` | unit square → parallelogram plot; row-operation effects as a card group; large-det vs ill-conditioned contrast |
| `orthogonality` | projection plot with an orthogonal residual (`equal: true`); Gram–Schmidt chain; Q·R tables |
| `least-squares` | three-point line fit with residual segments; normal-equation chain; a duplicated-feature contrast |
| `eigen` | invariant-direction plot; multiplicity taxonomy; matrix-power trajectories as scatter series |
| `symmetric` | ellipse principal axes (sampled `line`); bowl/flat/saddle as a definiteness `group` |
| `svd` | rotate → stretch → rotate as three plots; rank-1 + rank-2 reconstruction tables; PCA scatter |
| `numerical` | small residual vs large error contrast; a condition-number `evolution`; LU/QR/Cholesky/SVD choice group |

## Before the pilot starts

1. Build `scripts/density.mjs` and `npm run density`, and export `slideHeight` from
   `check-content.mjs`.
2. Run it on the demo course to confirm it reports both demo slides as `thin` and agrees with what
   is on screen.
3. Author `vectors`, review it, and delete the `demo` course in the same change.

## Open decisions

- **Vector arrowheads.** `segment` draws no arrowhead, so vectors are a segment plus a tip `marker`.
  If that reads poorly on the pilot, the alternative is an engine change in `@graphlearning/flow`,
  which is outside this repo.
- **Brand.** `--brand #2563eb` (blue) with `--accent-2 #fbbf24` (amber). Swap it if the catalog
  already uses blue for another concept.
- **Optional NumPy code cards.** The plan allows them where they help the mathematics. I'd limit
  them to ch 11–12 (library SVD and conditioning) unless you want them earlier.
