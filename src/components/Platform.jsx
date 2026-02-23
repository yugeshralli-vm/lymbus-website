import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18M3 10h18M3 15h12M3 20h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 16.5v1.5l1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Omnichannel Capture',
    desc: 'Collect feedback via SMS, email, patient portal, bedside kiosk, IVR, and post-discharge calls — unified in one place. AI-driven follow-up ensures no voice goes unheard.',
    tag: 'Every touchpoint',
    snippet: (
      <div className="snippet-window">
        <div className="snippet-window__bar">
          <span className="snippet-window__dot" /><span className="snippet-window__dot" /><span className="snippet-window__dot" />
          <span className="snippet-window__title">Performance by channel</span>
        </div>
        <div className="snippet-window__body">
          <div className="snippet-chart snippet-chart--channels">
            <div className="snippet-chart__bar snippet-chart__bar--email" />
            <div className="snippet-chart__bar snippet-chart__bar--sms snippet-chart__bar--live" />
            <div className="snippet-chart__bar snippet-chart__bar--portal" />
            <div className="snippet-chart__bar snippet-chart__bar--kiosk" />
          </div>
          <div className="snippet-chart__labels">
            <span>Email</span>
            <span>SMS</span>
            <span>Portal</span>
            <span>Kiosk</span>
          </div>
          <div className="snippet-row snippet-row--sm">
            <span className="snippet-badge snippet-badge--active">Live</span>
            <span className="snippet-muted">New feedback streaming in…</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 4l-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="4" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'Real-Time AI Analysis',
    desc: 'Our large language model processes every response within seconds — identifying sentiment, key themes, urgency, and HCAHPS correlation. No monthly batch reports.',
    tag: 'Instant insights',
    snippet: (
      <div className="snippet-window">
        <div className="snippet-window__bar">
          <span className="snippet-window__dot" /><span className="snippet-window__dot" /><span className="snippet-window__dot" />
          <span className="snippet-window__title">Real-Time Satisfaction</span>
        </div>
        <div className="snippet-window__body">
          <div className="snippet-line-chart" style={{ height: '3rem', marginBottom: '0.5rem', position: 'relative' }}>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,24 L14,26 L28,18 L42,20 L56,12 L70,14 L85,6 L100,2 L100,40 L0,40 Z" fill="url(#lineGrad)" />
              <path d="M0,24 L14,26 L28,18 L42,20 L56,12 L70,14 L85,6 L100,2" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="snippet-line-dot" style={{ position: 'absolute', right: '-4px', top: '-2px' }} />
          </div>
          <div className="snippet-row snippet-row--sm" style={{ borderTop: '1px solid var(--border)', paddingTop: '0.5rem' }}>
            <span className="snippet-badge snippet-badge--active">
              <span className="live-dot" style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }}></span>
              Live
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="snippet-muted">Current Score:</span>
              <span className="snippet-value snippet-value--positive" style={{ fontSize: '1rem', lineHeight: 1 }}>94.2</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M17.25 13.5v7.5M13.5 17.25h7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Intelligent Workflows',
    desc: 'Route the right insight to the right person automatically. Service recovery alerts, department dashboards, and automated coaching — all AI-driven, zero manual triage.',
    tag: 'Automated action',
    snippet: (
      <div className="snippet-window">
        <div className="snippet-window__bar">
          <span className="snippet-window__dot" /><span className="snippet-window__dot" /><span className="snippet-window__dot" />
          <span className="snippet-window__title">Workflow</span>
        </div>
        <div className="snippet-window__body" style={{ padding: '0.4rem 0.5rem', backgroundColor: 'var(--bg-page)' }}>
          <div className="snippet-alert snippet-alert--high">
            <span className="snippet-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="snippet-badge snippet-badge--warn">High</span>
              Wait times rising
            </span>
            <span className="snippet-muted">ED</span>
          </div>
          <div className="snippet-alert snippet-alert--high">
            <span className="snippet-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="snippet-badge snippet-badge--warn">High</span>
              NPS Drop
            </span>
            <span className="snippet-muted">Cardiology</span>
          </div>
          <div className="snippet-alert snippet-alert--urgent">
            <span className="snippet-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="snippet-badge" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626' }}>Urgent</span>
              Cleanliness
            </span>
            <span className="snippet-muted">Med/Surg</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Conversational AI Agent',
    desc: 'Interact directly with your patient data using natural language. Get instant summaries, generate reports, and uncover hidden trends through a conversational interface.',
    tag: 'Natural language',
    snippet: (
      <div className="snippet-window">
        <div className="snippet-window__bar">
          <span className="snippet-window__dot" /><span className="snippet-window__dot" /><span className="snippet-window__dot" />
          <span className="snippet-window__title">Ask Lymbus</span>
        </div>
        <div className="snippet-window__body" style={{ padding: '0.625rem', backgroundColor: '#fcfcfc' }}>
          <div className="snippet-chat">
            <div className="snippet-chat__msg snippet-chat__msg--user">
              What are the top complaints in the ED today?
            </div>
            <div className="snippet-chat__msg snippet-chat__msg--ai">
              <div className="snippet-chat__avatar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
              </div>
              <div className="snippet-chat__bubble">
                <div style={{ background: 'white', padding: '0.4rem', borderRadius: '4px', marginBottom: '0.4rem', border: '1px solid var(--border)' }}>
                  <svg viewBox="0 0 100 30" style={{ width: '100%', height: '30px', overflow: 'visible' }}>
                    <path d="M0,25 C15,25 25,10 50,15 C75,20 85,5 100,2" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="100" cy="2" r="2.5" fill="var(--primary)" />
                  </svg>
                </div>
                <strong>3 issues</strong> found related to ED Wait Times, primarily between 2:00 PM and 4:30 PM.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function Platform() {
  const leftRef = useScrollReveal()
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    const elements = cardRefs.current
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = elements.indexOf(entry.target)
            if (idx !== -1) {
              setActiveIndex(idx)
            }
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: '-15% 0px -35% 0px',
      }
    )

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="platform" id="platform">
      <div className="container platform__container">
        {/* Left column: sticky header only */}
        <div ref={leftRef} className="platform__left reveal">
          <div className="platform__header">
            <span className="eyebrow"><span className="eyebrow-dot" />The Platform</span>
            <h2 className="section-title platform__title">
              One intelligent platform.
              <br />
              <em>Every patient touchpoint.</em>
            </h2>
            <p className="section-sub platform__sub">
              From the moment a patient is discharged to the moment your team acts —
              Lymbus AI works in the background, turning every data point into a
              decision you can make today.
            </p>
            <a href="#contact" className="btn btn-primary platform__cta">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        {/* Right column: tall scroll area with stacking sticky cards */}
        <div className="platform__right">
          <div className="platform__cards">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                className={`platform__card-sticky${activeIndex === i ? ' platform__card-sticky--active' : ''}`}
                style={{ zIndex: i + 1 }}
              >
                <div className="feature-card platform__card">
                  <div className="feature-card__icon" aria-hidden="true">{f.icon}</div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__desc">{f.desc}</p>
                  {f.snippet && (
                    <div className="feature-card__snippet" aria-hidden="true">
                      {f.snippet}
                    </div>
                  )}
                  <span className="feature-card__tag">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {f.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
