export default function About() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'Java',
    'C#',
    'Git & GitHub',
  ];

  return (
    <main className="about-page">
      <section className="about-hero page-container">
        <p className="section-label">ABOUT ME</p>

        <h1>
          A student who loves
          <span> building things.</span>
        </h1>

        <p className="about-intro">
          I am Jancedric Nuqui, a Computer Science student
          interested in programming, web development, and
          learning new technologies.
        </p>
      </section>

      <section className="about-content page-container">
        <div className="about-card card">
          <p className="card-number">01</p>

          <h2>My Background</h2>

          <p>
            I am currently pursuing a Bachelor of Science in
            Computer Science. Through school projects and
            personal practice, I continue to develop my
            programming and problem-solving skills.
          </p>

          <p>
            I enjoy creating applications, experimenting with
            different technologies, and turning ideas into
            working projects.
          </p>
        </div>

        <div className="about-card card">
          <p className="card-number">02</p>

          <h2>My Goal</h2>

          <p>
            My goal is to become a skilled software developer
            who can build useful, reliable, and user-friendly
            applications.
          </p>

          <p>
            I believe that every project is an opportunity to
            learn something new and improve my skills.
          </p>
        </div>
      </section>

      <section className="skills-section page-container">
        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section page-container">
        <p className="section-label">EDUCATION</p>

        <div className="education-card card">
          <div>
            <p className="card-number">03</p>
            <h2>Bachelor of Science in Computer Science</h2>
            <p>
              Currently studying Computer Science and building
              practical experience through programming projects.
            </p>
          </div>

          <div className="education-badge">
            CS
          </div>
        </div>
      </section>
    </main>
  );
}