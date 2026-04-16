import FadeUp from "./FadeUp.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <FadeUp>
          <div className="section-label">
            <span>Contact</span>
          </div>
          <h2 className="section-title">
            Let&apos;s <em>work</em> together
          </h2>
        </FadeUp>

        <div className="contact-grid">
          <FadeUp delay={100}>
            <div>
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "besirlileman@gmail.com",
                  href: "mailto:besirlileman@gmail.com",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+994 50 858 95 05",
                  href: "tel:+994508589505",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Baku, Azerbaijan",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-info-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <div className="contact-socials">
                {[
                  {
                    id: "linkedin",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M20.45 20.45h-3.55v-5.33c0-1.27-.03-2.91-1.77-2.91-1.77 0-2.04 1.38-2.04 2.82v5.42H9.54V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.21 2.35 4.21 5.41v6.33ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.55V9h3.56v11.45Z"
                        />
                      </svg>
                    ),
                    href: "https://www.linkedin.com/in/leman-bashirli-37b30630b/",
                  },
                  {
                    id: "github",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.39-3.38-1.39-.46-1.19-1.12-1.51-1.12-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.58 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.23-.26-4.57-1.15-4.57-5.12 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.88c.85 0 1.71.12 2.51.35 1.9-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.98-2.35 4.86-4.59 5.12.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                        />
                      </svg>
                    ),
                    href: "https://github.com/Leman006",
                  },
                  {
                    id: "instagram",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
                        />
                      </svg>
                    ),
                    href: "https://www.instagram.com/misslemb/",
                  },
                  { id: "x", icon: "𝕏", href: "https://x.com/LemanBesirli" },
                ].map((s) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First name</label>
                  <input className="form-input" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Last name</label>
                  <input className="form-input" placeholder="Last name" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  placeholder="hello@example.com"
                  type="email"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button className="btn-send">Send Message ✦</button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

