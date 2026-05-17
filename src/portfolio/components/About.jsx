import FadeUp from "./FadeUp.jsx";
import SkillBar from "./SkillBar.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <FadeUp>
          <div className="section-label">
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            A developer who <em>loves</em>
            <br />
            the full picture
          </h2>
        </FadeUp>

        <div className="about-grid">
          <FadeUp delay={100}>
            <div className="about-visual">
              <div className="about-img-wrap">
                <div className="about-img-placeholder">LB</div>
              </div>
              <div className="about-badge">
                <strong>96</strong>
                <span>GPA at UNEC</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="about-text">
              <p>
                Hi, I&apos;m Leman — a full-stack developer with a passion for
                building both efficient back-end systems and dynamic front-end
                experiences. Born and raised in Baku, I have a deep interest in
                how the complete web stack comes together to deliver seamless
                digital experiences.
              </p>
              <p>
                My expertise spans Python, Django, React and modern web
                technologies. Whether designing a RESTful API or optimizing a
                front-end for performance, I strive to deliver high-quality,
                scalable, user-centric solutions.
              </p>

              <div className="skills-wrap">
                {[
                  ["Python", 98],
                  ["Django", 95],
                  ["React", 92],
                  ["JavaScript", 90],
                  ["React Native", 90],
                  ["HTML/CSS", 95],
                  ["SQL", 90],
                ].map(([name, pct]) => (
                  <SkillBar key={name} name={name} pct={pct} />
                ))}
              </div>

              <div className="about-links">
                <a
                  href="mailto:besirlileman@gmail.com"
                  className="btn-primary"
                >
                  Contact Me
                </a>
                <a
                  href="/cv/Leman-Beshirli-CV.pdf"
                  className="btn-outline"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

