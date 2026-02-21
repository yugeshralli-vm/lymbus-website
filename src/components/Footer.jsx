const COLS = [
  {
    title: 'Platform',
    links: ['Omnichannel Capture','AI Analysis Engine','Intelligent Workflows','Predictive Insights','Integrations'],
  },
  {
    title: 'Solutions',
    links: ['Patient Experience','Employee Experience','Safety & Quality','HCAHPS Improvement','Health Plans'],
  },
  {
    title: 'Company',
    links: ['About Lymbus','Leadership Team','Careers','Blog & Insights','Contact Us'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="rgba(55,77,234,0.2)"/>
                <path d="M8 22L13 10L16 17L19 13L24 22" stroke="#374DEA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="22" r="2" fill="#F59E0B"/>
              </svg>
              <span className="footer__logo-text">Lymbus<span>AI</span></span>
            </div>
            <p className="footer__tagline">
              Patient intelligence that closes the loop between every patient voice and better clinical outcomes.
            </p>
            <div className="footer__socials">
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M12.5 1.5h-10A1 1 0 001.5 2.5v10a1 1 0 001 1h10a1 1 0 001-1v-10a1 1 0 00-1-1zM5 6v5M5 3.75v.01M7.5 11V8.5C7.5 7.4 8.4 6.5 9.5 6.5s2 .9 2 2V11M7.5 8V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-btn" aria-label="Twitter / X">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M13 2s-.9.5-1.9.7A2.5 2.5 0 005.5 5v.5C3.7 5.7 2 4.2 1 2.5c0 0-.5 2 1.5 3.5C2 6 1 6 1 6c0 2 1.5 3.5 3.5 3.5-.5.5-1 .5-1.5.5s2 1.5 4 1.5C9.5 11.5 12 10 12 6v-.5c.5-.5 1-1.5 1-3.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <h3 className="footer__col-title">{col.title}</h3>
              <ul className="footer__links">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="footer__link">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {new Date().getFullYear()} Lymbus Health, Inc. All rights reserved.</p>
          <div className="footer__compliance">
            {['HIPAA', 'SOC 2', 'HITRUST'].map(b => (
              <span className="compliance-badge" key={b}>
                <span className="check">✓</span>{b}
              </span>
            ))}
          </div>
          <nav className="footer__legal">
            {['Privacy Policy','Terms of Service','Accessibility','Cookie Notice'].map(l => (
              <a key={l} href="#" className="footer__legal-link">{l}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
