import { GraduationCap } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function Education() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">Education</h2>

      <div className="card-grid">
        {cvData.education.map((item, index) => (
          <div className="glass info-card" key={index}>
            <GraduationCap />
            <h3>{item.degree}</h3>
            <p>{item.institute}</p>
            <b>{item.result}</b>
            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}