import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Why Lymbus', href: '#why' },
  { label: 'Platform',   href: '#platform' },
  { label: 'Solutions',  href: '#solutions' },
  { label: 'Resources',  href: '#resources' },
]

function Logo() {
  return (
    <a href="#" className="navbar__logo" aria-label="Lymbus AI — Home">
      <svg className="navbar__logo-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#EEF0FD" />
        <path
          d="M8 22L13 10L16 17L19 13L24 22"
          stroke="#374DEA"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="22" r="2" fill="#F59E0B" />
      </svg>
      <span className="navbar__logo-text">
        Lymbus<span>AI</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Logo />

          <nav className="navbar__nav" aria-label="Primary">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="navbar__link">{l.label}</a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a href="#demo" className="btn btn-ghost btn-sm navbar__cta">Log In</a>
            <a href="#demo" className="btn btn-primary btn-sm navbar__cta">Book a Demo</a>
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {[0,1,2].map(i => (
                <span key={i} className="hamburger-bar" style={
                  i === 0 ? { transform: mobileOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' } :
                  i === 1 ? { opacity: mobileOpen ? 0 : 1 } :
                  { transform: mobileOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }
                } />
              ))}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`navbar__overlay${mobileOpen ? ' navbar__overlay--active' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <nav
        className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(l => (
          <a
            key={l.label} href={l.href}
            className="navbar__mobile-link"
            onClick={() => setMobileOpen(false)}
          >{l.label}</a>
        ))}
        <div style={{ borderTop: '1px solid var(--border)', marginTop: '0.5rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          <a href="#demo" className="btn btn-ghost" style={{ justifyContent: 'center' }}>Log In</a>
          <a href="#demo" className="btn btn-primary" style={{ justifyContent: 'center' }}>Book a Demo</a>
        </div>
      </nav>
    </>
  )
}
