import { useEffect, useRef, useState, useCallback } from 'react'
import {
  profile,
  contact,
  featured,
  studios,
  experience,
  projects,
  highlights,
  education,
  certifications
} from './data.js'

const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`
const titles = Object.fromEntries([...experience, ...projects].map((t) => [t.id, t]))

const Icon = {
  home: <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  search: <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.3 9.9 4.4 4.4-1.4 1.4-4.4-4.4z" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  film: <path d="M4 4h16v16H4zm2 2v2h2V6zm10 0v2h2V6zM6 10v4h12v-4zm0 6v2h2v-2zm10 0v2h2v-2z" />,
  tv: <path d="M3 6h18v12H3zm2 2v8h14V8zm4-5 3 3 3-3 1.4 1.4L12 8.8 7.6 4.4z" />,
  plus: <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7z" />,
  play: <path d="M7 4v16l13-8z" />,
  mail: <path d="M3 5h18v14H3zm2 2v.5l7 4.5 7-4.5V7zm14 2.9-7 4.5-7-4.5V17h14z" />,
  chevL: <path d="M15.4 5 8.4 12l7 7-1.4 1.4L5.6 12l8.4-8.4z" />,
  chevR: <path d="M8.6 5 10 3.6l8.4 8.4L10 20.4 8.6 19l7-7z" />,
  close: <path d="m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z" />,
  download: <path d="M11 3h2v9.2l3.3-3.3 1.4 1.4L12 16l-5.7-5.7 1.4-1.4 3.3 3.3zM4 18h16v2H4z" />
}

function Svg({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {Icon[name]}
    </svg>
  )
}

function Art({ art, glyph, className = '' }) {
  return (
    <div
      className={`art ${className}`}
      style={{ '--c1': art[0], '--c2': art[1], '--c3': art[2] || '#0b0d14' }}
      aria-hidden="true"
    >
      <span className="art-glyph">{glyph}</span>
    </div>
  )
}

function Header() {
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['home', 'Home', '#top'],
    ['search', 'Skills', '#studios'],
    ['tv', 'Career', '#career'],
    ['star', 'Originals', '#originals'],
    ['film', 'Education', '#collections'],
    ['mail', 'Contact', '#contact']
  ]

  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <a href="#top" className="logo" aria-label="Akhil+ home">
        akhil<span>+</span>
      </a>
      <nav className="nav-links">
        {links.map(([icon, label, href]) => (
          <a key={label} href={href}>
            <Svg name={icon} size={18} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <a className="avatar" href="#contact" aria-label="Contact">
        SG
      </a>
    </header>
  )
}

function Hero({ onOpen }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = featured.length
  const go = useCallback((d) => setI((v) => (v + d + n) % n), [n])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(1), 7000)
    return () => clearInterval(t)
  }, [paused, go])

  return (
    <section
      className="hero"
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {featured.map((f, k) => (
        <div key={f.title} className={`slide ${k === i ? 'active' : ''}`} aria-hidden={k !== i}>
          <div
            className="slide-bg"
            style={{ '--c1': f.art[0], '--c2': f.art[1], '--c3': f.art[2] }}
          >
            <span className="slide-glyph">{f.glyph}</span>
            <div className="slide-grid" />
          </div>
          <div className="slide-body">
            <div className="kicker">{f.kicker}</div>
            <h1 className="slide-title">{f.title}</h1>
            <div className="meta">
              {f.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <p className="blurb">{f.blurb}</p>
            <div className="actions">
              <button className="btn btn-play" onClick={() => onOpen(f.open)} tabIndex={k === i ? 0 : -1}>
                <Svg name="play" /> Details
              </button>
              <a className="btn btn-ghost" href={RESUME_URL} download tabIndex={k === i ? 0 : -1}>
                <Svg name="download" /> Resume
              </a>
              <a className="btn-round" href="#contact" aria-label="Contact" title="Contact" tabIndex={k === i ? 0 : -1}>
                <Svg name="plus" />
              </a>
            </div>
          </div>
        </div>
      ))}
      <button className="hero-arrow left" onClick={() => go(-1)} aria-label="Previous">
        <Svg name="chevL" size={32} />
      </button>
      <button className="hero-arrow right" onClick={() => go(1)} aria-label="Next">
        <Svg name="chevR" size={32} />
      </button>
      <div className="dots">
        {featured.map((f, k) => (
          <button
            key={f.title}
            className={k === i ? 'on' : ''}
            onClick={() => setI(k)}
            aria-label={`Show ${f.title}`}
          />
        ))}
      </div>
    </section>
  )
}

function Studios({ onOpen }) {
  return (
    <section className="studios" id="studios" aria-label="Skill domains">
      {studios.map((s) => (
        <button
          key={s.id}
          className="studio"
          style={{ '--c1': s.art[0], '--c2': s.art[1] }}
          onClick={() => onOpen(s)}
        >
          <span className="studio-name">{s.name}</span>
          <span className="studio-sub">{s.sub}</span>
        </button>
      ))}
    </section>
  )
}

function Row({ id, title, children }) {
  const ref = useRef(null)
  const scroll = (d) => {
    const el = ref.current
    el.scrollBy({ left: d * el.clientWidth * 0.85, behavior: 'smooth' })
  }
  return (
    <section className="row" id={id}>
      <h2 className="row-title">{title}</h2>
      <div className="row-wrap">
        <button className="row-arrow left" onClick={() => scroll(-1)} aria-label={`Scroll ${title} left`}>
          <Svg name="chevL" size={28} />
        </button>
        <div className="row-track" ref={ref}>
          {children}
        </div>
        <button className="row-arrow right" onClick={() => scroll(1)} aria-label={`Scroll ${title} right`}>
          <Svg name="chevR" size={28} />
        </button>
      </div>
    </section>
  )
}

function CareerCard({ t, onOpen }) {
  return (
    <button className="card wide" onClick={() => onOpen(t.id)}>
      <Art art={t.art} glyph={t.glyph} />
      <div className="card-shade" />
      <div className="card-info">
        <div className="card-title">{t.org}</div>
        <div className="card-sub">
          {t.role} · {t.dates}
        </div>
      </div>
      <div className="progress">
        <span style={{ width: `${t.progress * 100}%` }} />
      </div>
    </button>
  )
}

function OriginalCard({ t, onOpen }) {
  return (
    <button className="card original" onClick={() => onOpen(t.id)}>
      <Art art={t.art} glyph={t.glyph} />
      <div className="card-shade" />
      <span className="badge">{t.badge}</span>
      <div className="card-info">
        <div className="card-title big">{t.title}</div>
        <div className="card-sub">{t.sub}</div>
      </div>
    </button>
  )
}

function StatCard({ h }) {
  return (
    <div className="card stat" style={{ '--c1': h.art[0], '--c2': h.art[1] }}>
      <div className="stat-value">{h.value}</div>
      <div className="stat-label">{h.label}</div>
      <div className="stat-note">{h.note}</div>
    </div>
  )
}

function CollectionCard({ art, glyph, title, sub, extra }) {
  return (
    <div className="card wide static">
      <Art art={art} glyph={glyph} />
      <div className="card-shade" />
      <div className="card-info">
        <div className="card-title">{title}</div>
        <div className="card-sub">{sub}</div>
        {extra && <div className="card-sub dim">{extra}</div>}
      </div>
    </div>
  )
}

function useModal(open, onClose) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])
}

function DetailModal({ t, onClose }) {
  const [tab, setTab] = useState('episodes')
  useModal(!!t, onClose)
  useEffect(() => setTab('episodes'), [t])
  if (!t) return null

  const name = t.org && t.role ? t.org : t.title
  const tagline = t.role ? `${t.role} — ${t.focus}` : `${t.sub} — ${t.org}`

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={name} onClick={onClose}>
      <div className="detail" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">
          <Svg name="close" size={24} />
        </button>
        <div className="detail-hero">
          <Art art={t.art} glyph={t.glyph} className="detail-art" />
          <div className="detail-fade" />
          <div className="detail-head">
            <h2 className="detail-title">{name}</h2>
            <div className="meta">
              {t.dates && <span>{t.dates}</span>}
              {t.location && <span>{t.location}</span>}
              <span>{t.points.length} Episodes</span>
            </div>
            <p className="detail-tag">{tagline}</p>
            <div className="actions">
              <a className="btn btn-play" href={RESUME_URL} download>
                <Svg name="play" /> Resume
              </a>
              <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="tabs" role="tablist">
          {['episodes', 'details'].map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>
              {k}
            </button>
          ))}
        </div>

        {tab === 'episodes' ? (
          <ol className="episodes">
            {t.points.map((p, k) => (
              <li key={k} className="episode">
                <div className="ep-thumb" style={{ '--c1': t.art[0], '--c2': t.art[1] }}>
                  <Svg name="play" size={22} />
                </div>
                <div>
                  <div className="ep-title">Episode {k + 1}</div>
                  <p className="ep-text" dangerouslySetInnerHTML={{ __html: p }} />
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="details">
            <div className="detail-stats">
              {t.stats.map(([v, l]) => (
                <div key={l}>
                  <div className="ds-v">{v}</div>
                  <div className="ds-l">{l}</div>
                </div>
              ))}
            </div>
            <h3>Starring</h3>
            <div className="tags">
              {t.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StudioModal({ s, onClose }) {
  useModal(!!s, onClose)
  if (!s) return null
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={s.name} onClick={onClose}>
      <div className="detail studio-detail" onClick={(e) => e.stopPropagation()} style={{ '--c1': s.art[0], '--c2': s.art[1] }}>
        <button className="close" onClick={onClose} aria-label="Close">
          <Svg name="close" size={24} />
        </button>
        <div className="studio-banner">
          <h2>{s.name}</h2>
          <p>{s.sub}</p>
        </div>
        <div className="details">
          <h3>Now playing in this collection</h3>
          <div className="tags big">
            {s.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-card">
        <div className="kicker">ABOUT THE TITLE</div>
        <h2>{profile.name}</h2>
        <div className="meta">
          <span>{profile.headline}</span>
        </div>
        <p>{profile.summary}</p>
        <dl className="facts">
          <div>
            <dt>Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Work authorization</dt>
            <dd>{profile.authorization}</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>M.S. Computer Science (2026)</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function Contact() {
  const profiles = [
    { label: 'Email', href: `mailto:${contact.email}`, glyph: '@', art: ['#0063e5', '#00b4ff'] },
    { label: 'LinkedIn', href: contact.linkedin, glyph: 'in', art: ['#0a66c2', '#5fa8ff'], ext: true },
    { label: 'GitHub', href: contact.github, glyph: '</>', art: ['#3a3f52', '#9aa3c0'], ext: true },
    { label: 'Call', href: contact.phoneHref, glyph: '☏', art: ['#18a058', '#7be0a8'] },
    { label: 'Resume', href: RESUME_URL, glyph: 'CV', art: ['#8e44ff', '#d0a2ff'], download: true }
  ]
  return (
    <section className="contact" id="contact">
      <h2>Who's watching?</h2>
      <p className="contact-sub">Pick a profile to get in touch.</p>
      <div className="profiles">
        {profiles.map((p) => (
          <a
            key={p.label}
            className="profile"
            href={p.href}
            {...(p.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
            {...(p.download ? { download: true } : {})}
          >
            <span className="profile-pic" style={{ '--c1': p.art[0], '--c2': p.art[1] }}>
              {p.glyph}
            </span>
            <span className="profile-name">{p.label}</span>
          </a>
        ))}
      </div>
      <p className="contact-line">
        {contact.email} · {contact.phone}
      </p>
    </section>
  )
}

export default function App() {
  const [openId, setOpenId] = useState(null)
  const [studio, setStudio] = useState(null)
  const closeDetail = useCallback(() => setOpenId(null), [])
  const closeStudio = useCallback(() => setStudio(null), [])

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <Header />
      <main>
        <Hero onOpen={setOpenId} />
        <Studios onOpen={setStudio} />

        <Row id="career" title="Continue Watching: Career">
          {experience.map((t) => (
            <CareerCard key={t.id} t={t} onOpen={setOpenId} />
          ))}
        </Row>

        <Row id="originals" title="Akhil+ Originals: Projects">
          {projects.map((t) => (
            <OriginalCard key={t.id} t={t} onOpen={setOpenId} />
          ))}
        </Row>

        <Row id="hits" title="Box Office Hits: Impact">
          {highlights.map((h) => (
            <StatCard key={h.label} h={h} />
          ))}
        </Row>

        <Row id="collections" title="Collections: Education & Certifications">
          {education.map((e) => (
            <CollectionCard
              key={e.deg}
              art={e.art}
              glyph={e.glyph}
              title={e.deg}
              sub={`${e.inst} · ${e.dates}`}
              extra={`${e.loc} · GPA ${e.gpa}`}
            />
          ))}
          {certifications.map((c) => (
            <CollectionCard key={c.name} art={c.art} glyph={c.glyph} title={c.name} sub={c.issuer} extra="Certification" />
          ))}
        </Row>

        <About />
        <Contact />
      </main>

      <footer className="footer">
        <div className="logo small">
          akhil<span>+</span>
        </div>
        <div className="footer-links">
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={RESUME_URL} download>Resume</a>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}. A fan-made, Disney+-inspired portfolio.</p>
      </footer>

      <DetailModal t={openId ? titles[openId] : null} onClose={closeDetail} />
      <StudioModal s={studio} onClose={closeStudio} />
    </>
  )
}
