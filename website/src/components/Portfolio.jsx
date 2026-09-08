import Reveal from './Reveal.jsx';

export default function Portfolio() {
  return (
    <Reveal id="portfolio" className="section section-alt">
      <div className="section-head">
        <h2>Ein Projekt aus der Praxis</h2>
      </div>
      <div className="portfolio-single">
        <div className="portfolio-thumb">
          <div className="portfolio-thumb-inner" />
        </div>
        <div className="portfolio-single-meta">
          <div className="portfolio-name">Sachverständigenbüro für Fenster- und Glasgutachten</div>
          <div className="portfolio-type">Relaunch der bestehenden Website</div>
          <p className="portfolio-desc">
            Klare Struktur, verständliche Darstellung des Fachgebiets und ein direkter Weg zur
            Anfrage, statt einer Seite, die nur existiert.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
