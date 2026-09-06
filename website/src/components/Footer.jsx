export default function Footer() {
  return (
    <div className="footer">
      <span className="footer-copy only-desktop">© 2026 Pascal Webdesign. Alle Rechte vorbehalten.</span>
      <div className="footer-right">
        <div className="footer-links">
          <a href="./impressum.html">Impressum</a>
          <a href="./datenschutz.html">Datenschutz</a>
        </div>
        <div className="footer-social only-desktop">
          <a href="#" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" />
              <circle cx="8" cy="8" r="0.6" fill="currentColor" />
              <line x1="8" y1="11" x2="8" y2="17" />
              <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
      <span className="footer-copy only-mobile">© 2026 Pascal Webdesign. Alle Rechte vorbehalten.</span>
    </div>
  );
}
