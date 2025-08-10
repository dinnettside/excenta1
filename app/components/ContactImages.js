// ContactImages.js
import { useEffect, useRef, useState } from "react";

/**
 * Hjørnebilder: plasseres i hvert sitt hjørne, med reveal fra outline til faktisk bilde.
 * Bytt ut src med dine faktiske paths.
 */
const cornerImages = [
  {
    src: "/kitchen.webp",
    alt: "Prosjekt top-left",
    corner: "top-left",
    delay: 0,
  },
  {
    src: "/bathroom.webp",
    alt: "Prosjekt top-right",
    corner: "top-right",
    delay: 300,
  },
  {
    src: "/closet.webp",
    alt: "Prosjekt bottom-left",
    corner: "bottom-left",
    delay: 600,
  },
  {
    src: "/tvunit.webp",
    alt: "Prosjekt bottom-right",
    corner: "bottom-right",
    delay: 900,
  },
];

const cornerPositionClasses = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const ContactImages = ({ side = "right" }) => {
  // Filter images based on which side they should appear on
  const leftImages = cornerImages.filter(img => 
    img.corner === "top-left" || img.corner === "bottom-left"
  );
  
  const rightImages = cornerImages.filter(img => 
    img.corner === "top-right" || img.corner === "bottom-right"
  );

  const imagesToShow = side === "left" ? leftImages : rightImages;

  return (
    <div className="relative w-full h-full">
      {imagesToShow.map((img, i) => (
        <RevealCornerImage
          key={i}
          src={img.src}
          alt={img.alt}
          corner={img.corner}
          delay={img.delay}
          side={side}
        />
      ))}
    </div>
  );
};

const RevealCornerImage = ({ src, alt, corner, delay = 0, side = "right" }) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setRevealed(true), delay);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  // Juster størrelse og offset etter behov - større bilder
  const sizeClass = "w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] lg:w-[280px] lg:h-[280px] rounded-2xl";
  
  // Adjust positioning based on side and corner
  let positionClass;
  if (side === "left") {
    if (corner === "top-left") {
      positionClass = "top-[-20px] right-0"; // Moved up slightly
    } else if (corner === "bottom-left") {
      positionClass = "bottom-[-20px] right-0"; // Moved down slightly
    }
  } else {
    if (corner === "top-right") {
      positionClass = "top-[-20px] left-0"; // Moved up slightly
    } else if (corner === "bottom-right") {
      positionClass = "bottom-[-20px] left-0"; // Moved down slightly
    }
  }

  // Mindre innrykk siden bildene er større
  const insetOffset = "m-6 lg:m-8";

  return (
    <div
      ref={ref}
      className={`absolute ${positionClass} ${sizeClass} overflow-hidden shadow-lg ${insetOffset}`}
      aria-label={alt}
      style={{ backgroundColor: "#f9f6ef" }}
    >
      {/* Placeholder outline */}
      <div
        className={`absolute inset-0 bg-[#d3d1cc] rounded-2xl border border-black/10 transition-all duration-400 ${
          revealed ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      ></div>

      {/* Bilde */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover block rounded-2xl transform transition-all duration-700 ${
          revealed ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
        loading="lazy"
        draggable="false"
        style={{ objectPosition: "center" }}
      />
    </div>
  );
};

export default ContactImages;
