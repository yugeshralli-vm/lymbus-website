import { useScrollReveal } from '../hooks/useScrollReveal'

const TESTIMONIALS = [
  {
    quote: 'Lymbus AI transformed how we understand our patients. We went from drowning in monthly reports to having real-time intelligence that tells us exactly where to focus. Our HCAHPS scores have never been better.',
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    org: 'Regional Medical Center',
    initials: 'SC',
    result: '+11 HCAHPS points in 90 days',
  },
  {
    quote: 'Within three months, we replaced three different feedback tools with Lymbus — and our team actually uses it now. The AI insights are specific enough to be actionable, not just interesting.',
    name: 'Mark Thompson',
    role: 'VP Patient Experience',
    org: "St. Luke's Health",
    initials: 'MT',
    result: '3 tools replaced, 1 platform',
  },
  {
    quote: 'Implementation took two weeks, not two years. The Epic integration was seamless. For any health system still on legacy feedback tools, the switching cost is far lower than staying put.',
    name: 'Jennifer Rodriguez',
    role: 'Chief Information Officer',
    org: 'Community Health Network',
    initials: 'JR',
    result: '2-week implementation',
  },
]

export default function Testimonials() {
  const headerRef = useScrollReveal()

  return (
    <section className="testimonials" id="resources">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow"><span className="eyebrow-dot"/>Customer Stories</span>
          <h2 className="section-title">
            Trusted by healthcare leaders
            <br />
            <em>who demand more.</em>
          </h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              className="testimonial-card reveal"
              key={i}
              ref={useScrollReveal({ threshold: 0.1 })}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
              </div>

              <p className="testimonial-card__quote">{t.quote}</p>

              <span className="result-badge">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M5 1l1.2 3.2H10L7 6.4l1.2 3.2L5 7.6 1.8 9.6 3 6.4.1 4.2H3.8L5 1z"/>
                </svg>
                {t.result}
              </span>

              <div className="testimonial-card__author">
                <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role} · {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
