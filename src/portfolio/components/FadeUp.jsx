import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

/* eslint-disable react/prop-types */
export default function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const visible = useIntersectionObserver(ref, 0.15);

  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

