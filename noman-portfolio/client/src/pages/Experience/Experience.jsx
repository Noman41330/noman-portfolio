import { BriefcaseBusiness, CalendarDays, CheckCircle2 } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function Experience() {
  return (
    <section className="content-section page-top experience-page">
      <h2 className="section-title with-lines">Professional Experience</h2>

      <div className="experience-timeline">
        {cvData.experience.map((item, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-marker">
              <BriefcaseBusiness size={22} />
            </div>

            <div className="glass experience-card">
              <div className="experience-header">
                <div>
                  <h3>{item.role}</h3>
                                    <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    <img
                      src={item.companyLogo}
                      alt={item.company}
                      className="company-logo"
                    />

                    <span>{item.company}</span>
                  </a>
                </div>

                <span className="experience-date">
                  <CalendarDays size={17} />
                  {item.duration}
                </span>
              </div>

              <div className="experience-points">
                {item.points.map((point, i) => (
                  <div className="experience-point" key={i}>
                    <CheckCircle2 size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}