"use client";
import { useEffect, useRef } from "react";

const IMAGES = [
	{ src: "/kitchen.webp", size: 220, rotate: -10, offset: [20, -40], delay: 0 },
	{ src: "/bathroom.webp", size: 300, rotate: 5, offset: [180, 60], delay: 150 },
	{ src: "/bookcase0.webp", size: 180, rotate: -5, offset: [320, -80], delay: 300 },
	{ src: "/kitchen2.webp", size: 260, rotate: 8, offset: [450, 40], delay: 450 },
	{ src: "/closet.webp", size: 190, rotate: -12, offset: [-60, 120], delay: 600 },
	{ src: "/tvunit.webp", size: 240, rotate: 3, offset: [80, -160], delay: 750 },
];

const HeroAnimated = () => {
	const containerRef = useRef(null);
	const layersRef = useRef([]);

	useEffect(() => {
		const handleMouse = (e) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
			const py = (e.clientY - rect.top) / rect.height - 0.5;

			layersRef.current.forEach((el, i) => {
				if (!el) return;

				// Get individual image position and size
				const imgRect = el.getBoundingClientRect();
				const imgCenterX = imgRect.left + imgRect.width / 2;
				const imgCenterY = imgRect.top + imgRect.height / 2;

				// Calculate distance from mouse to image center
				const distanceX = e.clientX - imgCenterX;
				const distanceY = e.clientY - imgCenterY;
				const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

				// Maximum influence distance (in pixels)
				const maxDistance = 200;
				const influence = Math.max(0, (maxDistance - distance) / maxDistance);

				// Base parallax movement
				const depth = (i + 1) * 8;
				const baseX = px * depth;
				const baseY = py * depth;

				// Additional movement when mouse is near the image
				const hoverStrength = 25;
				const hoverX = influence > 0 ? (distanceX / maxDistance) * hoverStrength : 0;
				const hoverY = influence > 0 ? (distanceY / maxDistance) * hoverStrength : 0;

				// Combine movements
				const moveX = baseX + hoverX;
				const moveY = baseY + hoverY;

				// Add rotation based on mouse proximity
				const rotationInfluence = influence * 8; // max 8 degrees extra rotation
				const hoverRotate = influence > 0 ? (distanceX / maxDistance) * rotationInfluence : 0;
				const originalRotate = IMAGES[i].rotate;
				const totalRotate = originalRotate + hoverRotate;

				// Scale when hovered
				const hoverScale = 1 + (influence * 0.15); // max 15% scale increase

				el.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px)) rotate(${totalRotate}deg) scale(${hoverScale})`;
				el.style.transition = influence > 0.1 ? 'transform 0.15s ease-out' : 'transform 0.3s ease-out';

				// Add a subtle shadow when hovered and bring to front
				if (influence > 0.2) {
					el.style.filter = `drop-shadow(0 ${influence * 20}px ${influence * 40}px rgba(0,0,0,0.3))`;
					el.style.zIndex = 1000; // Bring hovered image to front
				} else {
					el.style.filter = 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))';
					el.style.zIndex = IMAGES.length - i; // Return to original z-index
				}
			});
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("mousemove", handleMouse);
			return () => container.removeEventListener("mousemove", handleMouse);
		}
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative w-full h-[500px] lg:h-[600px]"
			aria-label="Hero collage"
		>
			{IMAGES.map((img, idx) => (
				<div
					key={idx}
					ref={(el) => (layersRef.current[idx] = el)}
					className="absolute rounded-xl shadow-2xl overflow-hidden"
					style={{
						width: img.size,
						height: img.size * 1.3,
						top: `calc(45% + ${img.offset[1]}px)`,
						left: `calc(20% + ${img.offset[0]}px)`,
						transform: `translate(-50%, -50%) rotate(${img.rotate}deg) scale(0.8)`,
						opacity: 0,
						transition: `opacity 0.8s ${img.delay}ms ease-out, transform 0.8s ${img.delay}ms ease-out`,
						backgroundColor: "#f9f6ef",
						zIndex: IMAGES.length - idx, // bakre bilder har lavere z-index
					}}
				>
					<img
						src={img.src}
						alt=""
						className="w-full h-full object-cover block"
						loading="lazy"
					/>
					{/* Gradient overlay for subtilt lysspill */}
					<div className="absolute inset-0 gradient-overlay opacity-30"></div>
				</div>
			))}
			{/* Trigger inngangsanimasjon */}
			<EntryAnimator />

			<style jsx>{`
				@keyframes gradientShift {
					0% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
					100% { background-position: 0% 50%; }
				}

				.gradient-overlay {
					background: linear-gradient(135deg,
						rgba(255,255,255,0.08),
						rgba(37,36,34,0.08),
						rgba(249,246,239,0.12)
					);
					background-size: 200% 200%;
					animation: gradientShift 20s ease infinite;
					pointer-events: none;
				}
			`}</style>
		</div>
	);
};

// Setter inn klasse for å animere inn bildene etter mount
const EntryAnimator = () => {
	useEffect(() => {
		const timer = setTimeout(() => {
			const els = document.querySelectorAll("[aria-label='Hero collage'] > div");
			els.forEach((el, idx) => {
				if (el.classList.contains('absolute')) {
					requestAnimationFrame(() => {
						el.style.opacity = '1';
						el.style.transform = el.style.transform.replace("scale(0.8)", "scale(1)");
					});
				}
			});
		}, 100);

		return () => clearTimeout(timer);
	}, []);
	return null;
};

export default HeroAnimated;
