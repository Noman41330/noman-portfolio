import { useEffect, useState } from "react";

const photos = [
  { src: "/photo1.jpeg", title: "Nature Collection 01" },
  { src: "/photo2.jpg", title: "Nature Collection 02" },
  { src: "/photo3.jpg", title: "Nature Collection 03" },
  { src: "/photo4.jpeg", title: "Nature Collection 04" },
  { src: "/photo5.jpeg", title: "Nature Collection 05" },
  { src: "/photo6.jpeg", title: "Nature Collection 06" },
  { src: "/photo7.jpg", title: "Nature Collection 07" },
];

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState(null);
  const [paused, setPaused] = useState(false);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index) => {
    let diff = index - active;

    if (diff > photos.length / 2) diff -= photos.length;
    if (diff < -photos.length / 2) diff += photos.length;

    return diff;
  };

  useEffect(() => {
    if (paused || preview) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, preview]);

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") setPreview(null);
    };

    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <section className="content-section">
      <h2 className="section-title with-lines">Some Of My Captures</h2>

      <div
        className="neon-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="carousel-arrow left" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-stage">
          {photos.map((photo, index) => {
            const position = getPosition(index);

            return (
              <button
                key={photo.src}
                className={`neon-slide ${position === 0 ? "active" : ""}`}
                onClick={() => setPreview(photo)}
                style={{
                  transform: `
                    translateX(${position * 145}px)
                    translateZ(${position === 0 ? 120 : -Math.abs(position) * 80}px)
                    scale(${position === 0 ? 1.08 : 0.78})
                    rotateY(${position * -18}deg)
                  `,
                  zIndex: position === 0 ? 999 : 50 - Math.abs(position),
                  opacity: Math.abs(position) > 3 ? 0 : 1,
                }}
              >
                <img src={photo.src} alt={photo.title} />
              </button>
            );
          })}
        </div>

        <button className="carousel-arrow right" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      {preview && (
        <div className="photo-preview-overlay" onClick={() => setPreview(null)}>
          <button
            className="photo-preview-close"
            onClick={() => setPreview(null)}
          >
            ×
          </button>

          <img
            className="photo-preview-img"
            src={preview.src}
            alt={preview.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}