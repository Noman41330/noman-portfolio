import { Lightbulb, Target, Rocket, Presentation } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function About() {
  return (
    <section className="content-section page-top about-page">
      <h2 className="section-title with-lines">About Me</h2>

      <div className="about-hero glass">
        <div className="about-content">
          <span className="about-badge">Who I Am</span>

          <h3>
            A passionate software and administrative professional focused on
            building organized, reliable, and efficient digital systems.
          </h3>

          <p>
            {cvData.about} I enjoy solving real business problems through clean
            workflows, structured requirement analysis, manual testing, project
            coordination, and smart Google Sheets automation.
          </p>
        </div>

              <div className="about-cartoon">
        <img
          src="/developer.gif"
          alt="Developer Illustration"
          className="developer-gif"
        />
      </div>
      </div>

      <div className="about-grid">
        <div className="glass about-card">
          <Lightbulb size={42} />
          <h3>My Passion</h3>
          <p>
            I am passionate about learning new technologies, improving business
            processes, and turning complex tasks into simple automated systems.
          </p>
        </div>

        <div className="glass about-card">
          <Target size={42} />
          <h3>My Vision</h3>
          <p>
            My vision is to grow as a strong technology professional who can
            connect software, operations, testing, and management into one
            efficient system.
          </p>
        </div>

        <div className="glass about-card">
          <Rocket size={42} />
          <h3>My Goal</h3>
          <p>
            I want to build practical, scalable, and user-friendly solutions
            that save time, reduce errors, and help teams work with more
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}