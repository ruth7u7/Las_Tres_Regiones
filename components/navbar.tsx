"use client"

import Image from "next/image"
import { images } from "@/lib/images"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-light/95 backdrop-blur-sm border-b border-warm-light/20">
      <div className="w-full px-2 md:px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src={images.logo.main}
            alt="Las Tres Regiones Logo"
            width={56}
            height={56}
            className="rounded-full"
          />
          <h1 className="text-lg font-bold text-wine-dark font-cinzel">Las Tres Regiones</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          {[
            { id: "hero", label: "Inicio" },
            { id: "about", label: "Nosotros" },
            { id: "services", label: "Servicios" },
            { id: "menu", label: "Carta" },
            { id: "gallery", label: "Galería" },
            { id: "location", label: "Ubicación" },
            { id: "contact", label: "Contacto" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-leaf-green ${
                activeSection === item.id ? "text-leaf-green" : "text-wine-dark"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
