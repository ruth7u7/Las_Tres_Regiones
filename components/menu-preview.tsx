"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { images } from "@/lib/images"

export default function MenuPreview() {
  const menuItems = [
    // Desayunos
    {
      name: "Sánguche de Chorizo Artesanal de Oxapampa",
      description: "¡Disfruta de un delicioso sánguche de chorizo artesanal de Oxapampa! 🥪 Preparado con pan crujiente y el sabor único del chorizo ahumado, acompañado de ingredientes frescos y locales. Palteado, el desayuno perfecto. 🥑🍞",
      image: "/Menu/sandwich_chorizo_artesanal_oxapampa.jpg",
      region: "Sierra",
    },
    {
      name: "Palteado",
      description: "Palta fresca sobre pan artesanal, el desayuno perfecto para empezar tu día con energía y sabor peruano. 🥑🍞",
      image: "/Menu/palteado.jpg",
      region: "Costa",
    },
    {
      name: "Empanada de Pollo",
      description: "Nada como una mañana limeña con una empanada de pollo recién horneada: masa dorada, relleno jugoso y ese toque casero que te hace cerrar los ojos de gusto.",
      image: "/Menu/empanada_pollo.jpg",
      region: "Costa",
    },
    // Bebida
    {
      name: "Iced Capuccino",
      description: "¿Eres amante del café, pero el calor no te da tregua? 🥵 Dale un giro a tu día con nuestro Iced Cappuccino, la combinación perfecta entre café intenso, leche cremosa y un toque refrescante de hielo. ✨",
      image: "/Menu/iced_capuccino.jpg",
      region: "Selva",
    },
    // Postres
    {
      name: "Cheesecake de Mora",
      description: "Un cheesecake de mora para endulzar tu día 💜❄️ Ven y date ese gustito que te mereces.",
      image: "/Menu/cheesecake_mora.jpg",
      region: "Sierra",
    },
    {
      name: "Pie de Limón",
      description: "Un clásico limeño: base crocante, relleno cremoso y el toque justo de acidez. Refrescante y perfecto para cualquier momento del día. 🍋✨",
      image: "/Menu/pie_limon.jpeg",
      region: "Costa",
    },
  ]

  return (
    <section id="menu" className="py-20 bg-warm-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-4 font-cinzel">Carta Destacada</h2>
          <p className="text-lg text-wine-dark/70 max-w-2xl mx-auto font-nunito">
            Descubre nuestras especialidades inspiradas en los sabores de las tres regiones del Perú
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                {/* Eliminada la etiqueta de región */}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-wine-dark mb-2 font-nunito">{item.name}</h3>
                <p className="text-wine-dark/70 leading-relaxed font-nunito">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/file/d/1jQIkBRIEJNaeAja7xr_ZCn3olqayO-CH/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-wine-dark hover:bg-wine-dark/90 text-white px-8 py-3 text-lg">
              Ver Carta Completa
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
