import React from 'react';
import getStaticData from 'lib/getStaticData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectItem from '@/components/ProjectItem';

export async function getStaticProps() {
  const projects = await getStaticData();

  return {
    props: { projects },
  };
}

function Projects({ projects }) {
  const projectsData = projects.data;

  return (
    <>
      <Navbar active="projetos" />
      <div className="w-full text-white bg-dark_blue pt-[66px] px-6 pb-4">
        <div className="container">
          <div className="flex mb-2 mt-8">
            <h3 className="font-josefin text-3xl tracking-wide">Projetos</h3>
            <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2" />
          </div>
          <p className="text-neutral-200 mb-4">
            Aplicações que desenvolvi como forma de estudo.
            Os projetos estão dispostos em ordem cronológica começando
            do mais recente.Para mais informações acesse o repositório
            de cada um dos projetos no Github, clicando no ícone do GitHub.
          </p>
          <div className="grid justify-center items-start justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {
                projectsData.map((itemdata) => (
                  <ProjectItem key={itemdata.name} itemdata={itemdata} />
                ))
              }
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;
