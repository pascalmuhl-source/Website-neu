import Reveal from './Reveal.jsx';

const STEPS = [
  {
    index: '00',
    title: 'Unverbindliche Anfrage',
    duration: 'Antwort innerhalb 24 Std.',
    text: 'Formular oder Anruf. Sie schildern kurz Ihr Fachgebiet und was fehlt. Keine Vorbereitung nötig.',
    textShort: 'Formular oder Anruf, keine Vorbereitung nötig.',
    yourEffort: '5 Minuten',
    result: 'Terminvorschlag fürs Erstgespräch',
    isNew: true,
  },
  {
    index: '01',
    title: 'Erstgespräch',
    duration: '30-45 Min., Telefon oder Video',
    text: 'Wir sprechen über Ihr Fachgebiet, Ihre Auftraggeber und was die Website leisten soll.',
    textShort: 'Kostenloses Gespräch über Ihre Ziele.',
    yourEffort: 'Grobe Vorstellung, ggf. Beispiele',
    result: 'Festpreis-Angebot innerhalb 48 Std.',
  },
  {
    index: '02',
    title: 'Konzept & Struktur',
    duration: '3-5 Werktage',
    text: 'Textgerüst und erster visueller Entwurf, mit Ihnen abgestimmt, bevor Code entsteht.',
    textShort: 'Struktur und erster Design-Entwurf.',
    yourEffort: 'Zulassungen, Texte, Fotos',
    result: 'Freigabefähiger Entwurf',
  },
  {
    index: '03',
    title: 'Umsetzung',
    duration: '1-3 Wochen',
    text: 'Ihre Website wird gebaut, mit Ihnen abgestimmt und laufend feinjustiert.',
    textShort: 'Ihre Website wird gebaut.',
    yourEffort: 'Feedback innerhalb weniger Tage',
    result: 'Fertige, getestete Website',
  },
  {
    index: '04',
    title: 'Launch',
    duration: '1 Tag',
    text: 'Domain und Hosting werden eingerichtet, DSGVO-Punkte geprüft, die Seite geht live.',
    textShort: 'Ihre Seite geht live.',
    yourEffort: 'Zugang zu Domain/Hosting',
    result: 'Live-Website unter Ihrer Domain',
  },
  {
    index: '05',
    title: 'Laufende Betreuung',
    duration: 'ab 35 €/Monat, jederzeit kündbar',
    text: 'Ich bleibe derselbe feste Ansprechpartner: für Updates, Textänderungen oder technische Fragen.',
    textShort: 'Fester Ansprechpartner für Updates.',
    yourEffort: 'Nur bei Bedarf melden',
    result: 'Website bleibt aktuell',
    isNew: true,
  },
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
            className={`process-step${i === 0 ? ' first' : ''}${step.isNew ? ' is-new' : ''}`}
            style={{ transitionDelay: `${i * 90}ms` }}
            key={step.index}
          >
            <span className="index">{step.index}</span>
            <div>
              <div className="process-step-head">
                <h3>{step.title}</h3>
                <span className="process-duration">{step.duration}</span>
              </div>
              <p className="only-mobile">{step.textShort}</p>
              <p className="only-desktop">{step.text}</p>
              <dl className="process-fields">
                <div>
                  <dt>{step.index === '00' || step.index === '05' ? 'Ihr Aufwand' : 'Sie bringen mit'}</dt>
                  <dd>{step.yourEffort}</dd>
                </div>
                <div>
                  <dt>Ergebnis</dt>
                  <dd>{step.result}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
