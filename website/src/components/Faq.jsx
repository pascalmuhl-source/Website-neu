import { useState } from 'react';
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
  const [open, setOpen] = useState(() => new Set());

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <Reveal id="faq" className="section section-alt">
      <div className="section-head">
        <h2>Häufige Fragen</h2>
      </div>
      <div className="faq-list">
        {FAQ.map((item, i) => {
          const isOpen = open.has(i);
          return (
            <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.q}>
              <button
                type="button"
                className="faq-summary"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                {item.q}
                <span className="faq-plus" aria-hidden="true" />
              </button>
              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
