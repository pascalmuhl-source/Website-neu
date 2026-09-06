export default function UeberMich() {
  return (
    <div id="ueber-mich" className="section about">
      <div className="about-photo" role="img" aria-label="Porträtfoto von [Dein Name]" />
      <div className="about-copy">
        <h2>[Dein Name], Webdesigner:in für KMU</h2>
        <p>
          Ich habe selbst lange in kleinen Teams gearbeitet und weiß, dass eine Website Ergebnisse
          liefern muss, nicht nur gut aussehen. Deshalb kombiniere ich sauberes Design mit klarer
          Struktur und Texten, die verkaufen, direkt und mit einem festen Ansprechpartner: mir.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <div className="num">[X]</div>
            <div className="label">Jahre Erfahrung</div>
          </div>
          <div className="about-stat">
            <div className="num">[XX]</div>
            <div className="label">Projekte</div>
          </div>
        </div>
      </div>
    </div>
  );
}
