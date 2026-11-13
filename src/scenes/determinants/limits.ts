import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §6.6 — where determinants help and where they mislead. det(A − λI) = 0 finds eigenvalues (chapter
// 9's preview); but det's SIZE says little about how close to singular a matrix is.
export const limits = board({
  id: 'limits',
  figure: 'What a determinant can and cannot tell you',
  diagram: [
    {
      type: 'plot',
      id: 'char-poly',
      title: 'Useful: det (A − λ I) for A = [2 1; 1 2]: (2 − λ)² − 1 = 0 at λ = 1 and λ = 3: chapter 9',
      x: { min: -0.5, max: 4.5, step: 1, label: 'λ' },
      y: { min: -1.5, max: 5, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(-0.5, 4.5, 80, (l) => (2 - l) ** 2 - 1),
          label: 'det (A − λ I)',
          labelAt: [3.0, 4.5],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[1, 0]],
          label: 'λ = 1',
          labelAt: [0.45, -0.6],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[3, 0]],
          label: 'λ = 3',
          labelAt: [3.15, -0.6],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'misleading',
      title: 'Misleading: the size of det A: condition number κ: big means nearly singular (chapter 12)',
      columns: ['matrix', 'det', 'κ', 'nearly singular?'],
      rows: [
        ['0.1 I, 10 × 10', '10⁻¹⁰', '1', 'no: perfectly conditioned'],
        ['10 I, 100 × 100', '10¹⁰⁰', '1', 'no'],
        ['diag(1000, 0.001)', '1', '10⁶', 'yes, despite det = 1'],
      ]
    },
  ],
  idea: 'Eigenvalue preparation and magnitude limits',
  board: [
    fact('b-rule', 'det A answers one exact question well: is A singular?', 'its size answers much less'),
    facts('b-1', 'Useful: finding eigenvalues', ['det(A − λ I) = 0 ⇔ singular', '[2 1; 1 2]: (2 − λ)² − 1 = 0', 'λ = 1 or 3 (chapter 9)']),
    facts('b-2', 'Misleading: "small det"', ['0.1 I in 10D: det 10⁻¹⁰, fine', 'diag(1000, 0.001): det 1, bad', 'scale moves det, not difficulty']),
    caution('b-watch', 'Never use a determinant threshold as a numerical rank test. Chapter 12 gives the right tool: singular values.'),
  ]
})
