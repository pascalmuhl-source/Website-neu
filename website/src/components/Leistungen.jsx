import Reveal from './Reveal.jsx';

const SERVICES = [
  {
    title: 'Website-Erstellung',
    text: 'Neue Website von Grund auf, abgestimmt auf Ihr Fachgebiet.',
    textDesktop: 'Neue Website von Grund auf: Struktur, Text und Design abgestimmt auf Ihr Fachgebiet und Ihre Auftraggeber.',
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

export default function Leistungen() {
  return (
    <Reveal id="leistungen" className="section">
      <div className="section-head">
        <h2>Was ich für Ihr Sachverständigenbüro baue</h2>
        <p>Drei klar geschnittene Leistungen. Kein Baukasten-Wirrwarr, sondern genau das, was ein Sachverständigenbüro wirklich braucht.</p>
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
      </div>
    </Reveal>
  );
}
