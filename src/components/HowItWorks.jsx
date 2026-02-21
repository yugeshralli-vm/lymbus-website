import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    num: '01',
    title: 'Capture',
    desc: 'Deploy across every channel in days — not months. Pre-built connectors with Epic, Cerner, and 40+ clinical systems mean Lymbus reaches patients where they already are, with zero IT burden.',
  },
  {
    num: '02',
    title: 'Analyze',
    desc: 'Every response flows through our AI in real time. Sentiment, themes, urgency, and HCAHPS correlation are surfaced instantly — no manual coding, no data scientists required.',
  },
  {
    num: '03',
    title: 'Act',
    desc: 'Smart alerts route the right insight to the right team member — from CNO dashboards to unit charge nurses. Suggested next actions included. Outcomes improve, automatically.',
  },
]

export default function HowItWorks() {
  const headerRef = useScrollReveal()
  const stepsRef  = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="how-it-works">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow"><span className="eyebrow-dot"/>How It Works</span>
          <h2 className="section-title">
            From feedback to action
            <br />
            <em>in three steps.</em>
          </h2>
          <p className="section-sub">
            Most platforms stop at reports. Lymbus AI closes the full loop —
            from patient voice to clinical action — faster than any tool on the market.
          </p>
        </div>

        <div ref={stepsRef} className="hiw__steps reveal">
          {STEPS.map((s, i) => (
            <div
              className="hiw-step"
              key={i}
              style={{ transitionDelay: `${i * 0.14}s` }}
            >
              <div className="hiw-step__num">{s.num}</div>
              <div>
                <h3 className="hiw-step__title">{s.title}</h3>
                <p className="hiw-step__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
