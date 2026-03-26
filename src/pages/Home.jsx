import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import jobertPhoto from "../assets/images/Jobert Grad.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">

        {/* ── Left: Text ─────────────────────────────────── */}
        <div className="hero-text">
          <p className="hero-label">Job Aaron T. Pimentel</p>
          <h1 className="hero-title">
            Full Stack <br /> Developer
          </h1>
          <p className="hero-desc">
            A developer full of passion for creating effective and efficient
            systems for companies and individuals.
          </p>
          <Link to="/projects" className="btn-primary">
            See My Work
          </Link>
        </div>

        {/* ── Right: Photo ───────────────────────────────── */}
        <div className="hero-visual">
          <div className="hero-photo-container">

            {/* Floating badge — top left */}
            <div className="stat-badge stat-badge--top-left">
              <span className="stat-number">3<span>+</span></span>
              <span className="stat-label">Years of Dev</span>
            </div>

            {/* Photo frame */}
            <div className="hero-photo-frame">
              <img
                src={jobertPhoto}
                alt="Job Aaron T. Pimentel"
                className="hero-photo"
              />
            </div>

            {/* Floating badge — bottom right */}
            <div className="stat-badge stat-badge--bottom-right">
              <span className="stat-number">8<span>+</span></span>
              <span className="stat-label">Tech Stacks</span>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}