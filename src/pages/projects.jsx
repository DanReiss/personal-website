import React from 'react';
import getStaticData from 'lib/getStaticData';
import ProjectItem from '@/components/ProjectItem';
import { Title2, Text } from '@/components/Typography';

export async function getStaticProps() {
  const projects = await getStaticData();

  return {
    props: { projects },
  };
}

function Projects({ projects }) {
  const projectsData = projects.data;

  return (
    <div className="w-full text-white bg-dark_blue pt-[66px] px-6 pb-4">
      <div className="container">
        <Title2 withDecoration>Projetos</Title2>
        <Text className="mb-4">
          Aplicações que desenvolvi como forma de estudo.
          Os projetos estão dispostos em ordem cronológica começando
          do mais recente.Para mais informações acesse o repositório
          de cada um dos projetos no Github, clicando no ícone do GitHub.
        </Text>
        <div className="grid justify-center items-start justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {
                projectsData.map((itemdata) => (
                  <ProjectItem key={itemdata.name} itemdata={itemdata} />
                ))
              }
        </div>
      </div>
    </div>
  );
}

export default Projects;
