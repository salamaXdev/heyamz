// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

// Load Inter for body text
const inter = Inter({ subsets: ['latin'] })

// Load Montserrat for the domain name
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['700'], // Load only the black weight for performance
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'heyamz.com - Premium Domain For Sale',
  description: 'Premium e-commerce related domain for sale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}