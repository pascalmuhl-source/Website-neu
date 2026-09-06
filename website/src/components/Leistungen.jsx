import Reveal from './Reveal.jsx';

const SERVICES = [
  {
    title: 'Website-Erstellung',
    text: 'Neue Website von Grund auf, abgestimmt auf dein Angebot.',
    textDesktop: 'Neue Website von Grund auf: Struktur, Text und Design abgestimmt auf dein Angebot und deine Zielgruppe.',
    price: 'ab [XXX] €',
  },
  {
    title: 'Redesign',
    text: 'Überarbeitung von Struktur, Design und Text deiner bestehenden Seite.',
    textDesktop: 'Deine bestehende Seite wirkt veraltet oder bringt keine Anfragen mehr. Ich überarbeite Struktur, Design und Text, ohne dass du bei null anfängst.',
    price: 'ab [XXX] €',
  },
  {
    title: 'Wartung & Support',
    text: 'Laufende Betreuung, Updates und kleine Änderungen.',
    textDesktop: 'Updates, kleine Textänderungen und technische Betreuung, damit deine Website läuft, ohne dass du dich selbst darum kümmern musst.',
    price: 'ab [XX] € / Monat',
  },
];

export default function Leistungen() {
  return (
    <Reveal id="leistungen" className="section">
      <div className="section-head">
        <h2>Was ich für dein Unternehmen baue</h2>
        <p>Drei klar geschnittene Leistungen. Kein Baukasten-Wirrwarr, sondern genau das, was ein kleiner Betrieb wirklich braucht.</p>
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
