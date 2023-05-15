import React from 'react';
import Link from 'next/link';

function ProjectsCarousel({ projects }) {
  return (
  /* Wrapper */
    <div className="relative container overflow-hidden m-auto py-12">
      {/* Container */}
      <div className="container flex flex-row md:justify-between align-center overflow-auto gap-3 lg:gap-0">
        {
          projects.map((project, i) => (
            <div key={i} className="group relative shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] hover:border-2 hover:border-blue hover:last:text_blue transition duration-300">
              <img
                src={project.image}
                alt={`pré-visualização do projeto ${project.name}`}
              />
              <div className="absolute bottom-0 opacity-0 w-full h-full group-hover:opacity-100 bg-gradient-to-t from-dark_gray transition duration-300">
                <a
                  href={project.vercelurl}
                  target="_blank"
                  rel="noreferrer"
                  className="h-full w-full block"
                >
                  <h4 className="absolute w-full bottom-0 font-roboto text-center uppercase tracking-[0.2em] text-[0.9em] xl:text-lg">{project.name}</h4>
                </a>
              </div>
            </div>
          ))
         }
        <div className="shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] bg-dark_gray hover:border-2 hover:border-blue transition duration-300">
          <Link
            href="/projects"
            className="grid place-items-center shrink-0 w-full h-full"
          >
            <span className="lg:text-lg">Ver mais</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
