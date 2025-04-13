'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import SocialButtons from './SocialButtons'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[90%] max-w-4xl rounded-full backdrop-blur-md bg-white/5 shadow-[0_0_30px_rgba(6,2,255,0.2)] flex justify-between items-center">
        
        {/* Logo - visible solo en pantallas >= sm */}
        <div className="items-center gap-3 hidden sm:flex ">
          <Image 
            src="/DavidCortesLogo.png" 
            alt="logo" 
            width={36} 
            height={36} 
            className="rounded-full hover:scale-105 transition"
          />
          <span className="text-lg font-semibold text-white/80">David Cortes</span>
        </div>

        {/* Botón de menú - centrado en sm o menos */}
        <div className="sm:hidden flex ">
          <button 
            className="text-white text-2xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <HiMenu />
          </button>
        </div>

        {/* Navegación - solo en desktop */}
        <ul className="hidden sm:flex gap-6 text-md font-medium text-white/80">
          <li><Link href="/" className="hover:text-blue-300 transition">Inicio</Link></li>
          <li><Link href="/portafolio" className="hover:text-blue-300 transition">Portafolio</Link></li>
          <li><Link href="/sobremi" className="hover:text-blue-300 transition">Sobre Mi</Link></li>
        </ul>

        {/* Botones sociales */}
        <div className="ml-4">
          <SocialButtons GitHub LinkedIn Email WhatsApp />
        </div>
      </nav>

      {/* Menú Mobile con animación */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center justify-center text-white animate-fadeIn"
        >
          {/* Botón cerrar */}
          <button 
            className="absolute top-6 left-6 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <HiX />
          </button>

          <div className="flex flex-col items-center space-y-6 text-xl font-semibold">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-blue-400">Inicio</Link>
            <Link href="/portafolio" onClick={() => setMenuOpen(false)}>Portafolio</Link>
            <Link href="/sobremi" onClick={() => setMenuOpen(false)}>Sobre Mi</Link>
          </div>

          <div className="mt-10">
            <SocialButtons GitHub LinkedIn Email WhatsApp />
          </div>
        </div>
      )}
    </>
  )
}

