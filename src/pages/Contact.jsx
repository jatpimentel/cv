import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "jobaaron444@gmail.com",
    href: "mailto:jobaaron444@gmail.com",
    hint: "Best for project inquiries",
  },
  {
    label: "LinkedIn",
    value: "job-aaron-pimentel",
    href: "https://www.linkedin.com/in/job-aaron-pimentel/",
    hint: "Connect professionally",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailto = `mailto:jobaaron444@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry from " + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div className="contact-page">
      <div className="contact-nav-wrapper">
        <Navbar />
      </div>

      {/* ── Hero Header ───────────────────────────────────────────────────── */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Contact</p>
        <h1 className="contact-title">Let's Work<br />Together</h1>
        <p className="contact-subtitle">
          Open to freelance projects, collaborations, and full-time opportunities.
        </p>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <section className="contact-body">

        {/* Left: direct links */}
        <div className="contact-links">
          <p className="links-heading">Reach Me Directly</p>

          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="contact-link-row"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="link-num">0{i + 1}</span>
              <span className="link-info">
                <span className="link-label">{link.label}</span>
                <span className="link-value">{link.value}</span>
                <span className="link-hint">{link.hint}</span>
              </span>
              <span className="link-arrow">→</span>
            </a>
          ))}

          <div className="availability">
            <span className="avail-dot" />
            Available for new projects
          </div>
        </div>

        {/* Divider */}
        <div className="contact-divider" />

        {/* Right: form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="links-heading">Send a Message</p>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                required
                placeholder="john@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-input form-textarea"
              name="message"
              required
              placeholder="Tell me about your project..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn-send" type="submit">
            {sent ? "Opening Mail Client…" : "Send Message"}
            <span className="btn-arrow">→</span>
          </button>
        </form>

      </section>

      {/* ── Footer strip ──────────────────────────────────────────────────── */}
      <div className="contact-footer-strip">
        <span>© {new Date().getFullYear()} Job Aaron T. Pimentel</span>
        <span>Davao City, Philippines</span>
      </div>
    </div>
  );
}