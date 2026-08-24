import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero page-container">
        <div className="home-intro">
          <p className="home-greeting">
            PORTFOLIO / 2026
          </p>

          <h1>
            Building ideas
            <br />
            <span>through code.</span>
          </h1>

          <p className="home-description">
            I'm Jancedric Nuqui, a Computer Science student
            passionate about web development, programming,
            and creating digital experiences.
          </p>

          <div className="home-actions">
            <Link to="/projects" className="btn">
              Explore My Work →
            </Link>

            <Link to="/about" className="home-text-link">
              More About Me
            </Link>
          </div>
        </div>

        <div className="profile-panel">
          <div className="profile-circle">
            JN
          </div>

          <p className="profile-label">
            COMPUTER SCIENCE
          </p>

          <h2>
            Jancedric
            <br />
            Nuqui
          </h2>

          <p>
            Student Developer
          </p>

          <div className="availability">
            <span></span>
            Available for opportunities
          </div>
        </div>
      </section>

      <section className="home-stats page-container">
        <div>
          <strong>06</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>05+</strong>
          <span>Technologies</span>
        </div>

        <div>
          <strong>CS</strong>
          <span>Student</span>
        </div>

        <div>
          <strong>PH</strong>
          <span>Based in</span>
        </div>
      </section>

      <section className="home-focus page-container">
        <p className="section-label">CURRENT FOCUS</p>

        <div className="focus-content">
          <h2>
            Learning.
            <br />
            Building.
            <br />
            Improving.
          </h2>

          <p>
            I'm continuously developing my skills through
            school projects and personal experiments. My goal
            is to turn what I learn into practical and useful
            applications.
          </p>
        </div>
      </section>
    </main>
  );
}