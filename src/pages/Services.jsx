import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Services.css";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14zM7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
      </svg>
    ),
    title: "Web Development",
    desc: "Building responsive, fast, and scalable web applications tailored to your business needs, instead of handling development in-house.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.51 15.49 0 12.36 0c-1.73 0-3.24.89-4.18 2.23L12 6H8.55L7.27 4.15A4.368 4.368 0 0 0 4 2.64C1.79 2.64 0 4.43 0 6.64c0 .48.09.92.18 1.36H0v2h24V6h-4zM4 9V7.5c0-.83.67-1.5 1.5-1.5S7 6.67 7 7.5V9H4zm13 0V7.5c0-.83.67-1.5 1.5-1.5S20 6.67 20 7.5V9h-3zM1 10v12h22V10H1zm10 10H5v-8h6v8zm8 0h-6v-8h6v8z"/>
      </svg>
    ),
    title: "App Development",
    desc: "Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business with a full-service agency.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Crafting clean, modern, and user-friendly interfaces that keep your users engaged and your brand looking professional.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z"/>
      </svg>
    ),
    title: "API Integration",
    desc: "Connecting your apps with third-party services and building robust RESTful APIs that power seamless digital experiences.",
  },
];

const skills = [
  { name: "HTML",       color: "#e34c26", level: 95 },
  { name: "CSS",        color: "#264de4", level: 90 },
  { name: "JavaScript", color: "#f7df1e", level: 85 },
  { name: "React",      color: "#61dafb", level: 82 },
  { name: "Node.js",    color: "#68a063", level: 75 },
  { name: "PHP",        color: "#777bb3", level: 70 },
  { name: "MySQL",      color: "#00758f", level: 72 },
  { name: "Git",        color: "#f05032", level: 80 },
];

export default function Services() {
  return (
    <div className="services-page">

      {/* ── Navbar (dark) ───────────────────────────────── */}
      <div className="services-nav-wrapper">
        <Navbar />
      </div>

      {/* ── Services Section ────────────────────────────── */}
      <section className="services-section">
        <p className="section-eyebrow">SERVICE</p>
        <h2 className="section-title">
          How I Can Help <br /> You With
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
          Want more service?{" "}
          <Link to="/contact" className="explore-link">Explore Now</Link>
        </p>
      </section>

      {/* ── Skills Section ───────────────────────────────── */}
      <section className="skills-section">
        <p className="section-eyebrow light">SKILLS</p>
        <h2 className="section-title light">Languages & Tools</h2>

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
          {["HTML5","CSS3","JavaScript","React","Node.js","PHP","MySQL","Git","Tailwind","Vite"].map((t) => (
            <span className="badge" key={t}>{t}</span>
          ))}
        </div>
      </section>

    </div>
  );
}