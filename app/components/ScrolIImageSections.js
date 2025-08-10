'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const sections = [
	{
		title: 'Skreddersydde kjøkken',
		text: 'Et kjøkken er mer enn bare funksjon – det er hjemmets hjerte. Vi designer kjøkken med sjel, laget etter dine mål og drømmer. Med frihet i materialvalg, mål og uttrykk skaper vi løsninger som speiler din personlighet og stil.',
		image: '/kitchen.webp',
	},
	{
		title: 'Garderober med presisjon',
		text: 'Våre garderobeløsninger kombinerer funksjonalitet og eleganse. Alt skreddersys for å optimalisere hver kvadratcentimeter og fremheve den arkitektoniske helheten i hjemmet ditt. Ren luksus – praktisk og tidløs.',
		image: '/closet.webp',
	},
	{
		title: 'Estetiske baderom',
		text: 'Et bad skal gi deg en følelse av ro og velvære. Vi bygger baderomsmøbler etter dine behov, med en perfekt balanse mellom funksjon og estetikk. Eksklusive materialvalg og skreddersydde detaljer gir et unikt uttrykk.',
		image: '/bathroom.webp',
	},
	{
		title: 'TV-møbler og lavmøbler',
		text: 'Moderne og stilrene TV-benker og lavmøbler som løfter interiøret. Designet for sømløs integrasjon i hjemmet og bygget for å vare. Skreddersydde løsninger som kombinerer estetikk, lagring og teknologi.',
		image: '/tvunit.webp',
	},
]

export default function ScrollImageSection() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState(null)
	const [prevOpacity, setPrevOpacity] = useState(0) // 1 -> 0 ved fade ut

	const tickingRef = useRef(false)

	useEffect(() => {
		const onScroll = () => {
			if (tickingRef.current) return
			tickingRef.current = true

			requestAnimationFrame(() => {
				const textSections = document.querySelectorAll('.text-section')
				textSections.forEach((section, index) => {
					const rect = section.getBoundingClientRect()
					if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
						if (index !== activeIndex) {
							// Preload neste bilde for å unngå hvitt blink
							const img = new window.Image()
							img.src = sections[index].image
							img.onload = () => {
								// Sett forrige og start kryssfade
								setPrevIndex(activeIndex)
								setPrevOpacity(1) // forrige bilde starter synlig
								setActiveIndex(index)

								// Kick over til 0 etter et øyeblikk for å trigge CSS-transition
								setTimeout(() => setPrevOpacity(0), 20)

								// Rydd vekk forrige etter fade
								setTimeout(() => setPrevIndex(null), 480)
							}
						}
					}
				})
				tickingRef.current = false
			})
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [activeIndex])

	return (
		<section className="relative flex flex-col lg:flex-row w-full bg-[#f9f6ef]">
			{/* Venstre: Tekstseksjoner */}
			<div className="w-full lg:w-1/2 px-6 lg:px-24 py-0 space-y-[10vh] lg:space-y-[10vh]">
				{sections.map((item, i) => (
					<div key={i} className="text-section flex flex-col justify-center min-h-screen lg:h-screen">
						<h2 className="font-['Playfair_Display'] text-4xl font-bold text-black mb-6">{item.title}</h2>
						<p className="text-lg text-black mb-8 lg:mb-0">{item.text}</p>

						{/* Mobilbilde under teksten */}
						<div className="lg:hidden mt-8">
							<Image
								src={item.image}
								alt={item.title}
								width={800}
								height={600}
								style={{ objectFit: 'cover', objectPosition: 'center' }}
								className="w-full h-[300px] rounded-xl"
								priority={i === 0}
							/>
						</div>
					</div>
				))}
			</div>

			{/* Høyre: Sticky bilde – smooth crossfade, ingen hvitt mellom */}
			<div className="w-full lg:w-1/2 hidden lg:flex sticky top-0 h-screen items-center justify-center">
				<div className="relative w-[90%] h-[80%] rounded-xl overflow-hidden">
					{/* Nåværende (under) */}
					<Image
						key={sections[activeIndex].image}
						src={sections[activeIndex].image}
						alt={sections[activeIndex].title}
						fill
						style={{
							objectFit: 'contain',
							objectPosition: 'center',
							opacity: 1,
							transition: 'opacity 0.45s ease-in-out',
							willChange: 'opacity',
						}}
						className="rounded-xl"
						priority
					/>

					{/* Forrige (over) – fades fra 1 til 0 */}
					{prevIndex !== null && (
						<Image
							key={`prev-${sections[prevIndex].image}`}
							src={sections[prevIndex].image}
							alt={sections[prevIndex].title}
							fill
							style={{
								objectFit: 'contain',
								objectPosition: 'center',
								opacity: prevOpacity,
								transition: 'opacity 0.45s ease-in-out',
								willChange: 'opacity',
							}}
							className="rounded-xl pointer-events-none"
							priority={false}
						/>
					)}
				</div>
			</div>
		</section>
	)
}
