"use client";

import HeroTitle from "./components/HeroTitle";
import CardStackHero from "./components/CardStackHero";
import ScrollImageSections from "./components/ScrolIImageSections";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import ClientTestimonials from "./components/ClientTestimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#f9f6ef] text-gray-900">
      <HeroTitle />
      <CardStackHero />

      <section
        id="tjenester"
        className="bg-[#f9f6ef] -mt-0 text-center py-24"
      >
        <h2 className="text-3xl md:text-5xl tracking-widest uppercase text-black font-serif">
          – SKREDDERSYDDE LØSNINGER – TIDLØST DESIGN – HÅNDLAGET KVALITET –
        </h2>
      </section>

      <ScrollImageSections />
      <div id="prosjekter">
        <FeaturedProjectsSection />
      </div>
      <ClientTestimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
