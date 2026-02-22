import { useScrollReveal, useScrollTriggered, useCountUp } from '../hooks/useScrollReveal'

const STATS = [
  { num: '500', sym: '+', label: 'Health Systems & Hospitals' },
  { num: '94',  sym: '%', label: 'Average Survey Completion Rate' },
  { num: '3',   sym: '×', label: 'Faster Insight-to-Action vs Legacy Tools' },
  { num: '60',  sym: '%', label: 'Reduction in Manual Analysis Time' },
]

/* Extracted so each card can legally call hooks at the top level */
function StatCard({ s, i, triggered }) {
  const cardRef = useScrollReveal({ threshold: 0.2 })
  const numRef  = useCountUp(s.num, 1600, triggered)

  return (
    <div
      ref={cardRef}
      className="stat-card reveal-scale"
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      <div className="stat-card__value">
        <span ref={numRef}>{s.num}</span>
        <span>{s.sym}</span>
      </div>
      <p className="stat-card__label">{s.label}</p>
    </div>
  )
}

export default function Stats() {
  /* gridRef triggers the count-up once the section is 30% visible */
  const [gridRef, triggered] = useScrollTriggered({ threshold: 0.3 })

  return (
    <section className="stats" id="why">
      <div className="container">
        <div ref={gridRef} className="stats__grid">
          {STATS.map((s, i) => (
            <StatCard key={i} s={s} i={i} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  )
}
