import Reveal from './Reveal.jsx';

export default function UeberMich() {
  return (
    <Reveal id="ueber-mich" className="section about">
      <picture>
        <source srcSet="/images/pascal-muhl.webp" type="image/webp" />
        <img
          className="about-photo"
          src="/images/pascal-muhl.png"
          alt="Porträtfoto von Pascal Muhl"
          width="1000"
          height="1333"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className="about-copy">
        <h2>Pascal Muhl, Webdesigner für Sachverständige und Gutachter</h2>
        <p>
          Ich habe selbst lange in kleinen Teams gearbeitet und weiß, dass eine Website nicht nur gut
          aussehen muss, sondern vor allem Vertrauen schaffen. Deshalb kombiniere ich sauberes Design
          mit klarer Struktur und Texten, die Ihre Qualifikation zeigen. Sie sprechen jederzeit direkt
          mit der Person, die Ihre Website letztendlich umsetzt, keine Agentur in der Informationen
          über 5 Personen weitergegeben werden. Das spart Zeit und reduziert Korrekturen.
        </p>
        <p>
          Technisch baue ich Ihre Website ohne Google-Fonts-CDN und ohne Tracking-Skripte im
          Hintergrund, schlank und schnell statt träger Baukasten-Lösung. Das zählt gerade bei
          Auftraggebern aus Justiz und Versicherungswesen.
        </p>
        <p>
          Mein Büro sitzt in Windesheim bei Bad Kreuznach in Rheinland-Pfalz, gearbeitet wird
          deutschlandweit. Ob wir uns vor Ort treffen oder alles per Telefon und Video läuft,
          entscheiden wir gemeinsam.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <div className="num">6</div>
            <div className="label">Jahre Erfahrung</div>
          </div>
          <div className="about-stat">
            <div className="num">1</div>
            <div className="label">Fester Ansprechpartner</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
