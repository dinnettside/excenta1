"use client";

// ContactTextLoop.js
const ContactTextLoop = ({ text = "Kontakt oss nå" }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap font-medium tracking-wide relative">
      <div className="flex gap-8 animate-scroll">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="inline-block text-gray-800">
            {text}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 14s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactTextLoop;
