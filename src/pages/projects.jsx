import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectItem from '@/components/ProjectItem';

function Projects() {
  return (
    <>
      <Navbar active="projetos" />
      <div className="w-full min-h-screen text-white bg-dark_blue pt-[66px] px-6 pb-4">
        <div className="flex mb-2 mt-8">
          <h3 className="font-josefin text-3xl tracking-wide">Projetos</h3>
          <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2" />
        </div>
        <p className="font-light mb-8">
          Aplicações que desenvolvi como forma de estudo.
          Os projetos estão dispostos em ordem cronológica começando
          do mais recente.Para mais informações acesse o repositório
          de cada um dos projetos no Github, clicando no ícone do GitHub.
        </p>
        <div className="grid">
          <ProjectItem itemdata="-" />

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
