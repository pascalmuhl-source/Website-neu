import Reveal from './Reveal.jsx';

const BRANCHEN = [
  {
    title: 'Bausachverständige',
    pain: 'Auftraggeber suchen oft akut bei einem Schadensfall, meist unterwegs auf der Baustelle, auf dem Handy.',
    need: 'Klare Mobile-Darstellung, schnelle Kontaktaufnahme.',
  },
  {
    title: 'Kfz-Gutachter',
    pain: 'Hohe Vergleichbarkeit: Mehrere Gutachter werden parallel angefragt, die Entscheidung fällt in Sekunden.',
    need: 'Sofort erkennbare Qualifikation und Reaktionszeit.',
  },
  {
    title: 'Immobiliensachverständige',
    pain: 'Auftraggeber sind oft Anwälte oder Banken und erwarten einen seriösen Auftritt ohne Verkaufsdruck.',
    need: 'Sachlicher Ton, nachvollziehbare Arbeitsweise.',
  },
  {
    title: 'Weitere Fachrichtungen',
    pain: 'Glas/Fenster, Maschinen, Umwelt u. a.: kleinere, spezialisierte Zielgruppen mit wenig Vergleichsangeboten.',
    need: 'Fachbegriffe korrekt statt austauschbarer Baukasten-Sprache.',
  },
];

export default function Branchen() {
  return (
    <Reveal id="fachgebiet" className="section">
      <div className="section-head">
        <h2>Für Ihr Fachgebiet</h2>
        <p>Das Problem sieht je nach Fachrichtung anders aus:</p>
      </div>
      <div className="branchen-grid">
        {BRANCHEN.map((b) => (
          <div className="branchen-card" key={b.title}>
            <h3>{b.title}</h3>
            <p className="pain">{b.pain}</p>
            <p className="need">{b.need}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
