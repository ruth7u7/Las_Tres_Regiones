// Configuración de imágenes para Las Tres Regiones
export const images = {
  // Logo principal
  logo: {
    main: "/Logo-LTR.jpg",
  },

  // Imágenes del Hero (banner principal)
  hero: {
    background: "/Hero/hero.jpeg"
  },

  // Imágenes de la sección "Nosotros"
  about: {
    ingredients: "/nuestra_historia.jpg",
  },

  // Imágenes del menú
  menu: {
    cafeSelva: "/Menu/cafe-selva.jpg",
    mazamorraMorada: "/Menu/mazamorra-morada.jpg",
    cafeAndino: "/Menu/cafe-andino.jpg",
    suspiroLimeno: "/Menu/suspiro-limeno.jpg",
    teCoca: "/Menu/te-coca.jpg",
  },

  // Imágenes de la galería - Estructura flexible
  gallery: {
    // Imágenes existentes en Galley/
    teFrutosRojos: "/Galley/te_frutos_rojos.jpg",
    hamburguesaOxapampa: "/Galley/hamburguesa_oxapampa.jpeg",
    capuccino: "/Galley/capuccino.jpeg",
    cheescakeFrutosAmarillos: "/Galley/cheescake_frutos_amarillos.jpg",
    
    // Imágenes que pueden estar en otras carpetas
    // Agrega aquí las nuevas imágenes con sus rutas específicas
  },

  // Placeholders para imágenes que aún no existen
  placeholders: {
    hero: "/placeholder.svg?height=1080&width=1920&text=Cafetería Las Tres Regiones",
    menu: "/placeholder.svg?height=300&width=400&text=Plato del Menú",
    gallery: "/placeholder.svg?height=300&width=300&text=Galería",
    about: "/placeholder.svg?height=500&width=400&text=Ingredientes peruanos",
  },
}

// Función helper para obtener imágenes de galería de forma dinámica
export const getGalleryImages = () => {
  const galleryImages = [
    {
      src: images.gallery.teFrutosRojos,
      alt: "Té de frutos rojos - Bebida refrescante con frutos de la selva peruana"
    },
    {
      src: images.gallery.hamburguesaOxapampa,
      alt: "Hamburguesa Oxapampa - Deliciosa hamburguesa con ingredientes de la selva"
    },
    {
      src: images.gallery.capuccino,
      alt: "Cappuccino artesanal - Café preparado con técnicas tradicionales"
    },
    {
      src: images.gallery.cheescakeFrutosAmarillos,
      alt: "Cheesecake de frutos amarillos - Postre gourmet con frutas peruanas"
    },
    // Agrega aquí más imágenes según las carpetas que uses
  ]

  // Rellenar con placeholders si necesitas más imágenes
  const totalImages = 8
  const remainingImages = totalImages - galleryImages.length

  for (let i = 0; i < remainingImages; i++) {
    galleryImages.push({
      src: images.placeholders.gallery,
      alt: `Galería ${galleryImages.length + i + 1}`
    })
  }

  return galleryImages
}

// Tipos para TypeScript
export type ImageCategory = keyof typeof images
export type ImageKey<T extends ImageCategory> = keyof typeof images[T] 