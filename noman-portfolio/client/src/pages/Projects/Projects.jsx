import { FolderKanban } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function Projects() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">Academic Projects</h2>

      <div className="card-grid">
        {cvData.projects.map((project, index) => (
          <div className="glass project-card" key={index}>
            <FolderKanban />
            <h3>{project}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}