import { useState } from "react";
import { GraduationCap, X, School, CalendarDays, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institute: "American International University-Bangladesh",
    logo: "/AIUB.png",
    result: "CGPA: 3.87 / 4.00",
    year: "2019 – 2023",
    details:
      "Big milestone of my life.I gained practical project experience, and a solid foundation in software development, database systems, software testing, and system analysis.",
  },
  {
    degree: "Higher Secondary Certificate",
    institute: "Sirajganj Govt. College",
    logo: "/SGC.jpeg",
    result: "GPA: 5.00 / 5.00",
    year: "2017",
    details:
      "College life helped me broaden my knowledge, develop critical thinking skills, and prepare for future academic challenges. I successfully completed my Higher Secondary Certificate (HSC), which marked another significant achievement in my educational journey.",
  },
  {
    degree: "Secondary School Certificate",
    institute: "B.L Govt. High School",
    logo: "/BL.jpg",
    result: "GPA: 5.00 / 5.00",
    year: "2015",
    details:
      "BL School is my glory and a part of my heart. I spent a great time in there. During my BL school years, I gained deeper knowledge in various subjects, improved my skills, and participated in different academic activities. I successfully completed my Secondary School Certificate (SSC), which was an important milestone in my educational journey.",
  },
  {
    degree: "Junior School Certificate",
    institute: "B.L Govt. High School",
    logo: "/BL.jpg",
    result: "GPA: 5.00 / 5.00",
    year: "2012",
    details:
      "Completed Junior School Certificate from B.L Govt.",
  },
  {
    degree: "Primary School Certificate",
    institute: "Shialkole Primary School",
    logo: null,
    result: "Scholarship in General Grade",
    year: "2009",
    details:
      "I gained fundamental knowledge, developed discipline, and built strong friendships. My primary school played an important role in shaping my academic foundation and personal growth.",
  },
  {
    degree: "First Lesson",
    institute: "Sonali Kindergarten School",
    logo: null,
    result: "Early Education",
    year: "Beginning Stage",
    details:
      "The first school of my life. Sonali kinder Garten School holds a special place in my heart. It was where I learned the basics of reading, writing, and making friends. The memories of my teachers and classmates will always remain precious to me.",
  },
];

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null);

  return (
    <section className="content-section page-top education-page">
      <h2 className="section-title with-lines">Education</h2>

      <div className="education-grid">
        {educationData.map((item, index) => (
          <button
            className="glass education-card"
            key={index}
            onClick={() => setSelectedEducation(item)}
          >
            {item.logo ? (
              <div className="education-logo">
                <img src={item.logo} alt={item.institute} />
              </div>
            ) : (
              <div className="education-icon">
                <GraduationCap size={34} />
              </div>
            )}

            <h3>{item.degree}</h3>
            <p>{item.institute}</p>

            <span className="education-click-text">Click for details</span>
          </button>
        ))}
      </div>

      {selectedEducation && (
        <div
          className="education-modal-overlay"
          onClick={() => setSelectedEducation(null)}
        >
          <div
            className="education-modal glass"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="education-modal-close"
              onClick={() => setSelectedEducation(null)}
            >
              <X size={24} />
            </button>

            {selectedEducation.logo ? (
              <div className="education-modal-logo">
                <img
                  src={selectedEducation.logo}
                  alt={selectedEducation.institute}
                />
              </div>
            ) : (
              <div className="education-modal-icon">
                <GraduationCap size={48} />
              </div>
            )}

            <h3>{selectedEducation.degree}</h3>

            <div className="education-detail-list">
              <div className="education-detail-item">
                <School size={20} />
                <span>{selectedEducation.institute}</span>
              </div>

              <div className="education-detail-item">
                <Award size={20} />
                <span>{selectedEducation.result}</span>
              </div>

              <div className="education-detail-item">
                <CalendarDays size={20} />
                <span>{selectedEducation.year}</span>
              </div>
            </div>

            <p className="education-detail-text">{selectedEducation.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}