const SPARK_PTS = 'M0,36 L24,32 L48,28 L72,24 L96,20 L120,16 L144,12 L168,9 L192,6 L216,4 L240,2'
const SPARK_FILL = `${SPARK_PTS} L240,42 L0,42 Z`

function AppMockup() {
  return (
    <div className="hero__visual">
      <div className="app-mockup">
        {/* Browser Chrome */}
        <div className="browser-chrome">
          <div className="browser-dots">
            <span className="browser-dot browser-dot--red" />
            <span className="browser-dot browser-dot--yellow" />
            <span className="browser-dot browser-dot--green" />
          </div>
          <div className="browser-bar">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <rect x="1.5" y="4" width="7" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M3.5 4V3a1.5 1.5 0 113 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            app.lymbus.ai/dashboard
          </div>
        </div>

        {/* Product UI */}
        <div className="product-ui">
          <div className="ui-header">
            <span className="ui-title">Patient Intelligence</span>
            <span className="ui-live">
              <span className="live-dot" />
              Live
            </span>
          </div>

          {/* Score */}
          <div className="ui-score-row">
            <div className="ui-ring">
              <svg viewBox="0 0 64 64">
                <circle className="ui-ring__track" cx="32" cy="32" r="27" />
                <circle
                  className="ui-ring__fill"
                  cx="32" cy="32" r="27"
                  strokeDasharray="169.6"
                  strokeDashoffset="10.2"
                />
              </svg>
              <div className="ui-ring__val">94</div>
            </div>
            <div className="ui-score-info">
              <div className="ui-score-label">HCAHPS Score</div>
              <div className="ui-score-val">94.2</div>
              <div className="ui-score-delta">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 2L9 7H1L5 2Z" fill="currentColor"/>
                </svg>
                +2.8 pts this month
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="ui-metrics">
            {[
              { v: '2,847', l: 'Responses' },
              { v: '94%',   l: 'Positive' },
              { v: '3',     l: 'Actions', amber: true },
            ].map(m => (
              <div className="ui-metric" key={m.l}>
                <span className="ui-metric__val" style={m.amber ? { color: 'var(--amber)' } : {}}>{m.v}</span>
                <span className="ui-metric__lbl">{m.l}</span>
              </div>
            ))}
          </div>

          {/* Sparkline */}
          <div className="ui-spark">
            <div className="ui-spark-header">
              <span className="ui-spark-lbl">30-Day Trend</span>
              <span className="ui-spark-val">↑ 6.4%</span>
            </div>
            <svg viewBox="0 0 240 42" className="ui-spark-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#374DEA" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#374DEA" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d={SPARK_FILL} fill="url(#spk)" />
              <path d={SPARK_PTS} fill="none" stroke="#374DEA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="240" cy="2" r="3" fill="#374DEA" />
            </svg>
          </div>

          {/* AI Insight */}
          <div className="ui-insight">
            <div className="ui-insight-badge">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L6.2 3.8H9L6.8 5.6L7.8 8.5L5 6.8L2.2 8.5L3.2 5.6L1 3.8H3.8L5 1Z" fill="#374DEA"/>
              </svg>
              AI Insight
            </div>
            <p className="ui-insight-text">
              ED wait time perception improved 18% after Monday's triage update.
            </p>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="hero__float-card">
        <div className="float-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5L9.8 6H14.5L10.5 8.8L12 13.5L8 10.8L4 13.5L5.5 8.8L1.5 6H6.2L8 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="float-title">47 responses</div>
          <div className="float-sub">Last hour · Cardiology</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg-dots" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--1" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Content */}
        <div className="hero__content">
          <div className="eyebrow hero__eyebrow">
            <span className="eyebrow-dot" />
            AI-Powered Patient Feedback
          </div>

          <h1 className="hero__headline">
            Transform patient feedback<br />
            into care<br />
            <em>that improves outcomes.</em>
          </h1>

          <p className="hero__sub">
            Lymbus AI captures, analyzes, and routes every patient experience
            signal in real time — so your clinical teams spend less time on
            reports and more time improving care.
          </p>

          <div className="hero__actions">
            <a href="#demo" className="btn btn-primary btn-lg">
              Book a Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#showcase" className="btn btn-ghost btn-lg">
              See the Platform
            </a>
          </div>

          <div className="hero__trust">
            {['HIPAA Compliant', 'SOC 2 Type II', 'Live in 14 Days', 'No-Code Setup'].map(item => (
              <span className="hero__trust-item" key={item}>
                <svg className="trust-check" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#10B981" strokeOpacity="0.35"/>
                  <path d="M4.5 7l2 2 3-3" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        <AppMockup />
      </div>
    </section>
  )
}
