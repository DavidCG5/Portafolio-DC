import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 w-[90%] max-w-4xl rounded-full backdrop-blur-md bg-white/5   shadow-[0_0_30px_rgba(6,2,255,0.2)] flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image 
          src="/DavidCortesLogo.png" 
          alt="logo" 
          width={36} 
          height={36} 
          className="rounded-full"
        />
        <span className="text-lg font-semibold text-white-400">David Cortes</span>
      </div>

      <ul className="flex gap-6 text-sm font-medium text-white/80">
        <li><Link href="/" className="hover:text-blue-300 transition">Inicio</Link></li>
        <li><Link href="#proyectos" className="hover:text-blue-300 transition">Proyectos</Link></li>
        <li><Link href="#habilidades" className="hover:text-blue-300 transition">Habilidades</Link></li>
        <li><Link href="#contacto" className="hover:text-blue-300 transition">Contacto</Link></li>
      </ul>
    </nav>
  )
}
