import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return (
      <main className="detail-page">
        <section className="detail-container page-container">
          <p className="section-label">404</p>

          <h1>Project Not Found</h1>

          <p>
            Sorry, the project you are looking for does not
            exist.
          </p>

          <Link to="/projects" className="btn">
            Back to Projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <section className="detail-container page-container">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

        <div className="detail-header">
          <p className="section-label">
            PROJECT 0{project.id}
          </p>

          <h1>{project.title}</h1>

          <p className="detail-description">
            {project.description}
          </p>
        </div>

        <div className="detail-layout">
          <div className="detail-main card">
            <p className="card-number">ABOUT THIS PROJECT</p>

            <h2>Project Overview</h2>

            <p>
              This project is part of my Computer Science
              portfolio. It was created as part of my learning
              experience and demonstrates my ability to apply
              programming concepts to a practical project.
            </p>

            <p>
              Through this project, I was able to practice
              problem-solving, programming, and building
              functional applications.
            </p>
          </div>

          <div className="detail-side">
            <div className="card">
              <p className="card-number">PROJECT INFO</p>

              <div className="info-row">
                <span>Project</span>
                <strong>{project.title}</strong>
              </div>

              <div className="info-row">
                <span>Type</span>
                <strong>Web Application</strong>
              </div>

              <div className="info-row">
                <span>Status</span>
                <strong>Completed</strong>
              </div>
            </div>

            <a
              href={project.link}
              className="btn detail-button"
            >
              View Project ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}