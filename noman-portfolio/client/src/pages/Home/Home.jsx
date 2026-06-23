import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { cvData } from "../../data/cvData";
import { portfolioRoutes } from "../../routes/portfolioRoutes";
import PhotoCarousel from "../../components/PhotoCarousel/PhotoCarousel";
import ContactGrid from "../../components/ContactGrid/ContactGrid";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

export default function Home() {
  const navigate = useNavigate();
  const profileCards = portfolioRoutes.filter((item) => item.path !== "/");

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
          <Sparkles size={18} />
          </div>
          <h3 className="intro-text">This is,</h3>
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

      <PhotoCarousel />
      <ContactGrid />
    </>
  );
}