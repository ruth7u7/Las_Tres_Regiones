"use client"

import Image from "next/image"
import { images } from "@/lib/images"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-8 font-cinzel">Nuestra Historia</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-wine-dark/80 mb-6 leading-relaxed font-nunito">
                En <strong>Las Tres Regiones</strong> celebramos la riqueza cultural y gastronómica del Perú. Nuestro
                concepto nace del deseo de rescatar y honrar los sabores únicos de la costa, sierra y selva peruana.
              </p>
              <p className="text-lg text-wine-dark/80 mb-8 leading-relaxed font-nunito">
                Cada taza de café cuenta una historia, cada plato lleva consigo la tradición de nuestros ancestros y el
                amor por nuestra tierra.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏖️</span>
                  </div>
                  <h3 className="font-semibold text-wine-dark font-nunito">Costa</h3>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⛰️</span>
                  </div>
                  <h3 className="font-semibold text-wine-dark font-nunito">Sierra</h3>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 bg-leaf-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="font-semibold text-wine-dark font-nunito">Selva</h3>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={images.about.ingredients}
                alt="Ingredientes peruanos tradicionales - café, quinua, cacao"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
