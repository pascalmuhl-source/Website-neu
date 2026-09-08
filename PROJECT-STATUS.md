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

1. `noindex` entfernen (aktuell absichtlich gesetzt) — **wichtigster Punkt vor Launch**
2. Testimonial-Platzhalter (`[Name]`/`[Firma]`) durch echte Zitate mit Kundenfreigabe
   ersetzen, sobald vorhanden (siehe Werdegang Punkt 10 — bewusst zurückgestellt).
   Preise, Erfahrung und der Portfolio-Case sind bereits mit echten Angaben gefüllt
   (siehe Werdegang Punkt 10).
3. Rechtstexte sind jetzt echte e-recht24-Fassungen (siehe Werdegang Punkt 24), aber
   Löschfrist der Server-Logdaten in `datenschutz.html` (Abschnitt „Server-Log-
   Dateien") ist noch als Platzhalter offen — bei lima-city erfragen und ergänzen.
4. Hero-Bild-Kontrast auf Mobile neu prüfen, sobald ein echtes Foto das
   Platzhalter-Gradient ersetzt (rechnerisch grenzwertig unter WCAG AA)
5. Google Ads: sobald echte Google-Bewertungen oder eine dokumentierte Kundenzahl
   vorliegen, die „Vertrauen/Prozess"-Headlines (siehe Werdegang Punkt 8) durch echte
   Social-Proof-Headlines ersetzen/ergänzen.
6. Testdateien auf dem Server aufräumen, falls noch nicht geschehen: `ftptest.txt`,
   `kontakt-handler.php`, `kontakthandler.php`, `formtest.php`, `info.php`,
   `altversion.php`, das alte `send-mail.php` (mit Bindestrich, nie erreichbar) —
   v. a. `info.php` wegen offengelegter Serverdetails.

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

## Wie man den aktuellen Live-Stand schnell verifiziert

```bash
cd website && npm run build
# Danach jede Datei aus dist/ einzeln gegen die Live-Domain byte-vergleichen:
curl -s -o /dev/null -w "%{http_code} %{size_download}\n" https://pascal-webdesign.de/<pfad>
```

Ein `HTTP 200` reicht nicht als Beweis — die Byte-Größe muss mit der lokalen Datei
übereinstimmen (siehe FTP-Upload-Fehlerquelle oben).
