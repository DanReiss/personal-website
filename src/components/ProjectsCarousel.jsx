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
            <div key={i} className="shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] bg-blue hover:border-2 hover:border-blue transition duration-300">
              <a
                href={project.vercelurl}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-end h-full bg-dark_blue/50 hover:bg-gradient-to-t hover:from-dark_gray"
              >
                <h4 className="w-full font-roboto text-center uppercase tracking-[0.2em] text-[0.9em] xl:text-lg mb-1">{project.name}</h4>
              </a>
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
