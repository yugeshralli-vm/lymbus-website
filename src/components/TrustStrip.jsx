import { useScrollReveal } from '../hooks/useScrollReveal'

const LOGOS = [
  'Memorial Health System',
  'St. Mary\'s Medical',
  'Providence Healthcare',
  'Ascension Health',
  'Kaiser Health Network',
  'Prisma Health',
  'Dignity Health',
  'CHRISTUS Health',
  'Intermountain Health',
  'Advocate Aurora Health',
]

export default function TrustStrip() {
  const items      = [...LOGOS, ...LOGOS]
  const labelRef   = useScrollReveal({ threshold: 0.3 })
  const marqueeRef = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="trust-strip" aria-label="Trusted health systems">
      <p ref={labelRef} className="trust-strip__label reveal">
        Trusted by leading health systems across the country
      </p>
      <div
        ref={marqueeRef}
        className="reveal"
        style={{ overflow: 'hidden', position: 'relative', transitionDelay: '0.12s' }}
        aria-hidden="true"
      >
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 100,
          background: 'linear-gradient(90deg, var(--bg-page), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 100,
          background: 'linear-gradient(-90deg, var(--bg-page), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        <div className="trust-strip__track">
          {items.map((name, i) => (
            <span className="trust-logo" key={i}>
              {i % LOGOS.length !== 0 && <span className="trust-sep" />}
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
