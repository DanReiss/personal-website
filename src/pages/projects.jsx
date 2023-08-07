import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import getStaticData from 'lib/getStaticData';
import ProjectItem from '@/components/ProjectItem';
import { Title2, Text } from '@/components/Typography';
import Tags from '@/components/Tags';

export async function getStaticProps() {
  const projects = await getStaticData();

  return {
    props: { projects },
  };
}

function Projects({ projects }) {
  const [projectsData, setProjectData] = useState(projects.data);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const filteredProjects = projects.data.filter((project) => {
      for (const tag of selectedTags) {
        if (project.tags.includes(tag.value)) return true;
      }
      return false;
    });

    if (!selectedTags.length) {
      setProjectData(projects.data);
    } else {
      setProjectData(filteredProjects);
    }
  }, [selectedTags]);

  return (
    <>
      <Head>
        <title>Danilo dos Reis Amaral | Projetos</title>
      </Head>
      <div className="w-full min-h-screen text-white bg-dark_blue px-6 py-12">
        <div className="container">
          <Title2 withDecoration>Projetos</Title2>
          <Text className="mb-4">
            Aplicações que desenvolvi como forma de estudo.
            Os projetos estão dispostos em ordem cronológica começando
            do mais recente. Para mais informações acesse o repositório
            de cada um dos projetos no Github, você pode fazer isso clicando no ícone do GitHub.
          </Text>
          <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          {
            projectsData.length
              ? (
                <div className="grid justify-center items-start justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 my-8">
                  {
                    projectsData.map((itemdata) => (
                      <ProjectItem key={itemdata.name} itemdata={itemdata} />
                    ))
                   }
                </div>
              )
              : (
                <div className="flex items-center justify-center h-max">
                  <span>Nenhum projeto encontrado correspondente aos filtros selecionados</span>
                </div>
              )
          }
        </div>
      </div>
    </>
  );
}

export default Projects;
