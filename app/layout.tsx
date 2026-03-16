import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LTR - Cafetería',
  description: 'LTR - Cafetería (TRL cafeteria): Cafetería en San Martín de Porres, Lima, ubicada en Av. Eduardo de Habich 591. Disfruta de los auténticos sabores de la costa, sierra y selva del Perú.',
  keywords: [
    'cafetería', 'café', 'Lima', 'Perú', 'San Martín de Porres', 'Habich', 'cafetería en San Martín de Porres', 'cafetería en Habich', 'desayunos', 'postres', 'costa', 'sierra', 'selva', 'Las Tres Regiones', 'LTR', 'TRL cafeteria', 'trl cafeteria', 'carta', 'galería', 'servicios', 'ambiente', 'barista', 'pastelería', 'panadería', 'restaurante', 'especialidades', 'artesanal'
  ],
  authors: [{ name: 'Las Tres Regiones', url: 'https://lastresregiones.com' }],
  openGraph: {
    title: 'LTR - Cafetería',
    description: 'LTR - Cafetería (TRL cafeteria): Cafetería en San Martín de Porres, Lima, ubicada en Av. Eduardo de Habich 591. Disfruta de los auténticos sabores de la costa, sierra y selva del Perú.',
    url: 'https://lastresregiones.com',
    type: 'website',
    locale: 'es_PE',
    siteName: 'LTR - Cafetería',
    images: [
      {
        url: '/Logo-LTR.jpg',
        width: 400,
        height: 400,
        alt: 'Logo Las Tres Regiones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LTR - Cafetería',
    description: 'LTR - Cafetería (TRL cafeteria): Cafetería en San Martín de Porres, Lima, ubicada en Av. Eduardo de Habich 591. Disfruta de los auténticos sabores de la costa, sierra y selva del Perú.',
    images: ['/Logo-LTR.jpg'],
    site: '@lastresregiones',
    creator: '@lastresregiones',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  metadataBase: new URL('https://lastresregiones.com'),
  alternates: {
    canonical: 'https://lastresregiones.com',
  },
  // themeColor: '#f8f0e5', // Eliminado para Next.js 13+
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'LTR - Cafetería',
  alternateName: 'TRL cafeteria',
  image: 'https://lastresregiones.com/Logo-LTR.jpg',
  url: 'https://lastresregiones.com',
  telephone: '+51907638467',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Eduardo de Habich 591',
    addressLocality: 'San Martín de Porres',
    addressRegion: 'Lima',
    postalCode: '15103',
    addressCountry: 'PE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -12.0297,
    longitude: -77.0707,
  },
  openingHours: 'Mo-Su 08:00-23:00',
  sameAs: [
    'https://instagram.com/lastresregiones.cafeteria',
    'https://facebook.com/lastresregiones',
    'https://tiktok.com/@lastresregionescafe',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/Logo-LTR.jpg" type="image/jpeg" />
        <meta name="author" content="Las Tres Regiones" />
        {/* <meta name="theme-color" content="#f8f0e5" /> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}