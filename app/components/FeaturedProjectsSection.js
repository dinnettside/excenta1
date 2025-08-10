'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'BUET BALANSE',
    subtitle: 'Bokhylle i perfekt harmoni',
    image: '/bookcase0.webp',
    origin: 'top left'
  },
  {
    title: 'MINIMALISTISK KJØKKEN',
    subtitle: 'Funksjonelt og stilrent',
    image: '/kitchen0.webp',
    origin: 'top right'
  },
  {
    title: 'VARMT BADEROM',
    subtitle: 'Eksklusivitet i hver detalj',
    image: '/bathroom0.webp',
    origin: 'top left'
  },
  {
    title: 'ROLIG OPPBEVARING',
    subtitle: 'Skreddersydd garderobeløsning',
    image: '/walkincloset0.webp',
    origin: 'top right'
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section className="bg-[#f9f6ef] py-32">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-24">
          <span className="block font-sans">UTVALGTE</span>
          <span className="block font-serif">PROSJEKTER</span>
        </h2>

        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectItem({ title, subtitle, image, origin }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const translateX = useTransform(scrollYProgress, [0, 1], origin === 'top left' ? [-100, 0] : [100, 0])
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 0])

  return (
    <div ref={ref} className="h-[100vh] flex items-center justify-center mb-32 relative">
      <motion.div
        style={{
          scale,
          opacity,
          x: translateX,
          y: translateY,
          transformOrigin: origin,
        }}
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[90vh] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-4xl md:text-6xl font-sans text-white/80 drop-shadow-md">{title}</p>
          <p className="text-md md:text-xl text-white/70 drop-shadow-sm mt-2">{subtitle}</p>
        </div>
      </motion.div>
    </div>
  )
}
