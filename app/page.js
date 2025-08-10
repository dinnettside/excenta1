// app/page.js
"use client";

import HeroTitle from "./components/HeroTitle";
import CardStackHero from "./components/CardStackHero";
import ScrollImageSection from "./components/ScrollImageSections"; // ← riktig sti
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import ClientTestimonials from "./components/ClientTestimonials";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-[#f9f6ef] text-gray-900">
      {/* HERO */}
      <HeroTitle />
      <CardStackHero />

      {/* Tjenester-intro */}
      <section id="tjenester" className="bg-[#f9f6ef] -mt-0 text-center py-24">
        <h2 className="text-3xl md:text-5xl tracking-widest uppercase text-black font-serif">
          — SKREDDERSYDDE LØSNINGER — TIDLØST DESIGN — HÅNDLAGET KVALITET —
        </h2>
      </section>

      {/* Scroll-seksjon */}
      <ScrollImageSection />

      {/* Prosjekter */}
      <div id="prosjekter" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <FeaturedProjectsSection />
      </div>

      {/* Kundeomtaler */}
      <ClientTestimonials />

      {/* Kontaktseksjon */}
      <ContactSection />
    </main>
  );
}
