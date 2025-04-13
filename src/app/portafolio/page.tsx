import ProjectCard from "@/components/ProjectCard";

export default function Portafolio() {
  return (
    <section className="px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white ">Portafolio</h2>
        <p className="text-blue-400">
          | Una mezcla de creatividad, técnica y pasión |
        </p>
      </div>
      <p className="text-gray-400 mb-10">
        Me especializo en crear soluciones eficientes y optimizadas para
        proyectos web y móviles. Siempre en busca de nuevos retos, me apasiona
        mejorar la experiencia del usuario y aportar valor a cada proyecto en el
        que participo.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <ProjectCard
          title="SavePassword"
          image="/images/savepassword.png"
          websiteUrl="https://savepassword.com"
          detailsUrl="/portafolio/savepassword"
        />
        <ProjectCard
          title="Control de Gastos"
          image="/images/controlgastos.png"
          websiteUrl="https://gastocontrol.com"
          detailsUrl="/portafolio/controlgastos"
        />
        <ProjectCard
          title="Clon de Spotify"
          image="/images/spotifyclon.png"
          websiteUrl="https://spotifyclon.com"
          detailsUrl="/portafolio/spotifyclon"
          status="en-desarrollo"
        />
        <ProjectCard
          title="Blog de Café"
          image="/images/blogcafe.png"
          websiteUrl="https://blogcafe.com"
          detailsUrl="/portafolio/blogcafe"
        />
      </div>
    </section>
  );
}
