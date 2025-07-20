"use client"

import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-wine-dark/90 text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Las Tres Regiones</h3>
          <p className="text-white/70 mb-4">Una cafetería con alma peruana</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://instagram.com/lastresregiones.cafeteria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-pink-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/lastresregiones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@lastresregionescafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <p className="text-white/60 text-sm mb-2">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
          </p>
          <p className="text-white/80 font-medium mb-2">"Gracias por visitarnos. Aquí el café sabe a Perú."</p>
          <p className="text-white/60 text-sm">© 2024 Las Tres Regiones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
