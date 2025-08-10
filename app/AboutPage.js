// AboutPage.js
"use client";

import ContactSection from "./components/ContactSection"; // gjenbruk kontaktseksjon
import Footer from "./components/Footer";
import HeroAnimated from "./components/HeroAnimated";
import { ScrollReveal } from "./components/ScrollReveal";
import ScrollSlideshow from "./components/ScrollSlideshow";

const AboutPage = () => {
  return (
    <main className="bg-[#f9f6ef] text-gray-900">
      {/* Hero med flytende collage */}
      <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[80vh]">
        <ScrollReveal direction="left" className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Om oss
          </p>
          <h1 className="text-[3.5rem] leading-tight font-['Hello',sans-serif] mb-4">
            Håndverk formet av visjon.
          </h1>
          <p className="text-lg max-w-prose mb-6">
            Excenta AS skaper skreddersydde interiørløsninger der tidløs design møter presisjon.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-black pb-1 hover:border-[#252422] transition-colors duration-300"
          >
            Kontakt oss <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>
        
        <ScrollReveal direction="right" delay={200} className="lg:w-1/2 relative">
          {/* Desktop version - kompleks animasjon */}
          <div className="hidden lg:block">
            <HeroAnimated />
          </div>
          
          {/* Mobile version - enkelt bilde */}
          <div className="lg:hidden w-full max-w-[350px] mx-auto">
            <img
              src="/kitchen1.webp"
              alt="Vårt håndverk"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Mission / visjon med scroll reveal */}
      <section className="py-8 px-6 lg:px-16 max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-16">
        <ScrollReveal direction="left" className="lg:w-1/2">
          <p className="text-xs uppercase tracking-widest mb-2 text-gray-600">
            Vårt oppdrag
          </p>
          <h2 className="text-4xl font-semibold mb-4">
            Vi skaper møbler som inspirerer.
          </h2>
          <p className="text-lg max-w-prose">
            Vår misjon er å skape møbler som løfter og beriker hjemmet ditt. Vi mener at god design går utover utseende — det handler om å bygge funksjonelle, skreddersydde møbler som reflekterer din unike stil og behov.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-black pb-1 hover:border-[#252422] transition-colors duration-300"
            >
              Kontakt oss <span aria-hidden="true">→</span>
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right" delay={150} className="lg:w-1/2 flex justify-end">
          <div className="relative w-full max-w-[400px]">
            <img
              src="/omoss.webp"
              alt="Materialer og håndverk"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Scroll-controlled slideshow prosess-seksjon */}
      <ScrollSlideshow />

      {/* Kontakt oss - gjenbruk komponent */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default AboutPage;
