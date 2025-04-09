'use client'
'use client'

import Image from 'next/image'
import { FaMapMarkerAlt, FaLaptopCode } from 'react-icons/fa'

export default function AboutCard() {
  return (
    <section
      id="sobre-mi"
      className="w-full flex justify-center items-center mt-30 px-4"
    >
      <div className="w-[90%] max-w-4xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_60px_rgba(6,2,255,0.2)] p-8 text-white space-y-6 flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="flex flex-col items-start gap-2 ">
          <Image
            src="/DavidPerfil.jpeg"
            alt="David Cortes"
            width={280}
            height={280}
            className="rounded-full border border-blue-400"
          />
           <div className="flex items-center gap-2 text-white/80 text-sm">
            <FaMapMarkerAlt className="text-blue-300 w-4.5 h-4.5" />
            <span>Bogotá, Colombia</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
            <FaLaptopCode className='w-6 h-6 text-blue-300' />
            <span>Desarrollador de software</span>
          </div>
        </div>

      
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">¡Hola! Soy <span className="text-blue-400">David</span>!</h2>
            <p className="text-white/80 leading-relaxed">
              Desarrollador de software apasionado por crear experiencias digitales modernas e intuitivas.
            </p>
            <p className="text-white/70 leading-relaxed mt-2">
                Participando en proyectos como <span className="text-blue-300">Legal AI</span>. Me encanta aprender tecnologías nuevas, mejorar interfaces y desarrollar componentes reutilizables.
            </p>
            <p className="text-white/60 leading-relaxed mt-2">
              En mis tiempos libres disfruto de los videojuegos, el gimnasio y la música. Busco siempre crecer como profesional y persona.
            </p>
          </div>

         
          <a
            href="/Curriculum_DavidCortes.pdf" 
            download
            className="mt-4 inline-block w-fit px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition shadow-md"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}
