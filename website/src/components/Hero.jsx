import Reveal from './Reveal.jsx';

const HEADLINE_LINES = ['Websites für Sachverständige,', 'die Vertrauen schaffen.'];

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero-portrait-wrap">
        <div className="hero-portrait" role="img" aria-label="Porträtfoto von Pascal Muhl" />
      </div>
      <Reveal as="div" className="hero-copy">
        <h1>
          {HEADLINE_LINES.map((line, i) => (
            <span className="line-mask" key={line}>
              <span className="line-inner" style={{ animationDelay: `${i * 180}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p>
          Eine unprofessionelle Website kostet Sie Aufträge, bevor das Telefon klingelt. Ich baue Ihnen
          eine, die Kompetenz zeigt und Anfragen bringt.
        </p>
        <div className="hero-cta-row">
          <a className="btn-solid hero-cta" href="#kontakt">Kostenloses Erstgespräch buchen</a>
        </div>
      </Reveal>
    </div>
  );
}
