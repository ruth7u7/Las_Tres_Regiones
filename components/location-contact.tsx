"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

export default function LocationContact() {
  return (
    <section id="location" className="py-20 bg-warm-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wine-dark mb-4 font-cinzel">Ubicación y Horarios</h2>
            <p className="text-lg text-wine-dark/70 font-nunito">Te esperamos en nuestro acogedor local</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin className="text-leaf-green mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-wine-dark mb-2 font-nunito">Dirección</h3>
                    <p className="text-wine-dark/70 font-nunito">
                      Av. Eduardo de Habich 591
                      <br />
                      San Martín de Porres 15103, Lima - Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <Clock className="text-leaf-green mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-wine-dark mb-2 font-nunito">Horario</h3>
                    <div className="text-wine-dark/70 space-y-1 font-nunito">
                      <p>Lunes a Domingo: 8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/51907638467?text=Hola, me gustaría hacer una reserva", "_blank")
                    }
                    className="bg-leaf-green hover:bg-leaf-green/90 text-white w-full"
                  >
                    Reservar por WhatsApp
                  </Button>
                  {/* <Button
                    onClick={() => window.open("tel:+51907638467", "_blank")}
                    variant="outline"
                    className="border-wine-dark text-wine-dark hover:bg-wine-dark hover:text-white w-full"
                  >
                    Llamar: +51 907 638 467
                  </Button> */}
                </div>
              </div>
            </div>

            <div className="relative h-80 md:h-auto">
              <div
                className="bg-warm-light rounded-xl h-[300px] md:h-[350px] overflow-hidden flex items-center justify-center"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Av.+Eduardo+de+Habich+591,+San+Martín+de+Porres+15103",
                    "_blank",
                  )
                }
              >
                <iframe
                  src="https://www.google.com/maps?q=Av.+Eduardo+de+Habich+591,+San+Mart%C3%ADn+de+Porres+15103,+Lima,+Per%C3%BA&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
