import Reveal from './Reveal.jsx';

const STEPS = [
  { index: '01', title: 'Erstgespräch', text: 'Kostenloses Gespräch über dein Unternehmen, deine Ziele und was die Website leisten soll.', textShort: 'Kostenloses Gespräch über deine Ziele.' },
  { index: '02', title: 'Konzept', text: 'Struktur, Text-Gerüst und erster Design-Entwurf, abgestimmt bevor etwas gebaut wird.', textShort: 'Struktur und erster Design-Entwurf.' },
  { index: '03', title: 'Umsetzung', text: 'Deine Website wird gebaut, mit dir abgestimmt und laufend feinjustiert.', textShort: 'Deine Website wird gebaut.' },
  { index: '04', title: 'Launch & Support', text: 'Deine Seite geht live. Danach bleibe ich für Updates und Fragen erreichbar.', textShort: 'Deine Seite geht live.' },
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
            style={{ transitionDelay: `${i * 90}ms` }}
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
