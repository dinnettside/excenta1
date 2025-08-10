'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: 'Vi er så fornøyde med løsningen – kvaliteten, kommunikasjonen og resultatet er helt topp.',
    name: 'Silje Hansen',
    title: 'Kunde',
    avatar: '/anonymdame.webp',
  },
  {
    text: 'Resultatet ble akkurat slik vi drømte om. Håndverket er utsøkt.',
    name: 'Morten Aas',
    title: 'Kunde',
    avatar: '/anonymherre.webp',
  },
  {
    text: 'Effektivt, stilrent og trygt hele veien. Anbefales på det varmeste.',
    name: 'Elisabeth Berg',
    title: 'Kunde',
    avatar: '/anonymdame.webp',
  },
]

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const next = () => setIndex((index + 1) % total)
  const prev = () => setIndex((index - 1 + total) % total)

  return (
    <section className="bg-[#f9f6ef] -mt-30 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-6">
          <span className="block font-sans">DET VÅRE KUNDER</span>
          <span className="block font-serif">SIER</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Vi er stolte av å hjelpe våre kunder med å skape rom de virkelig trives i.
        </p>

        <div className="relative overflow-hidden h-[220px] md:h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="absolute w-full h-full"
            >
              <TestimonialCard data={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow text-black">
            ←
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow text-black">
            →
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? 'bg-black' : 'bg-gray-400'} transition`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-3xl flex flex-col items-center justify-center h-full">
      <p className="text-sm italic text-gray-700 max-w-xl mb-6">"{data.text}"</p>
      <div className="flex items-center gap-4">
        <img src={data.avatar} alt={data.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-800">{data.name}</p>
          <p className="text-xs text-gray-600">{data.title}</p>
        </div>
      </div>
    </div>
  )
}
