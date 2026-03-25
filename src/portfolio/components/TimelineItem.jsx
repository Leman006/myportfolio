import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

/* eslint-disable react/prop-types */
export default function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const visible = useIntersectionObserver(ref, 0.2);

  return (
    <div
      ref={ref}
      className={`timeline-item ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`timeline-dot ${item.dot}`}>{item.icon}</div>
      <div className="timeline-body">
        <div className="timeline-period">{item.period}</div>
        <div className="timeline-role">{item.role}</div>
        <div className="timeline-company">{item.company}</div>
        <div className="timeline-desc">{item.desc}</div>
      </div>
    </div>
  );
}

