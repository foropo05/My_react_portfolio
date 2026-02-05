import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-left">
          <p className="badge">Web Application Development</p>

          <h1 className="hero-title">
            Hi, I’m <span className="highlight">Favour Oropo</span>
          </h1>

          <p className="hero-text">
           <strong>Mission Statement:</strong> I build modern, user-friendly web applications and
            I’m growing my skills in React, JavaScript, and web development.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="btn">
              Learn More About Me
            </Link>

            <Link to="/projects" className="btn btn-outline">
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img className="hero-img" src="/profile.jpg" alt="Profile" />
        </div>
      </section>
    </div>
  );
}
