// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Qualité de l’eau dans le bassin du Loukkos',
  description: 'Sensibilisation à la préservation de la qualité de l’eau dans le bassin du Loukkos, Maroc.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cairo.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Modern & Clean: Outfit for headings */}
        <link href="https://api.fontshare.com/v2/css?f[]=outfit@100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-gray-50">
        {children}
      </body>
    </html>
  )
}