"use client";

// Footer.js
const Footer = () => {
  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2); // Remove "/#"
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#252422] text-white text-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* Logo + tagline */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/favicon.webp" 
              alt="Excenta logo" 
              className="w-6 h-6 rounded-sm"
            />
            <span className="font-semibold text-lg">Excenta AS</span>
          </div>
          <p className="max-w-xs">
            Skreddersydd interiør der design møter tidløs kvalitet.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Til toppen"
            className="mt-4 w-[48px] h-[48px] grid place-items-center border border-white/20 rounded-full hover:bg-white/5 transition"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M5 12l7-7 7 7" />
              <path d="M5 19l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Navigasjon kolonner */}
        <div className="lg:w-2/3 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="uppercase tracking-wider text-xs mb-2">Utforsk</h3>
            <button onClick={() => handleNavClick("/")} className="hover:underline text-left">
              Hjem
            </button>
            <button onClick={() => handleNavClick("/#prosjekter")} className="hover:underline text-left">
              Prosjekter
            </button>
            <button onClick={() => handleNavClick("/about")} className="hover:underline text-left">
              Om oss
            </button>
            <button onClick={() => handleNavClick("/#tjenester")} className="hover:underline text-left">
              Tjenester
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase tracking-wider text-xs mb-2">Kontakt</h3>
            <button onClick={() => handleNavClick("/contact")} className="hover:underline text-left">
              Kontakt oss
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Credit line */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between text-xs text-gray-400 gap-2">
        <div className="flex flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Excenta AS. Alle rettigheter forbeholdes.</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Created by{" "}
            <a
              href="https://dinnettside.no"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              dinnettside.no
            </a>
          </span>
        </div>
        <div className="flex gap-6">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
