"use client"

import { useEffect, useState } from "react"

export default function Services() {
  // Solo servicios con imagen
  const services = [
    {
      image: "/Services/en_local.jpg",
      title: "Consumo en Local",
    },
    {
      image: "/Services/terraza.jpg",
      title: "Terraza",
    },
    {
      image: "/Services/para_llevar.jpg",
      title: "Para Llevar",
    },
    {
      image: "/Services/reserva.jpg",
      title: "Reservas",
    },
  ]

  return (
    <section id="services" className="py-20 bg-warm-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-4 font-cinzel">Nuestros Servicios</h2>
          <p className="text-lg text-wine-dark/70 max-w-2xl mx-auto font-nunito">
            Disfruta de nuestros servicios diseñados para tu comodidad
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 flex flex-col items-center justify-center"
            >
              <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden flex items-center justify-center bg-leaf-green/10">
                <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
              </div>
              <h3 className="font-semibold text-wine-dark text-lg font-nunito">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
