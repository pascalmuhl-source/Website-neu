# Workflow: Website-Design (Briefing → Mockup → Umsetzung)

Wenn der Nutzer eine neue Website oder ein neues Seiten-/Komponenten-Design anfragt
("ich brauche eine Website, die soll so und so aussehen", "bau mir eine Landingpage",
"neues Projekt", o. ä. — auch ohne weitere Details), läuft das immer in drei Phasen ab:

**Phase 1 — Briefing**
- Sobald ein neues Website-Projekt erkennbar ist (auch bei einer vagen Ansage wie
  "neues Projekt"), **zuerst den folgenden Fragenkatalog 1:1 als Fragen ausgeben**,
  bevor irgendetwas anderes passiert. Der Nutzer klärt diese Fragen selbst mit seinem
  Kunden und gibt anschließend die Antworten hier ein.
- Erst wenn die Antworten vorliegen: gezielt nachfragen, falls etwas unklar ist oder
  sich Antworten widersprechen — nicht raten und einfach losbauen. Danach erst Phase 2.

**Standard-Fragenkatalog (Kundenbriefing für neue Websites)**
1. Was macht dein Unternehmen/Projekt, und wer steht dahinter?
2. Was soll die Website vor allem erreichen? (Anfragen, Verkäufe, Buchungen, Portfolio
   zeigen, reine Infoseite — die eine Haupt-Handlung, auf die alles hinführt)
3. Wer ist die Zielgruppe? (B2B/B2C, grobe Beschreibung reicht)
4. Welche Seiten/Bereiche braucht die Website? (z. B. Start, Über uns, Leistungen,
   Referenzen, Kontakt, Blog, Shop)
5. Gibt es schon Texte, Bilder, Logo — oder soll das mitentstehen?
6. Gibt es ein bestehendes Corporate Design (Farben, Schriftart, Logo), das übernommen
   werden muss, oder ist das offen?
7. Wie soll sich die Seite anfühlen? — 2-3 Adjektive oder 1-2 Referenz-Websites, die
   gefallen (und warum).
8. Braucht es besondere Funktionen? (Kontaktformular, Terminbuchung, Newsletter,
   mehrsprachig, Shop, Karte, Galerie)
9. Soll Tracking/Analytics eingebaut werden, oder bewusst nicht?
10. Ist Domain/Hosting schon vorhanden (z. B. bei IONOS), oder muss das noch
    eingerichtet werden?
11. Willst du Inhalte später selbst pflegen können, oder reicht eine statische Seite,
    die bei Bedarf angepasst wird?
12. Gibt es einen Zeitrahmen/Wunschtermin für den Launch?
13. Gibt es branchenspezifische oder rechtliche Besonderheiten (z. B. strengere
    Datenschutzanforderungen, Zielgruppe außerhalb DACH), die besondere Sorgfalt
    brauchen?

**Phase 2 — Mockup**
- Schneller visueller Entwurf über den `design`-Skill als Artifact (Design-Canvas,
  bei Bedarf als PNG/PDF exportierbar). Kein direkter Aufbau in Code.
  Ziel: günstiges Anschauungsmaterial, ohne strukturierte Code-Tool-Calls.
- Iterieren auf Mockup-Ebene, bis die Richtung passt (Layout, Typografie, Farben,
  Grundstruktur). Erst hier Feedback einholen, nicht schon im Zielformat.

**Phase 3 — Umsetzung (React-Track, ausschließlich)**
Erst nach explizitem Go ("passt, bau das" o. ä.) den Entwurf 1:1 übertragen:
- Reine Websites ohne Login/Server-Rendering, Self-Hosting z. B. bei IONOS:
  React-/Next.js-Quelldateien (Komponenten, Styles, Assets) anlegen bzw. bearbeiten,
  auf Wunsch Build (`npm run build`) ausführen. Der Upload zum FTP-/Webhosting-Server
  bleibt Aufgabe des Nutzers, außer er möchte das explizit automatisiert haben.
- **Framer wird nicht mehr genutzt** — kein Framer-Track mehr, auch nicht als Option.
  Alle Umsetzungen laufen über React/Next.js. Der `mcp__Framer__*`-Werkzeugsatz ist
  für diesen Workflow nicht mehr relevant.

**Design-Tokens-Datei (Pflicht pro Website-Projekt)**
- Für jedes Projekt eine einzelne Datei anlegen (z. B. `DESIGN-TOKENS.md`) mit der
  kompletten visuellen Referenz: Schriftart(en) und Schriftgrößen (Headings/Body/etc.),
  Farben sowohl als Hex-Code als auch als RGB-Wert.
- Muss nicht schön formatiert sein — reine Transparenz-/Referenzdatei, kein
  Kundendokument. Einfach nur die Werte klar auflisten.

**Figma jederzeit als Input-Quelle nutzbar**
- Der Nutzer kann jederzeit — nicht nur in Phase 2 — etwas in Figma bauen oder ändern
  und mich bitten, das zu übernehmen ("bau mir das ein", "bau die Seite genauso").
- Dafür Design-/Motion-Kontext aus Figma auslesen (`mcp__Figma__get_design_context`,
  `get_motion_context`, ggf. `export_video` für Animationen) und in React-Code
  übertragen.
- Figma ist dabei optional/on-demand, kein verpflichtender Standardschritt — für den
  ersten schnellen Entwurf bleibt der `design`-Skill günstiger (siehe Kostenabwägung:
  beide Mockup-Wege erlauben direkte visuelle Korrektur durch den Nutzer ohne
  zusätzliche Tokens, aber der Aufbau in Figma selbst ist teurer als im Artifact).

Ausnahme: Wenn der Nutzer explizit sagt, direkt im Code zu arbeiten (z. B.
kleine, klar umrissene Änderung an einer bestehenden Seite), Phase 1 und 2 überspringen.

# Regel: Artefakt-Link + Screenshot nach jeder Änderung — immer, ungefragt

Bei jeder Änderung oder Verbesserung am aktuellen Mockup/Artefakt (Design-Canvas,
egal ob Text, Farbe, Layout, Animation o. ä.), gilt für das gesamte Projekt automatisch,
ohne dass der Nutzer das jedes Mal erneut einfordern muss:

1. Nach dem Publizieren immer den aktuellen Artefakt-Link erneut ausgeben.
2. Zusätzlich einen frischen Screenshot (PNG) der gesamten Seite mitschicken — nicht nur
   den sichtbaren Ausschnitt, sondern die komplette Seite von oben bis unten (Desktop-
   und, falls vorhanden, Mobile-Ansicht).
3. Das passiert immer und ungefragt, nicht erst auf Nachfrage — Link und Screenshot
   gehören zu jeder Änderungsmeldung dazu.
4. Nebeneffekt, der aktiv genutzt werden soll: Der Screenshot dient auch als eigene
   Qualitätskontrolle vor der Meldung an den Nutzer — bevor der Link rausgeht, den
   Screenshot selbst kurz auf offensichtliche Fehler prüfen (z. B. leere/nicht
   gerenderte Bereiche, kaputtes Layout), nicht blind durchreichen.

# Regel: Kein KI-Slop — unumstößlich

Jede Website, die ich baue, muss aussehen wie professionell von Hand gemacht — nie
wie eine generische, austauschbare "0815"-KI-generierte Seite (Standard-Hero-Section,
Standard-Gradients, Standard-Font-Pairing, immer dieselben Layout-Muster). Das gilt
unabhängig davon, ob die Design-Taste-Skills (`frontend-design`, `design-taste-frontend`,
`impeccable`) im Einzelfall ausdrücklich getriggert werden — dieser Anspruch gilt immer,
schon ab dem Mockup in Phase 2, nicht erst als nachträgliche Korrektur.

# Regel: DSGVO-Konformität bei Website-Umsetzung

Bei jeder Website (Mockup und finale Umsetzung) gelten diese Standards, ohne dass der
Nutzer sie jedes Mal erneut einfordern muss:

1. **Keine externen Ressourcen, die personenbezogene Daten übertragen:**
   - Schriften immer lokal/self-hosted einbinden — nicht über Google Fonts CDN oder
     vergleichbare externe Font-Server laden.
   - Keine direkt eingebundenen Google/Meta/Drittanbieter-Skripte (Analytics, Maps,
     reCAPTCHA, Tracking-Pixel) ohne vorherige Einwilligung. Standard: weglassen, wenn
     nicht ausdrücklich vom Nutzer gewünscht.
2. **Keine Datenübertragung in Drittländer außerhalb EU/EWR als Default:**
   - Bei gewünschtem Tracking datenschutzfreundliche, EU-hostbare Alternativen bevorzugen
     (z. B. Matomo statt Google Analytics).
   - Eingebettete Inhalte (YouTube, Google Maps, Social-Media-Widgets) nur mit
     Klick-zum-Laden/Consent-Gate einbauen, nie automatisch beim Seitenaufruf.
3. **Consent-Management:** Cookie-/Consent-Banner nur einbauen, wenn tatsächlich
   nicht-essenzielle Cookies/Tracking eingesetzt werden — rein funktionale Seiten ohne
   Tracking brauchen keinen Banner.
4. **Rechtstexte** (Impressum, Datenschutzerklärung) nur als Platzhalter/Entwurf liefern,
   nie als rechtssicheren Endtext ausgeben — immer auf einen etablierten Generator
   (z. B. e-recht24) oder anwaltliche Prüfung hinweisen.
5. **Plattform-/Hoster-Vorbehalt aktiv ansprechen, nicht verschweigen:** Ich kann nur
   das kontrollieren, was ich selbst einbaue (Code, eingebundene Dienste, Fonts,
   Tracking). Die tatsächliche Server-/CDN-Infrastruktur des gewählten Hosters liegt
   außerhalb meiner Kontrolle. Wenn ein Hoster hier ein Compliance-Risiko darstellen
   könnte (z. B. Serverstandort außerhalb EU, fehlender AV-Vertrag), weise ich aktiv
   darauf hin, statt stillschweigend "vollständig DSGVO-konform" zu behaupten.

## Archiv — nicht mehr aktiv genutzt: Framer & DSGVO (Stand: 2026-09)

Framer wird seit 2026-09 nicht mehr als Umsetzungs-Track verwendet (siehe Workflow-Regel
oben — nur noch React-Track). Diese Recherche bleibt nur als Referenz stehen, falls
irgendwann doch mal ein Bestandsprojekt in Framer betreut werden muss.

- Framer (NL-Unternehmen) bietet ein DSGVO-konformes DPA (Art. 28(3)) sowie
  SOC 2 Type 2 / ISO 27001:2022.
- **Kern-Hosting läuft auf AWS in den USA**, ausgeliefert über weltweites
  Anycast-CDN (CloudFront/Global Accelerator) — keine Option für reines
  EU-only-Hosting. Rechtlich abgesichert über EU-US Data Privacy Framework
  bzw. ersatzweise SCCs (Art. 45 DSGVO) — legal zulässig, aber **keine
  physische EU-Datenresidenz**.
- **Fonts:** Framer liefert auch Google-Fonts-Auswahl über die eigene CDN
  (`framerstatic.com`/`framerusercontent.com`) aus, nicht direkt von
  `fonts.gstatic.com` — entschärft das klassische Google-Fonts-Problem
  grundsätzlich. Trotzdem pro Projekt im Network-Tab verifizieren.
- **Cookie-/Consent-Banner ist immer eigene Aufgabe** — Framer übernimmt hier
  nichts automatisch, sobald Analytics/Maps/YouTube o. ä. eingebunden wird.
- **Einschätzung für Kunden:** Für normale Business-Websites im Rahmen der
  DSGVO nutzbar (DPA abschließen + sauberes Consent-Management + Font-Check).
  Bei explizitem Kundenwunsch "Daten dürfen die EU nie physisch verlassen"
  erfüllt Framer das **nicht** — dann aktiv auf EU-only-Alternativen oder
  Self-Hosting hinweisen, statt es zu verschweigen.

# Regel: Umgang mit Blockern/Rate-Limits (z. B. Figma-Kontingent)

Wenn eine laufende Aufgabe an einem externen Kontingent- oder Rate-Limit hängen bleibt
(z. B. Figma-MCP-Tool-Call-Limit, oder vergleichbare Limits anderer Dienste), gilt für
das gesamte Projekt automatisch, ohne dass der Nutzer das erneut anstoßen muss:

1. Eine Stunde warten, dann automatisch erneut versuchen, die blockierte Aktion
   fortzusetzen.
2. Funktioniert es wieder: die aktuelle Aufgabe direkt zu Ende bringen (nicht nur den
   einen Schritt, der eben ging, sondern bis die Aufgabe tatsächlich abgeschlossen ist).
3. Funktioniert es noch nicht: erneut eine Stunde warten und wieder prüfen.
4. Schritt 1–3 so oft wiederholen, bis die aktuelle Aufgabe erledigt ist — keine
   Zwischen-Rückfrage beim Nutzer nötig, ob weiter gewartet werden soll.
5. Nur wenn sich am Blocker grundsätzlich etwas ändert, das eine Entscheidung des
   Nutzers braucht (z. B. ein Plan-Upgrade ist zwingend nötig, weil das Limit sich
   nachweislich nicht von selbst zurücksetzt), aktiv Bescheid geben statt weiter
   stumm im Stunden-Rhythmus zu pollen.

## Recherche-Ergebnis: Self-Hosting bei IONOS als EU-only-Alternative (Stand: 2026-09)

- Reguläre IONOS-Webhosting-Pakete laufen auf Servern **in Deutschland**
  (Frankfurt am Main, Berlin), geo-redundant über zwei deutsche Standorte,
  ISO/IEC 27001-zertifiziert. **Keine Drittlandübertragung auf
  Infrastruktur-Ebene** — anders als Framer (AWS/USA) bleiben Daten hier
  physisch in der EU. Das ist die Empfehlung, wenn ein Kunde strikte
  EU-only-Datenresidenz verlangt (siehe Framer-Vorbehalt oben).
- **AVV ist bei IONOS kostenlos, aber nicht automatisch** — muss aktiv
  abgeschlossen werden: https://www.ionos.de/hilfe/datenschutz/allgemeine-informationen-zur-datenschutz-grundverordnung-dsgvo/vereinbarung-zur-auftragsverarbeitung-avv-mit-ionos-abschliessen/
- **Technischer Ansatz:** Reines React (Vite) oder Next.js mit
  `output: 'export'` (kein SSR/API-Routes/Login) → statische HTML/CSS/JS-Dateien
  → passt auf normales Webhosting-Paket (kein VPS nötig). Formular-Versand
  ggf. über mitgeliefertes PHP oder externen Formular-Dienst lösen.
  Next.js mit SSR/API-Routes/Login braucht dagegen einen VPS/Cloud-Server mit
  eigenem Node-Prozess.
- **Self-Hosting löst nur die Infrastruktur-Ebene** — die übrigen DSGVO-Pflichten
  bleiben unverändert bestehen: AVV aktiv abschließen, Fonts lokal, keine
  automatisch ladenden Dritt-Skripte, Consent-Banner nur bei Bedarf,
  Server-Logs (IP-Adressen) in der Datenschutzerklärung mit kurzer
  Löschfrist nennen, jedes eingebettete Dritt-Skript einzeln prüfen.

## Offen für später: SEO-Optimierung (KONTUR-Website)

Noch nicht umgesetzt, bewusst zurückgestellt bis Phase 3 (React-Umsetzung), da auf
Mockup-Ebene (Design Canvas) kein echtes `<head>` mit Metadaten existiert:

- Title-Tag und Meta-Description für die Seite
- Strukturierte Daten (Schema.org, z. B. `ProfessionalService`/`LocalBusiness`)
- Sitemap, saubere Heading-Hierarchie, Alt-Texte für die (noch fehlenden) echten Bilder
- Ggf. Onpage-Keyword-Fokus je nach Zielgruppe, sobald die realen Texte/Leistungen final sind

Den `seo`-Skill (`.claude/skills/seo/`) dafür nutzen, wenn es so weit ist.

## Offene Prüfpunkte für Phase 3 (KONTUR-Website)

Punkte, die sich erst mit echten Assets/Inhalten beantworten lassen, deshalb erst bei
der React-Umsetzung prüfen, nicht schon am Mockup:

- **Hero-Bild-Kontrast (Mobile):** Sobald das echte Portraitfoto anstelle des Platzhalters
  eingesetzt wird, prüfen ob Headline/Subheadline/CTA (dunkler Text) darüber noch
  ausreichend lesbar sind. Falls nicht: leichtes Abdunkeln/Scrim oder Weichzeichnen
  hinter dem Text ergänzen, statt es stillschweigend unleserlich zu lassen.
