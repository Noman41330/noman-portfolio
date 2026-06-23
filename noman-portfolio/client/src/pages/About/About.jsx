import { cvData } from "../../data/cvData";

export default function About() {
  return (
    <section className="content-section page-top">
      <h2 className="section-title">About Me</h2>

      <div className="glass content-card">
        <p>{cvData.about}</p>
      </div>
    </section>
  );
}