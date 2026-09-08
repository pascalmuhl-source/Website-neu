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
- **Prompt.txt** enthält den Bild-Prompt für eine externe KI-Bildgenerierung
  (Motiv ist pro Tag identisch, der Prompt wird für alle 3 Plattformen
  unverändert mitgeliefert). **Stand 2026-09-08 (2. Fassung):** bewusst
  fotorealistisch/dokumentarisch formuliert (echte Hände, echte Schreibtische,
  natürliches Licht, leichtes Filmkorn, bewusst *keine* Studio-Perfektion) —
  eine erste Fassung mit flachen Vektor-Icon-Illustrationen wurde verworfen,
  weil sie zu offensichtlich nach KI-Grafik aussah und keine Aufmerksamkeit
  erzeugt hätte. Jeder Prompt endet bewusst mit einem expliziten
  Negativ-Hinweis ("looks like a real photo ..., not an illustrated ...
  graphic"), um generische KI-Bildästhetik (Glow-Icons, perfekte Symmetrie,
  Lila/Blau-Verläufe, Stockfoto-Handshakes) aktiv zu vermeiden.
- **Kein `Bild.png` in dieser Fassung:** In dieser Cloud-Session ist kein
  Bild-Generierungs-API-Zugang verfügbar (kein API-Key hinterlegt, die
  Netzwerk-Freigabe deckt keine Bild-API-Hosts ab). Die `Prompt.txt`-Dateien
  sind zum Copy-Paste in ein KI-Bildtool eigener Wahl gedacht (z. B.
  Midjourney, ChatGPT/GPT-Image, Google Gemini) — das fertige PNG dann als
  `Bild.png` im jeweiligen Plattform-Ordner ablegen. Zielformate:
  LinkedIn 1200×627px, Facebook 1200×630px, Instagram 1080×1080px
  (quadratisch).
- **Freitag-Ordner** enthalten nur ein `Hinweis.txt` — bewusst kein fertiger
  Text/Bild, siehe Content-Strategie (Freitag ist der reaktive/offene Slot,
  20% Puffer).

## Startdatum

Woche 1 beginnt Montag, 14.09.2026. Bei Verschiebung des Starts müssen die
Ordnernamen entsprechend angepasst werden — sie sind aktuell nicht relativ,
sondern feste Kalenderdaten.
