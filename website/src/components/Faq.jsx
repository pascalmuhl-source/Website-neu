import Reveal from './Reveal.jsx';

const FAQ = [
  {
    q: 'Was kostet eine Website wirklich, am Ende?',
    a: 'Sie erhalten vor Beginn ein Festpreis-Angebot auf Basis des Erstgesprächs. Keine Abrechnung nach Stunden, keine Überraschung auf der Rechnung.',
  },
  {
    q: 'Wie lange dauert es, bis die Seite live ist?',
    a: 'Je nach Umfang meist 2-4 Wochen ab Auftragsbestätigung, abhängig davon, wie schnell Texte und Unterlagen von Ihrer Seite vorliegen.',
  },
  {
    q: 'Muss ich mich um Datenschutz selbst kümmern?',
    a: 'Die technische Basis ist von Anfang an DSGVO-konform umgesetzt. Rechtstexte liefere ich als geprüfte Entwürfe, eine anwaltliche Prüfung bleibt bei Ihnen.',
  },
  {
    q: 'Kann ich Inhalte später selbst ändern?',
    a: 'Kleinere Änderungen übernehme ich im Rahmen der laufenden Betreuung. Sie müssen sich nicht selbst einarbeiten.',
  },
  {
    q: 'Was, wenn mir der Entwurf nicht gefällt?',
    a: 'Das Konzept wird vor der Umsetzung freigegeben. Korrekturen laufen an diesem Punkt, nicht erst am fertigen Ergebnis.',
  },
];

export default function Faq() {
  return (
    <Reveal id="faq" className="section section-alt">
      <div className="section-head">
        <h2>Häufige Fragen</h2>
      </div>
      <div className="faq-list">
        {FAQ.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary>
              {item.q}
              <span className="faq-plus" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
