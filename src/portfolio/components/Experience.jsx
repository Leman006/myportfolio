import FadeUp from "./FadeUp.jsx";
import TimelineItem from "./TimelineItem.jsx";

const education = [
  {
    period: "2023 — 2027",
    role: "Information Technology",
    company:
      "Azerbaijan State University of Economics (UNEC)",
    desc: "GPA: 96. Studying information technology, programming fundamentals, and software development.",
    dot: "dot-pink",
    icon: "🎓",
  },
  {
    period: "2024 — 2025",
    role: "Front-end Development",
    company: "Div Academy",
    desc: "HTML, CSS, Responsive Web Design, JavaScript, React.",
    dot: "dot-mint",
    icon: "💡",
  },
  {
    period: "2024",
    role: "Back-end Development",
    company: "IT Brains Academy",
    desc: "Python, Django, SQL, Git — server-side development fundamentals.",
    dot: "dot-pink",
    icon: "⚙️",
  },
];

const volunteering = [
  {
    period: "2025",
    role: "Volunteer",
    company: "DOST Center",
    desc: "Assisted citizens with digital services and social support programs.",
    dot: "dot-mint",
    icon: "🤝",
  },
  {
    period: "2019",
    role: "Volunteer",
    company: "European Youth Olympic Festival",
    desc: "Supported international event operations; practiced cross-cultural communication in English.",
    dot: "dot-pink",
    icon: "🏅",
  },
  {
    period: "2025",
    role: "Volunteer",
    company: "SocGov 2025: Artificial intelligence for Humanity and Transformation",
    desc: "Assisted in coordinating event logistics.",
    dot: "dot-mint",
    icon: "🤖",
  },
  {
    period: "2025",
    role: "Volunteer",
    company: "Future Professions Summit: Baku 2025",
    desc: "Assisted in coordinating event logistics.",
    dot: "dot-pink",
    icon: "🚀",
  },
];

/* eslint-disable react/prop-types */
export default function Experience({ experience }) {
  return (
    <section id="experience">
      <div className="container">
        <FadeUp>
          <div className="section-label">
            <span>Experience</span>
          </div>
          <h2 className="section-title">
            Where I&apos;ve <em>worked</em>
          </h2>
        </FadeUp>

        <div className="timeline">
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

        <FadeUp delay={200}>
          <div className="section-label" style={{ marginTop: 64 }}>
            <span>Education</span>
          </div>
        </FadeUp>

        <div className="timeline" style={{ marginTop: 32 }}>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>

        <FadeUp delay={200}>
          <div className="section-label" style={{ marginTop: 64 }}>
            <span>Volunteering</span>
          </div>
        </FadeUp>

        <div className="timeline" style={{ marginTop: 32 }}>
          {volunteering.map((item, i) => (
            <TimelineItem key={`vol-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

