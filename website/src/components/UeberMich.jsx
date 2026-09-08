import Reveal from './Reveal.jsx';

export default function UeberMich() {
  return (
    <Reveal id="ueber-mich" className="section about">
      <div className="about-photo" role="img" aria-label="Porträtfoto von Pascal Muhl" />
      <div className="about-copy">
        <h2>Pascal Muhl, Webdesigner für Sachverständige und Gutachter</h2>
        <p>
          Ich habe selbst lange in kleinen Teams gearbeitet und weiß, dass eine Website Vertrauen
          schaffen muss, nicht nur gut aussehen. Deshalb kombiniere ich sauberes Design mit klarer
          Struktur und Texten, die Ihre Qualifikation zeigen, direkt und mit einem festen
          Ansprechpartner: mir.
        </p>
        <p>
          Technisch baue ich Ihre Website ohne Google-Fonts-CDN und ohne Tracking-Skripte im
          Hintergrund, schlank und schnell statt träger Baukasten-Lösung. Das zählt gerade bei
          Auftraggebern aus Justiz und Versicherungswesen.
        </p>
        <p>
          Mein Büro sitzt in Windesheim bei Bad Kreuznach, gearbeitet wird deutschlandweit. Ob wir
          uns vor Ort treffen oder alles per Telefon und Video läuft, entscheiden Sie.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <div className="num">6</div>
            <div className="label">Jahre Erfahrung</div>
          </div>
          <div className="about-stat">
            <div className="num">1:1</div>
            <div className="label">Fester Ansprechpartner</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
