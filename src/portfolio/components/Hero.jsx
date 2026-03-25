/* eslint-disable react/prop-types */
export default function Hero({ onNavigate }) {
  return (
    <section id="hero">
      <div className="hero-blob1" />
      <div className="hero-blob2" />

      <div className="hero-content">
        <div className="hero-tag">✦ Available for work</div>
        <h1 className="hero-name">
          Leman
          <br />
          <span>Beshirli</span>
        </h1>
        <p className="hero-role">Full-Stack Developer · Baku, Azerbaijan</p>

        <div className="hero-btns">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("contact");
            }}
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("projects");
            }}
          >
            View Work
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

