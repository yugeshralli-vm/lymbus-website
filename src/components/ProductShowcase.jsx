import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TABS = ['Overview', 'HCAHPS Analytics', 'AI Insights', 'Workflows']

const BAR_DATA = [
  { label: 'Jan', h: 55, active: false },
  { label: 'Feb', h: 62, active: false },
  { label: 'Mar', h: 58, active: false },
  { label: 'Apr', h: 70, active: false },
  { label: 'May', h: 65, active: false },
  { label: 'Jun', h: 78, active: false },
  { label: 'Jul', h: 72, active: false },
  { label: 'Aug', h: 85, active: false },
  { label: 'Sep', h: 80, active: false },
  { label: 'Oct', h: 90, active: true  },
]

const FEEDBACK_ROWS = [
  { sent: 'pos', text: 'The nursing staff was incredibly attentive and explained every step clearly.', dept: 'Med/Surg', time: '2m ago' },
  { sent: 'neu', text: 'Wait time in the ED was longer than expected but staff were professional.', dept: 'Emergency', time: '8m ago' },
  { sent: 'pos', text: 'Dr. Chen took time to answer all my questions. Best experience I\'ve had.', dept: 'Cardiology', time: '14m ago' },
]

const CALLOUTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Real-Time Processing',
    desc: 'Every response analyzed within 3 seconds of submission — no batch delays.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.4 7.5H18L13.5 11L15.4 17L10 13.5L4.6 17L6.5 11L2 7.5H7.6L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI-Powered Insights',
    desc: 'LLM analysis surfaces hidden themes, root causes, and improvement opportunities.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 11v6M11 14h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Automated Workflows',
    desc: 'Route alerts, notify teams, and trigger service recovery — without manual steps.',
  },
]

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const headerRef = useScrollReveal()
  const browserRef = useScrollReveal({ threshold: 0.06 })

  return (
    <section className="showcase" id="showcase">
      <div className="showcase__bg-accent" aria-hidden="true" />

      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="eyebrow"><span className="eyebrow-dot"/>Product Tour</span>
          <h2 className="section-title">
            Your complete<br />
            <em>patient intelligence hub.</em>
          </h2>
          <p className="section-sub">
            Everything your team needs to understand, act on, and continuously
            improve the patient experience — in one unified platform.
          </p>
        </div>

        {/* Browser Mockup */}
        <div ref={browserRef} className="reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="showcase__browser">
            {/* Chrome */}
            <div className="showcase__chrome">
              <div className="showcase__chrome-dots">
                <span className="browser-dot browser-dot--red" />
                <span className="browser-dot browser-dot--yellow" />
                <span className="browser-dot browser-dot--green" />
              </div>
              <div className="showcase__bar">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1.5" y="4" width="7" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M3.5 4V3a1.5 1.5 0 113 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                app.lymbus.ai/analytics
              </div>
            </div>

            {/* Tabs */}
            <div className="showcase__tabs" role="tablist" aria-label="Dashboard views">
              {TABS.map((t, i) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={i === activeTab}
                  className={`showcase__tab${i === activeTab ? ' showcase__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Dashboard Content */}
            <div className="showcase__content" role="tabpanel">
              <div className="dash-layout">
                {/* KPI 1 */}
                <div className="dash-kpi dash-kpi--primary">
                  <div className="dash-kpi__label">Overall Score</div>
                  <div className="dash-kpi__value">94.2</div>
                  <div className="dash-kpi__delta">↑ +2.8 pts this month</div>
                </div>

                {/* KPI 2 */}
                <div className="dash-kpi">
                  <div className="dash-kpi__label">Responses Today</div>
                  <div className="dash-kpi__value">2,847</div>
                  <div className="dash-kpi__delta" style={{color:'var(--green)'}}>↑ 12% vs yesterday</div>
                </div>

                {/* KPI 3 */}
                <div className="dash-kpi">
                  <div className="dash-kpi__label">Positive Sentiment</div>
                  <div className="dash-kpi__value">94%</div>
                  <div className="dash-kpi__delta" style={{color:'var(--green)'}}>↑ 3% this week</div>
                </div>

                {/* Chart */}
                <div className="dash-chart">
                  <div className="dash-chart-card">
                    <div className="dash-chart-title">Monthly Score Trend</div>
                    <div className="dash-bars">
                      {BAR_DATA.map((b, i) => (
                        <div className="dash-bar-wrap" key={i}>
                          <div
                            className={`dash-bar${b.active ? ' dash-bar--active' : ''}`}
                            style={{
                              height: b.h,
                              animationDelay: `${i * 0.06}s`,
                            }}
                          />
                          <span className="dash-bar-lbl">{b.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback Table */}
                <div className="dash-feedback">
                  <div className="dash-feedback-header">
                    <span className="dash-feedback-title">Recent Feedback</span>
                    <span className="dash-feedback-badge">Live</span>
                  </div>
                  {FEEDBACK_ROWS.map((r, i) => (
                    <div className="dash-row" key={i}>
                      <div className={`dash-sentiment dash-sentiment--${r.sent}`} aria-hidden="true"/>
                      <div className="dash-row-text">{r.text}</div>
                      <span className="dash-row-dept">{r.dept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout cards */}
        <div className="showcase__callouts">
          {CALLOUTS.map((c, i) => (
            <div
              className="callout-item reveal"
              key={i}
              ref={useScrollReveal()}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="callout-icon">{c.icon}</div>
              <div className="callout-title">{c.title}</div>
              <div className="callout-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
