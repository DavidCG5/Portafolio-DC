// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

import FooterGlow from '@/components/FooterGlow'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio de David',
  description: 'Desarrollador Web - React, Next.js, Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
        <CustomCursor />
      <body className={`${inter.className} bg-black text-white`} >
        
        <FooterGlow />
        <Navbar />
        <main>
          {children}  
       </main>
      </body>
    </html>
  )
}
