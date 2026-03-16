"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { images } from "@/lib/images"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.background}
          alt="Cafetería Las Tres Regiones - Ambiente acogedor con granos de café y elementos peruanos"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl  font-bold text-wine-dark font-cinzel">Las Tres Regiones</h1>
        <p className="text-xl md:text-2xl text-wine-dark/80 mb-8 max-w-2xl mx-auto">Una cafetería con alma peruana</p>
        <p className="text-lg text-wine-dark/70 mb-12 max-w-3xl mx-auto">
          Descubre los auténticos sabores de la costa, sierra y selva del Perú en cada taza
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("menu")}
            className="bg-leaf-green hover:bg-leaf-green/90 text-white px-8 py-3 text-lg"
          >
            Ver Carta
          </Button>
          <Button
            onClick={() => scrollToSection("location")}
            variant="outline"
            className="border-wine-dark text-wine-dark hover:bg-wine-dark hover:text-white px-8 py-3 text-lg"
          >
            Visítanos
          </Button>
        </div>
      </div>
      {/* Botón para bajar a la siguiente sección */}
      <div className="absolute left-0 right-0 flex justify-center z-20 bottom-4 md:bottom-8">
        <button
          onClick={() => {
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
              const isMobile = window.innerWidth < 768
              aboutSection.scrollIntoView({ behavior: "smooth", block: isMobile ? "start" : "center" })
            }
          }}
          className="bg-leaf-green/90 hover:bg-leaf-green text-white rounded-full p-2 md:p-3 shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-leaf-green"
          aria-label="Bajar a la siguiente sección"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
