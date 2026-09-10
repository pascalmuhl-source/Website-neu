import Reveal from './Reveal.jsx';

export default function Portfolio() {
  return (
    <Reveal id="portfolio" className="section section-alt">
      <div className="section-head">
        <h2>Ein Projekt aus der Praxis</h2>
      </div>
      <div className="portfolio-single">
        <div className="portfolio-thumb">
          <picture>
            <source srcSet="/images/portfolio-wu-engineering.webp" type="image/webp" />
            <img
              src="/images/portfolio-wu-engineering.jpg"
              alt="Startseite der Website von Weber + Uhlig Engineering"
              loading="lazy"
              width="1600"
              height="600"
            />
          </picture>
        </div>
        <div className="portfolio-single-meta">
          <div className="portfolio-name">Sachverständigenbüro für Fenster- und Glasgutachten</div>
          <div className="portfolio-type">Erstellung einer professionellen Website nach Gründung</div>
          <p className="portfolio-desc">
            Klare Struktur, verständliche Darstellung des Fachgebiets und ein direkter Weg zur
            Anfrage, statt einer Seite, die nur existiert.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
