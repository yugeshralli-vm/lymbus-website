import { useScrollReveal } from '../hooks/useScrollReveal'

const INTEGRATIONS = [
  { name: 'Epic',            type: 'EHR',           emoji: '🏥' },
  { name: 'Oracle Cerner',   type: 'EHR',           emoji: '💊' },
  { name: 'Meditech',        type: 'EHR',           emoji: '📋' },
  { name: 'Allscripts',      type: 'EHR',           emoji: '🩺' },
  { name: 'Salesforce',      type: 'CRM',           emoji: '☁️' },
  { name: 'Microsoft Teams', type: 'Communication', emoji: '💬' },
  { name: 'Slack',           type: 'Communication', emoji: '⚡' },
  { name: 'ServiceNow',      type: 'Workflow',      emoji: '⚙️' },
  { name: 'Qualtrics',       type: 'Survey',        emoji: '📊' },
  { name: 'NDNQI',           type: 'Quality',       emoji: '📈' },
  { name: 'Workday',         type: 'HR',            emoji: '👥' },
  { name: '40+ More',        type: 'Request yours', emoji: '+', more: true },
]

export default function Integrations() {
  const headerRef = useScrollReveal()
  const gridRef   = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="integrations" id="solutions">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow"><span className="eyebrow-dot"/>Integrations</span>
          <h2 className="section-title">
            Works with your<br />
            <em>existing clinical ecosystem.</em>
          </h2>
          <p className="section-sub">
            Native integrations with leading EHR, CRM, and workflow systems. No
            custom development, no IT backlog, no professional services retainer.
          </p>
        </div>

        <div ref={gridRef} className="integrations__grid reveal">
          {INTEGRATIONS.map((item, i) => (
            <div
              className={`integration-item${item.more ? ' integrations__more' : ''}`}
              key={i}
              style={{ transitionDelay: `${i * 0.04}s` }}
              aria-label={`${item.name} — ${item.type}`}
            >
              <div className="integration-item__icon" aria-hidden="true">
                {item.emoji}
              </div>
              <div className="integration-item__name">{item.name}</div>
              <div className="integration-item__type">{item.type}</div>
            </div>
          ))}
        </div>

        <p className="integrations__note">
          Don't see yours?{' '}
          <a href="#demo">Request an integration</a>
          {' '}— most are live within 30 days.
        </p>
      </div>
    </section>
  )
}
