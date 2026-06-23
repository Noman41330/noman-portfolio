import { cvData } from "../../data/cvData";

export default function Experience() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">Professional Experience</h2>

      <div className="timeline">
        {cvData.experience.map((item, index) => (
          <div className="glass timeline-card" key={index}>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <span>{item.duration}</span>

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}