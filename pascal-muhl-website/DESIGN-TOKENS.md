# Design-Tokens — Pascal Muhl Webdesign (One-Pager)

Reine Referenzdatei, keine Kundendokumentation. Werte wie im Mockup (Phase 2) festgelegt.

## Schriftarten

- Eine einzige Schriftfamilie für Headlines UND Fließtext: **Bricolage Grotesque**
  (Google Fonts, Variable: opsz 12-96, wght 200-800). Headlines nutzen hohe Gewichtung
  (600-800) und leicht negativen Tracking, Fließtext reguläres Gewicht (400).
  Fallback: system-ui, sans-serif.
- Bewusst KEINE Serife (Instrument Serif/Fraunces sind laut `design-taste-frontend`-Skill
  die zwei meistgenutzten KI-Signal-Schriften und wurden deshalb entfernt). Eine einzelne
  variable Grotesk-Schrift in unterschiedlichen Schnitten für Headline/Body wirkt
  eigenständiger als ein generisches Serif+Sans-Pairing.
- Für die React-Umsetzung (Phase 3): Bricolage Grotesque selbst hosten (woff2 von Google
  Fonts herunterladen, lokal einbinden, kein Google-Fonts-CDN-Link) - DSGVO-Vorgabe aus
  CLAUDE.md.

### Schriftgrößen (Desktop)

| Element              | Größe | Zeilenhöhe | Gewicht |
|----------------------|-------|------------|---------|
| H1 (Hero)            | 60px  | 1.1        | 600, letter-spacing -0.01em |
| H2 (Section)         | 36px  | 1.2        | 600 |
| H3 (Leistungen-Titel)| 21-23px | 1.2      | 600 |
| Body / Paragraph     | 16-18px | 1.6-1.65 | 400 |
| Eyebrow / Label      | 13px, uppercase, letter-spacing 0.14em | 1 | 600 |
| Button               | 15px  | 1          | 600 |

### Schriftgrößen (Mobile)

| Element              | Größe |
|----------------------|-------|
| H1 (Hero)            | 36px  |
| H2 (Section)         | 26px  |
| H3 (Leistungen-Titel)| 18-20px |
| Body / Paragraph     | 14-16px |

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
Terrakotta #B5763F, Taubenblau #8C9AAA) - falls Pascal eine andere Richtung bevorzugt,
lässt sich das direkt im Canvas durchprobieren. Ein Accent wird konsistent über die
gesamte Seite verwendet (Color-Consistency-Lock aus dem `design-taste-frontend`-Skill).

## Struktur / Seiten

- Startseite (One-Pager): Header, Hero, Für-wen-Zeile, Problem (#problem), Woran es
  scheitert (#scheitert), Lösung/Leistungen (#leistungen), Kontakt (#kontakt), Footer
- Impressum (eigene Unterseite, schlicht)
- Datenschutz (eigene Unterseite, schlicht)

## Sonstiges

- Radius durchgängig sehr klein (2px) - kein Standard-"rounded-xl"-Look
- Keine Schatten, keine Gradients - Fläche + dünne Linien als Trenner
- Ein durchgängiger CTA-Text: "Projekt anfragen" / "Anfrage senden"
- Keine Em-/En-Dashes im Text (harte Regel aus `design-taste-frontend`), stattdessen
  Punkt, Doppelpunkt oder Bindestrich mit Leerzeichen
- Eyebrows (Kicker-Label über Headlines) nur auf Hero und Kontakt - nicht auf jeder
  Sektion, um den "jede Sektion hat ein Uppercase-Label"-Effekt zu vermeiden
- Offener Punkt: Hero und Mobile-Hero haben einen markierten Bildplatzhalter
  (gestrichelter Rahmen) für ein echtes Foto von Pascal oder ein Projektbeispiel -
  noch zu ersetzen, sobald Bildmaterial vorliegt
