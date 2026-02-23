import { useScrollReveal } from '../hooks/useScrollReveal'

const INTEGRATIONS = [
  { name: 'Epic', type: 'EHR', emoji: '🏥' },
  { name: 'Oracle Cerner', type: 'EHR', emoji: '💊' },
  { name: 'Meditech', type: 'EHR', emoji: '📋' },
  { name: 'Allscripts', type: 'EHR', emoji: '🩺' },
  { name: 'Salesforce', type: 'CRM', emoji: '☁️' },
  { name: 'Microsoft Teams', type: 'Communication', emoji: '💬' },
  { name: 'Slack', type: 'Communication', emoji: '⚡' },
  { name: 'ServiceNow', type: 'Workflow', emoji: '⚙️' },
  { name: 'Qualtrics', type: 'Survey', emoji: '📊' },
  { name: 'NDNQI', type: 'Quality', emoji: '📈' },
  { name: 'Workday', type: 'HR', emoji: '👥' },
  { name: '40+ More', type: 'Request yours', emoji: '+', more: true },
]

/* Each item is its own component so useScrollReveal is called at the top level */
function IntegrationItem({ item, i }) {
  const itemRef = useScrollReveal({ threshold: 0.05 })

  return (
    <div
      ref={itemRef}
      className={`integration-item reveal-scale${item.more ? ' integrations__more' : ''}`}
      style={{ transitionDelay: `${i * 0.04}s` }}
      aria-label={`${item.name} — ${item.type}`}
    >
      <div className="integration-item__icon" aria-hidden="true">
        {item.emoji}
      </div>
      <div className="integration-item__name">{item.name}</div>
      <div className="integration-item__type">{item.type}</div>
    </div>
  )
}

export default function Integrations() {
  const headerRef = useScrollReveal()

  return (
    <section className="integrations" id="solutions">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow"><span className="eyebrow-dot" />Integrations</span>
          <h2 className="section-title">
            <span className="reveal-text-mask"><span className="reveal-text-mask-inner">Works with your</span></span><br />
            <span className="reveal-text-mask" style={{ animationDelay: '0.1s' }}><em className="reveal-text-mask-inner delay-1">existing clinical ecosystem.</em></span>
          </h2>
          <p className="section-sub">
            Native integrations with leading EHR, CRM, and workflow systems. No
            custom development, no IT backlog, no professional services retainer.
          </p>
        </div>

        <div className="integrations__grid">
          {INTEGRATIONS.map((item, i) => (
            <IntegrationItem key={i} item={item} i={i} />
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
