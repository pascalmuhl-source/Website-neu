// Beispieldatensatz zur Veranschaulichung, keine echten Kundendaten.
const RECORD = [
  ['artikelnr', '48-2213', false],
  ['bezeichnung', 'Gartenschere Bypass 20 cm', false],
  ['ean', '4012345678901', false],
  ['material', 'fehlt', true],
  ['kategorie', 'fehlt', true],
];

const CHANNELS = [
  { name: 'Amazon', fields: ['title ≤ 200', 'bullet_point × 5', 'browse_node_id'] },
  { name: 'eBay', fields: ['category_id', 'item_specifics', 'condition_id'] },
  { name: 'Google Shopping', fields: ['gtin', 'product_category', 'shipping_label'] },
];

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <p className="byline">Freiberuflich, deutschlandweit remote</p>
          <h1>Produktdaten und Feeds für Marktplätze.</h1>
          <p className="lede">
            Ich bereite Sortimente für Amazon, eBay, Otto und Kaufland auf und automatisiere die
            Datenarbeit dahinter.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#kontakt">Kapazität anfragen</a>
            <p className="capacity">Frei: <b>3 bis 4 Tage</b> im Monat</p>
          </div>
        </div>

        <div className="schema">
          <div className="schema-head">Ein Artikel aus Ihrem Sortiment</div>
          <div className="record">
            {RECORD.map(([label, value, missing]) => (
              <dl className="field" key={label}>
                <dt>{label}</dt>
                <dd className={missing ? 'missing' : undefined}>{value}</dd>
              </dl>
            ))}
          </div>
          <div className="split">
            <p className="split-note">
              Derselbe Artikel, drei Kanäle, drei völlig verschiedene Anforderungen:
            </p>
            <div className="channels">
              {CHANNELS.map((channel) => (
                <div className="channel" key={channel.name}>
                  <h3>{channel.name}</h3>
                  <ul>
                    {channel.fields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
