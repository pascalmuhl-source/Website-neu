import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero-portrait-wrap">
        <div className="hero-portrait" role="img" aria-label="Porträtfoto von [Dein Name]" />
      </div>
      <Reveal as="div" className="hero-copy">
        <h1>Websites, die für KMU mehr Kunden bringen.</h1>
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
