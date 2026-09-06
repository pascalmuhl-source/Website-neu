import Reveal from './Reveal.jsx';

const ROWS = [
  {
    title: 'Kein klarer nächster Schritt',
    mobile: 'Jemand will einen Termin oder ein Angebot, findet aber keinen Weg dahin und ruft stattdessen woanders an.',
    desktop: 'Jemand will einen Termin oder ein Angebot, findet auf der Seite aber keinen Weg dahin und ruft stattdessen woanders an.',
  },
  {
    title: 'Nicht für das Handy gemacht',
    mobile: 'Die meisten suchen unterwegs auf dem Handy nach dir und geben auf, bevor sie dich erreichen.',
    desktop: 'Die meisten suchen unterwegs auf dem Handy nach dir. Ist die Seite dort kaum lesbar, geben sie auf, bevor sie dich erreichen.',
  },
  {
    title: 'Wirkt veraltet',
    mobile: 'Das Vertrauen ist weg, bevor überhaupt jemand anruft.',
    desktop: 'Eine veraltete Seite wirkt, als wäre auch der Betrieb nicht mehr aktuell. Das Vertrauen ist weg, bevor überhaupt jemand anruft.',
  },
];

export default function Problem() {
  return (
    <Reveal id="problem" className="section section-alt">
      <div className="section-head">
        <h2>Was eine schlechte Website wirklich kostet</h2>
        <p>
          Ob Arztpraxis, Handwerksbetrieb oder Kanzlei: Meistens ist nicht das Problem, dass niemand die
          Website findet. Das Problem ist, dass Besucher sie sich ansehen und trotzdem nicht anrufen.
        </p>
      </div>

      {/* Mobile: stacked rows */}
      <div className="problem-table" aria-hidden="false">
        {ROWS.map((row) => (
          <div className="problem-row" key={row.title}>
            <div className="title">{row.title}</div>
            <p>{row.mobile}</p>
          </div>
        ))}
      </div>

      {/* Desktop: two-column comparison table, shown/hidden via CSS */}
      <div className="problem-columns-wrap">
        <div className="problem-columns">
          <div className="col-head">Das Problem</div>
          <div className="col-head right">Was das für dich bedeutet</div>
          {ROWS.map((row, i) => (
            <div className="contents" key={row.title}>
              <div className={`cell-title${i === ROWS.length - 1 ? ' row-last' : ''}`}>{row.title}</div>
              <div className={`cell-body${i === ROWS.length - 1 ? ' row-last' : ''}`}>{row.desktop}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
