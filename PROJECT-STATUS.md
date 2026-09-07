# Projekt-Status: Pascal Webdesign — Übergabe-Referenz

Diese Datei ist eine **Zustands- und Verlaufs-Referenz**, kein Regelwerk — die
verbindlichen Arbeitsregeln stehen in `CLAUDE.md` (Workflow-Phasen, Anti-Slop-Regel,
DSGVO-Regel, Launch-Checkliste, FTPS-Automatisierungsregel etc.) und gelten
unverändert weiter. Diese Datei ergänzt sie um: was bisher passiert ist, wie das
Projekt technisch aufgebaut ist, und was aktuell live steht — damit eine neue Session
sich nicht durch den gesamten Chat-Verlauf arbeiten muss, um auf demselben Stand
weiterzumachen.

**Zuletzt aktualisiert:** 2026-09-07 (Token-Sparen-Regel in CLAUDE.md ergänzt, dieser
Werdegang-Abschnitt zur Tokenersparnis verschlankt — siehe Punkt 10).

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
10. Token-Sparen-Regel eingeführt (2026-09-07): schlanke Doku (dieser Abschnitt wurde
    dafür bereits verschlankt), gezieltes Lesen statt ganzer Dateien, keine Subagents
    für triviale Änderungen, Design-Skills nur bei echtem Design-Bedarf, ein
    Screenshot pro Änderungsmeldung, kompakter Bash-Output, knappe Antworten —
    Details siehe „Regel: Token-Sparen" in `CLAUDE.md`.

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
