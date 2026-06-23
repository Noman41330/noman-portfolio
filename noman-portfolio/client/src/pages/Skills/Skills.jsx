import { cvData } from "../../data/cvData";

export default function Skills() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">Skills</h2>

      <div className="skill-cloud">
        {cvData.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}