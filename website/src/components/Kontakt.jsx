import { useState } from 'react';

const STATUS = { idle: 'idle', sending: 'sending', success: 'success', error: 'error' };

export default function Kontakt() {
  const [status, setStatus] = useState(STATUS.idle);
  const [bookingLoaded, setBookingLoaded] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, humans never see this input.
    if (data.get('website')) return;

    setStatus(STATUS.sending);
    try {
      const res = await fetch('/send-mail.php', { method: 'POST', body: data });
      if (!res.ok) throw new Error('request failed');
      setStatus(STATUS.success);
      form.reset();
    } catch {
      setStatus(STATUS.error);
    }
  }

  return (
    <div id="kontakt" className="section contact">
      <div className="contact-grid">
        <div>
          <div className="contact-intro">
            <h2>Lass uns über dein Projekt sprechen</h2>
            <p>
              Erzähl mir kurz, was du vorhast. Ich melde mich innerhalb von 24 Stunden für ein
              kostenloses, unverbindliches Erstgespräch.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Dein Name" required autoComplete="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-Mail</label>
              <input id="email" name="email" type="email" placeholder="deine@email.de" required autoComplete="email" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" name="message" rows={4} placeholder="Erzähl mir kurz von deinem Projekt." required />
            </div>
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button type="submit" className="btn-solid contact-submit" disabled={status === STATUS.sending}>
              {status === STATUS.sending ? 'Wird gesendet …' : 'Nachricht senden'}
            </button>
            {status === STATUS.success && (
              <p className="form-status success">Danke! Deine Nachricht ist angekommen, ich melde mich zeitnah.</p>
            )}
            {status === STATUS.error && (
              <p className="form-status error">
                Das hat leider nicht geklappt. Schreib mir gern direkt an [name@deine-domain.de].
              </p>
            )}
          </form>
        </div>

        <div className="contact-side">
          <div className="booking-placeholder">
            <span className="section-label" style={{ color: 'var(--contact-label)' }}>Terminbuchung</span>
            {!bookingLoaded ? (
              <>
                <p>Hier lässt sich direkt ein Termin buchen. Der Kalender wird erst nach Klick geladen.</p>
                <button type="button" className="booking-load-btn" onClick={() => setBookingLoaded(true)}>
                  Terminkalender laden
                </button>
                <span className="booking-note">Beim Laden wird eine Verbindung zum Buchungsanbieter hergestellt.</span>
              </>
            ) : (
              <p>Terminkalender folgt, sobald das Buchungstool final eingerichtet ist.</p>
            )}
          </div>
          <div className="contact-direct">
            <span className="section-label" style={{ color: 'var(--contact-label)' }}>Oder direkt</span>
            <a href="mailto:name@deine-domain.de">[name@deine-domain.de]</a>
            <a href="tel:+49XXXXXXXXX">[+49 XXX XXXXXXX]</a>
          </div>
        </div>
      </div>
    </div>
  );
}
