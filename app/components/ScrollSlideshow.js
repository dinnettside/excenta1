"use client";
import { useState } from "react";

const SLIDES = [
  {
    title: "Konsultasjon & skisse",
    desc: "Du sender oss en detaljert skisse eller idé med mål og ønsker, så vi kan gi en presis pris—uten unødvendige tillegg, slik at du sparer penger.",
  },
  {
    title: "Prisbekreftelse",
    desc: "Vi returnerer en konkret tilbudsoversikt via e-post eller telefon. Når du godkjenner prisen, går vi videre.",
  },
  {
    title: "Produksjonstegninger",
    desc: "Vi utarbeider nøyaktige produksjonstegninger basert på din godkjente skisse — du får gjennomgå og godkjenne før vi starter.",
  },
  {
    title: "Produksjon & oppfølging",
    desc: "Våre håndverkere produserer møblene i materialer av høy kvalitet. Du får løpende oppdateringer om fremdriften dersom du ønsker.",
  },
  {
    title: "Montering",
    desc: "Vi leverer og monterer møblene hos deg, med presisjon og omhu, slik at alt står perfekt — klart til bruk.",
  },
];

const ScrollSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-16 px-6 lg:px-16 bg-[#f9f6ef]">
      <div className="max-w-[1200px] mx-auto">
        {/* Overskrift */}
        <div className="max-w-[1000px] mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-widest mb-2 text-gray-600">Hvordan vi jobber</p>
          <h2 className="text-3xl font-semibold">Fra idé til realisert møbel</h2>
        </div>
        
        {/* Slideshow container */}
        <div className="relative max-w-[600px] mx-auto">
          {/* Slide content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 min-h-[300px] flex flex-col justify-center">
            <div className="flex items-center justify-center w-12 h-12 bg-[#252422] text-white rounded-full text-lg font-semibold mb-6 mx-auto">
              {currentSlide + 1}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 text-center">
              {SLIDES[currentSlide].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              {SLIDES[currentSlide].desc}
            </p>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
            aria-label="Forrige slide"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
            aria-label="Neste slide"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#252422] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Gå til slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollSlideshow;
