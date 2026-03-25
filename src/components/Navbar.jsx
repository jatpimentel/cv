import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "About",    to: "/about"    },
  { label: "Services",  to: "/services"  },
  { label: "Projects", to: "/projects" },
  { label: "Blog",     to: "/blog"     },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">JATPIMENTEL</Link>

      {/* Desktop Links */}
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className={location.pathname === l.to ? "active" : ""}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/contact" className="btn-contact">CONTACT</Link>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="mobile-menu">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}