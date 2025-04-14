import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  websiteUrl: string;
  detailsUrl: string;
  status?: "en-desarrollo" | "completo";
}

const ProjectCard = ({
  title,
  image,
  websiteUrl,
  detailsUrl,
  status = "completo",
}: ProjectCardProps) => {
  return (
    <div className="rounded-xl bg-gradient-to-b from-[#1A1A1D] to-[#0F0F10] overflow-hidden shadow-lg relative group transition-transform hover:scale-[1.015]">
      <div className="relative w-full h-52 sm:h-64">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        {status === "en-desarrollo" && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-md font-bold">
            🛠 En Desarrollo
          </span>
        )}
      </div>

      <div className="p-4 text-white">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex gap-2">
          <Link href={websiteUrl} target="_blank">
            <button className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <FaExternalLinkAlt size={12} /> Sitio Web
            </button>
          </Link>
          <Link href={detailsUrl}>
            <button className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-md text-sm">
              Detalles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
