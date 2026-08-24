import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-container page-container">
        <p className="not-found-number">404</p>

        <h1>Page not found.</h1>

        <p>
          The page you're looking for doesn't exist or may
          have been moved.
        </p>

        <Link to="/" className="btn">
          Back to Home
        </Link>
      </section>
    </main>
  );
}