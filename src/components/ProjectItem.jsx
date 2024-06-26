import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { animate, useInView } from 'framer-motion';
import { TextSM } from './Typography';

function ProjectItem({ itemdata }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const gifVideo = useRef(null);

  useEffect(() => {
    if (isInView) {
      animate(ref.current, { opacity: [0, 1], transform: ['scale(0.6)', 'scale(1)'] }, {
        delay: 0.1,
      });
      const gifSource = gifVideo.current.querySelector('source');
      gifSource.src = gifSource.dataset.src;
      gifVideo.current.load();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="my-4 h-full rounded-3xl p-4 bg-gray"
    >
      <div className="relative aspect-[4/4] bg-gray/[0.8]">
        <a
          href={itemdata.vercelurl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visite o projeto em funcionamento"
          className="block w-full h-full text-dark_blue transition hover:saturate-50"
        >
          <video
            autoPlay
            loop
            muted
            ref={gifVideo}
            className="object-cover w-full h-full rounded-lg"
          >
            <source data-src={itemdata.gif} />
          </video>
        </a>
        <a
          href={itemdata.githuburl}
          target="_blank"
          rel="noreferrer"
          aria-label="Visite o repositório do projeto [nome-do-projeto]"
          className="absolute bottom-0 m-4 transition hover:scale-[1.075]"
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
          <h4 className="font-josefin text-xl mt-2 mb-1">{itemdata.name}</h4>
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
