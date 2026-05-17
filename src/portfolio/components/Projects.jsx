import FadeUp from "./FadeUp.jsx";

/* eslint-disable react/prop-types */

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="container">
        <FadeUp>
          <div className="section-label">
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">
            Things I&apos;ve <em>built</em>
          </h2>
        </FadeUp>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <FadeUp key={p.name} delay={i * 80}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <div
                  className="project-thumb"
                  style={{
                    background: `linear-gradient(135deg, ${p.color[0]}, ${p.color[1]})`,
                  }}
                >
                  <div className="project-thumb-icon">{p.icon}</div>
                </div>

                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-desc">{p.desc}</div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
