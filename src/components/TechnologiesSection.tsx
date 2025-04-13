"use client";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiBootstrap,
} from "react-icons/si";

export default function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      className="w-full flex justify-center items-center px-4"
    >
      <div className="w-[90%] max-w-4xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_60px_rgba(6,2,255,0.1)] p-8 text-white space-y-6">
        <h2 className="text-3xl font-bold text-blue-400">
          Tecnologías utilizadas y estudiadas
        </h2>

        <p className="text-white/70">
          A lo largo de mi formación y proyectos personales he trabajado con
          diversas tecnologías del ecosistema web moderno:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          <div className="flex items-center gap-3 text-white/80">
            <FaReact className="text-cyan-400 text-2xl" />
            <span>React</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <SiNextdotjs className="text-white text-2xl" />
            <span>Next.js</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <SiTailwindcss className="text-sky-400 text-2xl" />
            <span>TailwindCSS</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <FaJs className="text-yellow-400 text-2xl" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <SiTypescript className="text-blue-400 text-2xl" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <FaNodeJs className="text-green-500 text-2xl" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <SiVuedotjs className="text-green-400 text-2xl" />
            <span>Vue.js</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <FaGitAlt className="text-orange-400 text-2xl" />
            <span>Git</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <FaHtml5 className="text-orange-500 text-2xl" />
            <span>HTML</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <FaCss3Alt className="text-blue-500 text-2xl" />
            <span>CSS</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <SiBootstrap className="text-blue-500 text-2xl" />
            <span>Bootstrap</span>
          </div>
        </div>
      </div>
    </section>
  );
}
