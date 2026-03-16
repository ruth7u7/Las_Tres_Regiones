"use client"

import Image from "next/image"
import { images } from "@/lib/images"
import { useState, useEffect } from "react"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Nosotros" },
  { id: "services", label: "Servicios" },
  { id: "menu", label: "Carta" },
  { id: "gallery", label: "Galería" },
  { id: "location", label: "Ubicación" },
  { id: "contact", label: "Contacto" },
]

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Bloquear el scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setDrawerOpen(false)
  }

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
            priority
          />
          <h1 className="text-lg font-bold text-wine-dark font-cinzel">Las Tres Regiones</h1>
        </div>
        {/* Menú normal en desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-base font-medium transition-colors hover:text-leaf-green ${
                activeSection === item.id ? "text-leaf-green" : "text-wine-dark"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* Menú hamburguesa en mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-leaf-green"
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7 text-wine-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Fondo oscuro */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar menú"
            />
            {/* Drawer lateral */}
            <aside className="relative ml-auto h-full w-4/5 max-w-xs bg-warm-light shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-wine-dark/10">
                <span className="text-lg font-bold text-wine-dark font-cinzel">Menú</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-leaf-green"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-6 h-6 text-wine-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col gap-4 p-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-lg font-medium transition-colors text-left px-2 py-3 rounded hover:bg-leaf-green/10 ${
                      activeSection === item.id ? "text-leaf-green" : "text-wine-dark"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        )}
      </div>
    </nav>
  )
}
