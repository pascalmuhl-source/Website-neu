# Design-Tokens — Pascal Muhl Webdesign (One-Pager)

Reine Referenzdatei, keine Kundendokumentation. Werte wie im Mockup (Phase 2) festgelegt.

## Schriftarten

- Headlines (h1, h2, h3): **Instrument Serif** (Google Fonts, Regular + Italic)
  Fallback: Georgia, serif
- Fließtext / UI / Buttons: **Bricolage Grotesque** (Google Fonts, Variable: opsz 12–96, wght 200–800)
  Fallback: system-ui, sans-serif
- Für die React-Umsetzung (Phase 3): beide Fonts selbst hosten (woff2 von Google Fonts herunterladen,
  lokal einbinden, kein Google-Fonts-CDN-Link) — DSGVO-Vorgabe aus CLAUDE.md.

### Schriftgrößen (Desktop)

| Element              | Größe | Zeilenhöhe | Font |
|----------------------|-------|------------|------|
| H1 (Hero)            | 64px  | 1.12       | Instrument Serif |
| H2 (Section)         | 38px  | 1.2        | Instrument Serif |
| H3 (Leistungen-Titel)| 24px  | 1.2        | Instrument Serif |
| Body / Paragraph     | 16–18px | 1.6      | Bricolage Grotesque |
| Eyebrow / Label      | 12–13px, uppercase, letter-spacing 0.12–0.14em | 1 | Bricolage Grotesque, 600 |
| Button               | 15px  | 1          | Bricolage Grotesque, 600 |

### Schriftgrößen (Mobile)

| Element              | Größe |
|----------------------|-------|
| H1 (Hero)            | 38px  |
| H2 (Section)         | 28px  |
| H3 (Leistungen-Titel)| 21px  |
| Body / Paragraph     | 15–16px |

## Farben

| Rolle                  | Hex     | RGB              |
|------------------------|---------|------------------|
| Hintergrund (Basis)    | #1A1613 | rgb(26, 22, 19)  |
| Hintergrund (Panel/Alt)| #211C17 | rgb(33, 28, 23)  |
| Text (primär)          | #F3EEE7 | rgb(243, 238, 231) |
| Text (gedämpft)        | #A79C8E | rgb(167, 156, 142) |
| Text (schwach/Meta)    | #6E645A | rgb(110, 100, 90) |
| Akzent (Messing/Gold)  | #C9A35F | rgb(201, 163, 95) |
| Linie / Border         | #322B24 | rgb(50, 43, 36)  |
| Linie / Border (subtil)| #241F1A | rgb(36, 31, 26)  |

Akzentfarbe ist im Mockup als Tweak hinterlegt (Alternativen: Salbeigrün #9CAA8C,
Terrakotta #B5763F, Taubenblau #8C9AAA) — falls Pascal eine andere Richtung bevorzugt,
lässt sich das direkt im Canvas durchprobieren.

## Struktur / Seiten

- Startseite (One-Pager): Header, Hero, Leistungen (#leistungen), Kontakt (#kontakt), Footer
- Impressum (eigene Unterseite, schlicht)
- Datenschutz (eigene Unterseite, schlicht)

## Sonstiges

- Radius durchgängig sehr klein (2px) — kein Standard-"rounded-xl"-Look
- Keine Schatten, keine Gradients — Fläche + dünne Linien als Trenner
- Ein durchgängiger CTA-Text: "Projekt anfragen" / "Anfrage senden"
