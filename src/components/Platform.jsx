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
  },
]

export default function Platform() {
  const headerRef = useScrollReveal()

  return (
    <section className="platform" id="platform">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow"><span className="eyebrow-dot"/>The Platform</span>
          <h2 className="section-title">
            One intelligent platform.
            <br />
            <em>Every patient touchpoint.</em>
          </h2>
          <p className="section-sub">
            From the moment a patient is discharged to the moment your team acts —
            Lymbus AI works in the background, turning every data point into a
            decision you can make today.
          </p>
        </div>

        <div className="platform__grid">
          {FEATURES.map((f, i) => (
            <div
              className="feature-card reveal"
              key={i}
              ref={useScrollReveal({ threshold: 0.1 })}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="feature-card__icon" aria-hidden="true">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
              <span className="feature-card__tag">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="3"/>
                </svg>
                {f.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
