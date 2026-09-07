# Projekt-Status: Pascal Webdesign — Übergabe-Referenz

Diese Datei ist eine **Zustands- und Verlaufs-Referenz**, kein Regelwerk — die
verbindlichen Arbeitsregeln stehen in `CLAUDE.md` (Workflow-Phasen, Anti-Slop-Regel,
DSGVO-Regel, Launch-Checkliste, FTPS-Automatisierungsregel etc.) und gelten
unverändert weiter. Diese Datei ergänzt sie um: was bisher passiert ist, wie das
Projekt technisch aufgebaut ist, und was aktuell live steht — damit eine neue Session
sich nicht durch den gesamten Chat-Verlauf arbeiten muss, um auf demselben Stand
weiterzumachen.

**Zuletzt aktualisiert:** 2026-09-06 (Stand nach Kontaktdaten-Eintrag, Google-Business-
Profil-Verknüpfung, Google-Ads-Setup und Einführung der Selbstpflege-Regel für diese
beiden Dateien).

## Worum es geht

Eine One-Page-React-Website für einen selbstständigen Webdesigner:

- **Marke:** Pascal Webdesign
- **Inhaber:** Pascal Muhl
- **Standort:** 55452 Windesheim (bei Bad Kreuznach)
- **Zielgruppe:** KMU, Selbstständige, Freiberufler — Einzugsgebiet deutschlandweit,
  nicht nur lokal
- **Live-Domain:** `pascal-webdesign.de`
- **Alt-Domain:** `content-struktur.de` — leitet per 301 auf die neue Domain um
  (kein eigener Inhalt mehr, siehe „Hosting & Domains" unten)

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
  hochgeladen, für RSA-Headlines/Beschreibungen), plus die bereits vorhandenen
  `accessibility`, `copywriting`, `design-taste-frontend`, `frontend-design`,
  `impeccable`, `performance`, `seo`.

## Was noch offen ist (siehe „Launch-Checkliste" in CLAUDE.md für die Langfassung)

Kurzfassung der wichtigsten Punkte, die vor einem echten Launch fehlen:

1. `noindex` entfernen (aktuell absichtlich gesetzt)
2. Platzhalter ersetzen: Preise, Kundennamen/-zahlen in Portfolio & Testimonials
   (nur mit echter Kundenfreigabe — sonst § 5 UWG-Risiko). Adresse/Telefon/E-Mail sind
   bereits erledigt (siehe Werdegang Punkt 7).
3. Die 5 `href="#"`-Platzhalter-Links (2 Social-Icons, 3 Portfolio-Cases) auflösen
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
