import Reveal from './Reveal.jsx';

const SERVICES = [
  {
    title: 'Website-Erstellung',
    text: 'Neue Website von Grund auf, abgestimmt auf Ihr Fachgebiet.',
    textDesktop: 'Neue Website von Grund auf: Struktur, Text und Design abgestimmt auf Ihr Fachgebiet und Ihre Auftraggeber, inklusive E-Mail-Adresse über Ihre eigene Domain.',
    price: 'ab 1.499 €',
  },
  {
    title: 'Redesign',
    text: 'Überarbeitung von Struktur, Design und Text Ihrer bestehenden Seite.',
    textDesktop: 'Ihre bestehende Seite wirkt veraltet oder bringt keine Anfragen mehr. Ich überarbeite Struktur, Design und Text, ohne dass Sie bei null anfangen.',
    price: 'ab 1.199 €',
  },
  {
    title: 'Wartung & Support',
    text: 'Laufende Betreuung, Updates und kleine Änderungen.',
    textDesktop: 'Updates, kleine Textänderungen und technische Betreuung, damit Ihre Website läuft, ohne dass Sie sich selbst darum kümmern müssen.',
    price: 'ab 35 € / Monat',
  },
];

const ZUSATZ = [
  {
    title: 'Google-Auffindbarkeit',
    text: 'Ihr Unternehmensprofil bei Google, eingerichtet und eingetragen.',
    textDesktop: 'Wer regional nach einem Sachverständigen sucht, landet zuerst bei Google Maps. Ich richte Ihr Unternehmensprofil vollständig ein und trage Sie in die wichtigsten Verzeichnisse ein.',
    price: 'ab 349 €',
  },
  {
    title: 'Weitere Seiten & Fachbeiträge',
    text: 'Zusätzliche Seiten und Fachtexte, wenn Ihre Website wachsen soll.',
    textDesktop: 'Eine weitere Leistungsseite, ein zusätzliches Fachgebiet oder ein Fachbeitrag: Ich schreibe den Text und baue die Seite passend zur bestehenden Website.',
    price: 'ab 190 € je Seite',
  },
  {
    title: 'Website-Statistik ohne Tracking',
    text: 'Sie sehen, wie oft Ihre Seite aufgerufen wird. Ohne Google, ohne Cookies.',
    textDesktop: 'Sie sehen, welche Seiten aufgerufen werden und worüber Besucher kommen. Ausgewertet auf Servern in der EU, ohne Google Analytics und ohne Cookies.',
    price: 'ab 249 €',
  },
];

export default function Leistungen() {
  return (
    <Reveal id="leistungen" className="section">
      <div className="section-head">
        <h2>Was ich für Ihr Sachverständigenbüro baue</h2>
        <p>Die Website ist der Kern. Kein Baukasten-Wirrwarr, sondern genau das, was ein Sachverständigenbüro wirklich braucht.</p>
      </div>
      <div className="services-list">
        {SERVICES.map((service) => (
          <div className="service-row" key={service.title}>
            <h3>{service.title}</h3>
            <p className="only-mobile">{service.text}</p>
            <p className="only-desktop">{service.textDesktop}</p>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
        <p className="services-subhead">Zusätzlich buchbar, wenn Sie es brauchen</p>
        {ZUSATZ.map((service) => (
          <div className="service-row" key={service.title}>
            <h3>{service.title}</h3>
            <p className="only-mobile">{service.text}</p>
            <p className="only-desktop">{service.textDesktop}</p>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
