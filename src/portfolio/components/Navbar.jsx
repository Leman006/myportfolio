/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Navbar({ scrolled, onNavigate }) {
  const navItems = ["about", "projects", "experience", "skills", "contact"];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">
        Leman<span>.</span>
      </a>

      <button
        className={`nav-burger ${open ? "open" : ""}`}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-burger-line" />
        <span className="nav-burger-line" />
        <span className="nav-burger-line" />
      </button>

      <ul className="nav-links">
        {navItems.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(id);
              }}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className={`nav-mobile-panel ${open ? "open" : ""}`}>
        <div className="nav-mobile-overlay" onClick={() => setOpen(false)} />
        <ul className="nav-mobile-links">
          {navItems.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(id);
                  setOpen(false);
                }}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

