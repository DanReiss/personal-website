import React from 'react';
import Image from 'next/image';
import { TextSM } from './Typography';

function ProjectItem({ itemdata }) {
  return (
    <div
      className="my-4 max-w-[300px] h-full rounded-3xl p-4 bg-gray transition hover:scale-105"
    >
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
      <div>
        <a
          href={itemdata.vercelurl}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="font-josefin text-xl mt-1">{itemdata.name}</h4>
        </a>
        <TextSM>{itemdata.description}</TextSM>
      </div>
      <div className="mt-4 flex gap-3 flex-wrap">
        {
          itemdata.tags.map((tag) => (
            <span key={tag} className="border-l-8 border-blue bg-light_gray text-blue py-1 px-2">
              {tag}
            </span>
          ))
        }
      </div>
    </div>
  );
}

export default ProjectItem;
