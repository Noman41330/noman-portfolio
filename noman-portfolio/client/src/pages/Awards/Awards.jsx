import { Award } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function Awards() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">Awards</h2>

      <div className="card-grid">
        {cvData.awards.map((award) => (
          <div className="glass info-card" key={award}>
            <Award />
            <h3>{award}</h3>
            <p>American International University-Bangladesh</p>
          </div>
        ))}
      </div>
    </section>
  );
}