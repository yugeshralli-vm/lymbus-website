import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ClosingCTA() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="closing-cta" id="demo">
      <div className="closing-cta__glow-1" aria-hidden="true" />
      <div className="closing-cta__glow-2" aria-hidden="true" />

      <div className="container">
        <div ref={ref} className="closing-cta__inner reveal">
          <span className="eyebrow eyebrow--white" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span className="eyebrow-dot" />
            Get Started Today
          </span>

          <h2 className="closing-cta__title">
            Ready to hear what your<br />
            patients are really saying?
          </h2>

          <p className="closing-cta__sub">
            Join 500+ health systems using Lymbus AI to turn patient feedback
            into their most powerful clinical asset. Book a personalized demo
            and see real results in your first 14 days.
          </p>

          {submitted ? (
            <div className="success-box">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontSize: '1.0625rem' }}>You're on the list!</div>
              <div style={{ fontSize: '0.875rem', opacity: 0.75 }}>
                Our team will reach out within one business day to schedule your personalized demo.
              </div>
            </div>
          ) : (
            <form className="closing-cta__form" onSubmit={handleSubmit}>
              <label htmlFor="cta-email" className="sr-only">Work email</label>
              <input
                id="cta-email"
                type="email"
                className="cta-input"
                placeholder="Your work email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button type="submit" className="btn btn-white btn-lg">
                Book a Demo
              </button>
            </form>
          )}

          <p className="closing-cta__note">
            No credit card required · HIPAA compliant · Live in 14 days
          </p>

          <div className="closing-cta__actions">
            <a href="#platform" className="btn btn-outline-white btn-sm">Explore the Platform</a>
            <a href="#"         className="btn btn-outline-white btn-sm">Speak to an Expert</a>
          </div>
        </div>
      </div>
    </section>
  )
}
