import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
  useNavigate,
} from "react-router-dom";

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
  Menu,
  X,
  Home as HomeIcon,
} from "lucide-react";

const sectors = [
  { title: "Home", icon: HomeIcon, path: "/" },
  { title: "About", icon: User, path: "/about" },
  { title: "Experience", icon: BriefcaseBusiness, path: "/experience" },
  { title: "Education", icon: GraduationCap, path: "/education" },
  { title: "Skills", icon: Code2, path: "/skills" },
  { title: "Projects", icon: FolderKanban, path: "/projects" },
  { title: "Awards", icon: Award, path: "/awards" },
  { title: "Photography", icon: Camera, path: "/photography" },
  { title: "Contact", icon: Mail, path: "/contact" },
];

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main>
      <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
        <Menu size={28} />
      </button>

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <X size={24} />
        </button>

        <h2>Noman Portfolio</h2>

        <div className="sidebar-menu">
          {sectors.map((item) => {
            const Icon = item.icon;

            return (
              <RouterLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={20} />
                {item.title}
              </RouterLink>
            );
          })}
        </div>
      </aside>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {children}
    </main>
  );
}

function Home() {
  const navigate = useNavigate();

  const profileCards = sectors.filter((item) => item.path !== "/");
  const photos = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];

  return (
    <>
      <section className="hero">
        <div className="profile-photo">
          <img src="/profile.jpg" alt="Md. Abdullah Al Noman" />
        </div>

        <div className="glass hero-card">
          <div className="badge">
            <Sparkles size={18} />
            السلام عليكم
          </div>

          <h1>{cvData.name}</h1>
          <h3>{cvData.title}</h3>
          <h2>{cvData.title2}</h2>
          <p>{cvData.subtitle}</p>
        </div>
      </section>

      <section className="sector-section">
        <h2 className="section-title">Explore My Profile</h2>

        <div className="sector-grid">
          {profileCards.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                className="sector-card"
                onClick={() => navigate(item.path)}
              >
                <Icon size={38} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">My Natural Photography</h2>

        <div className="photo-carousel">
          {photos.map((photo, index) => (
            <div className="carousel-card" key={index}>
              <img src={photo} alt={`Natural photography ${index + 1}`} />
              <span>Nature Collection {index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <HomeContact />
    </>
  );
}

function HomeContact() {
  return (
    <section className="content-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-grid">
        <a className="glass contact-item" href={`mailto:${cvData.email}`}>
          <Mail size={34} />
          <div>
            <h3>Email</h3>
            <p>{cvData.email}</p>
          </div>
        </a>

        <a className="glass contact-item" href={`tel:${cvData.phone}`}>
          <Phone size={34} />
          <div>
            <h3>Phone</h3>
            <p>{cvData.phone}</p>
          </div>
        </a>

        <a
          className="glass contact-item"
          href={cvData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link size={34} />
          <div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/alnoman41330</p>
          </div>
        </a>

        <a
          className="glass contact-item"
          href={cvData.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code2 size={34} />
          <div>
            <h3>GitHub</h3>
            <p>github.com/Noman41330</p>
          </div>
        </a>

        <div className="glass contact-item">
          <MapPin size={34} />
          <div>
            <h3>Location</h3>
            <p>{cvData.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">About Me</h2>

      <div className="glass content-card">
        <p>{cvData.about}</p>
      </div>
    </section>
  );
}

function Experience() {
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

function Education() {
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

function Skills() {
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

function Projects() {
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

function Awards() {
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

function Photography() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">Photography Gallery</h2>

      <div className="photo-grid">
        <div className="photo-card photo-one">Nature Collection 01</div>
        <div className="photo-card photo-two">Nature Collection 02</div>
        <div className="photo-card photo-three">Nature Collection 03</div>
      </div>
    </section>
  );
}

function Contact() {
  return <HomeContact />;
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;