import Reveal from './Reveal.jsx';

const STEPS = [
  { index: '01', title: 'Erstgespräch', text: 'Kostenloses Gespräch über Ihr Fachgebiet, Ihre Ziele und was die Website leisten soll.', textShort: 'Kostenloses Gespräch über Ihre Ziele.' },
  { index: '02', title: 'Konzept', text: 'Struktur, Text-Gerüst und erster Design-Entwurf, abgestimmt bevor etwas gebaut wird.', textShort: 'Struktur und erster Design-Entwurf.' },
  { index: '03', title: 'Umsetzung', text: 'Ihre Website wird gebaut, mit Ihnen abgestimmt und laufend feinjustiert.', textShort: 'Ihre Website wird gebaut.' },
  { index: '04', title: 'Launch & Support', text: 'Ihre Seite geht live. Danach bleibe ich für Updates und Fragen erreichbar.', textShort: 'Ihre Seite geht live.' },
];

export default function Prozess() {
  return (
    <div id="prozess" className="section section-alt">
      <Reveal className="section-head" style={{ marginBottom: 28 }}>
        <h2>So läuft die Zusammenarbeit ab</h2>
      </Reveal>
      <div className="process-list">
        {STEPS.map((step, i) => (
          <Reveal
            as="div"
            className={`process-step${i === 0 ? ' first' : ''}`}
            style={{ transitionDelay: `${i * 130}ms` }}
            key={step.index}
          >
            <span className="index">{step.index}</span>
            <div>
              <h3>{step.title}</h3>
              <p className="only-mobile">{step.textShort}</p>
              <p className="only-desktop">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
