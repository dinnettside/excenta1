// ContactSection.js
import ContactTextLoop from "./ContactTextLoop";
import ContactImages from "./ContactImages";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      aria-label="Kontakt"
      className="relative bg-[#f9f6ef] overflow-hidden py-24 px-6 lg:px-16"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 relative">
        {/* Venstre hjørnebilder - kun desktop */}
        <div className="lg:w-1/4 relative min-h-[600px] lg:min-h-[700px] hidden lg:block">
          <ContactImages side="left" />
        </div>

        {/* Midt: tekst, vertikalt sentrert */}
        <div className="lg:w-1/2 flex flex-col justify-center z-10">
          <div className="mb-8 text-center">
            {/* Kontakt oss animation over the heading */}
            <div className="text-sm lg:text-base mb-2 opacity-80">
              <ContactTextLoop text="TA KONTAKT NÅ" />
            </div>
            <h2 className="text-5xl font-['Hello',sans-serif] leading-tight mb-4 text-gray-900">
              KLAR FOR Å LØFTE ROMMET DITT?
            </h2>
            <p className="text-base max-w-prose mb-6 text-gray-700 mx-auto">
              La oss skreddersy løsninger som kombinerer tidløs design og presisjonshåndverk. Enten det er kjøkken, garderobe, bad eller møbler — vi hjelper deg å realisere visjonen din.
            </p>
            
            {/* Kontakt oss knapp */}
            <div className="flex justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Kontakt oss
              </Link>
            </div>
          </div>

          {/* Mobile bilder - vises under tekst på mobil */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="/kitchen.webp"
                alt="Kjøkkenprosjekt"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="/bathroom.webp"
                alt="Baderomprosjekt"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Høyre hjørnebilder - kun desktop */}
        <div className="lg:w-1/4 relative min-h-[600px] lg:min-h-[700px] hidden lg:block">
          <ContactImages side="right" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
