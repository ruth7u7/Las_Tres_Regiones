"use client"

import Image from "next/image"

// Obtener todas las imágenes de la galería automáticamente
const galleryImages = [
  "carrot_cake.jpg",
  "cinammon.jpg",
  "expresso.jpg",
  "sandwich_pais.jpg",
  "te_frutos_rojos.jpg",
  "hamburguesa_oxapampa.jpeg",
  "capuccino.jpeg",
  "cheescake_frutos_amarillos.jpg",
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-4 font-cinzel">Galería</h2>
          <p className="text-lg text-wine-dark/70 font-nunito">Un vistazo a nuestro acogedor ambiente y deliciosas creaciones</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <Image src={`/Galley/${img}`} alt={`Galería ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
