export default function Kontakt() {
  return (
    <section className="contact" id="kontakt">
      <div className="wrap">
        <div>
          <h2>Kapazität anfragen</h2>
          <p className="intro">
            Schreiben Sie mir kurz, worum es geht und in welchem Zeitraum. Ich melde mich innerhalb
            von 24 Stunden mit einer ehrlichen Einschätzung, auch wenn ich nicht der Richtige bin.
          </p>
        </div>
        <dl className="details">
          <div className="detail">
            <dt>E-Mail</dt>
            <dd>
              <a href="mailto:kontakt@content-struktur.de?subject=Anfrage%20Produktdaten%20und%20Feeds">
                kontakt@content-struktur.de
              </a>
            </dd>
          </div>
          <div className="detail">
            <dt>Telefon</dt>
            <dd><a href="tel:+491731043823">0173 1043823</a></dd>
          </div>
          <div className="detail">
            <dt>Kapazität</dt>
            <dd>3 bis 4 Tage im Monat, remote</dd>
          </div>
          <div className="detail">
            <dt>Standort</dt>
            <dd>55452 Windesheim, deutschlandweit tätig</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
