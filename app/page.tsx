"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import MenuPreview from "@/components/menu-preview"
import Gallery from "@/components/gallery"
import LocationContact from "@/components/location-contact"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "menu", "gallery", "location", "contact"]
      const viewportCenter = window.scrollY + window.innerHeight / 2
      let foundSection = "hero"

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (viewportCenter >= offsetTop && viewportCenter < offsetTop + offsetHeight) {
            foundSection = section
            break
          }
        }
      }
      setActiveSection(foundSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Secciones que deben centrarse
      const centerSections = ["about", "services", "location", "contact"]
      // Secciones largas (scroll normal)
      const normalSections = ["menu", "gallery"]
      const headerOffset = 80 // Ajusta según el alto real del header
      const rect = element.getBoundingClientRect()
      const elementHeight = rect.height
      const viewportHeight = window.innerHeight

      if (centerSections.includes(sectionId) && elementHeight < viewportHeight) {
        // Centrar verticalmente la sección
        const scrollY = window.scrollY + rect.top - headerOffset - (viewportHeight - elementHeight) / 2
        window.scrollTo({ top: scrollY, behavior: "smooth" })
      } else {
        // Scroll normal (ajustando por el header)
        const scrollY = window.scrollY + rect.top - headerOffset
        window.scrollTo({ top: scrollY, behavior: "smooth" })
      }
    }
  }

  return (
    <div className="min-h-screen bg-warm-light">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <AboutUs />
      <Services />
      <MenuPreview />
      <Gallery />
      <LocationContact />
      <Contact />
      <Footer />
    </div>
  )
}
