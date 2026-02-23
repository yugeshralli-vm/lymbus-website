import { useState, useEffect, useRef } from 'react'
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
  { label: 'Oct', h: 90, active: true },
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
        <path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Real-Time Processing',
    desc: 'Every response analyzed within 3 seconds of submission — no batch delays.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.4 7.5H18L13.5 11L15.4 17L10 13.5L4.6 17L6.5 11L2 7.5H7.6L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI-Powered Insights',
    desc: 'LLM analysis surfaces hidden themes, root causes, and improvement opportunities.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 11v6M11 14h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const start = rect.top
      const end = rect.height - window.innerHeight

      let p = -start / end
      p = Math.max(0, Math.min(1, p))
      setProgress(p)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerY = -(progress * 30)
  const browserScale = 1 - (progress * 0.05)
  const browserY = -(progress * 60)
  const bgY = -(progress * 150)

  return (
    <section className="showcase" id="showcase" ref={sectionRef}>
      <div className="showcase__sticky">
        <div className="showcase__bg-accent" aria-hidden="true" style={{ transform: `translateY(${bgY}px)` }} />

        <div className="container">
          <div ref={headerRef} className="section-header reveal">
            <div style={{ transform: `translateY(${headerY}px)` }}>
              <span className="eyebrow"><span className="eyebrow-dot" />Product Tour</span>
              <h2 className="section-title">
                Your complete<br />
                <em>patient intelligence hub.</em>
              </h2>
              <p className="section-sub">
                Everything your team needs to understand, act on, and continuously
                improve the patient experience — in one unified platform.
              </p>
            </div>
          </div>

          {/* Browser Mockup */}
          <div ref={browserRef} className="reveal" style={{ transitionDelay: '0.1s', position: 'relative', zIndex: 10 }}>
            <div style={{
              transform: `translateY(${browserY}px) scale(${browserScale})`,
              transformOrigin: 'top center',
              willChange: 'transform'
            }}>
              <div className="showcase__browser">
                <div className="new-dash">
                  {/* Sidebar */}
                  <div className="new-dash-sidebar">
                    <div className="new-dash-sidebar-logo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Lymbus AI
                    </div>

                    <div className="new-dash-nav">
                      <div className="new-dash-nav-item new-dash-nav-item--active">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        Dashboard
                      </div>
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        Root Cause
                      </div>
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>
                        Benchmarking
                      </div>
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg>
                        Engagement
                      </div>
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01"></path></svg>
                        Escalation
                      </div>
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Reports
                      </div>
                    </div>

                    <div className="new-dash-sidebar-bottom">
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Settings
                      </div>
                      <div className="new-dash-nav-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m0 5h.01"></path></svg>
                        Help & Support
                      </div>
                      <div className="new-dash-user">
                        <div className="new-dash-avatar" />
                        <div className="new-dash-user-info">
                          <span className="new-dash-user-name">Robert Fox</span>
                          <span className="new-dash-user-role">System Admin</span>
                        </div>
                      </div>
                      <div className="new-dash-nav-item" style={{ color: 'var(--text-muted)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        Sign Out
                      </div>
                    </div>
                  </div>

                  {/* Main */}
                  <div className="new-dash-main">
                    {/* Header */}
                    <div className="new-dash-header">
                      <div className="new-dash-title">Dashboard</div>
                      <div className="new-dash-header-actions">
                        <div className="new-dash-search">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                          Search...
                        </div>
                        <button className="new-dash-icon-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"></path></svg>
                        </button>
                        <div className="new-dash-dropdown">
                          Main Hospital
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Area */}
                    <div className="new-dash-scroll">

                      {/* Hero Section */}
                      <div className="new-dash-hero">
                        <div className="new-dash-score-card">
                          <div className="new-dash-score-title">Aggregate Score</div>
                          <div className="new-dash-score-val">
                            88.5 <span className="new-dash-score-delta">↗ 4.2%</span>
                          </div>
                          <div className="new-dash-score-label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            Lymbus Insight
                          </div>
                        </div>

                        <div className="new-dash-insights">
                          <div className="new-dash-insights-title">What does this mean?</div>
                          <div className="new-dash-insight-row">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Reduced wait times in Cardiology by <strong>14 minutes</strong> on average.</span>
                          </div>
                          <div className="new-dash-insight-row">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Patient satisfaction increased by <strong>12%</strong> in the Emergency Department.</span>
                          </div>
                        </div>
                      </div>

                      {/* KPI Grid */}
                      <div className="new-dash-kpis">
                        <div className="new-dash-kpi">
                          <div className="new-dash-kpi-header">
                            <svg className="new-dash-kpi-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            Net Promoter Score
                          </div>
                          <div className="new-dash-kpi-val">58</div>
                          <div className="new-dash-kpi-delta"><span>↗ 5.2%</span> vs last month</div>
                        </div>

                        <div className="new-dash-kpi">
                          <div className="new-dash-kpi-header">
                            <svg className="new-dash-kpi-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            PREM Score
                          </div>
                          <div className="new-dash-kpi-val">92</div>
                          <div className="new-dash-kpi-delta"><span>↗ 3.8%</span> vs last month</div>
                        </div>

                        <div className="new-dash-kpi">
                          <div className="new-dash-kpi-header">
                            <svg className="new-dash-kpi-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                            PROM Score
                          </div>
                          <div className="new-dash-kpi-val">7.5%</div>
                          <div className="new-dash-kpi-delta"><span className="red">↘ 1.3%</span> vs last month</div>
                        </div>

                        <div className="new-dash-kpi">
                          <div className="new-dash-kpi-header">
                            <svg className="new-dash-kpi-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path></svg>
                            Response Rate
                          </div>
                          <div className="new-dash-kpi-val">42%</div>
                          <div className="new-dash-kpi-delta"><span>↗ 2.3%</span> vs last month</div>
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="new-dash-chart">
                        <div className="new-dash-chart-header">
                          <div className="new-dash-chart-title">Experience Trends</div>
                          <div className="new-dash-chart-legend">
                            <div className="new-dash-legend-item"><div className="new-dash-legend-dot" style={{ background: '#4f46e5' }}></div> NPS</div>
                            <div className="new-dash-legend-item"><div className="new-dash-legend-dot" style={{ background: '#22c55e' }}></div> PREM</div>
                            <div className="new-dash-legend-item"><div className="new-dash-legend-dot" style={{ background: '#93c5fd' }}></div> PROM</div>
                          </div>
                        </div>
                        <div className="new-dash-chart-area">
                          <div className="new-dash-grid">
                            <div className="new-dash-grid-line"><span>100</span></div>
                            <div className="new-dash-grid-line"><span>75</span></div>
                            <div className="new-dash-grid-line"><span>50</span></div>
                            <div className="new-dash-grid-line" style={{ borderBottom: 'none' }}><span>25</span></div>
                          </div>
                          <svg className="new-dash-svg" viewBox="0 0 1000 160" preserveAspectRatio="none">
                            {/* NPS Line - Blue */}
                            <path className="new-dash-path animate-draw-line" stroke="#4f46e5" d="M 0 120 C 200 60, 300 140, 500 140 C 700 140, 800 50, 1000 100" />
                            {/* PREM Line - Green */}
                            <path className="new-dash-path animate-draw-line" stroke="#22c55e" d="M 0 60 C 250 140, 400 40, 600 120 C 800 20, 900 140, 1000 140" />
                            {/* PROM Line - Light Blue */}
                            <path className="new-dash-path animate-draw-line" stroke="#93c5fd" d="M 0 140 C 150 70, 350 70, 500 140 C 650 200, 850 60, 1000 80" />
                          </svg>
                        </div>
                      </div>

                    </div>

                    {/* FAB */}
                    <button className="new-dash-fab">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Ask Lymbus AI
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout cards */}
          <div className="showcase__callouts" style={{ position: 'relative', zIndex: 20, marginTop: '-80px' }}>
            {CALLOUTS.map((c, i) => {
              const startP = 0.1 + (i * 0.15)
              const endP = startP + 0.25
              const cProgress = Math.max(0, Math.min(1, (progress - startP) / (endP - startP)))

              return (
                <div
                  className="callout-item"
                  key={i}
                  style={{
                    opacity: cProgress,
                    transform: `translateY(${(1 - cProgress) * 120}px)`,
                  }}
                >
                  <div className="callout-icon">{c.icon}</div>
                  <div className="callout-title">{c.title}</div>
                  <div className="callout-desc">{c.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
