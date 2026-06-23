import { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { cvData } from "../../data/cvData";

const contactItems = [
  {
    title: "Email",
    icon: Mail,
    type: "popup",
    value: cvData.email,
  },
  {
    title: "Phone",
    icon: Phone,
    type: "popup",
    value: cvData.phone,
  },
  {
    title: "Present Address",
    icon: MapPin,
    type: "popup",
    value: cvData.location,
  },
  {
    title: "Permanent Address",
    icon: MapPin,
    type: "popup",
    value: "Shialkole, Sirajganj",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    type: "link",
    link: cvData.linkedin,
  },
  {
    title: "GitHub",
    icon: FaGithub,
    type: "link",
    link: cvData.github,
  },
];

export default function ContactGrid() {
  const [popup, setPopup] = useState(null);

  return (
    <section className="content-section contact-section">
      <h2 className="section-title with-lines">Contact Me</h2>

      <div className="contact-grid contact-grid-clean">
        {contactItems.map((item) => {
          const Icon = item.icon;

          if (item.type === "link") {
            return (
              <a
                key={item.title}
                className="glass contact-mini-card"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={42} />
                <h3>{item.title}</h3>
              </a>
            );
          }

          return (
            <button
              key={item.title}
              className="glass contact-mini-card"
              onClick={() => setPopup(item)}
            >
              <Icon size={42} />
              <h3>{item.title}</h3>
            </button>
          );
        })}
      </div>

      {popup && (
        <div className="contact-popup-overlay" onClick={() => setPopup(null)}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="contact-popup-close" onClick={() => setPopup(null)}>
              <X size={24} />
            </button>

            <popup.icon size={48} />

            <h3>{popup.title}</h3>
            <p>{popup.value}</p>
          </div>
        </div>
      )}
    </section>
  );
}