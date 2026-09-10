const MODELS = [
  {
    title: 'Projekt',
    text: 'Erstbereinigung eines Sortiments, Feed-Setup für einen neuen Kanal, eine einmalige Automatisierung. Fester Umfang, fester Preis.',
    price: 'ab 1.200 €',
  },
  {
    title: 'Laufende Betreuung',
    text: 'Monatliche Feed- und Datenpflege, Fehlerbehebung, Anpassung an Plattformänderungen. Monatlich kündbar.',
    price: 'ab 490 € / Monat',
  },
  {
    title: 'Für Agenturen',
    text: 'Kapazität als Subunternehmer, wenn bei Ihnen Überlauf entsteht. Ich arbeite unter Ihrem Namen, direkter Kundenkontakt nur auf Wunsch.',
    price: '560 € / Tag',
  },
];

export default function Zusammenarbeit() {
  return (
    <section id="zusammenarbeit">
      <div className="wrap">
        <div className="sec-head">
          <h2>Zusammenarbeit</h2>
          <p>Drei Modelle. Welches passt, klärt sich meist im ersten Gespräch in zehn Minuten.</p>
        </div>
        <div className="models">
          {MODELS.map((model) => (
            <div className="model" key={model.title}>
              <h3>{model.title}</h3>
              <p>{model.text}</p>
              <div className="price">{model.price}</div>
            </div>
          ))}
        </div>
        <p className="models-note">
          Aus arbeitsvertraglichen Gründen kann ich keine Kunden aus dem B2C-Versandhandel
          übernehmen. Alles andere ist unproblematisch.
        </p>
      </div>
    </section>
  );
}
