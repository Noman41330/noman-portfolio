import {
  Code2,
  FileCode2,
  Database,
  Bug,
  ClipboardCheck,
  Table2,
  Server,
  Braces,
  Coffee,
  Cpu,
  Hash,
  Layers,
} from "lucide-react";

const skills = [
  {
    name: "Google Sheets Automation",
    icon: Table2,
    level: "Good",
    percent: 60,
  },
  {
    name: "Requirement Analysis",
    icon: ClipboardCheck,
    level: "Very Good",
    percent: 60,
  },
  {
    name: "Manual Testing",
    icon: Bug,
    level: "Very Good",
    percent: 60,
  },
  {
    name: "JavaScript",
    icon: Braces,
    level: "Good",
    percent: 55,
  },
  {
    name: "React.js",
    icon: Code2,
    level: "Good",
    percent: 40,
  },
  {
    name: "MERN Stack",
    icon: Layers,
    level: "Intermediate",
    percent: 50,
  },
  {
    name: "HTML5",
    icon: FileCode2,
    level: "Very Good",
    percent: 40,
  },
  {
    name: "CSS3",
    icon: Layers,
    level: "Good",
    percent: 40,
  },
  {
    name: "Bootstrap",
    icon: Layers,
    level: "Good",
    percent: 40,
  },
  {
    name: "SQL",
    icon: Database,
    level: "Good",
    percent: 10,
  },
  {
    name: "Microsoft SQL Server",
    icon: Server,
    level: "Intermediate",
    percent: 15,
  },
  {
    name: "PHP",
    icon: Code2,
    level: "Intermediate",
    percent: 15,
  },
  {
    name: "Java",
    icon: Coffee,
    level: "Intermediate",
    percent: 15,
  },
  {
    name: "Flutter / Dart",
    icon: Cpu,
    level: "Familiar",
    percent: 15,
  },
  {
    name: "C++",
    icon: Cpu,
    level: "Familiar",
    percent: 15,
  },
  {
    name: "C#",
    icon: Hash,
    level: "Familiar",
    percent: 15,
  },
];

export default function Skills() {
  return (
    <section className="content-section page-top skills-page">
      <h2 className="section-title with-lines">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div className="glass skill-card" key={skill.name}>
              <div className="skill-head">
                <div className="skill-icon">
                  <Icon size={26} />
                </div>

                <div className="skill-info">
                  <h3>{skill.name}</h3>

                  {/* <span className="skill-level-badge">
                    {skill.level}
                  </span> */}
                </div>
              </div>

              <div className="skill-grade">

                <div className="grade-labels">
                  <span>Familiar</span>
                  <span>Rising</span>
                  <span>Intermediate</span>
                  <span>Good</span>
                  <span>Very Good</span>
                  <span>Expert</span>
                </div>

                <div className="grade-line">
                  <div
                    className="grade-dot"
                    style={{ left: `${skill.percent}%` }}
                  ></div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}