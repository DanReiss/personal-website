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
            <div key={i} className="shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] bg-blue">
              <div className="grid place-items-end w-full h-full bg-dark_blue/50">
                <h4 className="w-full font-roboto text-center uppercase tracking-[0.2em] text-[0.9em] xl:text-lg mb-1">{project.name}</h4>
              </div>
            </div>
          ))
         }
        <div className="shrink-0 w-[145px] lg:w-[18%] md:h-full aspect-[3/4] bg-dark_gray">
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
