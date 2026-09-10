const GROUPS = [
  { title: 'Marktplätze', items: 'Amazon, eBay, Otto, Kaufland, Google Shopping' },
  { title: 'Feed-Tools', items: 'Channable, Productsup, DataFeedWatch, Google Merchant Center' },
  { title: 'Automatisierung', items: 'Python, CSV, XML, JSON, REST-APIs, Batch-Verarbeitung' },
  { title: 'Auswertung', items: 'Google Analytics 4, Tag Manager, Looker Studio' },
  { title: 'CRM und Kampagnen', items: 'Emarsys, Inxmail, Newsletter- und Automationsstrecken' },
  { title: 'Zusammenarbeit', items: 'Git, geteilte Repositories, dokumentierte Übergaben' },
];

export default function Systeme() {
  return (
    <section id="systeme">
      <div className="wrap">
        <div className="sec-head">
          <h2>Womit ich arbeite</h2>
        </div>
        <div className="stack">
          {GROUPS.map((group) => (
            <div className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
