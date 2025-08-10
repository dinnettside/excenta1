"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/kitchen3.webp",
  "/kitchen2.webp",
  "/kitchen1.webp",
  "/kitchen4.webp",
  "/kitchen5.webp",
];

export default function CardStackHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "start end"],
    layoutEffect: false,
  });

  // Define transforms for each image outside the map
  const fanRotations = [-0, -0, 0, 0, 0];
  const fanOffsetsX = [-685, -350, 0, 350, 685];
  const fanOffsetsY = [-0, -30, -65, -30, -0];
  const fanScales = [0.9, 0.95, 1, 0.95, 0.9];

  // Create transform hooks for each image position
  const x0 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsX[0]]);
  const y0 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsY[0]]);
  const rotate0 = useTransform(scrollYProgress, [0, 0.2], [0, fanRotations[0]]);
  const scale0 = useTransform(scrollYProgress, [0, 0.2], [1, fanScales[0]]);

  const x1 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsX[1]]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsY[1]]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.2], [0, fanRotations[1]]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, fanScales[1]]);

  const x2 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsX[2]]);
  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsY[2]]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.2], [0, fanRotations[2]]);
  const scale2 = useTransform(scrollYProgress, [0, 0.2], [1, fanScales[2]]);

  const x3 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsX[3]]);
  const y3 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsY[3]]);
  const rotate3 = useTransform(scrollYProgress, [0, 0.2], [0, fanRotations[3]]);
  const scale3 = useTransform(scrollYProgress, [0, 0.2], [1, fanScales[3]]);

  const x4 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsX[4]]);
  const y4 = useTransform(scrollYProgress, [0, 0.2], [0, fanOffsetsY[4]]);
  const rotate4 = useTransform(scrollYProgress, [0, 0.2], [0, fanRotations[4]]);
  const scale4 = useTransform(scrollYProgress, [0, 0.2], [1, fanScales[4]]);

  const transforms = [
    { x: x0, y: y0, rotate: rotate0, scale: scale0 },
    { x: x1, y: y1, rotate: rotate1, scale: scale1 },
    { x: x2, y: y2, rotate: rotate2, scale: scale2 },
    { x: x3, y: y3, rotate: rotate3, scale: scale3 },
    { x: x4, y: y4, rotate: rotate4, scale: scale4 },
  ];

  // Mobile scroll transform - single image moves down
  const mobileY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <div ref={containerRef} className="relative w-full h-[90vh] bg-[#f9f6ef]">
      <div className="min-h-[55vh] flex items-center justify-center">
        <div className="relative w-full h-[800px] flex items-center justify-center">
          {/* Mobile version - single centered image */}
          <motion.div
            style={{
              y: mobileY,
              zIndex: 20,
              width: "280px", // Smaller for mobile
              height: "420px", // Smaller for mobile
              backgroundImage: `url(${images[2]})`, // Center image
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              willChange: "transform",
            }}
            className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
            initial={false}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
          />

          {/* Desktop version - all images with fan animation */}
          <div className="hidden md:block w-full h-full relative">
            {images.map((image, index) => {
              const centerIndex = 2;
              const level = Math.abs(index - centerIndex);
              const transform = transforms[index];

              return (
                <motion.div
                  key={index}
                  style={{
                    x: transform.x,
                    y: transform.y,
                    rotate: transform.rotate,
                    scale: transform.scale,
                    zIndex: 20 - level,
                    width: "340px",
                    height: "510px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    willChange: "transform",
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl"
                  initial={false}
                  transition={{ type: "spring", damping: 30, stiffness: 100 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
