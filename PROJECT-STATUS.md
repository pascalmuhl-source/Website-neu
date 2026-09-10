# Projekt-Status: Pascal Webdesign — Übergabe-Referenz

Diese Datei ist eine **Zustands- und Verlaufs-Referenz**, kein Regelwerk — die
verbindlichen Arbeitsregeln stehen in `CLAUDE.md` (Workflow-Phasen, Anti-Slop-Regel,
DSGVO-Regel, Launch-Checkliste, FTPS-Automatisierungsregel etc.) und gelten
unverändert weiter. Diese Datei ergänzt sie um: was bisher passiert ist, wie das
Projekt technisch aufgebaut ist, und was aktuell live steht — damit eine neue Session
sich nicht durch den gesamten Chat-Verlauf arbeiten muss, um auf demselben Stand
weiterzumachen.

**Zuletzt aktualisiert:** 2026-09-08 (Kontaktformular-Deploy-Bug behoben — Ursache
war ein Bindestrich im PHP-Dateinamen, siehe Werdegang Punkt 22 und die neue
CLAUDE.md-Regel dazu; Terminbuchungs-Platzhalter entfernt, siehe Punkt 23; echte
Rechtstexte samt Website-Header/Footer für Impressum/Datenschutz eingebaut, siehe
Punkt 24; Merge des Arbeits-Branches
`claude/website-live-launch-requirements-k67tit` nach `main`).

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

## Werdegang (Kurzfassung, siehe `git log` für Details)

1. Briefing übersprungen — Nutzer gab Struktur direkt vor (Header/Hero/Leistungen/
   Portfolio/Über-mich/Prozess/Testimonials/Kontakt/Footer).
2. Phase 2 (Mockup): über `design`-Skill (Design Canvas) gebaut, v1 gegen Anti-Slop-
   Skills durchgefallen, v2 alle Verstöße behoben und freigegeben.
3. Phase 3 (React-Umsetzung): Vite + React, mobile-first, minimale Dependencies,
   Mockup 1:1 übertragen, self-hosted Fonts, PHP-Kontaktformular. Bug behoben: Mobiles
   Menü lag verschachtelt in der Sticky-Nav (`backdrop-filter` erzeugt Containing
   Block) → Menü liegt jetzt als Geschwister-Element außerhalb der Nav.
4. Animationen ergänzt (Scroll-Reveal, gestaffelte Reveals, Hover-Effekte), Timings
   nach Nutzer-Feedback um 40-60 % verlangsamt.
5. SEO-Audit ergab kritische Lücken (reines Client-Side-Rendering ohne Local-SEO-
   Signale) → behoben: Prerendering (Vite-SSR), `noindex` bis Launch, Canonical/OG/
   Twitter-Tags, `ProfessionalService`-JSON-LD, Custom-404, `.htaccess` Cache-/
   Security-Header, `robots.txt`/`sitemap.xml`.
6. Rebranding „KONTUR"/`content-struktur.de` → „Pascal Webdesign"/`pascal-webdesign.de`.
   Bug behoben: Markenname kollidierte 880-1000px mit Nav → Umbruchpunkt verschoben.
7. Echte Kontaktdaten eingetragen (Adresse, Telefon, E-Mail) in Impressum, Datenschutz,
   Kontakt-Sektion, `send-mail.php`, JSON-LD. Google-Unternehmensprofil per `sameAs`
   verknüpft (https://share.google/AIW6wayHq9MifU8qP). Zwei Mobile-Bugs behoben:
   fehlende Flex-Column- und Farbregel bei `.contact-direct` unterhalb 880px.
8. Google-Ads-Vorbereitung: Skill `google-ads-ad-copy` eingebunden, RSA-Headlines/
   Beschreibungen entworfen (nur im Chat, nicht im Repo). Bewusste Lücke: Social-Proof-
   Kategorie durch „Vertrauen/Prozess" ersetzt, da Portfolio-Zahlen noch Platzhalter
   sind (§ 5 UWG-Risiko bei erfundenen Zahlen).
9. Selbstpflege-Regel für `CLAUDE.md`/`PROJECT-STATUS.md` eingeführt (lesen zu
   Sessionbeginn, ungefragt aktualisieren, im selben Zug committen/pushen).
10. **Nischen-Pivot auf „Sachverständige und Gutachter":** Marktrecherche (Preise,
    Top-10-Nischen-Scoring) ergab Sachverständige/Gutachter als Score-Sieger
    (8,5/10, ~15.270 in Deutschland, meist ohne eigenes Marketing) — passend zum
    bestehenden echten Kunden (Fenster-/Glasgutachten) und zum DSGVO-/Technik-USP.
    `competitor-analysis`-Skill dafür kurz getestet und wieder verworfen (bräuchte
    bezahlten OpenSEO-MCP-Server), `find-skills` bleibt installiert. Umsetzung:
    Preise/Stats auf echte Werte, Portfolio auf 1 echten Case umgebaut, komplette
    Copy auf Sie-Form + neue Zielgruppe umgestellt (Details siehe „Positionierung &
    USPs" oben). Bug behoben: `.portfolio-single-meta` (eigene Spalten-Layout-Klasse)
    statt der wiederverwendeten `.portfolio-meta`, die den Text in eine schmale
    Spalte quetschte.
11. **Kontaktformular-Audit:** Felder (Name/E-Mail/Nachricht) bewusst schlank
    belassen. Echte DSGVO-Lücke behoben: Datenschutzhinweis fehlte direkt am
    Formular (Art. 13 DSGVO) — Hinweistext mit Link jetzt über dem Absenden-Button.
    Stilbruch in `datenschutz.html` (Abschnitt 5+8 noch in Du-Form) behoben.
12. **„Worum geht's?"-Dropdown ergänzt:** Neues optionales Select-Feld `anliegen`
    in `Kontakt.jsx` (4 Optionen, Default „Neue Website"), `send-mail.php`
    validiert per Allow-Liste. Abschnitt „Positionierung & USPs" in dieser Datei
    neu angelegt.
13. **Social-Media-Content-Skills installiert:** Komplettes `blacktwist/
    social-media-skills`-Set (14 Skills: Kontext/Strategie/Kalender/Post-Writer
    plus 10 weitere) über `find-skills` gefunden und installiert. Landen unter
    `.agents/skills/`, `.claude/skills/` enthält nur Symlinks.
14. **4-Wochen-Social-Media-Plan erstellt:** `social-media-context-sms` →
    `content-strategy-sms` → `content-calendar-sms` → `post-writer-sms`
    durchlaufen, Ergebnisse unter `.agents/social-media-*` und
    `.agents/social-media-content/woche-1.md` bis `woche-4.md` (5 Posts/Woche ×
    3 Plattformen, informativ + Pain-Point-fokussiert, 45/25/15/10/5%-Content-Mix).
    Kein BlackTwist-MCP verbunden, reiner Text zum manuellen Einplanen.
15. **Social-Media-Posts als GitHub-Ordnerstruktur abgelegt:**
    `social-media-posts/Jahr/Monat/Woche-N/Wochentag-JJJJ-MM-TT/Plattform/
    {Text.txt, Prompt.txt}`, Start Woche 1 = Montag 14.09.2026. Monat-Ordner
    richtet sich nach dem Montag der Woche, nicht dem Einzeltag (Details/Daten in
    `social-media-posts/README.md`).
16. **Design-/Motion-Audit:** `impeccable`, `design-taste-frontend`,
    `find-animation-opportunities`, `improve-animations`, `emil-design-eng`,
    `apple-design`, `ui-ux-pro-max` gegen den lokalen Code-Stand geprüft.
    3 echte Bugs behoben (toter `.portfolio-item`-Hover-CSS, zurückgerutschter
    Em-Dash in `UeberMich.jsx`, `ease-in` statt `ease-out` bei `navDropIn`).
    Kleine Verbesserungen: `@starting-style`-Fade-in für Formular-Statusmeldung,
    `:active`-Press-Feedback für Hamburger-/Terminkalender-Button, Touch-Targets
    auf 44×44px, Hero-Subline gekürzt, `--contact-placeholder`-Kontrast auf
    ~4,84:1 (WCAG AA) angehoben.
17. **Alle 48 Post-Bilder erstellt (v1, später verworfen):** Kein Bild-API-Zugang
    in dieser Session verfügbar (kein Key, keine Netzwerk-Freigabe) → 16
    handgebaute Flat-Vector-SVG-Kompositionen, per Playwright in 3 Formaten
    gerendert (LinkedIn 1200×627, Facebook 1200×630, Instagram 1080×1080) = 48
    `Bild.png`. Bug behoben: SVG-Resize per fixer Pixel-Attribute schnitt Motive
    ab → stattdessen `viewBox` + CSS-Prozentgröße mit `preserveAspectRatio`.
18. **Vektor-Bilder verworfen, Prompts neu geschrieben:** Nutzer-Feedback „sieht
    zu sehr nach KI aus, erzeugt keine Aufmerksamkeit" → alle 48 `Bild.png`
    entfernt, alle 16 `Prompt.txt` auf fotorealistische, dokumentarische
    Foto-Prompts umgeschrieben (echte Details, Kamera-/Objektiv-Angaben,
    expliziter Negativ-Hinweis gegen KI-Bildästhetik) — Nutzer generiert die
    Bilder jetzt extern selbst.
19. **Markenkit erstellt und als verbindliche Grundlage verankert:**
    `leonxlnx/taste-skill@brandkit` über `find-skills` gefunden und installiert.
    Skill liefert nur Bild-Prompts, daher stattdessen eigenes HTML/SVG-
    Markenkit-Board gebaut (9 Panels: Wortmarke, Konstruktion, Farbsystem,
    Typografie, Visitenkarte u. a.), alle Werte 1:1 aus `DESIGN-TOKENS.md`.
    Als Artefakt veröffentlicht: https://claude.ai/code/artifact/20ff79ac-26dc-4afd-b9f0-726732473e71,
    zusätzlich als PNG geliefert. Logo-Konzept: Siegel-Monogramm „P" mit
    Häkchen (Beglaubigungs-Metapher). Bug behoben: 2 SVG-Siegel fehlte die CSS-
    Klasse `seal` (schwarzer Standard-Fill statt Liniengrafik). Standing Rule
    „Markenkit als verbindliche Grundlage für alle künftigen Inhalte" in
    `CLAUDE.md` ergänzt.
20. Token-Sparen-Regel eingeführt (2026-09-07): schlanke Doku (dieser Werdegang
    wurde dafür verschlankt, siehe Punkte 10-19 oben), gezieltes Lesen statt
    ganzer Dateien, keine Subagents für triviale Änderungen, Design-Skills nur
    bei echtem Design-Bedarf, ein Screenshot pro Änderungsmeldung, kompakter
    Bash-Output, knappe Antworten — Details siehe „Regel: Token-Sparen" in
    `CLAUDE.md`.
25. **Ausbauplan als Artefact erstellt** (2026-09-08): Auf Wunsch des Nutzers
    („Website zu kurz") Plan zur Vertiefung von Problem- und Zusammenarbeit-
    Sektion plus zwei neuen Sektionsvorschlägen (Branchen-Szenarien, FAQ) als
    Artefact veröffentlicht: https://claude.ai/code/artifact/2354cff3-8867-4a2e-bd87-da9f3fa14c79.
    Danach visuelles Mockup dazu als zweites Artefact:
    https://claude.ai/code/artifact/7449c764-2114-4ce9-8c1b-3bcabc44fb2c.
    Neue Standing Rule in `CLAUDE.md`: Bei jeder Design-Arbeit (Artefact wie
    Website-Code) ab sofort immer alle vier Skills `frontend-design`,
    `emil-design-eng`, `impeccable`, `ui-ux-pro-max` heranziehen, zusätzlich zu
    `design-taste-frontend`.
26. **Ausbau live umgesetzt** (2026-09-08): Vor der Umsetzung Backup-Branch
    `backup/vor-sektionen-ausbau-2026-09-08` vom bisherigen Live-Stand
    (`main`-Commit `a76d469`) gepusht, falls ein Rollback nötig wird
    (Tag-Push scheiterte an einem 403 des GitHub-Zugriffs, deshalb Branch statt
    Tag). Umsetzung: `Problem.jsx` um Selbsttest-Kasten, vierten Tabellenpunkt
    „Keine nachvollziehbare Arbeitsweise" und Kosten-Einordnungs-Absatz
    erweitert (dabei auch Restformulierung in Du-Form „was das für dich
    bedeutet" auf Sie-Form korrigiert). `Prozess.jsx` von 4 auf 6 Schritte
    ausgebaut (neu: „Unverbindliche Anfrage" und „Laufende Betreuung"), jeder
    Schritt jetzt mit Dauer/Aufwand/Ergebnis-Feldern; Desktop-Darstellung dafür
    von 4-Spalten-Grid auf eine breitere Timeline-Liste umgestellt. Zwei neue
    Komponenten: `Branchen.jsx` („Für Ihr Fachgebiet", 4 Branchenkarten, nach
    Problem-Sektion) und `Faq.jsx` (5 Fragen als natives `<details>`-Accordion,
    vor Kontakt). Mit Playwright/Chromium lokal auf Desktop und Mobile
    gegengeprüft (Build, Screenshots, Accordion-Interaktion) — alles fehlerfrei.
27. **Layout-Nachbesserung nach Live-Check** (2026-09-08): Nutzer meldete nach
    Upload einzelne linksbündige, zu schmale Elemente. Ursache: `max-width` auf
    `.selftest`, `.cost-note`, `.process-list`, `.faq-list` (Desktop), die damit
    von der sonst durchgängigen Full-Bleed-Optik der Seite abwichen. Behoben:
    max-width entfernt, `.selftest`-Checkliste auf Desktop als 3-Spalten-Grid
    (passt zu den 3 Punkten), `.process-step` auf Desktop als 2-Spalten-Grid
    (Text links, Aufwand/Ergebnis-Felder rechts, füllt die Zeile wie
    `.service-row`), FAQ ohne Breitenbegrenzung. Live-Check erfolgte, weil
    direkter Playwright-Zugriff auf `pascal-webdesign.de` über den Cloud-Proxy
    mit `ERR_CONNECTION_RESET` scheiterte (nur normales `curl` funktioniert
    dort) — Workaround: Live-HTML/CSS/JS per `curl` geladen und lokal per
    `python3 -m http.server` gespiegelt, dagegen gescreenshottet.
    Der vorherige 404-Bug bei den Asset-Dateien (CSS/JS fehlten nach dem ersten
    Upload) lag laut Nutzer an einem beim manuellen Hochladen versehentlich
    weggelassenen Bindestrich im Dateinamen (z. B. `index-Bao5W_QE.css`),
    selbst korrigiert — ein Tippfehler beim Upload, nicht die lima-city-PHP-
    Bindestrich-Sperre weiter oben (die betrifft nur `.php`-Dateien).
28. **Nachbesserung Zusammenarbeit-Sektion, Spaltenausrichtung** (2026-09-08):
    Nutzer meldete uneinheitliche Abstände zwischen den Feldern je Schritt.
    Ursache: `.process-fields` war `display:flex`, wodurch die Spaltenbreite
    vom jeweiligen Textinhalt abhing und „Ergebnis" in jeder Zeile an anderer
    Stelle stand. Behoben: `display:grid` mit fester Spaltenbreite
    (`180px 1fr` auf Desktop) — beide Spalten stehen jetzt in jeder Zeile exakt
    untereinander.
29. **Weitere Layout-/Interaktions-Nachbesserungen** (2026-09-08), nach erneutem
    Live-Feedback:
    - `.section-head` hatte ein globales `max-width: 640px` (Desktop), das
      Überschriften/Einleitungstexte in mehreren Sektionen (u. a. Problem,
      Leistungen) unnötig früh umbrechen ließ. Entfernt — Texte laufen jetzt
      bis zur natürlichen Breite, ohne harte Grenze.
    - `.service-row` (Leistungen-Tabelle) hatte dieselbe Ausrichtungs-Schwäche
      wie zuvor `.process-fields`: dritte Spalte (Preis) war `auto`-breit statt
      fest, dadurch je Zeile leicht verschoben. Auf feste `170px` umgestellt.
    - `.process-fields`-Spalte 1 von `180px` auf `230px` verbreitert, da
      längere Werte („Grobe Vorstellung, ggf. Beispiele") sonst umbrachen und
      unnötigen Weißraum vor der Ergebnis-Spalte erzeugten.
    - Hero: Sekundärlink „Portfolio ansehen" neben dem CTA entfernt.
    - FAQ-Accordion von nativem `<details>` (hartes Auf-/Zuklappen) auf
      React-State + CSS-Grid-Rows-Technik (`grid-template-rows: 0fr → 1fr`)
      umgestellt — animiert jetzt weich beim Öffnen/Schließen, mit
      `prefers-reduced-motion`-Fallback.
30. **Skill-Regel nachträglich eingehalten + weitere Feinschliffe** (2026-09-08):
    Nutzer merkte an, dass die vier Pflicht-Design-Skills bei den letzten
    CSS-Fixes nicht erneut geladen wurden — Standing Rule gilt ausnahmslos,
    auch bei kleinen Layout-Korrekturen. Nachgeholt, danach drei weitere
    gemeldete Probleme behoben:
    - `.process-step p` und `.faq-item p` hatten je ein `max-width` in
      Zeichen (52ch/68ch) auf Desktop, das Text unnötig früh umbrechen ließ,
      obwohl in der Grid-Spalte mehr Platz vorhanden war (z. B. bei
      „Unverbindliche Anfrage" entstand dadurch ein großer Leerraum vor der
      Aufwand-Spalte). Entfernt — Text läuft jetzt bis zur tatsächlichen
      Spaltenbreite durch.
    - Spacing-Audit der ganzen Seite: `Portfolio.jsx`, `Prozess.jsx` und
      `Testimonials.jsx` hatten ein inline `style={{ marginBottom: 28 }}` auf
      `.section-head`, das auf Desktop fix bei 28px blieb, während alle
      anderen Sektionen über die CSS-Klasse auf 48px gehen — dadurch wirkten
      genau diese drei Sektionen oben „gedrückt". Inline-Override entfernt,
      jetzt einheitlicher Abstand unter jeder Section-Überschrift.
31. **Typografie-Skala bereinigt** (2026-09-08): Auf Nachfrage geprüft, wie
    viele unterschiedliche Schriftgrößen im Einsatz sind — 25 verschiedene
    `font-size`-Werte in `index.css`, viele davon nur 0,5px auseinander
    (13/13.5/14/14.5/15/15.5 als Fließtext, 9.5/10.5/11/11.5/12/12.5 als
    Label-/Meta-Text) ohne erkennbaren Hierarchie-Zweck — reine Drift durch
    viele kleine Einzeländerungen über die Zeit, keine Best Practice.
    Bereinigt auf eine disziplinierte Skala: zwei Label-Größen (11px für
    kompakte Badges/Feldlabels wie `tag-new`, `process-duration`,
    `process-fields dt`; 12px für alle anderen Bildunterschriften/Meta-Texte),
    fünf Fließtext-Größen (13/14/15/16/18), plus die bestehenden, bereits
    sinnvoll unterschiedlichen Überschriften-Größen (17/19/21/22/24/26/30/32
    sowie die fluiden `clamp()`-Überschriften). `section-head h2` und
    `contact h2` liefen mobil auf `1.65rem` (≈26,4px) statt auf dem bereits
    genutzten `26px` — auf px vereinheitlicht, dadurch ein Wert weniger.
    `.selftest-head` lag mobil bei 14.5px und deckte sich erst auf Desktop
    zufällig mit `branchen-card h3` (15px) — jetzt beide Breakpoints auf 15px,
    doppelte Desktop-Regel dadurch überflüssig und entfernt. Ergebnis: 25 auf
    15 echte Werte reduziert. Dead Code `.text-link` (seit Entfernung des
    Portfolio-Links im Hero ungenutzt) mit entfernt. Visuell auf Desktop und
    Mobile gegengeprüft (Playwright/Chromium) — keine sichtbare Änderung am
    Gesamteindruck, nur konsistentere Werte darunter.

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
    `.htaccess`, `impressum.html`, `datenschutz.html` (beide inkl. eigenem Header/
    Footer, da außerhalb des React-Baums), `robots.txt`, `sitemap.xml`,
    `sendmail.php` (Kontaktformular-Handler — **kein Bindestrich im Dateinamen**,
    siehe CLAUDE.md-Regel dazu).
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

1. `noindex` entfernen (aktuell absichtlich gesetzt) — **wichtigster Punkt vor Launch**,
   hängt nur noch an Punkt 2 unten (Portfolio-Bild) und der Sitemap-`lastmod`.
2. Echtes Bild für den Portfolio-Case (wu-engineering.de) einbauen — Nutzer schickt
   Screenshot (siehe Werdegang Punkt 31), aktuell noch Gradient-Platzhalter.
3. Rechtstexte final (Nutzer-Bestätigung 2026-09-10, Werdegang Punkt 31). Löschfrist
   der Server-Logdaten in `datenschutz.html` (Abschnitt „Server-Log-Dateien") bleibt
   als offener Platzhalter — bei lima-city erfragen und ergänzen.
4. Google Ads: sobald echte Google-Bewertungen oder eine dokumentierte Kundenzahl
   vorliegen, die „Vertrauen/Prozess"-Headlines (siehe Werdegang Punkt 8) durch echte
   Social-Proof-Headlines ersetzen/ergänzen.
5. Testdateien auf dem Server aufräumen, falls noch nicht geschehen: `ftptest.txt`,
   `kontakt-handler.php`, `kontakthandler.php`, `formtest.php`, `info.php`,
   `altversion.php`, das alte `send-mail.php` (mit Bindestrich, nie erreichbar) —
   v. a. `info.php` wegen offengelegter Serverdetails.
6. Bing-Optimierung nach dem Launch: Bing Webmaster Tools + `msvalidate.01`-Tag,
   IndexNow-Protokoll (siehe CLAUDE.md Launch-Checkliste Punkt 10) — Nutzer aktiv
   erinnern, sobald über den Launch oder Suchmaschinen-Sichtbarkeit gesprochen wird.

Erledigt und bestätigt (2026-09-10): Testmail-Zustellung, Google-Unternehmensprofil-
Verifizierung, `www.`-Redirect, Hero-Bild-Kontrast (echtes Foto, Werdegang Punkt 30).

21. **Google-Unternehmensprofil verifiziert.** Social-Media-Icons im Footer (zwei
    `href="#"`-Platzhalter, LinkedIn/Instagram) entfernt, da noch keine echten
    Profile existieren.
22. **Kontaktformular-Bug behoben (2026-09-08):** Dropdown „Worum geht's?" kam nicht
    in den Mails an, da `send-mail.php` seit dem Dropdown-Feature nie neu hochgeladen
    worden war (liegt in `public/`, kein `dist/`-Build-Artefakt — bei Änderungen
    daran künftig explizit als eigene Datei zum Upload geben). Beim Reupload dann
    durchgehend 404, obwohl Datei/Pfad/Rechte nachweislich korrekt — systematisches
    Testen ergab: **lima-city blockiert PHP-Dateien mit Bindestrich im Dateinamen**
    serverseitig (vermutlich WAF-Regel gegen Exploit-/Shell-typische Namen),
    unabhängig vom Code-Inhalt. Fix: `send-mail.php` → `sendmail.php` umbenannt
    (Fetch-Aufruf in `Kontakt.jsx` angepasst), live mit echter Testmail (inkl.
    Dropdown-Wert) verifiziert. Standing Rule in `CLAUDE.md` ergänzt: keine
    Bindestriche in `.php`-Dateinamen auf diesem Hosting.
23. **Terminbuchungs-Platzhalter entfernt** (Nutzer nutzt kein Buchungstool) —
    Block, State und CSS aus `Kontakt.jsx`/`index.css` entfernt.
24. **Rechtstexte durch echte e-recht24-Fassungen ersetzt:** Nutzer lieferte reale
    Impressum- und Datenschutz-Texte (Hoster laut AVV: TracPlex GmbH, Auftrags-
    verarbeiter von lima-city). Datenschutz zusätzlich um zwei konkret bekannte
    Fakten ergänzt (self-gehostete Schriftarten, lima-city-Cookies `_lcp`/`_lcp3` —
    beide live verifiziert). Platzhalter-Entwurfshinweis aus dem Impressum entfernt.
    Beide Seiten (`impressum.html`, `datenschutz.html`) waren bislang eigenständige
    Seiten ohne Website-Navigation — Header (inkl. mobilem Menü) und Footer aus
    `Nav.jsx`/`Footer.jsx` 1:1 als statisches HTML/CSS/JS repliziert und ergänzt,
    live verifiziert.

25. **Vollständiges SEO-Audit per `seo-audit`-Skill (2026-09-08):** Skill installiert
    (`coreyhaines31/marketingskills@seo-audit`), Live-Site per curl geprüft (Header,
    robots.txt/sitemap.xml, 404-Verhalten, Kompression). Ergebnis: OG/Twitter/
    Canonical/Schema/Custom-404 waren entgegen dem veralteten CLAUDE.md-Stand
    (Werdegang Punkt 5) schon lange erledigt — Doku korrigiert. Einziger echter
    Befund: `noindex` weiterhin aktiv, blockiert einzig durch fehlende echte
    Testimonials (siehe Punkt 2 unten). PageSpeed-Mobile-Screenshot vom Nutzer zeigte
    "LCP/TBT Error/No_LCP" — als unvollständiger Lighthouse-Trace eingeordnet (CSS/JS
    live nachweislich minifiziert + gzip-komprimiert), keine reale Baustelle.
    `www.`-Subdomain ließ sich aus der Sandbox nicht prüfen (Proxy-Restriktion) —
    offen für manuelle Prüfung durch den Nutzer.

26. **Testimonials-Sektion entfernt (2026-09-09):** Auf Nutzerwunsch komplett
    gestrichen statt auf echte Kundenzitate zu warten (`Testimonials.jsx` gelöscht,
    Import/Einbindung in `App.jsx` und zugehöriges CSS in `index.css` entfernt, kein
    Nav-Anker vorhanden gewesen). Löst nebenbei den `[Name]`/`[Firma]`-Launch-
    Blocker aus Punkt 25. Build erfolgreich (`dist/assets/index-B21cN7eN.js`,
    `dist/assets/index-C0ZGUROp.css`, `dist/index.html`) — noch nicht hochgeladen.

27. **Text-Überarbeitung vorbereitet (2026-09-09):** Auf Nutzerwunsch `Website-
    Texte.xlsx` erstellt (146 Zeilen, ein Textfeld pro Zeile, Spalten Sektion/Alter
    Text/Neuer Text) und an den Nutzer geschickt. **Noch offen:** Nutzer befüllt
    Spalte „Neuer Text" und schickt die Datei zurück — danach werden die
    Änderungen 1:1 in die jeweiligen React-Komponenten übernommen. Falls die Datei
    in einer künftigen Session noch nicht vorliegt: aktiv daran erinnern.

28. **Animations-Feinschliff nach emil-design-eng-Review (2026-09-09):** `/emil-design-
    eng` bewertete die bestehenden Transitions; sechs Punkte umgesetzt: Hover-Regeln
    (`a`, `.btn-solid`, `.btn-outline`, `.contact-submit`, `.nav-links a` Desktop) hinter
    `@media (hover: hover) and (pointer: fine)` gesetzt (verhindert "klebende" Hover-
    States auf Touch-Geräten), `.nav-toggle:active`-Scale von 0.9 auf 0.95 entschärft,
    `.reveal`-Transition von 1,1s auf 700ms gekürzt, `.nav-menu`-Übergang auf `ease-out`
    (statt `ease`) gestellt, FAQ-Accordion asymmetrisch getimt (Öffnen 320ms, Schließen
    220ms). Build erfolgreich, keine Layout-/Farbänderung, daher ohne Playwright-
    Screenshot freigegeben.

29. **Text-Überarbeitung übernommen (2026-09-10):** Ausgefüllte `Website-Texte.xlsx`
    vom Nutzer erhalten, 8 der 9 befüllten Zeilen 1:1 übernommen (Hero-Headline/
    Subtext, Problem-Überschrift, Fachgebiet-Intro, Portfolio-Projekttyp, zwei
    Über-mich-Absätze, Statistik „1" statt „1:1", FAQ-Antwort 3). **Eine Zeile bewusst
    nicht übernommen:** Nav-Link „Leistungen" → „Pascal Webdesign" wirkte wie ein
    Versehen (Link zeigt weiter auf `#leistungen`, Logo-Text ist bereits „Pascal
    Webdesign") — Nutzer bestätigt: war tatsächlich ein Versehen, Nav-Link bleibt
    unverändert bei „Leistungen".

30. **Echtes Portraitfoto eingebaut (2026-09-10):** Vom Nutzer geliefertes Freisteller-
    Foto (transparenter PNG-Hintergrund, 1086×1448) verkleinert auf 1000×1333, als
    `website/public/images/pascal-muhl.webp` (96 KB) + `.png`-Fallback (Graustufen+Alpha,
    507 KB) gespeichert, per `<picture>` in Hero und Über-mich-Sektion eingebunden
    (ersetzt die Platzhalter-Gradient-Divs). **Bekanntes Kontrast-/Overlap-Risiko aus
    der Launch-Checkliste dabei behoben:** Mobile Hero legte den Copy-Block bisher per
    `position: absolute` direkt über das Bild — mit echtem Gesicht wäre Text über dem
    Gesicht gelandet. Layout auf normalen Flex-Flow umgestellt (Foto oben, Text darunter,
    kein Overlap mehr), Desktop-Grid (Text links, Foto rechts) war bereits unkritisch.
    Seitenverhältnis beider Bild-Container von geschätzten 4/5 bzw. 4/3 auf das reale
    3/4 des Fotos angepasst, `object-fit: contain` ergänzt. Alt-Texte gesetzt: Hero
    „Pascal Muhl, Webdesigner für Sachverständige und Gutachter" (`fetchPriority=high`,
    da LCP-Kandidat), Über-mich „Porträtfoto von Pascal Muhl" (`loading=lazy`). Mit
    Playwright auf Desktop (1440px) und Mobile (390px) visuell verifiziert, keine
    Layout-Fehler. Build erfolgreich.
    **Korrektur (2026-09-10):** Nutzer wollte das ursprünglich angedachte Mobile-
    Overlap (Headline über dem Foto) explizit beibehalten statt gestapeltem Layout.
    `.hero-copy` zurück auf `position: absolute` über `.hero-portrait` gesetzt.
    Lesbarkeit statt Layout-Umbau gelöst: `.hero-portrait` bekommt mobil `opacity`
    (Desktop weiterhin `opacity: 1`, da dort kein Overlap).
    **Zweite Korrektur (2026-09-10):** Nutzer wollte das Foto sichtbarer, Kontrast
    Richtung 4,8:1 ausreizen. Per Pillow/NumPy die dunkelsten sichtbaren Bildpixel
    analysiert (1. Perzentil = 37/255, um einzelne Ausreißer wie Pupillen-Glanzpunkte
    nicht überzugewichten) und die exakte Opacity für einen WCAG-Kontrast-Grenzwert
    von 4,8:1 gegen den Ink-Text (`#1C1F1D`) berechnet (≈0,515). `opacity: 0.5` gesetzt
    → rechnerisch ~5:1 Kontrast selbst an den dunkelsten Bildstellen, deutlich
    sichtbareres Foto als bei 0.2. Per Screenshot bestätigt.

31. **Launch-Checkliste großteils final geklärt (2026-09-10):** Nutzer bestätigt:
    Rechtstexte final, Testmail-Zustellung ok, Google-Unternehmensprofil verifiziert,
    `www.`-Redirect im Browser ok. Platzhalter-Links geprüft: Social-Icons/zusätzliche
    Portfolio-Cases waren bereits entfernt (Werdegang Punkt 21) — einziger Rest ist ein
    echtes Bild für den verbliebenen Portfolio-Case (Kunde: wu-engineering.de).
    Live-Screenshot per Playwright in dieser Sandbox versucht und verworfen: Chromium
    bricht über den Proxy bei dieser Domain konsequent mit `ws_closed_mid_exchange`
    ab (`curl` auf dieselbe Domain funktioniert dagegen einwandfrei; die Bild-CDN
    `static.wixstatic.com` ist zusätzlich per Proxy-Policy mit 403 geblockt) —
    kein sinnvoller weiterer Retry ohne anderes Netzwerk-Setup. Nutzer schickt
    stattdessen selbst einen Screenshot der Kundenseite zum Einbauen.

## Wie man den aktuellen Live-Stand schnell verifiziert

```bash
cd website && npm run build
# Danach jede Datei aus dist/ einzeln gegen die Live-Domain byte-vergleichen:
curl -s -o /dev/null -w "%{http_code} %{size_download}\n" https://pascal-webdesign.de/<pfad>
```

Ein `HTTP 200` reicht nicht als Beweis — die Byte-Größe muss mit der lokalen Datei
übereinstimmen (siehe FTP-Upload-Fehlerquelle oben).
