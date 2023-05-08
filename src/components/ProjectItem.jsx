import React from 'react';
import Image from 'next/image';

function ProjectItem({ itemdata }) {
  return (
    <div className="m-auto w-full my-6">
      <div className="relative w-full h-[325px] bg-white rounded-3xl">

        <a
          href={itemdata.vercelurl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visite o projeto em funcionamento"
          className="block w-full h-full text-dark_blue"
        >
          Link do Projeto em Produção
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
      <p className="font-light">{itemdata.description}</p>
    </div>
  );
}

export default ProjectItem;
