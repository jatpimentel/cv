import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Services.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
      </svg>
    ),
    title: "Web Development",
    desc: "Building responsive, full-stack web applications using Django and React — from backend architecture and REST APIs to polished, user-facing interfaces.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-5 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
    title: "Mobile App Development",
    desc: "Developing cross-platform mobile applications using Flutter, with secure data handling, encrypted storage, and seamless backend integration via Supabase.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Crafting clean, intuitive, and user-centred interfaces in Figma — from wireframes and interactive prototypes to full design systems ready for handoff.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z"/>
      </svg>
    ),
    title: "Secure Systems & API Integration",
    desc: "Designing and implementing secure, decentralised systems — including hybrid AES-256/RSA encryption, IPFS storage, blockchain audit trails, and robust RESTful API architecture.",
  },
];

const skills = [
  { name: "Python / Django", color: "#3776ab", level: 88 },
  { name: "React.js",        color: "#61dafb", level: 82 },
  { name: "JavaScript",      color: "#f7df1e", level: 85 },
  { name: "HTML & CSS",      color: "#e34c26", level: 92 },
  { name: "Flutter",         color: "#54c5f8", level: 74 },
  { name: "PostgreSQL",      color: "#336791", level: 75 },
  { name: "Figma",           color: "#a259ff", level: 80 },
  { name: "Git / GitHub",    color: "#f05032", level: 83 },
];

export default function Services() {
  return (
    <div className="services-page">

      {/* ── Navbar (dark) ──────────────────────────────────────────────────── */}
      <div className="services-nav-wrapper">
        <Navbar />
      </div>

      {/* ── Services Section ───────────────────────────────────────────────── */}
      <section className="services-section">
        <p className="section-eyebrow">Services</p>
        <h2 className="section-title">
          How I Can<br />Help You
        </h2>

        <div className="cards-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="card-header">
                <div className="card-icon">{s.icon}</div>
                <h3 className="card-title">{s.title}</h3>
              </div>
              <p className="card-desc">{s.desc}</p>
              <Link to="/contact" className="learn-more">
                <span className="plus-btn">+</span>
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <p className="explore-line">
          Have a project in mind?{" "}
          <Link to="/contact" className="explore-link">Get in Touch</Link>
        </p>
      </section>

      {/* ── Skills Section ─────────────────────────────────────────────────── */}
      <section className="skills-section">
        <p className="section-eyebrow light">Skills</p>
        <h2 className="section-title light">Languages &amp; Tools</h2>

        <div className="skills-grid">
          {skills.map((sk) => (
            <div className="skill-item" key={sk.name}>
              <div className="skill-top">
                <span className="skill-name">{sk.name}</span>
                <span className="skill-pct">{sk.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${sk.level}%`, background: sk.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge row */}
        <div className="tech-badges">
          {[
            "Python", "Django", "React.js", "JavaScript", "HTML5", "CSS3",
            "Flutter", "PostgreSQL", "SQLite", "IPFS", "Supabase",
            "Figma", "Git", "REST API", "Postman", "VSCode",
          ].map((t) => (
            <span className="badge" key={t}>{t}</span>
          ))}
        </div>
      </section>

    </div>
  );
}