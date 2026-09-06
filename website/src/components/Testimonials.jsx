function QuoteIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 34 34">
      <circle cx="17" cy="17" r="16" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <circle cx="17" cy="17" r="5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

const QUOTES = [
  { text: 'Vorher kam quasi nichts über die Website. Jetzt bekomme ich zwei bis drei Anfragen die Woche, ganz ohne dass ich dafür werbe.', textShort: 'Vorher kam quasi nichts über die Website. Jetzt bekomme ich zwei bis drei Anfragen die Woche.' },
  { text: 'Klare Kommunikation, klare Termine, klares Ergebnis. Genau das, was man sich als kleines Unternehmen wünscht.' },
  { text: 'Auch nach dem Launch immer erreichbar. Kleine Änderungen sind meist am selben Tag erledigt.' },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="section">
      <div className="section-head" style={{ marginBottom: 28 }}>
        <h2>Was Kund:innen sagen</h2>
      </div>

      <div className="testimonial only-mobile">
        <p>{QUOTES[0].textShort}</p>
        <div className="testimonial-person">
          <QuoteIcon />
          <div>
            <div className="name">[Name]</div>
            <div className="company">[Firma]</div>
          </div>
        </div>
      </div>

      <div className="testimonial-grid only-desktop">
        {QUOTES.map((q, i) => (
          <div className="testimonial" key={i}>
            <p>{q.text}</p>
            <div className="testimonial-person">
              <QuoteIcon />
              <div>
                <div className="name">[Name]</div>
                <div className="company">[Firma]</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
