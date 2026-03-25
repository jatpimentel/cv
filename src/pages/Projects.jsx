import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Projects.css";

// ── Replace img paths with your actual screenshots ──
// import orderingImg  from "../assets/images/ordering.png";
// import medicalImg   from "../assets/images/medical.png";
// import poolImg      from "../assets/images/pool.png";
// import karaokeImg   from "../assets/images/karaoke.png";

const projects = [
  {
    id: 1,
    tag: "Web Development",
    title: "Online Ordering System with Employee Management",
    year: "2024",
    desc: "A comprehensive e-commerce solution featuring complete ordering and inventory modules for online store operations, along with customizable employee management options for diverse workplace needs.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    link: "#",
    bg: "linear-gradient(135deg, #c8a97e 0%, #8B4513 100%)",
    // img: orderingImg,   ← uncomment when you have the screenshot
  },
  {
    id: 2,
    tag: "Mobile App",
    title: "Secure Medical Records Sharing App",
    year: "2024",
    desc: "A decentralized mobile application for securely managing and sharing personal medical records using AES-256 encryption, RSA cryptography, and IPFS storage. Features blockchain-based audit trails via Hive and ensures tamper-resistant, user-controlled health data sharing in compliance with the Philippine Data Privacy Act of 2012.",
    tech: ["React Native", "IPFS", "Blockchain", "AES-256", "RSA", "Hive"],
    link: "#",
    bg: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
    // img: medicalImg,
  },
  {
    id: 3,
    tag: "Web Development",
    title: "Pool Company Marketing Website",
    year: "2024",
    desc: "A professional company website designed for a pool business, featuring comprehensive marketing materials, service promotions, and an integrated inquiry system to streamline customer engagement and lead generation.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#",
    bg: "linear-gradient(135deg, #0096c7 0%, #023e8a 100%)",
    // img: poolImg,
  },
  {
    id: 4,
    tag: "UI/UX Design",
    title: "Mobile Karaoke App Design",
    year: "2023",
    desc: "Led a development team as project manager in collaboration with the client to create innovative and unique UI/UX designs for a mobile karaoke application, delivering a user-friendly and engaging entertainment experience.",
    tech: ["Figma", "UI/UX", "Prototyping", "Mobile Design"],
    link: "#",
    bg: "linear-gradient(135deg, #3a0ca3 0%, #7209b7 100%)",
    // img: karaokeImg,
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects-page">
      <div className="projects-nav-wrapper">
        <Navbar />
      </div>

      {/* ── Header ──────────────────────────────────────── */}
      <section className="projects-header">
        <div className="header-left">
          <p className="section-eyebrow">PORTFOLIO</p>
          <h1 className="projects-title">Latest Work</h1>
          <p className="projects-subtitle">These are some of the projects that I've worked on.</p>
        </div>
        <Link to="/contact" className="btn-outline">EXPLORE MORE</Link>
      </section>

      {/* ── Project List ─────────────────────────────────── */}
      <section className="projects-list">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`project-row ${active === p.id ? "open" : ""}`}
          >
            {/* ── Row Header ── */}
            <button
              className="row-header"
              onClick={() => setActive(active === p.id ? null : p.id)}
            >
              <span className="row-number">0{i + 1}</span>
              <span className="row-tag">{p.tag}</span>
              <span className="row-title">{p.title}</span>
              <span className="row-year">{p.year}</span>
              <span className="row-toggle">{active === p.id ? "−" : "+"}</span>
            </button>

            {/* ── Expanded Detail ── */}
            <div className="row-detail">
              <div className="detail-inner">

                {/* Thumbnail — shows screenshot if available, otherwise gradient */}
                <div
                  className="detail-thumb"
                  style={
                    p.img
                      ? { backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "top center" }
                      : { background: p.bg }
                  }
                >
                  <span className="thumb-tag">{p.tag}</span>
                  <span className="thumb-title">{p.title}</span>
                </div>

                {/* Info */}
                <div className="detail-info">
                  <p className="detail-desc">{p.desc}</p>

                  <div className="detail-tech">
                    <p className="tech-label">Tech Stack</p>
                    <div className="tech-tags">
                      {p.tech.map((t) => (
                        <span className="tech-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <a href={p.link} className="btn-view" target="_blank" rel="noreferrer">
                    View Project →
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="projects-cta">
        <p>Have a project in mind?</p>
        <Link to="/contact" className="btn-primary">Let's Work Together</Link>
      </section>
    </div>
  );
}