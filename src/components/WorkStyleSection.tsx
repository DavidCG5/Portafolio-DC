"use client";

import { Laptop, Users, Kanban, Code } from "lucide-react";
import GeneralCard from "./GeneralCard";

export default function WorkStyleSection() {
  return (
    <section
      id="como-trabajo"
      className="w-[90%] flex justify-center items-center px-4"
    >
      <div className=" max-w-4xl  space-y-8">
        <h2 className="text-3xl font-bold text-blue-400 text-center">
          ¿Cómo trabajo?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <GeneralCard
            icon={<Laptop />}
            title="De la Idea al Producto Final"
            description="Desarrollo soluciones intuitivas y atractivas, priorizando la experiencia del usuario en cada decisión de diseño."
          />
          <GeneralCard
            icon={<Kanban />}
            title="Metodología Ágil"
            description="Trabajo con sprints iterativos, adaptándome rápidamente a cambios y nuevos requerimientos."
          />
          <GeneralCard
            icon={<Code />}
            title="Código Limpio"
            description="Escribo código mantenible y escalable, siguiendo las mejores prácticas y patrones de diseño modernos."
          />
          <GeneralCard
            icon={<Users />}
            title="Colaboración Efectiva"
            description="Comunicación clara y constante con el equipo y stakeholders para garantizar resultados óptimos."
          />
        </div>
      </div>
    </section>
  );
}
