"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SocialButtonsProps {
  GitHub?: boolean;
  LinkedIn?: boolean;
  Email?: boolean;
  WhatsApp?: boolean;
}

export default function SocialButtons({
  GitHub = true,
  LinkedIn = true,
  Email = true,
  WhatsApp = true,
}: SocialButtonsProps) {
  return (
    <div className="flex gap-4  ">
      {GitHub && (
        <a
          href="https://github.com/DavidCG5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-blue-400 text-2xl transition hover:scale-120"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      )}

      {LinkedIn && (
        <a
          href="https://linkedin.com/in/david-felipe-cortes-cortes-a1aab1231/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-blue-400 text-2xl transition hover:scale-120"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      )}

      {Email && (
        <a
          href="mailto:dc317393@gmail.com"
          className="text-white/80 hover:text-blue-400 text-2xl transition hover:scale-120"
          aria-label="Correo"
        >
          <MdEmail />
        </a>
      )}

      {WhatsApp && (
        <a
          href="https://wa.me/573016661724"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-blue-400 text-2xl transition hover:scale-120"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      )}
    </div>
  );
}
