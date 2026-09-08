# Social-Media-Posts — Pascal Webdesign

Fertige Post-Texte und Bild-Prompts für den 4-Wochen-Plan (siehe
`.agents/social-media-strategy-sms.md` und `.agents/social-media-calendar-sms.md`
für Strategie/Kalender-Hintergrund).

## Struktur

```
Jahr / Monat / Woche-N / Wochentag-JJJJ-MM-TT / Plattform / {Text.txt, Prompt.txt}
```

- **Monat-Ordner** richtet sich nach dem Monat des Montags der jeweiligen Woche
  — eine Woche bleibt dadurch immer in einem Ordner zusammen, auch wenn
  einzelne Tage (z. B. Woche 3, Donnerstag/Freitag) kalendarisch schon in den
  nächsten Monat fallen.
- **Text.txt** enthält den fertigen, plattformspezifischen Post-Text.
- **Prompt.txt** enthält den Bild-Prompt für dieselbe Plattform — Motiv ist
  pro Tag identisch, der Prompt wird für alle 3 Plattformen unverändert
  mitgeliefert (ein Bild lässt sich pro Plattform-Seitenverhältnis zuschneiden).
- **Freitag-Ordner** enthalten nur ein `Hinweis.txt` — bewusst kein fertiger
  Text, siehe Content-Strategie (Freitag ist der reaktive/offene Slot, 20%
  Puffer).

## Startdatum

Woche 1 beginnt Montag, 14.09.2026. Bei Verschiebung des Starts müssen die
Ordnernamen entsprechend angepasst werden — sie sind aktuell nicht relativ,
sondern feste Kalenderdaten.
