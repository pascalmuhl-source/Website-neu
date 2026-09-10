import Reveal from './Reveal.jsx';

const HEADLINE_LINES = ['Websites für Sachverständige,', 'die Vertrauen schaffen und Aufträge bringen.'];

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero-portrait-wrap">
        <picture>
          <source srcSet="/images/pascal-muhl.webp" type="image/webp" />
          <img
            className="hero-portrait"
            src="/images/pascal-muhl.png"
            alt="Pascal Muhl, Webdesigner für Sachverständige und Gutachter"
            width="1000"
            height="1333"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
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
          eine, die Ihre Kompetenz zeigt und neue Anfragen bringt.
        </p>
        <div className="hero-cta-row">
          <a className="btn-solid hero-cta" href="#kontakt">Kostenloses Erstgespräch buchen</a>
        </div>
      </Reveal>
    </div>
  );
}
