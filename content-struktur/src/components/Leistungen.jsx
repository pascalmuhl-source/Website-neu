const WORK = [
  {
    problem: 'Die Daten sind unvollständig oder uneinheitlich',
    solution:
      'Ich bereinige, ergänze und vereinheitliche Ihr Sortiment, bis es die Anforderungen jedes Zielkanals tatsächlich erfüllt. Inklusive Attributen, die im Quellsystem nie gepflegt wurden.',
  },
  {
    problem: 'Jeder Kanal will die Daten anders',
    solution:
      'Ich baue und pflege die Feeds: Mapping von Kategorien und Attributen, Regelwerke pro Kanal, laufende Anpassung, wenn eine Plattform ihre Anforderungen wieder ändert.',
  },
  {
    problem: 'Dieselbe Arbeit fällt jeden Monat neu an',
    solution:
      'Ich überführe wiederkehrende Datenprozesse in eigene Skripte, damit Ihr Team sie nicht mehr von Hand macht. Import, Abgleich, Anreicherung, Export.',
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen">
      <div className="wrap">
        <div className="sec-head">
          <h2>Was ich übernehme</h2>
          <p>
            Drei Arten von Arbeit, die in fast jedem Sortiment anfallen und die selten jemand
            freiwillig macht.
          </p>
        </div>
        <div className="work">
          {WORK.map((item) => (
            <div className="work-row" key={item.problem}>
              <h3>{item.problem}</h3>
              <p>{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
