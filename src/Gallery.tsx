import { useEffect, useState } from "react";
import "./Gallery.css";

// Filenames follow "<2-digit order>_<name>_<size>.<ext>", e.g. "01_juno_playing_blackjack_tall.jpg".
const FILENAME_PATTERN = /^\d+_(.+)_(tall|wide|small|big)$/;

const images = Object.entries(
  import.meta.glob<string>("./assets/gallery/cats/*.{jpg,jpeg,png,gif,webp}", {
    eager: true,
    import: "default",
  }),
)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src]) => {
    const filename = path
      .replace("./assets/gallery/cats/", "")
      .replace(/\.[^.]+$/, "");
    const [_, name, size] = filename.match(FILENAME_PATTERN)!;
    return { src, alt: name.replace(/[_-]+/g, " "), size };
  });

export default function Gallery() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(
    null,
  );

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <div className="gallery">
      <h1>
        <b>Gallery</b>
      </h1>
      <div className="gallery-content">
        <h2>My Cats</h2>
        <div className="collage-container">
          {images.map(({ src, alt, size }) => (
            <div
              key={src}
              className={`collage-item ${size}`}
              onClick={() => setSelected({ src, alt })}
            >
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
        {selected && (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <img
              src={selected.src}
              alt={selected.alt}
              className="modal-image"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
