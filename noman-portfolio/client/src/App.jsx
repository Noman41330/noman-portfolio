import "./App.css";
import { cvData } from "./data/cvData";

import {
  User,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  FolderKanban,
  BookOpen,
  Award,
  Camera,
  Mail,
  Link,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

function App() {
  const sectors = [
    { title: "About", icon: User, id: "about" },
    { title: "Experience", icon: BriefcaseBusiness, id: "experience" },
    { title: "Education", icon: GraduationCap, id: "education" },
    { title: "Skills", icon: Code2, id: "skills" },
    { title: "Projects", icon: FolderKanban, id: "projects" },
    { title: "Publication", icon: BookOpen, id: "publication" },
    { title: "Awards", icon: Award, id: "awards" },
    { title: "Photography", icon: Camera, id: "photography" },
    { title: "Contact", icon: Mail, id: "contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="hero">
        <div className="glass hero-card">
          <div className="badge">
            <Sparkles size={18} />
            Personal Portfolio
          </div>

          <h1>{cvData.name}</h1>
          <h2>{cvData.title}</h2>
          <p>{cvData.subtitle}</p>

          <div className="hero-links">
            <a href={cvData.github} target="_blank" rel="noopener noreferrer">
              <Code2 size={18} />
              GitHub
            </a>

            <a href={cvData.linkedin} target="_blank" rel="noopener noreferrer">
              <Link size={18} />
              LinkedIn
            </a>

            <a href={`mailto:${cvData.email}`}>
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="sector-section">
        <h2 className="section-title">Explore My Profile</h2>

        <div className="sector-grid">
          {sectors.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className="sector-card"
                onClick={() => scrollTo(item.id)}
              >
                <Icon size={38} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="about" className="content-section">
        <h2 className="section-title">About Me</h2>

        <div className="glass content-card">
          <p>{cvData.about}</p>
        </div>
      </section>

      <section id="experience" className="content-section">
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

      <section id="education" className="content-section">
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

      <section id="skills" className="content-section">
        <h2 className="section-title">Skills</h2>

        <div className="skill-cloud">
          {cvData.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
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

      <section id="publication" className="content-section">
        <h2 className="section-title">Publication</h2>

        <div className="glass content-card">
          <BookOpen size={36} />
          <h3>{cvData.publication}</h3>
          <p>Natural Language Processing Journal, 2024</p>
        </div>
      </section>

      <section id="awards" className="content-section">
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

      <section id="photography" className="content-section">
        <h2 className="section-title">Natural Photography Hobby</h2>

        <div className="photo-grid">
          <div className="photo-card">Nature Collection 01</div>
          <div className="photo-card">Nature Collection 02</div>
          <div className="photo-card">Nature Collection 03</div>
        </div>
      </section>

      <section id="contact" className="content-section">
        <h2 className="section-title">Contact</h2>

        <div className="glass contact-card">
          <p>
            <Mail size={18} />
            {cvData.email}
          </p>

          <p>
            <Phone size={18} />
            {cvData.phone}
          </p>

          <p>
            <MapPin size={18} />
            {cvData.location}
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;