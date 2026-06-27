import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import photos from "../../data/photography";

export default function Photography() {
  const [selected, setSelected] = useState(null);

  const nextPhoto = () => {
    setSelected((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setSelected((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  return (
    <section className="content-section page-top">

      <h2 className="section-title with-lines">
        Photography Gallery
      </h2>

      <div className="photo-masonry">

        {photos.map((photo, index) => (

          <div
            key={photo.id}
            className="photo-card"
            onClick={() => setSelected(index)}
          >

            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
            />

            <div className="photo-overlay">

              <h3>{photo.title}</h3>

              <span>{photo.category}</span>

            </div>

          </div>

        ))}

      </div>

      {selected !== null && (

        <div
          className="photo-lightbox"
          onClick={() => setSelected(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>

          <button
            className="lightbox-arrow left"
            onClick={(e)=>{
              e.stopPropagation();
              prevPhoto();
            }}
          >
            <ChevronLeft />
          </button>

          <img
            src={photos[selected].src}
            alt=""
            onClick={(e)=>e.stopPropagation()}
          />

          <button
            className="lightbox-arrow right"
            onClick={(e)=>{
              e.stopPropagation();
              nextPhoto();
            }}
          >
            <ChevronRight />
          </button>

        </div>

      )}

    </section>
  );
}