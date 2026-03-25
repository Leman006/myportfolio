import FadeUp from "./FadeUp.jsx";

/* eslint-disable react/prop-types */
export default function Skills({ skills, certs }) {
  return (
    <section id="skills">
      <div className="container">
        <FadeUp>
          <div className="section-label">
            <span>Skills & Certs</span>
          </div>
          <h2 className="section-title">
            My <em>toolkit</em>
          </h2>
        </FadeUp>

        <div className="skills-cloud">
          {skills.map((s, i) => (
            <FadeUp key={s} delay={i * 40}>
              <div className="skill-pill">{s}</div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "1.6rem",
              marginTop: 64,
              marginBottom: 8,
              color: "var(--dark)",
            }}
          >
            Certificates
          </h3>
        </FadeUp>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <FadeUp key={c.name} delay={i * 100}>
              <div className="cert-card">
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

