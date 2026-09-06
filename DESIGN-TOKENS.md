# Design Tokens — KONTUR (Webdesigner-KMU-Onepager)

Reine Referenzdatei, kein Kundendokument. Werte 1:1 aus dem freigegebenen
Mockup (`mockup/v2/`) übernommen, umgesetzt in `website/src/index.css`.

## Schriften

Self-hosted (kein Google-Fonts-CDN), Dateien in `website/public/fonts/`,
Subset: `latin` (deckt deutsche Umlaute/ß über U+0000–00FF ab).

- **Archivo** — Variable Font, Achse `wght` 400–700, Stil `normal`
  Datei: `archivo-latin-variable.woff2`
  Verwendung: Fließtext, Body, Buttons, Nav, Labels
- **Cormorant Garamond** — Variable Font, Achse `wght` 400–600, Stil `normal`
  Datei: `cormorant-garamond-latin-variable-normal.woff2`
  Verwendung: Headlines (h1, h2, h3), große Zahlen/Statistiken
- **Cormorant Garamond** — Achse `wght` 500, Stil `italic`
  Datei: `cormorant-garamond-latin-variable-italic.woff2`
  Verwendung: aktuell ungenutzt im Fließtext, als italic-Fallback vorgehalten

### Schriftgrößen

| Element | Mobile | Desktop |
|---|---|---|
| H1 (Hero) | 2.2rem (35.2px) | clamp(2.6rem, 4.2vw, 4.2rem) → 41.6–67.2px |
| H2 (Section) | 1.65rem (26.4px) | clamp(2rem, 3vw, 2.6rem) → 32–41.6px |
| H2 (Über mich) | 1.5rem (24px) | clamp(1.9rem, 2.6vw, 2.4rem) → 30.4–38.4px |
| H3 (Leistungen) | 19px | 26px |
| H3 (Prozess) | 16px | 18px |
| Body / Fließtext | 13.5–16px | 15–18px |
| Label / Eyebrow | 11–14px | 11–14px |
| Button-Text | 14px | 14px |

Zeilenhöhen: Headlines 1.1–1.2, Fließtext 1.6–1.7.

## Farben

| Token | Verwendung | Hex | RGB |
|---|---|---|---|
| `--paper` | Haupt-Hintergrund | `#F5F5F2` | rgb(245, 245, 242) |
| `--paper-2` | Sekundär-Hintergrund (Problem, Portfolio, Prozess) | `#ECECE7` | rgb(236, 236, 231) |
| `--ink` | Haupttext, dunkler Block (Kontakt) | `#1C1F1D` | rgb(28, 31, 29) |
| `--ink-soft` | Fließtext gedämpft | `#5B5F5B` | rgb(91, 95, 91) |
| `--rule` | Trennlinien, Rahmen | `#DBDDD8` | rgb(219, 221, 216) |
| `--accent` | Akzentfarbe (Grün), Zahlen, Hover-States | `#147A55` | rgb(20, 122, 85) |
| `--accent-ink` | Akzent dunkler Kontrast-Ton | `#0F5F43` | rgb(15, 95, 67) |
| Kontakt-Sektion Text hell | Fließtext auf dunklem Grund | `#B9C2BC` | rgb(185, 194, 188) |
| Kontakt-Sektion Label | Feldlabels auf dunklem Grund | `#8F958F` | rgb(143, 149, 143) |
| Kontakt-Sektion Rahmen | Trennlinien auf dunklem Grund | `#3A3E3B` | rgb(58, 62, 59) |
| Kontakt-Sektion Platzhalter-Text | Eingabe-Platzhalter auf dunklem Grund | `#767C77` | rgb(118, 124, 119) |
| Kontakt-Sektion Box-Fläche | Calendly-Platzhalterfläche | `#2A2D2A` | rgb(42, 45, 42) |

Ein Akzentton (Grün) — bewusst kein zweiter Akzent, siehe Anti-KI-Slop-Regel.

## Breakpoint

Mobile-first, ein Umbruchpunkt: **880px** (`min-width: 880px` schaltet auf
Desktop-Layout: mehrspaltige Grids, volle Nav statt Hamburger-Menü).

## Sonstiges

- Border-Radius: durchgängig `0` (scharfe Kanten, Teil der Design-Sprache)
- Buttons: `btn-solid` (gefüllt, ink/paper invertiert bei Hover),
  `btn-outline` (Rahmen, invertiert bei Hover)
- Einzige Animation: `navDropIn` Keyframe (Nav-Items laufen beim Laden
  gestaffelt von oben ein, `ease-in`, respektiert `prefers-reduced-motion`)
