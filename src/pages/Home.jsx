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
          <p className="hero-label">JOB AARON T. PIMENTEL</p>
          <h1 className="hero-title">
            Full Stack <br /> Developer
          </h1>
          <p className="hero-desc">
            A developer full of passion for creating effective and efficient
            systems for companies and individuals.
          </p>
          <Link to="/projects" className="btn-primary">
            SEE MY WORK
          </Link>
        </div>

        {/* ── Right: Illustration ────────────────────────── */}
        <div className="hero-visual">

          {/* Gray circle backdrop */}
          <div className="circle-backdrop" />

          {/* Yellow arch */}
          <div className="arch" />

          {/* Real photo */}
          <img
            src={jobertPhoto}
            alt="Job Aaron T. Pimentel"
            className="hero-photo"
          />

          {/* Floating analytics card */}
          <div className="float-card">
            <div className="card-dot" />
            <div className="card-bars">
              <div className="bar-title" />
              <div className="bars">
                <span style={{ height: "60%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "90%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "85%" }} />
              </div>
            </div>
          </div>

          {/* Purple star badge */}
          <div className="star-badge">
            <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M17.75 2.5l3.75 3.75-13 13H4.5v-4L17.75 2.5zm0 2.83L6.33 16.75H5.5v-.83L16.92 4.5l.83.83z" />
            </svg>
          </div>

          {/* Zigzag line */}
          <svg className="zigzag" viewBox="0 0 80 140" fill="none">
            <polyline
              points="50,10 30,45 60,75 30,105 50,135"
              stroke="#9a9ab0"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Curved arrow */}
          <svg className="curved-arrow" viewBox="0 0 100 60" fill="none">
            <path d="M10,15 Q55,0 88,45" stroke="#9a9ab0" strokeWidth="2" strokeLinecap="round" fill="none" />
            <polyline points="80,47 90,47 87,38" stroke="#9a9ab0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </div>
      </section>
    </div>
  );
}