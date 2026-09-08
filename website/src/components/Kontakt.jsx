import { useState } from 'react';
import Reveal from './Reveal.jsx';

const STATUS = { idle: 'idle', sending: 'sending', success: 'success', error: 'error' };

export default function Kontakt() {
  const [status, setStatus] = useState(STATUS.idle);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, humans never see this input.
    if (data.get('website')) return;

    setStatus(STATUS.sending);
    try {
      const res = await fetch('/sendmail.php', { method: 'POST', body: data });
      if (!res.ok) throw new Error('request failed');
      setStatus(STATUS.success);
      form.reset();
    } catch {
      setStatus(STATUS.error);
    }
  }

  return (
    <Reveal id="kontakt" className="section contact">
      <div className="contact-grid">
        <div>
          <div className="contact-intro">
            <h2>Lassen Sie uns über Ihr Projekt sprechen</h2>
            <p>
              Erzählen Sie mir kurz, was Sie vorhaben. Ich melde mich innerhalb von 24 Stunden für
              ein kostenloses, unverbindliches Erstgespräch.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Ihr Name" required autoComplete="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-Mail</label>
              <input id="email" name="email" type="email" placeholder="ihre@email.de" required autoComplete="email" />
            </div>
            <div className="form-field">
              <label htmlFor="anliegen">Worum geht's?</label>
              <select id="anliegen" name="anliegen" defaultValue="Neue Website">
                <option value="Neue Website">Neue Website</option>
                <option value="Redesign">Redesign</option>
                <option value="Wartung & Support">Wartung & Support</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" name="message" rows={4} placeholder="Erzählen Sie mir kurz von Ihrem Projekt." required />
            </div>
            <div className="form-honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <p className="form-privacy-note">
              Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer Anfrage per E-Mail an mich
              weitergeleitet. Mehr dazu in der <a href="./datenschutz.html">Datenschutzerklärung</a>.
            </p>
            <button type="submit" className="btn-solid contact-submit" disabled={status === STATUS.sending}>
              {status === STATUS.sending ? 'Wird gesendet …' : 'Nachricht senden'}
            </button>
            {status === STATUS.success && (
              <p className="form-status success">Danke! Ihre Nachricht ist angekommen, ich melde mich zeitnah.</p>
            )}
            {status === STATUS.error && (
              <p className="form-status error">
                Das hat leider nicht geklappt. Schreiben Sie mir gern direkt an pascal@pascal-webdesign.de.
              </p>
            )}
          </form>
        </div>

        <div className="contact-side">
          <div className="contact-direct">
            <span className="section-label" style={{ color: 'var(--contact-label)' }}>Oder direkt</span>
            <a href="mailto:pascal@pascal-webdesign.de">pascal@pascal-webdesign.de</a>
            <a href="tel:+491731043823">0173 1043823</a>
          </div>

          <div className="contact-direct">
            <span className="section-label" style={{ color: 'var(--contact-label)' }}>Standort</span>
            <address className="contact-address">
              Pascal Webdesign<br />
              Ringstraße 2<br />
              55452 Windesheim
            </address>
            <span className="booking-note">Vor Ort im Raum Bad Kreuznach, im Projekt deutschlandweit.</span>
            <a href="https://share.google/AIW6wayHq9MifU8qP" target="_blank" rel="noopener">Auf Google ansehen</a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
