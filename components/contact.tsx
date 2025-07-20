"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-wine-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel">Contáctanos</h2>
          <p className="text-xl text-white/80 font-nunito">Síguenos en redes sociales y mantente al día con nuestras novedades</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <a
              href="https://wa.me/51907638467"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors duration-300 min-h-[180px] flex flex-col justify-center"
            >
              <MessageCircle className="mx-auto mb-3 text-green-400" size={40} />
              <h3 className="text-lg font-semibold mb-1 font-nunito">WhatsApp</h3>
              <p className="text-white/80 text-sm font-nunito">Reservas y pedidos</p>
            </a>

            <a
              href="https://instagram.com/lastresregiones.cafeteria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors duration-300 min-h-[180px] flex flex-col justify-center"
            >
              <Instagram className="mx-auto mb-3 text-pink-400" size={40} />
              <h3 className="text-lg font-semibold mb-1 font-nunito">Instagram</h3>
              <p className="text-white/80 text-xs break-words font-nunito">@lastresregiones.cafeteria</p>
            </a>

            <a
              href="https://facebook.com/lastresregiones"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors duration-300 min-h-[180px] flex flex-col justify-center"
            >
              <svg
                className="mx-auto mb-3 text-blue-400"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <h3 className="text-lg font-semibold mb-1 font-nunito">Facebook</h3>
              <p className="text-white/80 text-sm font-nunito">Las Tres Regiones</p>
            </a>

            <a
              href="https://tiktok.com/@lastresregionescafe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-colors duration-300 min-h-[180px] flex flex-col justify-center"
            >
              <svg className="mx-auto mb-3 text-white" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <h3 className="text-lg font-semibold mb-1 font-nunito">TikTok</h3>
              <p className="text-white/80 text-xs break-words font-nunito">@lastresregionescafe</p>
            </a>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() =>
                  window.open("https://wa.me/51907638467?text=Hola, me gustaría hacer una reserva", "_blank")
                }
                className="bg-leaf-green hover:bg-leaf-green/90 text-white px-8 py-3 text-lg"
              >
                Reservar Mesa
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/51907638467", "_blank")}
                variant="outline"
                className="border-white text-wine-dark hover:bg-white/90 hover:text-wine-dark px-8 py-3 text-lg"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
