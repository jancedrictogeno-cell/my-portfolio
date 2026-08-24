export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-container page-container">
        <div className="contact-header">
          <p className="section-label">GET IN TOUCH</p>

          <h1>
            Let's work
            <span> together.</span>
          </h1>

          <p>
            Have a project idea, question, or just want to
            say hello? Feel free to send me a message.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="card contact-card">
              <p className="card-number">CONTACT</p>

              <h2>Let's talk.</h2>

              <p>
                I'm always open to learning opportunities,
                project ideas, and meaningful conversations
                about technology.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <strong>nuquijancedric@gmail.com</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>Philippines</strong>
                </div>

                <div>
                  <span>Focus</span>
                  <strong>Web Development</strong>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}