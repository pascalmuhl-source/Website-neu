import Reveal from './Reveal.jsx';

const HEADLINE_LINES = ['Websites, die für KMU', 'mehr Kunden bringen.'];

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
          Eine schlechte Website kostet dich täglich Anfragen. Ich baue dir eine, die stattdessen Kunden bringt.
        </p>
        <div className="hero-cta-row">
          <a className="btn-solid hero-cta" href="#kontakt">Kostenloses Erstgespräch buchen</a>
          <a className="text-link" href="#portfolio">Portfolio ansehen</a>
        </div>
      </Reveal>
    </div>
  );
}
