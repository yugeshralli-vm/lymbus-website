import { useScrollReveal } from '../hooks/useScrollReveal'

const STATS = [
  { num: '500', sym: '+', label: 'Health Systems & Hospitals' },
  { num: '94',  sym: '%', label: 'Average Survey Completion Rate' },
  { num: '3',   sym: '×', label: 'Faster Insight-to-Action vs Legacy Tools' },
  { num: '60',  sym: '%', label: 'Reduction in Manual Analysis Time' },
]

export default function Stats() {
  const ref = useScrollReveal()

  return (
    <section className="stats" id="why">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="stats__grid">
            {STATS.map((s, i) => (
              <div className="stat-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="stat-card__value">
                  {s.num}<span>{s.sym}</span>
                </div>
                <p className="stat-card__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
