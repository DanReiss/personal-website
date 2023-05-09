import React from 'react';

function ProjectsCarousel({ projects }) {
  return (
  /* Wrapper */
    <div className="relative overflow-hidden m-auto my-8">
      {/* Container */}
      <div className="width-full flex flex-row align-center overflow-auto gap-3">
        {
          projects.map((project, i) => (
            <div key={i} className="shrink-0 w-[145px] h-[215px] bg-blue">
              <div className="grid place-items-end w-full h-full bg-dark_blue/50">
                <h4 className="w-full font-roboto text-center uppercase tracking-[0.2em] text-[0.9em] mb-1">{project.name}</h4>
              </div>
            </div>
          ))
         }
        <div className="grid place-items-center shrink-0 w-[145px] h-[215px] bg-dark_gray">
          <span>Ver mais</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
