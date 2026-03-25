import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Projects.css";

// ── Replace img paths with your actual screenshots ──
import orderingImg from "../assets/images/ordering.png";
import medicalImg  from "../assets/images/medical.png";
import poolImg     from "../assets/images/pool.png";
import karaokeImg  from "../assets/images/karaoke.png";

const projects = [
  {
    id: 1,
    tag: "Web Development",
    title: "Online Ordering System with Employee Management",
    year: "2024",
    desc: "A comprehensive e-commerce solution featuring complete ordering and inventory modules for online store operations, along with customizable employee management options for diverse workplace needs.",
    longDesc:
      "Built as a real-world deployment for a client, this system covers the full lifecycle of an online food ordering operation. The admin dashboard handles inventory tracking, order queuing, delivery dispatch, sales analytics, and employee attendance — all in one interface. The frontend is built with React for a snappy UX, while Django powers the backend with role-based authentication, a RESTful API, and a relational database schema designed to scale. Client feedback was gathered iteratively throughout the build, resulting in a product that truly matched business needs.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    link: "#",
    bg: "linear-gradient(135deg, #c8a97e 0%, #8B4513 100%)",
    img: orderingImg,
    highlights: [
      "Inventory management",
      "Order & delivery tracking",
      "Sales analytics dashboard",
      "Employee attendance system",
      "Role-based access control",
    ],
  },
  {
    id: 2,
    tag: "Mobile App",
    title: "Secure Medical Records Sharing App",
    year: "2024",
    desc: "A decentralized mobile application for securely managing and sharing personal medical records using AES-256 encryption, RSA cryptography, and IPFS storage.",
    longDesc:
      "Capstone project and system architecture lead for a three-member team. This decentralized application lets users encrypt, store, and selectively share personal medical records. AES-256 handles file-level encryption; RSA manages key exchange between parties; IPFS provides decentralized, tamper-resistant storage; and Hive blockchain maintains an immutable audit trail of every access event. Built in Flutter with Supabase as the backend database. Fully compliant with the Philippine Data Privacy Act of 2012, with crypto-erasure for access revocation.",
    tech: ["React Native", "IPFS", "Blockchain", "AES-256", "RSA", "Hive"],
    link: "#",
    bg: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
    img: medicalImg,
    highlights: [
      "AES-256 & RSA hybrid encryption",
      "IPFS decentralized storage",
      "Hive blockchain audit logs",
      "Selective sharing with groups & orgs",
      "PDPA 2012 compliance",
    ],
  },
  {
    id: 3,
    tag: "Web Development",
    title: "Pool Company Marketing Website",
    year: "2024",
    desc: "A professional company website designed for a pool business, featuring comprehensive marketing materials, service promotions, and an integrated inquiry system.",
    longDesc:
      "Designed and developed a full marketing presence for a local pool services company. The site showcases their range of services — installation, maintenance, and renovation — with polished imagery and copy. An integrated inquiry form funnels leads directly to the business, streamlining customer engagement. The site is fully responsive, load-optimised, and built with plain PHP/HTML/CSS/JS for easy client maintenance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#",
    bg: "linear-gradient(135deg, #0096c7 0%, #023e8a 100%)",
    img: poolImg,
    highlights: [
      "Service showcase pages",
      "Integrated lead inquiry form",
      "Fully responsive layout",
      "Client-maintainable codebase",
      "Performance-optimised assets",
    ],
  },
  {
    id: 4,
    tag: "UI/UX Design",
    title: "Mobile Karaoke App Design",
    year: "2023",
    desc: "Led a development team as project manager in collaboration with the client to create innovative UI/UX designs for a mobile karaoke application.",
    longDesc:
      "Served as project manager for a client-commissioned mobile karaoke app UI/UX project executed entirely in Figma. Managed the full project lifecycle — scope definition, task assignments, sprint timeline, client meeting facilitation, and iterative design review. Delivered high-fidelity interactive prototypes that demonstrated core user flows: song browsing, queue management, in-session controls, and social sharing. The design language balances a vibrant, entertainment-forward aesthetic with a clean, accessible navigation structure.",
    tech: ["Figma", "UI/UX", "Prototyping", "Mobile Design"],
    link: "#",
    bg: "linear-gradient(135deg, #3a0ca3 0%, #7209b7 100%)",
    img: karaokeImg,
    highlights: [
      "High-fidelity Figma prototype",
      "Full user-flow coverage",
      "Client requirement workshops",
      "Accessibility-aware design system",
      "Agile sprint delivery",
    ],
  },
];

export default function Projects() {
  const [active, setActive]       = useState(null);
  const [modal, setModal]         = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const openModal  = (project, e) => { e.stopPropagation(); setImgLoaded(false); setModal(project); };
  const closeModal = ()            => setModal(null);

  return (
    <div className="projects-page">
      <div className="projects-nav-wrapper">
        <Navbar />
      </div>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="projects-header">
        <div className="header-left">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="projects-title">Latest Work</h1>
          <p className="projects-subtitle">A selection of projects built for real clients and real problems.</p>
        </div>
        <Link to="/contact" className="btn-outline">Get in Touch</Link>
      </section>

      {/* ── Project List ───────────────────────────────────────────────────── */}
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

                  <button className="btn-view" onClick={(e) => openModal(p, e)}>
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="projects-cta">
        <p>Have a project in mind?</p>
        <Link to="/contact" className="btn-primary">Let's Work Together</Link>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          PROJECT MODAL
      ════════════════════════════════════════════════════════════════════ */}
      {modal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>

            <button className="modal-close" onClick={closeModal} aria-label="Close">✕</button>

            {/* ── Hero image ── */}
            <div className="modal-hero">
              {modal.img ? (
                <>
                  <img
                    src={modal.img}
                    alt={modal.title}
                    className={`modal-hero-img ${imgLoaded ? "loaded" : ""}`}
                    onLoad={() => setImgLoaded(true)}
                  />
                  <div className="modal-hero-overlay" />
                </>
              ) : (
                <div className="modal-hero-gradient" style={{ background: modal.bg }} />
              )}

              <div className="modal-hero-meta">
                <span className="modal-tag">{modal.tag}</span>
                <span className="modal-year">{modal.year}</span>
              </div>
            </div>

            {/* ── Body ── */}
            <div className="modal-body">
              <h2 className="modal-title">{modal.title}</h2>

              <p className="modal-long-desc">{modal.longDesc}</p>

              <div className="modal-columns">
                <div className="modal-highlights">
                  <p className="modal-section-label">Key Highlights</p>
                  <ul className="highlights-list">
                    {modal.highlights.map((h) => (
                      <li key={h}>
                        <span className="highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech-col">
                  <p className="modal-section-label">Tech Stack</p>
                  <div className="tech-tags">
                    {modal.tech.map((t) => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-ghost" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}