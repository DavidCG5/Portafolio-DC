'use client'

export default function ExperienceCard() {
  return (
    <section
      id="experiencia"
      className="w-full flex justify-center items-center px-4"
    >
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_60px_rgba(6,2,255,0.1)] p-8 max-w-4xl w-full text-white space-y-4 transition-all duration-300">
        <h2 className="text-3xl font-bold text-blue-400">Experiencia Laboral</h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-300">Carvajal Tecnología y Servicios</h3>
            <p className="text-sm text-white/60">Practicante Frontend – Ene 2024 a Jul 2024</p>
            <p className="text-white/80 mt-2">
                Desarrolle y mantuve funcionalidades para el proyecto Legal AI, optimizando procesos internos y mejorando la
                experiencia del usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
