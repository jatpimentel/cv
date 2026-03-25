import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./About.css";

const stats = [
  { value: "3+",   label: "Years of Experience" },
  { value: "4",    label: "Projects Delivered" },
  { value: "2026", label: "Expected Graduation" },
  { value: "100%", label: "Client Satisfaction" },
];

const skills = [
  {
    category: "Backend Development",
    items: ["Django", "REST API", "Python"],
  },
  {
    category: "Frontend Integration",
    items: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Database Management",
    items: ["PostgreSQL", "SQLite"],
  },
  {
    category: "UI/UX Design",
    items: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "Supabase"],
  },
  {
    category: "Security & Dev Tools",
    items: ["AES-256", "RSA", "IPFS", "GitHub", "Postman"],
  },
];

export default function About() {
  return (
    <div className="about-page">

      {/* ── Navbar ──────────────────────────────────────── */}
      <Navbar />

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="about-hero">
        <div>
          <p className="section-eyebrow">About Me</p>

          <h1 className="about-hero-title">
            Full Stack<br />
            <span>Developer.</span>
          </h1>

          <p className="about-hero-body">
            I'm Job Aaron T. Pimentel — a passionate Information Technology
            student at Ateneo de Davao University, driven by a love for building
            effective, secure, and user-centered systems for real people and
            real businesses.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">SEE MY WORK</Link>
            <Link to="/contact" className="btn-outline">LET'S TALK</Link>
          </div>
        </div>

        <div className="hero-photo-col">
          <div className="hero-avatar">
            <span className="hero-avatar-initials">JAP</span>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────── */}
      <div className="stats-bar">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Profile Section ─────────────────────────────── */}
      <section className="profile-section">
        <div>
          <p className="section-eyebrow">Profile</p>
          <h2 className="profile-section-title">
            Who<br />I Am
          </h2>
        </div>

        <div>
          <p className="profile-text">
            I'm an aspiring and driven IT student entering my 4th year, with
            three years of applied experience in Python programming. I specialize
            in backend web development using Django, with proven experience
            deploying full-stack applications for real clients — not just
            coursework.
          </p>

          <p className="profile-text">
            My expertise spans the full stack: from designing secure database
            architectures and REST APIs, to crafting polished React frontends
            and intuitive Figma prototypes. I've led multi-member development
            teams through the complete product lifecycle — from requirement
            gathering to client delivery.
          </p>

          <p className="profile-text">
            My capstone project involved building a decentralized medical
            record-sharing app with AES-256/RSA hybrid encryption, IPFS
            storage, and Hive blockchain audit trails — technology that
            genuinely protects people's most sensitive data.
          </p>

          <div className="pills">
            {["Django", "React", "Flutter", "Figma", "IPFS", "Blockchain", "AES-256", "Supabase"].map(
              (t) => <span className="pill" key={t}>{t}</span>
            )}
          </div>
        </div>
      </section>

      {/* ── Skills Section ──────────────────────────────── */}
      <section className="about-skills-section">
        <p className="section-eyebrow">Skills</p>
        <h2 className="skills-section-title">
          Core<br />Competencies
        </h2>

        <div className="skills-cards-grid">
          {skills.map((sk) => (
            <div className="skill-card" key={sk.category}>
              <p className="skill-card-category">{sk.category}</p>
              <div className="skill-tags">
                {sk.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education Section ───────────────────────────── */}
      <section className="edu-section">
        <p className="section-eyebrow">Education</p>
        <h2 className="edu-section-title">
          Academic<br />Background
        </h2>

        <div className="edu-entry">
          <div className="edu-year">2022 – 2026</div>
          <div className="edu-dot" />
          <div>
            <div className="edu-degree">
              B.S. Information Technology
            </div>
            <div className="edu-school">
              Ateneo de Davao University — Expected Graduation 2026
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="about-cta">
        <p className="cta-subtext">Have a project in mind?</p>
        <h2 className="cta-headline">
          Let's Work<br />Together
        </h2>
        <Link to="/contact" className="btn-primary">GET IN TOUCH</Link>
      </section>

    </div>
  );
}