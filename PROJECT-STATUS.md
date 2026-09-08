# Projekt-Status: Pascal Webdesign — Übergabe-Referenz

Diese Datei ist eine **Zustands- und Verlaufs-Referenz**, kein Regelwerk — die
verbindlichen Arbeitsregeln stehen in `CLAUDE.md` (Workflow-Phasen, Anti-Slop-Regel,
DSGVO-Regel, Launch-Checkliste, FTPS-Automatisierungsregel etc.) und gelten
unverändert weiter. Diese Datei ergänzt sie um: was bisher passiert ist, wie das
Projekt technisch aufgebaut ist, und was aktuell live steht — damit eine neue Session
sich nicht durch den gesamten Chat-Verlauf arbeiten muss, um auf demselben Stand
weiterzumachen.

**Zuletzt aktualisiert:** 2026-09-08 (Stand nach Ablage der Social-Media-Posts
in GitHub-Ordnerstruktur `social-media-posts/Jahr/Monat/Woche-N/Wochentag-Datum/
Plattform/{Text.txt,Prompt.txt}`, Start Woche 1 = Montag 14.09.2026; davor:
kompletter 4-Wochen-Social-Media-Plan (Kontext-Datei, Strategie, Kalender,
Post-Texte) unter `.agents/social-media-*`, Installation des kompletten
`blacktwist/social-media-skills`-Sets — Details zu allen davor liegenden
Schritten siehe Werdegang unten. Ältere Punkte (Kontaktdaten-Eintrag,
Google-Business-Profil, Google-Ads-Setup, Selbstpflege-Regel für diese
beiden Dateien).

## Worum es geht

Eine One-Page-React-Website für einen selbstständigen Webdesigner:

- **Marke:** Pascal Webdesign
- **Inhaber:** Pascal Muhl
- **Standort:** 55452 Windesheim (bei Bad Kreuznach)
- **Zielgruppe/Nische (seit 2026-09-07):** Sachverständige und Gutachter,
  deutschlandweit — nicht mehr die vorherige breite KMU/Selbstständigen-Zielgruppe.
  Entscheidung nach Marktrecherche (siehe Werdegang, Punkt „Nischen-Pivot" unten):
  ~15.270 Sachverständige in Deutschland, überwiegend Kleingewerbe/Freiberufler ohne
  eigenes Marketing, hohe Passung zum DSGVO-/Vertrauens-USP, Preisniveau vertretbar
  höher als im vorherigen Massenmarkt-Ansatz. Anrede auf der Website durchgängig
  „Sie" (vorher „du") — passt zur formelleren Zielgruppe.
- **Live-Domain:** `pascal-webdesign.de`
- **Alt-Domain:** `content-struktur.de` — leitet per 301 auf die neue Domain um
  (kein eigener Inhalt mehr, siehe „Hosting & Domains" unten)

## Positionierung & USPs (seit Nischen-Pivot 2026-09-07)

Kompakte Referenz, damit das nicht bei jeder neuen Session erst aus dem Werdegang
rekonstruiert werden muss — Details/Begründung stehen in Werdegang Punkt 10.

- **Nische:** Sachverständige und Gutachter (branchenübergreifend — Bau, Kfz,
  Immobilien, Glas/Fenster etc.), deutschlandweit. Nicht mehr die vorherige breite
  Zielgruppe „KMU, Selbstständige, Freiberufler".
- **Warum diese Nische:** ~15.270 Sachverständige in Deutschland (BRAK-/Kammerdaten),
  überwiegend Kleingewerbe/Freiberufler ohne eigenes Marketing. In einer
  Top-10-Nischen-Bewertung (Marktgröße, Nachfrage, Website-Wichtigkeit, Preisrange)
  mit Score 8,5/10 auf Platz 1. Ausgangspunkt war ein bereits realer Kunde des
  Nutzers in dieser Kategorie (Sachverständigenbüro für Fenster-/Glasgutachten).
- **USPs / Positionierung:**
  1. **DSGVO-/Vertrauens-first als technisches Fundament:** self-hosted Fonts,
     kein Tracking ohne Einwilligung, keine automatisch ladenden Drittanbieter-
     Skripte — kein Nice-to-have, sondern Vertrauensargument gegenüber
     Auftraggebern aus Justiz/Versicherungswesen.
  2. **Technische Qualität statt Baukasten:** React-Website mit echtem
     SSR-Prerendering (kein leeres Client-Side-`<div id="root">`), schnell und
     sauber crawlbar — Gegensatz zu trägen Wix-/WordPress-Baukasten-Lösungen, die
     im Wettbewerbsumfeld üblich sind.
  3. **Solo mit festem Ansprechpartner, deutschlandweit remote:** kein
     Agentur-Overhead, passt zum meist ebenfalls solo/klein aufgestellten
     Sachverständigen-Publikum. In der Über-mich-Sektion als Stat-Kachel
     „1:1 Fester Ansprechpartner" statt einer Projektzahl abgebildet (siehe unten).
- **Tonalität:** durchgängig Sie-Form (vorher Du-Form) — passt zur formelleren,
  professionsgebundenen Zielgruppe. Gilt für die gesamte Website inkl. Rechtstexte
  (`datenschutz.html`, `impressum.html`).
- **Preisrange (Leistungen-Sektion):** Website-Erstellung ab 1.499 €, Redesign ab
  1.199 €, Wartung & Support ab 35 €/Monat — bewusst über dem vorherigen
  Massenmarkt-Ansatz angesetzt, da Sachverständige selbst oft 100+ €/h abrechnen und
  eine professionelle Website für sie ein Vertrauens-Werkzeug ist, kein Kostenpunkt
  zum Drücken.
- **Über-mich-Stats:** 6 Jahre Erfahrung. Bewusst **keine** Projektanzahl genannt (nur
  1 reales Projekt aktuell) — zweite Stat-Kachel zeigt stattdessen „1:1 Fester
  Ansprechpartner" als ehrliche, nicht-fabrizierte Kennzahl.
- **Portfolio:** 1 echter Case (Sachverständigenbüro für Fenster-/Glasgutachten,
  Relaunch) statt der vorherigen 3 erfundenen Cases mit erfundenen Erfolgszahlen.
  Keine Erfolgszahlen genannt, da keine echten vorliegen (§ 5 UWG-Risiko sonst).
- **Noch offen:** Echte Testimonials (Nutzer besorgt sie später, Platzhalter bewusst
  drin gelassen), Google-Ads-Copy ist noch auf die alte breite Zielgruppe
  zugeschnitten und müsste bei Bedarf auf die neue Nische umgeschrieben werden
  (siehe Werdegang Punkt 8 — bislang nicht nachgezogen).

## Werdegang (chronologisch, siehe `git log` für Details)

1. **Briefing übersprungen** — Nutzer gab direkt eine detaillierte Struktur vor
   (Header/Hero/Leistungen/Portfolio/Über-mich/Prozess/Testimonials/Kontakt/Footer).
2. **Phase 2 (Mockup):** Erst über Figma versucht, dann wegen Rate-Limit auf den
   `design`-Skill (Design Canvas) umgestellt. v1 gebaut, gegen die Anti-Slop-Skills
   (`design-taste-frontend`, `frontend-design`, `accessibility`) geprüft und
   durchgefallen (Standard-Font-Pairing, verbotene Farbpalette, Em-Dashes,
   Eyebrow-Überladung, wiederholte Card-Grid-Layouts). **v2 komplett neu gebaut**,
   alle Verstöße behoben. Mehrere Iterationsrunden: Problem-Sektion ergänzt (Kunde
   soll sich in den Schmerzpunkten wiedererkennen), Hero-Bild/Text-Anordnung verfeinert,
   Farbfehler bei einer Sektion korrigiert, Copy auf konkreten Kundennutzen statt KPIs
   umgeschrieben.
   - Ein echter Bug wurde dabei gefunden und behoben: `IntersectionObserver`-basierte
     Scroll-Reveal-Animationen blieben im Design-Canvas-Rendering-Kontext hängen
     (Inhalt ab Portfolio blieb bei `opacity:0`) → deshalb dort entfernt. **Wichtig:**
     Dieser Bug war spezifisch für den Design-Canvas-Kontext, nicht für echtes React —
     im späteren Phase-3-Build wurden Scroll-Reveal-Animationen erneut eingebaut und
     funktionieren dort einwandfrei (siehe unten).
3. **Phase 3 (React-Umsetzung):** Vite + React, mobile-first, minimale Dependencies
   (nur `react`/`react-dom`). Mockup 1:1 in Komponenten übertragen, self-hosted
   Variable-Fonts (Archivo, Cormorant Garamond, SIL OFL 1.1 — kommerzielle Nutzung
   ausdrücklich erlaubt), echtes Kontaktformular mit PHP-Mail-Handler.
   - **Bug gefunden und behoben:** Mobiles Hamburger-Menü war in der Sticky-Nav
     verschachtelt, die `backdrop-filter` nutzt — das macht die Nav laut CSS-Spec zum
     Containing Block für `position:fixed`-Kinder, wodurch das Menü sich nur über die
     Nav-Höhe statt den ganzen Bildschirm legte. Fix: Menü liegt jetzt als
     Geschwister-Element außerhalb der Nav.
4. **Animationen ergänzt** (auf Nutzerwunsch, nach Analyse von apple.com als
   Referenz): Scroll-Reveal pro Sektion, gestaffelte Reveals bei Prozess-Schritten/
   Testimonials, zeilenweise Headline-Reveal in der Hero, Hover-Effekte bei Buttons/
   Portfolio-Karten. Bewusst NICHT übernommen: scroll-gekoppelte Video-Sequenzen,
   gepinnte Sektionen — zu aufwändig/unpassend für dieses Projekt. Auf Nutzer-Feedback
   („zu schnell") wurden alle Timings um ca. 40-60 % verlangsamt.
5. **SEO-Audit** (20-Punkte-Checkliste durchgegangen, live gegen den damaligen Stand
   geprüft) ergab kritische Lücken: Seite lieferte für Crawler nur ein leeres
   `<div id="root">` aus (reines Client-Side-Rendering), keine Local-SEO-Signale,
   Marke/Domain passten nicht zusammen. Behoben:
   - **Prerendering** eingebaut (Vite-SSR-Build, kein neues Framework/Dependency —
     `react-dom/server` ist Teil von React). Baut jetzt echtes HTML zur Build-Zeit,
     der Client hydratisiert nur noch.
   - `noindex` gesetzt, bis Platzhalter-Inhalte ersetzt sind
   - Canonical, Open-Graph/Twitter-Tags, gerendertes OG-Bild (1200×630)
   - `ProfessionalService`-JSON-LD-Schema mit Adresse (Windesheim) und
     `areaServed: Deutschland`
   - Custom-404-Seite, `.htaccess` mit Cache-Headern (gehashte Assets 1 Jahr
     `immutable`, HTML `must-revalidate`) und Security-Headern
   - `robots.txt`/`sitemap.xml` (Sitemap listet nur die indexierbare Startseite,
     nicht die `noindex`-Rechtsseiten)
6. **Rebranding:** Ursprüngliche Platzhalter-Marke „KONTUR" auf Domain
   `content-struktur.de` → umbenannt in „Pascal Webdesign" auf `pascal-webdesign.de`.
   Dabei ein Layout-Bug gefunden: Der längere Markenname kollidierte zwischen 880 und
   1000px mit der Nav-Linkleiste und brach um → Umbruchpunkt für die volle Nav auf
   1000px verschoben (`.nav-logo { white-space: nowrap }` ergänzt).
7. **Echte Kontaktdaten eingetragen** (Adresse Ringstraße 2/55452 Windesheim, Telefon
   0173 1043823, E-Mail pascal@pascal-webdesign.de) in Impressum, Datenschutz,
   Kontakt-Sektion, `send-mail.php` und im JSON-LD-Schema (`streetAddress`,
   `telephone`, `email`). Google-Unternehmensprofil verknüpft über `sameAs` im Schema
   plus einen sichtbaren „Auf Google ansehen"-Link im Kontaktbereich
   (https://share.google/AIW6wayHq9MifU8qP — vom Nutzer bereitgestellt, aus dieser
   Umgebung heraus nicht erreichbar/verifizierbar, da `share.google` nicht in der
   Netzwerk-Freigabe steht).
   - **Zwei echte Bugs gefunden und behoben**, die erst mit echtem Inhalt statt
     Platzhalter-Klammern sichtbar wurden: `.contact-direct` hatte nur im
     Desktop-Media-Query eine Flex-Column-Layout-Regel, dadurch liefen die
     E-Mail-/Telefon-/Google-Links auf Mobile ohne Zeilenumbruch ineinander. Und
     dieselben Links hatten unterhalb 880px keine eigene Farbregel, fielen also auf
     `a { color: var(--ink) }` zurück — dunkler Text auf dem dunklen Kontakt-Hintergrund,
     unsichtbar. Beide Regeln sind jetzt mobile-first Standard statt nur Desktop-Zusatz.
8. **Google-Ads-Vorbereitung:** Skill `google-ads-ad-copy` (vom Nutzer als ZIP
   hochgeladen) nach `.claude/skills/google-ads-ad-copy/` entpackt und committet.
   Damit RSA-Headlines (15, je max. 30 Zeichen, nach den 5 Kategorien des Skills:
   Kernaussage/Kundennutzen/Vertrauen/CTA/Differenzierung) und 4 Beschreibungszeilen
   (je max. 90 Zeichen) entworfen — nicht Teil des Repos, nur im Chat besprochen.
   **Bewusste Lücke:** Die Social-Proof-Kategorie des Skills (echte Kundenzahlen/
   Bewertungen) wurde durch „Vertrauen/Prozess"-Headlines ersetzt, weil die
   Portfolio-Zahlen auf der Website noch Platzhalter sind — erfundene Zahlen in
   einer bezahlten Anzeige wären dasselbe § 5-UWG-Risiko wie bei den Testimonials.
9. **Standing Rule zur Selbstpflege dieser beiden Dateien ergänzt:** Auf Wunsch des
   Nutzers steht jetzt in `CLAUDE.md` verbindlich, dass `CLAUDE.md` und
   `PROJECT-STATUS.md` zu Sessionbeginn immer gelesen, nach jedem relevanten Schritt
   ungefragt aktualisiert und im selben Zug committet/gepusht werden — der Nutzer
   soll nie manuell um einen Push bitten müssen. Diese Zeile hier ist bereits ein
   Beispiel dafür, wie diese Regel in der Praxis aussieht.
10. **Nischen-Pivot auf „Sachverständige und Gutachter":** Nutzer wollte sich auf
    eine Nische festlegen, Kundengewinnung hat oberste Priorität, Copy darf sich dafür
    ändern. Zunächst versucht, den vom Nutzer hochgeladenen `competitor-analysis`-Skill
    zu nutzen (bräuchte einen selbst zu betreibenden/zu bezahlenden OpenSEO-MCP-Server
    plus DataForSEO-API-Key) — dafür zusätzlich ein `find-skills`-Skill installiert, mit
    dem der Nutzer den ersten Skill gefunden hatte. Nach Abwägung lohnt sich der
    MCP-Server-Aufwand für ein einzelnes Projekt nicht — `competitor-analysis` wieder
    entfernt (`find-skills` bleibt installiert), stattdessen normale Web-Recherche
    (Marktzahlen, Preisrecherche) verwendet.
    - **Recherche:** Preisrecherche zu Webdesign-Kosten in Deutschland (One-Pager
      500–2.500 €, Stundensätze 60–120 €/h Freelancer) sowie eine Top-10-Scoring-Liste
      möglicher Nischen (Marktgröße, Nachfrage, Website-Wichtigkeit, Preisrange) auf
      Basis von Statistiken (BRAK, Bundessteuerberaterkammer, listflix.de u. a.).
      Sachverständige & Gutachter gewann (Score 8,5/10): ~15.270 Sachverständige in
      Deutschland, größtenteils Kleingewerbe/Freiberufler ohne eigenes Marketing,
      passt zum bestehenden DSGVO-/Technik-USP (self-hosted Fonts, kein Tracking,
      SSR-Prerendering) und zum „deutschlandweit remote, fester Ansprechpartner"-Modell.
      Der Nutzer hatte bereits einen echten Kunden in dieser Kategorie (Sachverständigenbüro
      für Fenster-/Glasgutachten) — das war der Ausgangspunkt der Empfehlung.
    - **Umsetzung:** Alle Platzhalter-Preise ersetzt (Website-Erstellung ab 1.499 €,
      Redesign ab 1.199 €, Wartung ab 35 €/Monat — Preisniveau bewusst über dem
      vorherigen Massenmarkt-Ansatz angesetzt). „Über mich"-Stats auf echte Werte
      umgestellt (6 Jahre Erfahrung; die zweite Stat-Kachel zeigt bewusst „1:1 Fester
      Ansprechpartner" statt einer Projektanzahl, da der Nutzer aktuell nur 1 reales
      Projekt hat und eine so niedrige Zahl eher schadet als nutzt). Portfolio-Sektion
      von 3 erfundenen Cases auf 1 echten Case umgebaut (Sachverständigenbüro für
      Fenster-/Glasgutachten, ohne erfundene Erfolgszahlen — nur Beschreibung dessen,
      was geliefert wurde). Testimonials bewusst unverändert mit Platzhaltern belassen
      (Nutzer besorgt echte Zitate später). Komplette Copy (Hero, Problem, Leistungen,
      Über mich, Prozess, Kontakt) von Du- auf Sie-Form umgestellt und inhaltlich auf
      die neue Zielgruppe zugeschnitten (Meta-Tags/JSON-LD in `index.html` ebenfalls
      angepasst). OG-Bild (`website/public/og-image.png`) mit neuer Headline neu
      gerendert (per Playwright-Screenshot einer lokalen HTML-Vorlage, Design-Tokens
      1:1 aus `DESIGN-TOKENS.md` übernommen — die Vorlage selbst ist nicht im Repo,
      nur das fertige PNG).
    - **Bug gefunden und behoben:** Die neue Portfolio-Einzelkarte nutzte zunächst
      die bestehende Klasse `.portfolio-meta` (CSS: `display:flex;
      justify-content:space-between`, gedacht für Name links/Stat-Zahl rechts
      nebeneinander) — dadurch wurde der neue Beschreibungstext in eine schmale
      rechte Spalte gequetscht statt darunter zu laufen. Fix: eigene Klasse
      `.portfolio-single-meta` (Spalten-Layout) statt der wiederverwendeten
      Zwei-Spalten-Klasse.
11. **Kontaktformular-Audit:** Nutzer fragte, ob die Formularfelder passen, ob
    Budget/Zeitrahmen ergänzt werden sollten und welcher Datenschutzhinweis am
    Formular fehlt. Felder (Name, E-Mail, Nachricht) als bewusst schlank bewertet
    und so belassen — das eigentliche Briefing passiert laut Prozess-Sektion ohnehin
    erst im Erstgespräch. Budget-/Zeitrahmen-Feld nicht ergänzt (Abwägung
    Lead-Qualität vs. Formular-Conversion dem Nutzer zur Entscheidung vorgelegt,
    noch offen). Echte Lücke gefunden und behoben: Der Datenschutzhinweis zum
    Kontaktformular stand nur in `datenschutz.html` (nur über Footer-Link
    erreichbar), nicht direkt am Formular selbst — Art. 13 DSGVO verlangt die
    Informationspflicht aber zum Zeitpunkt der Datenerhebung. Jetzt ein kurzer
    Hinweistext mit Link zur Datenschutzerklärung direkt über dem Absenden-Button
    (`Kontakt.jsx`). Eine Checkbox/Opt-in ist bei reiner Anfragebearbeitung ohne
    Marketing-Einwilligung nicht zwingend nötig, daher nicht ergänzt. Nebenbei
    Stilbruch behoben: `datenschutz.html` war in Abschnitt 5 („Kontaktformular")
    und 8 („Deine Rechte") noch in Du-Form, obwohl die restliche Website seit dem
    Nischen-Pivot durchgängig Sie-Form nutzt — beide Abschnitte umgestellt.
12. **„Worum geht's?"-Dropdown ergänzt:** Nutzer entschied sich gegen ein
    Budget-/Zeitrahmen-Feld (Punkt 11 oben), aber für ein niedrig-friktives
    Auswahlfeld zur Anfrage-Kategorisierung. Neues optionales Select-Feld
    `anliegen` in `Kontakt.jsx` mit den vier Optionen aus der Leistungen-Sektion
    (Neue Website / Redesign / Wartung & Support / Sonstiges), Default „Neue
    Website" vorausgewählt, damit die Formular-Conversion nicht durch einen
    Pflicht-Klick leidet. `send-mail.php` validiert den Wert gegen eine
    Allow-Liste (verhindert Header-Injection über das Feld, fällt bei unbekanntem
    Wert auf „Sonstiges" zurück) und nimmt ihn in Betreff und Mail-Body auf.
    Zusätzlich in dieser Datei einen eigenen Abschnitt „Positionierung & USPs"
    ergänzt, der Nische, USPs und Preisrange kompakt zusammenfasst — vorher nur
    verstreut im Werdegang-Fließtext auffindbar.
13. **Social-Media-Content-Skills installiert:** Nutzer wollte einen Skill zum
    Erstellen von Social-Media-Content. Über `find-skills` (`npx skills find`)
    recherchiert, mehrere Anbieter verglichen (Install-Zahlen, Quelle,
    GitHub-Stars) und `blacktwist/social-media-skills` empfohlen (486 GitHub-
    Stars, alle 14 Einzel-Skills mit 1,3K–1,8K Installs — deutlich seriöser als
    kleinere Alternativen mit unter 250 Installs). Nutzer wollte das komplette
    Set, alle 14 Skills installiert:
    `social-media-context-sms` (Grundlagen: Stimme/Zielgruppe/Content-Pillars,
    sollte als Erstes laufen, da andere Skills darauf aufbauen),
    `content-strategy-sms`, `content-calendar-sms`, `platform-strategy-sms`
    (Strategie-Ebene), `post-writer-sms`, `thread-writer-sms`,
    `carousel-writer-sms`, `caption-writer-sms`, `content-repurposer-sms`,
    `hook-writer-sms` (Content-Erstellung), `performance-analyzer-sms`,
    `audience-growth-tracker-sms`, `content-pattern-analyzer-sms`,
    `optimization-advisor-sms` (Analyse). Installiert über die `npx skills`-CLI
    (via `find-skills`-Skill) — landen als echte Dateien unter `.agents/skills/`,
    `.claude/skills/` enthält nur Symlinks dorthin (Standard-Verhalten der CLI).
    `skills-lock.json` (Herkunfts-Hashes der installierten Skills) mit committet.
    **Empfehlung für die Nutzung:** `social-media-context-sms` zuerst einmal
    laufen lassen, damit die Sachverständigen-Nische/Positionierung (siehe
    „Positionierung & USPs" oben) als Grundlage für alle anderen Skills gesetzt
    ist, statt sie bei jedem Post erneut zu erklären.
14. **Kompletter 4-Wochen-Social-Media-Plan erstellt:** Nacheinander
    `social-media-context-sms` → `content-strategy-sms` → `content-calendar-sms`
    → `post-writer-sms` durchlaufen, alle Ergebnisse unter `.agents/` abgelegt:
    - `.agents/social-media-context-sms.md` — Identität, Zielgruppe, Voice,
      4 Content-Pillars, Plattform-Konfiguration (LinkedIn/Instagram/Facebook).
      Mehrere Felder bewusst als „noch offen" markiert (Handles, Formate,
      Beispiel-Posts), da der Nutzer noch keine hatte — Website-Ton diente als
      Ersatz-Referenz.
    - `.agents/social-media-strategy-sms.md` — 4 Pillars mit Topic-Clustern
      (Cornerstone/Supporting je Thema), Content-Typ-Balance (45% Educational,
      25% Storytelling, 15% Promotional, 10% Personal, 5% Engagement — Promotion
      bewusst nicht höher als 15%, um nicht werblich zu wirken).
    - `.agents/social-media-calendar-sms.md` — 4-Wochen-Kalender, 15 Posts/Woche
      (5 Kernstücke Mo–Do × 3 Plattformen + Freitag pro Plattform als offener/
      reaktiver Slot, 20% Puffer wie von der Skill-Vorlage empfohlen). Alle 4
      Wochen im gleichen Detailgrad wie Woche 1 ausformuliert (Thema, Pillar,
      Format, empfohlenes Zeitfenster je Tag/Plattform).
    - `.agents/social-media-content/woche-1.md` bis `woche-4.md` — für jedes der
      16 festen Wochentags-Themen (Freitag bleibt bewusst leer/reaktiv) ein
      fertiger LinkedIn-Text, ein fertiger Instagram-Text und ein fertiger
      Facebook-Text (jeweils nach den Formatregeln aus `post-writer-sms":
      LinkedIn Hook/Body/CTA mit Zeilenumbrüchen, Instagram/Facebook kürzer und
      mit angepasster Hashtag-Zahl), plus je ein Bild-Prompt für eine KI-
      Bildgenerierung. Bild-Stil bewusst einheitlich über alle Wochen: editorial/
      Flat-Vector-Illustration statt Stockfoto-Klischee, Farbpalette 1:1 aus
      `DESIGN-TOKENS.md` übernommen — keine Fotos von Personen, da keine echten
      Fotos vorliegen.
    - **Kein BlackTwist-MCP verbunden** — Posts sind reiner Text zum manuellen
      Copy-Paste/Einplanen, keine automatische Veröffentlichung/Terminierung.
    - **Noch offen:** Bild-Prompts sind bislang nicht durch ein Bildgenerierungs-
      Tool gerendert — nur die Text-Prompts liegen vor. Freitags-Slots pro Woche
      bewusst ungeschrieben (reaktiv/aktuell zu befüllen). Beispiel-Posts und
      echte Handles in der Kontext-Datei fehlen weiterhin.
15. **Social-Media-Posts als GitHub-Ordnerstruktur abgelegt:** Nutzer wollte die
    fertigen Texte/Prompts aus `.agents/social-media-content/` zusätzlich in
    einer festen Ordnerstruktur im Repo, damit sie direkt aus GitHub heraus
    einsehbar/kopierbar sind (nicht nur als lange Markdown-Dateien). Struktur:
    `social-media-posts/Jahr/Monat/Woche-N/Wochentag-JJJJ-MM-TT/Plattform/
    {Text.txt, Prompt.txt}`. Startdatum Woche 1 = Montag, 14.09.2026 (nächster
    Montag ab Erstellungsdatum, auf Nutzerwunsch). Ein Python-Skript hat die
    bereits vorhandenen `woche-1.md` bis `woche-4.md` geparst und automatisch in
    100 Einzeldateien aufgeteilt (16 Wochentage × 3 Plattformen × 2 Dateien +
    4 Freitags-`Hinweis.txt`) — Texte selbst wurden dabei nicht neu geschrieben,
    nur strukturiert übernommen. **Entscheidung bei Monatsgrenzen:** Der
    Monat-Ordner richtet sich nach dem Monat des Montags der jeweiligen Woche,
    nicht nach dem Kalendertag jedes einzelnen Posts — sonst würde z. B. Woche 3
    (Donnerstag/Freitag fallen in den Oktober) auf zwei Monatsordner
    aufgesplittet. Diese Entscheidung + die genauen Wochentag-Daten stehen in
    `social-media-posts/README.md`. **Wichtig bei Terminverschiebung:** Die
    Ordnernamen enthalten feste Kalenderdaten, keine relative Zählung — bei
    späterem Start müssten sie manuell umbenannt werden.

## Hosting & Domains — aktueller Live-Stand (verifiziert 2026-09-06)

- **Hoster:** lima-city (Account von Pascal Muhl). API-Zugriff über einen API-Key
  (HTTP Basic Auth, `username: api`), der **nicht im Repo gespeichert ist** — er
  existiert nur transient im Chat-Verlauf. Für neue Aktionen muss der Nutzer ihn
  erneut bereitstellen, falls eine neue Session ihn braucht.
- **FTP-Account:** `pascalmuhl.lima-ftp.de`, Nutzername `pascalmuhl`. **Passwort nicht
  im Repo** — wurde einmal per API zurückgesetzt (lima-city gibt bestehende
  FTP-Passwörter nie heraus, nur Neusetzen ist möglich). Aktuelles Passwort ist dem
  Nutzer bekannt, im Chat hinterlegt, nicht hier.
- **Zwei lima-city-Websites (vhosts) aktiv:**
  - `pascal-webdesign.de` (id 3685463) → `content_strategy: path`, Document Root
    `htdocs`, `force_ssl: true`. **Das ist die eigentliche Website.**
  - `content-struktur.de` (id 3685431) → `content_strategy: redirect`, leitet mit
    301 auf `https://pascal-webdesign.de/` weiter. Kein eigener Inhalt mehr.
- **DNS für beide Domains liegt bei IONOS** (nicht bei lima-city), zeigt aber per
  A/AAAA-Records auf lima-city-IPs (91.216.248.20-22 / 2a00:f48:2000:affe:fe00::10/20/30)
  plus einen `_lima-verification`-TXT-Record zum Eigentumsnachweis. **E-Mail-Records
  (MX, SPF, DKIM, DMARC) für beide Domains laufen unverändert über IONOS weiter** —
  beim Umstellen der A/AAAA-Records wurden diese bewusst nicht angefasst.
- **IONOS-DNS-API-Zugriff:** über einen API-Key (Public-Prefix + Secret, kombiniert
  als `X-API-Key`-Header), ebenfalls nicht im Repo — nur transient im Chat.

### Deploy-Mechanismus (Stand aktuell, siehe auch CLAUDE.md-Regel zur FTPS-Automatisierung)

- **Direktes FTP/SFTP/SSH von dieser Cloud-Umgebung aus funktioniert nicht** — die
  Umgebung leitet ausgehenden Traffic ausschließlich über einen HTTPS-Proxy
  (Port 443). Rohe TCP-Protokolle auf anderen Ports (FTP: 21, SSH: 22) werden nicht
  durchgereicht. Das ist keine Domain-Freigabe-Frage (die steuert nur, welche
  HTTPS-Hosts erreichbar sind), sondern eine grundsätzliche Protokoll-Grenze dieser
  Umgebung.
- **Deshalb bisheriger Workflow:** `npm run build` im Ordner `website/` ausführen,
  `dist/`-Inhalt als ZIP an den Nutzer schicken, der lädt es manuell per FTPManager
  (iOS-App) hoch. **Bekannte Fehlerquelle dabei:** Größere Dateien (v. a. das
  prerenderte `index.html`, ~19,6 KB) sind wiederholt mit 0 Bytes am Ziel angekommen,
  wenn der Nutzer über Mobilfunk statt WLAN hochgeladen hat — nach Wechsel auf WLAN
  lief der Transfer fehlerfrei. **Nach jedem Upload einzeln byte-genau verifizieren**
  (`curl -s -o /dev/null -w '%{size_download}'` je Datei gegen die lokale Größe
  vergleichen) — ein `HTTP 200` allein beweist nicht, dass der Inhalt vollständig ist.
- **Perspektivisch:** Nutzer hat `FTP_HOST`/`FTP_USER`/`FTP_PASS` als Environment
  Variables im Cloud-Environment (claude.ai/code → Environment → Environment
  Variables) hinterlegt. Laut Doku (und in dieser Session auch praktisch bestätigt)
  wirken Env-Var-Änderungen erst in **neu gestarteten Sessions**, nicht rückwirkend in
  einer bereits laufenden. **Eine neue Session sollte diese Variablen also bereits
  vorfinden** — kurz mit `env | grep FTP` prüfen. Falls vorhanden: Upload direkt per
  `curl --ftp-ssl -T <datei> ftps://$FTP_HOST/<pfad>/ --user "$FTP_USER:$FTP_PASS"`
  (Details/Beispiel für Ordner-Sync via `lftp` in CLAUDE.md).

## Technischer Aufbau

- `website/` — das eigentliche Vite/React-Projekt.
  - `src/App.jsx` bindet alle Sektions-Komponenten aus `src/components/` ein: `Nav`,
    `Hero`, `Problem`, `Leistungen`, `Portfolio`, `UeberMich`, `Prozess`,
    `Testimonials`, `Kontakt`, `Footer`, plus `Reveal.jsx` (wiederverwendbare
    IntersectionObserver-Scroll-Reveal-Komponente).
  - `src/index.css` — ein einziges globales Stylesheet, mobile-first, ein
    Breakpoint bei 880px für die meisten Layouts, ein zusätzlicher bei 1000px nur
    für die Nav (siehe Rebranding-Bug oben).
  - `src/main.jsx` — hydratisiert bei vorhandenem Server-HTML (`hydrateRoot`),
    rendert client-seitig neu im Dev-Server (`createRoot`).
  - `src/entry-server.jsx` + `scripts/prerender.js` — SSR-Build-Pipeline: Vite baut
    zusätzlich ein SSR-Bundle (`vite build --ssr`), das Skript rendert `App` zu
    HTML-String und setzt ihn in `dist/index.html` ein, danach wird der SSR-Bundle-
    Ordner (`dist-ssr/`) wieder gelöscht. Ausgelöst über `npm run build` (siehe
    `package.json`, kombinierter Befehl).
  - `public/` — alles, was Vite unverändert nach `dist/` kopiert: Fonts (3 `.woff2`,
    self-hosted), `favicon.svg`, `og-image.png` (gerendert aus einer HTML-Vorlage,
    nicht Teil des Repos — nur das fertige PNG ist eingecheckt), `404.html`,
    `.htaccess`, `impressum.html`, `datenschutz.html`, `robots.txt`, `sitemap.xml`,
    `send-mail.php` (Kontaktformular-Handler).
  - `index.html` — Meta-Tags, `noindex`, Preloads, JSON-LD-Schema. Bei jeder
    Marken-/Domain-Änderung hier zuerst nachsehen.
- `mockup/` — der Design-Canvas-Verlauf (v1 verworfen, v2 freigegeben,
  `webdesigner-kmu-onepager-v2.html` ist der zuletzt veröffentlichte Artifact-Export).
  Bleibt als Referenz stehen, ist aber nicht mehr die Quelle der Wahrheit — das ist
  jetzt der React-Code in `website/src/`.
- `DESIGN-TOKENS.md` — Schriften/Farben/Größen als reine Werte-Referenz.
- `CLAUDE.md` — alle verbindlichen Arbeitsregeln (siehe oben, wird bei Bedarf von mir
  selbst erweitert, wenn der Nutzer eine neue Standing Rule festlegt).
- `.claude/skills/` — Projekt-Skills, u. a. `google-ads-ad-copy` (vom Nutzer
  hochgeladen, für RSA-Headlines/Beschreibungen), `find-skills` (vom Nutzer
  am 2026-09-07 als ZIP hochgeladen — nutzt die externe `npx skills`-CLI/
  skills.sh-Ökosystem, um weitere Skills von GitHub zu suchen und zu
  installieren), plus die bereits vorhandenen `accessibility`, `copywriting`,
  `design-taste-frontend`, `frontend-design`, `impeccable`, `performance`, `seo`.
  **Verworfen:** `competitor-analysis` (am 2026-09-07 kurzzeitig installiert,
  dann wieder entfernt — braucht einen selbst zu betreibenden/zu bezahlenden
  OpenSEO-MCP-Server (`openseo.so`, benötigt zusätzlich einen kostenpflichtigen
  DataForSEO-API-Key), das lohnt sich für ein einzelnes One-Page-Projekt nicht.
  Konkurrenzanalysen laufen stattdessen über normale Web-Recherche ohne
  MCP-Server.)

## Was noch offen ist (siehe „Launch-Checkliste" in CLAUDE.md für die Langfassung)

Kurzfassung der wichtigsten Punkte, die vor einem echten Launch fehlen:

1. `noindex` entfernen (aktuell absichtlich gesetzt)
2. Testimonial-Platzhalter (`[Name]`/`[Firma]`) durch echte Zitate mit Kundenfreigabe
   ersetzen, sobald vorhanden (siehe Werdegang Punkt 10 — bewusst zurückgestellt).
   Preise, Erfahrung und der Portfolio-Case sind bereits mit echten Angaben gefüllt
   (siehe Werdegang Punkt 10).
3. Die 2 verbleibenden `href="#"`-Platzhalter-Links (Social-Icons im Footer) auflösen
   oder entfernen — die Portfolio-Cases sind seit dem Nischen-Pivot kein Link mehr,
   nur noch eine reine Textkarte.
4. Rechtstexte (Impressum/Datenschutz) sind ausdrücklich Entwürfe, brauchen externe
   Prüfung vor Launch
5. Google-Unternehmensprofil ist verknüpft (siehe Werdegang Punkt 7) — offen ist nur
   noch, ob die Google-seitige Verifizierung (Postkarte/Telefon/Video) beim Nutzer
   bereits abgeschlossen ist.
6. Hero-Bild-Kontrast auf Mobile neu prüfen, sobald ein echtes Foto das
   Platzhalter-Gradient ersetzt (rechnerisch grenzwertig unter WCAG AA)
7. Google Ads: sobald echte Google-Bewertungen oder eine dokumentierte Kundenzahl
   vorliegen, die „Vertrauen/Prozess"-Headlines (siehe Werdegang Punkt 8) durch echte
   Social-Proof-Headlines ersetzen/ergänzen.

## Wie man den aktuellen Live-Stand schnell verifiziert

```bash
cd website && npm run build
# Danach jede Datei aus dist/ einzeln gegen die Live-Domain byte-vergleichen:
curl -s -o /dev/null -w "%{http_code} %{size_download}\n" https://pascal-webdesign.de/<pfad>
```

Ein `HTTP 200` reicht nicht als Beweis — die Byte-Größe muss mit der lokalen Datei
übereinstimmen (siehe FTP-Upload-Fehlerquelle oben).
