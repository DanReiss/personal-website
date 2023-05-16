import React from 'react';
import Image from 'next/image';

function ProjectItem({ itemdata }) {
  return (
    <div className="my-8 max-w-[300px]">
      <div className="relative max-h-[300px] aspect-[4/4] bg-gray/[0.8] rounded-3xl">
        <a
          href={itemdata.vercelurl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visite o projeto em funcionamento"
          className="block w-full h-full text-dark_blue"
        >
          <Image
            src={itemdata.gif}
            alt="pre-visualização do projeto em execução"
            height={500}
            width={500}
            className="object-cover w-full h-full rounded-3xl"
          />
        </a>
        <a
          href={itemdata.githuburl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visite o repositório do projeto [nome-do-projeto]"
          className="absolute bottom-0 m-4"
        >
          <Image
            src="/icons/github.svg"
            alt="project github"
            width={35}
            height={35}
          />
        </a>
      </div>
      <a
        href={itemdata.vercelurl}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className="font-josefin text-xl mt-1">{itemdata.name}</h4>
      </a>
      <p className="font-light text-neutral-300">{itemdata.description}</p>
    </div>
  );
}

export default ProjectItem;
