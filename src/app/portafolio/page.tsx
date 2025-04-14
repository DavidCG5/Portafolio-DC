import ProjectCard from "@/components/ProjectCard";

export default function Portafolio() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[90%] max-w-4xl text-center ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white ">Portafolio</h2>
          <p className="text-blue-400">
            | Una mezcla de creatividad, técnica y pasión |
          </p>
        </div>
        <p className="text-gray-400 mb-10">
          Me especializo en crear soluciones eficientes y optimizadas para
          proyectos web y móviles. Siempre en busca de nuevos retos, me apasiona
          mejorar la experiencia del usuario y aportar valor a cada proyecto en
          el que participo.
        </p>
      </div>
      <div className="w-[90%] max-w-4xl grid sm:grid-cols-2 gap-6 align-items-center  ">
        <ProjectCard
          title="Películas"
          image="/MoviesProject.png"
          websiteUrl="https://movies-project-olive.vercel.app/"
          detailsUrl="/portafolio/moviesproject"
        />
        <ProjectCard
          title="Gráficas Bacata S.A.S"
          image="/BacataProject.png"
          websiteUrl="https://bacataproyecto.netlify.app/"
          detailsUrl="/portafolio/bacataproject"
        />
      </div>
    </section>
  );
}
