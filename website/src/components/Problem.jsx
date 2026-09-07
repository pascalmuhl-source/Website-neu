import Reveal from './Reveal.jsx';

const ROWS = [
  {
    title: 'Keine erkennbare Qualifikation',
    mobile: 'Fehlt Fachrichtung oder Zulassung auf der Seite, geht die Anfrage von Anwälten oder Versicherungen woanders hin.',
    desktop: 'Auftraggeber wie Anwälte oder Versicherungen entscheiden in Sekunden, ob sie Ihnen ein Gutachten zutrauen. Fehlt die Fachrichtung oder Zulassung auf der Seite, geht die Anfrage woanders hin.',
  },
  {
    title: 'Nicht für das Handy gemacht',
    mobile: 'Viele suchen unterwegs auf dem Handy nach Ihnen und geben auf, bevor sie Sie erreichen.',
    desktop: 'Viele Auftraggeber suchen unterwegs oder direkt bei einem Schadensfall auf dem Handy. Ist die Seite dort kaum lesbar, geben sie auf, bevor sie Sie erreichen.',
  },
  {
    title: 'Wirkt nicht seriös genug',
    mobile: 'Das Vertrauen ist weg, bevor überhaupt jemand anruft.',
    desktop: 'Eine veraltete oder unstrukturierte Seite wirkt, als wäre auch die Arbeit dahinter nicht mehr aktuell. Gerade bei Gutachten, die vor Gericht bestehen müssen, ist das Vertrauen weg, bevor überhaupt jemand anruft.',
  },
];

export default function Problem() {
  return (
    <Reveal id="problem" className="section section-alt">
      <div className="section-head">
        <h2>Was eine schwache Website Sachverständige wirklich kostet</h2>
        <p>
          Ob Bau, Kfz, Immobilien oder ein anderes Fachgebiet: Meistens ist nicht das Problem, dass niemand
          Ihre Website findet. Das Problem ist, dass Auftraggeber sie sich ansehen und trotzdem nicht anrufen.
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
