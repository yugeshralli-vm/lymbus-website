import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18M3 10h18M3 15h12M3 20h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M20 16.5v1.5l1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
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
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 4l-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="4" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Real-Time AI Analysis',
    desc: 'Our large language model processes every response within seconds — identifying sentiment, key themes, urgency, and HCAHPS correlation. No monthly batch reports.',
    tag: 'Instant insights',
    snippet: (
      <div className="snippet-window">
        <div className="snippet-window__bar">
          <span className="snippet-window__dot" /><span className="snippet-window__dot" /><span className="snippet-window__dot" />
          <span className="snippet-window__title">Response #2847</span>
        </div>
        <div className="snippet-window__body">
          <div className="snippet-row"><span className="snippet-label">Sentiment</span><span className="snippet-value snippet-value--positive">Positive</span></div>
          <div className="snippet-row"><span className="snippet-label">Themes</span><span className="snippet-value">Care, Cleanliness</span></div>
          <div className="snippet-row"><span className="snippet-label">Urgency</span><span className="snippet-value">Low</span></div>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M17.25 13.5v7.5M13.5 17.25h7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
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
        <div className="snippet-window__body">
          <div className="snippet-flow">
            <span className="snippet-flow__item">Alert</span>
            <span className="snippet-flow__arrow">→</span>
            <span className="snippet-flow__item">Dashboard</span>
            <span className="snippet-flow__arrow">→</span>
            <span className="snippet-flow__item">Team</span>
          </div>
          <div className="snippet-row snippet-row--sm"><span className="snippet-muted">Service recovery · 2 min ago</span></div>
        </div>
      </div>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 20l4-8 4 4 3-6 4 3 3-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="21" cy="5" r="2.5" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Predictive Intelligence',
    desc: 'Identify patterns before they become problems. Lymbus AI correlates feedback signals with HCAHPS outcomes, flagging risk areas weeks before your next survey window.',
    tag: 'Stay ahead',
    snippet: (
      <div className="snippet-window">
        <div className="snippet-window__bar">
          <span className="snippet-window__dot" /><span className="snippet-window__dot" /><span className="snippet-window__dot" />
          <span className="snippet-window__title">Trend · HCAHPS</span>
        </div>
        <div className="snippet-window__body">
          <div className="snippet-chart">
            <div className="snippet-chart__bar" style={{ height: '40%' }} />
            <div className="snippet-chart__bar" style={{ height: '55%' }} />
            <div className="snippet-chart__bar" style={{ height: '45%' }} />
            <div className="snippet-chart__bar" style={{ height: '70%' }} />
            <div className="snippet-chart__bar snippet-chart__bar--current" style={{ height: '60%' }} />
          </div>
          <div className="snippet-row snippet-row--sm"><span className="snippet-badge snippet-badge--warn">Risk flagged</span></div>
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
            <span className="eyebrow"><span className="eyebrow-dot"/>The Platform</span>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
                      <circle cx="4" cy="4" r="3"/>
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
