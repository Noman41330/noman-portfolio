import { useEffect, useState } from "react";

export default function ImagePreview({ src, alt, className, children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`preview-trigger ${className || ""}`}
        onClick={() => setOpen(true)}
      >
        {children || <img src={src} alt={alt} />}
      </button>

      {open && (
        <div className="photo-preview-overlay" onClick={() => setOpen(false)}>
          <button
            type="button"
            className="photo-preview-close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <img
            className="photo-preview-img"
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}