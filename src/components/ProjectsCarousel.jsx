import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ProjectsCarousel({ projects }) {
  return (
  /* Wrapper */
    <div className="relative container overflow-hidden m-auto py-12">
      {/* Container */}
      <div className="container flex flex-row md:justify-between align-center overflow-auto gap-3 lg:gap-0">
        {
          projects.map((project) => (
            <div key={project.name} data-animate className="group relative shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] hover:border-2 hover:border-blue transition duration-300">
              <Image
                width={400}
                height={400}
                src={project.image}
                alt={`pré-visualização do projeto ${project.name}`}
              />
              <div className="absolute bottom-0 opacity-0 w-full h-full group-hover:opacity-100 bg-gradient-to-t from-darker_blue transition duration-300">
                <a
                  href={project.vercelurl}
                  target="_blank"
                  rel="noreferrer"
                  className="h-full w-full block"
                >
                  <div className="absolute bottom-2 mx-2">
                    <h4 className="text-lg xl:text-xl font-bold">{project.name}</h4>
                    <p className="line-clamp-3 text-sm lg:text-base leading-5">{project.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))
         }
        <div data-animate className="group relative shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] bg-darker_blue hover:border-2 hover:border-blue transition duration-300">
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
