import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero page-container">
        <div className="hero-content">
          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Jan Cedric
            <span> Nuqui.</span>
          </h1>

          <h2>
            Computer Science Student & Aspiring Developer
          </h2>

          <p className="hero-description">
            I’m passionate about programming, web development,
            and building useful digital experiences through code.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn">
              View My Projects
            </Link>

            <Link to="/contact" className="btn secondary-btn">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{' '}
                developer = {'{'}
              </p>

              <p className="indent">
                name: <span className="code-green">"Jancedric"</span>,
              </p>

              <p className="indent">
                course: <span className="code-green">"Computer Science"</span>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent-more">
                <span className="code-green">"React"</span>,
              </p>

              <p className="indent-more">
                <span className="code-green">"JavaScript"</span>,
              </p>

              <p className="indent-more">
                <span className="code-green">"C#"</span>
              </p>

              <p className="indent">
                ]
              </p>

              <p>{'};'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about page-container">
        <p className="section-label">
          WHAT I DO
        </p>

        <h2>
          Turning ideas into <span>digital experiences.</span>
        </h2>

        <p>
          As a Computer Science student, I continuously learn
          and improve my skills by creating projects and
          exploring different technologies.
        </p>
      </section>
    </main>
  );
}