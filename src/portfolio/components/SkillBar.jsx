import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

/* eslint-disable react/prop-types */
export default function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const visible = useIntersectionObserver(ref, 0.3);

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-name">{name}</div>
      <div className="skill-track">
        <div
          className={`skill-fill ${visible ? "animated" : ""}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="skill-pct">{pct}%</div>
    </div>
  );
}

