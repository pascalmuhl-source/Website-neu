# Social-Media-Posts — Pascal Webdesign

Fertige Post-Texte und Bild-Prompts für den 4-Wochen-Plan (siehe
`.agents/social-media-strategy-sms.md` und `.agents/social-media-calendar-sms.md`
für Strategie/Kalender-Hintergrund).

## Struktur

```
Jahr / Monat / Woche-N / Wochentag-JJJJ-MM-TT / Plattform / {Text.txt, Prompt.txt, Bild.png}
```

- **Monat-Ordner** richtet sich nach dem Monat des Montags der jeweiligen Woche
  — eine Woche bleibt dadurch immer in einem Ordner zusammen, auch wenn
  einzelne Tage (z. B. Woche 3, Donnerstag/Freitag) kalendarisch schon in den
  nächsten Monat fallen.
- **Text.txt** enthält den fertigen, plattformspezifischen Post-Text.
- **Prompt.txt** enthält den ursprünglich für eine KI-Bildgenerierung gedachten
  Bild-Prompt — Motiv ist pro Tag identisch, der Prompt wird für alle 3
  Plattformen unverändert mitgeliefert.
- **Bild.png** ist das tatsächliche Bild im jeweils plattformrichtigen Format:
  LinkedIn 1200×627px, Facebook 1200×630px, Instagram 1080×1080px (quadratisch).
  **Wichtig:** Da in dieser Cloud-Session kein Bild-Generierungs-API-Zugang
  verfügbar war (kein API-Key hinterlegt, Netzwerk-Freigabe deckt keine
  Bild-API-Hosts ab), sind das keine KI-generierten Fotos, sondern von Claude
  handgebaute, flache Vektor-Icon-Grafiken passend zu `DESIGN-TOKENS.md`
  (Papierweiß-Hintergrund, dunkle Tinte, ein Grün-Akzent) — bewusst inhaltlich
  nah am jeweiligen `Prompt.txt` gebaut, aber schematisch/illustrativ statt
  fotorealistisch. Für "echtere" Bilder: `Prompt.txt` in ein KI-Bildtool
  eigener Wahl geben und `Bild.png` ersetzen.
- **Freitag-Ordner** enthalten nur ein `Hinweis.txt` — bewusst kein fertiger
  Text/Bild, siehe Content-Strategie (Freitag ist der reaktive/offene Slot,
  20% Puffer).

## Startdatum

Woche 1 beginnt Montag, 14.09.2026. Bei Verschiebung des Starts müssen die
Ordnernamen entsprechend angepasst werden — sie sind aktuell nicht relativ,
sondern feste Kalenderdaten.
