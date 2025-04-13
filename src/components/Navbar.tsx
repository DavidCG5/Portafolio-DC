'use client'

import Image from 'next/image'
import SocialButtons from './SocialButtons'

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[90%] max-w-4xl rounded-full backdrop-blur-md bg-white/5 shadow-[0_0_30px_rgba(6,2,255,0.2)] flex justify-between items-center">
      
      <div className="flex items-center gap-3">
        <Image 
          src="/DavidCortesLogo.png" 
          alt="logo" 
          width={36} 
          height={36} 
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-white/80">David Cortes</span>
      </div>

      <div >
        <SocialButtons 
          GitHub={false} 
        />
      </div>
    </nav>
  )
}
