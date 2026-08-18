import { channels, experience, modules, education, contact } from './data.js'

function FusionScope() {
  return (
    <div className="scope">
      <div className="scope-head">
        <span>FUSION_SCOPE.LIVE</span>
        <span className="status">● SIGNAL LOCKED</span>
      </div>
      <svg
        viewBox="0 0 1000 220"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Diagram showing a perception stream and a retrieval stream converging into one fused output line"
      >
        <text x="20" y="34" className="stream-label">STREAM_A — PERCEPTION (LIDAR + CAMERA)</text>
        <path
          className="stream-a path-anim"
          fill="none"
          strokeWidth="2"
          d="M20,54 L120,54 L145,30 L170,78 L195,54 L260,54 L285,40 L310,68 L335,54 L500,54"
        />

        <text x="20" y="118" className="stream-label">STREAM_B — RETRIEVAL (DOCS + EMBEDDINGS)</text>
        <path
          className="stream-b path-anim"
          fill="none"
          strokeWidth="2"
          d="M20,138 L140,138 L160,120 L180,150 L200,132 L220,138 L340,138 L360,124 L380,146 L400,138 L500,138"
        />

        <path
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="2 4"
          d="M500,54 C 560,54 560,138 500,138"
        />

        <text x="620" y="184" className="stream-label">FUSED_OUTPUT</text>
        <path
          className="stream-fused fused-pulse"
          fill="none"
          strokeWidth="2.5"
          d="M540,96 L600,96 L622,80 L644,112 L666,96 L980,96"
        />
        <circle cx="540" cy="96" r="4" fill="var(--text)" className="fused-pulse" />
      </svg>
      <div className="scope-legend">
        <span><span className="swatch" style={{ background: 'var(--amber)' }} /> Perception stream</span>
        <span><span className="swatch" style={{ background: 'var(--teal)' }} /> Retrieval stream</span>
        <span><span className="swatch" style={{ background: 'var(--text)' }} /> Fused decision output</span>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-id">
          <span className="dot" aria-hidden="true" /> SRII.GADDAM // AI_ENGINEER
        </div>
        <div className="nav-links">
          <a href="#streams">Skills</a>
          <a href="#log">Experience</a>
          <a href="#modules">Projects</a>
          <a href="#education">Education</a>
        </div>
        <a className="nav-cta" href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none', paddingTop: '96px' }}>
      <div className="eyebrow">Perception + Retrieval Systems</div>
      <h1>
        I build systems that turn <span className="accent">raw signal</span> into grounded decisions.
      </h1>
      <p className="hero-sub">
        AI Engineer working across <strong>Generative AI, Agentic AI, and Retrieval-Augmented Generation</strong> —
        with a parallel background fusing <strong>LiDAR and camera streams</strong> for autonomous perception.
        Same discipline either way: take noisy, multi-source input and ship something that can be trusted to act on it.
      </p>
      <div className="hero-meta">
        <span className="meta-pill"><span className="k">LOC</span> United States</span>
        <span className="meta-pill"><span className="k">TEL</span> {contact.phone}</span>
        <span className="meta-pill"><span className="k">EDU</span> M.S. Computer Science — LTU</span>
        <span className="meta-pill"><span className="k">STATUS</span> Open to AI/ML Engineer roles</span>
      </div>
      <FusionScope />
    </section>
  )
}

function Streams() {
  return (
    <section id="streams">
      <div className="section-head">
        <span className="section-tag">01</span>
        <h2>Signal channels</h2>
      </div>
      <p className="section-desc">The stack, grouped the way it actually gets used — not an alphabetical wall of logos.</p>
      <div className="channels">
        {channels.map((ch) => (
          <div className="channel" key={ch.id}>
            <div className="channel-head">
              <span className="channel-freq">{ch.id}</span>
              <span className="channel-name">{ch.name}</span>
            </div>
            <div className="tag-list">
              {ch.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExperienceLog() {
  return (
    <section id="log">
      <div className="section-head">
        <span className="section-tag">02</span>
        <h2>Experience log</h2>
      </div>
      <p className="section-desc">Read top to bottom, like a timestamped run log.</p>
      <div className="log">
        {experience.map((entry) => (
          <div className="log-entry" key={entry.role}>
            <div className="log-ts">{entry.ts}</div>
            <div className="log-role">{entry.role}</div>
            <div className="log-org">
              {entry.org} <span className="sep">/</span> {entry.location}
            </div>
            <ul className="log-points">
              {entry.points.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Achievement() {
  return (
    <section id="achievement">
      <div className="section-head">
        <span className="section-tag">03</span>
        <h2>Achievement</h2>
      </div>
      <div className="achievement">
        <span className="achievement-badge">IGVC 2026 · WINNER</span>
        <div>
          <h3>2026 Intelligent Ground Vehicle Competition — Winning Team</h3>
          <p>Contributed to an autonomous rover that won the 2026 IGVC, focused on perception and autonomous-navigation capabilities.</p>
          <ul>
            <li>Developed <strong>camera and LiDAR sensor-fusion logic</strong> to combine visual and LiDAR measurements for environmental perception and obstacle detection.</li>
            <li>Identified obstacles and estimated their <strong>position, size, and distance</strong> from the rover, feeding the autonomous navigation system.</li>
            <li>Integrated perception outputs with navigation logic so the rover could <strong>dynamically adjust path and trajectory</strong> based on detected obstacles.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Modules() {
  return (
    <section id="modules">
      <div className="section-head">
        <span className="section-tag">04</span>
        <h2>Project modules</h2>
      </div>
      <p className="section-desc">Independent builds, each a self-contained subsystem.</p>
      <div className="modules">
        {modules.map((mod) => (
          <div className="module" key={mod.id}>
            <div className="module-id">{mod.id}</div>
            <h3>{mod.title}</h3>
            <ul>
              {mod.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="module-stack">
              {mod.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education">
      <div className="section-head">
        <span className="section-tag">05</span>
        <h2>Education</h2>
      </div>
      <div className="edu-grid">
        {education.map((ed) => (
          <div className="edu-card" key={ed.inst}>
            <div className="deg">{ed.deg}</div>
            <div className="inst">{ed.inst}</div>
            <div className="loc">{ed.loc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-inner">
        <span className="section-tag">06</span>
        <h2>Get in touch</h2>
        <p className="section-desc">Open to AI Engineer, ML Engineer, and Perception/Robotics roles.</p>
        <div className="contact-row">
          <a className="contact-link" href={contact.phoneHref}>{contact.phone}</a>
          <a className="contact-link" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="contact-link" href={`https://${contact.linkedin}`}>{contact.linkedin}</a>
          <a className="contact-link" href={`https://${contact.github}`}>{contact.github}</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Srii Akhillessh Gaddam</span>
          <span>BUILT WITH SIGNAL FUSION</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Streams />
        <ExperienceLog />
        <Achievement />
        <Modules />
        <Education />
      </main>
      <Footer />
    </>
  )
}
