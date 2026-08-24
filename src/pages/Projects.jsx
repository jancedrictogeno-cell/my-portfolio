import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero page-container">
        <p className="section-label">MY WORK</p>

        <h1>
          Projects I've
          <span> built.</span>
        </h1>

        <p>
          A collection of projects I have created while
          studying Computer Science and improving my
          programming skills.
        </p>
      </section>

      <section className="projects-grid page-container">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-number">
              0{index + 1}
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="project-link"
            >
              View Project
              <span>→</span>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}