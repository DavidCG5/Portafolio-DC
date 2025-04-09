'use client'

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SocialButtons() {
  return (
    <div className="flex gap-4 mt-6">
      <a
        href="https://github.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-blue-400 text-2xl transition"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-blue-400 text-2xl transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:tuemail@gmail.com"
        className="text-white/80 hover:text-blue-400 text-2xl transition"
        aria-label="Correo"
      >
        <MdEmail />
      </a>

      <a
        href="https://wa.me/57xxxxxxxxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-blue-400 text-2xl transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
