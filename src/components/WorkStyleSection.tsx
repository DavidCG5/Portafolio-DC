'use client'

import { Laptop, BookOpen, Code2, Users } from 'lucide-react'
import GeneralCard from './GeneralCard'

export default function WorkStyleSection() {
  return (
    <section
      id="como-trabajo"
      className="w-full flex flex-col items-center px-4 space-y-8 text-white max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-blue-400">¿Cómo trabajo?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <GeneralCard
          icon={<Laptop size={20} />}
          title="De la Idea al Producto Final"
          description="Desarrollo soluciones intuitivas y atractivas, priorizando la experiencia del usuario en cada decisión de diseño."
        />
        <GeneralCard
          icon={<BookOpen size={20} />}
          title="Metodología Ágil"
          description="Trabajo con sprints iterativos, adaptándome rápidamente a cambios y nuevos requerimientos."
        />
        <GeneralCard
          icon={<Code2 size={20} />}
          title="Código Limpio"
          description="Escribo código mantenible y escalable, siguiendo las mejores prácticas y patrones de diseño modernos."
        />
        <GeneralCard
          icon={<Users size={20} />}
          title="Colaboración Efectiva"
          description="Comunicación clara y constante con el equipo y stakeholders para garantizar resultados óptimos."
        />
      </div>
    </section>
  )
}
