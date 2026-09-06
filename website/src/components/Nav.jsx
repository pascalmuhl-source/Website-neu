import { useState } from 'react';

const LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#prozess', label: 'Prozess' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <a href="#hero" className="nav-logo nav-anim" style={{ animationDelay: '0ms' }} onClick={() => setOpen(false)}>
          Pascal Webdesign<span className="dot">.</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((link, i) => (
            <a key={link.href} className="nav-anim" href={link.href} style={{ animationDelay: `${100 + i * 100}ms` }}>
              {link.label}
            </a>
          ))}
          <a
            className="btn-outline nav-anim"
            href="#kontakt"
            style={{ animationDelay: `${100 + LINKS.length * 100}ms` }}
          >
            Erstgespräch buchen
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle nav-anim"
          style={{ animationDelay: '100ms' }}
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      <div className={`nav-menu${open ? ' is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
