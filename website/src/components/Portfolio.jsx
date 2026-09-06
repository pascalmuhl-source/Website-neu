const CASES = [
  { name: '[Kundenname 1]', type: 'Handwerksbetrieb, Relaunch', num: '+[8]', label: 'Aufträge mehr pro Monat', labelShort: 'Aufträge/Monat', thumbClass: '' },
  { name: '[Kundenname 2]', type: 'Kanzlei, Neue Website', num: '+[12]', label: 'Anfragen mehr pro Monat', labelShort: 'Anfragen/Monat', thumbClass: 'alt' },
  { name: '[Kundenname 3]', type: 'Dienstleister, Redesign', num: '+[5]', label: 'Buchungen mehr pro Monat', labelShort: 'Buchungen/Monat', thumbClass: '' },
];

export default function Portfolio() {
  const [featured, ...rest] = CASES;
  return (
    <div id="portfolio" className="section section-alt">
      <div className="section-head" style={{ marginBottom: 28 }}>
        <h2>Ausgewählte Projekte mit spürbarem Ergebnis</h2>
      </div>

      {/* Mobile: simple stacked list (first two only, matches approved mockup) */}
      <div className="portfolio-list only-mobile">
        {CASES.slice(0, 2).map((c) => (
          <a href="#" className="portfolio-item" key={c.name}>
            <div className={`portfolio-thumb ${c.thumbClass}`} />
            <div className="portfolio-meta">
              <div>
                <div className="portfolio-name">{c.name}</div>
                <div className="portfolio-type">{c.type}</div>
              </div>
              <div className="portfolio-stat">
                <div className="num">{c.num}</div>
                <div className="label">{c.labelShort}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop: asymmetric grid, one featured + two stacked */}
      <div className="portfolio-grid only-desktop">
        <a href="#" className="portfolio-item portfolio-featured">
          <div className="portfolio-thumb" />
          <div className="portfolio-meta">
            <div>
              <div className="portfolio-name">{featured.name}</div>
              <div className="portfolio-type">{featured.type}</div>
            </div>
            <div className="portfolio-stat">
              <div className="num">{featured.num}</div>
              <div className="label">{featured.label}</div>
            </div>
          </div>
          <span className="portfolio-cta">Case Study ansehen</span>
        </a>
        <div className="portfolio-side">
          {rest.map((c) => (
            <a href="#" className="portfolio-item" key={c.name}>
              <div className={`portfolio-thumb ${c.thumbClass}`} />
              <div className="portfolio-meta">
                <div>
                  <div className="portfolio-name">{c.name}</div>
                  <div className="portfolio-type">{c.type}</div>
                </div>
                <div className="portfolio-stat">
                  <div className="num">{c.num}</div>
                  <div className="label">{c.label}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
