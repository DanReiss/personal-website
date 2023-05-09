import React from 'react';
import Image from 'next/image';

import getStaticData from 'lib/getStaticData';
import Navbar from '@/components/Navbar';
import ItemSkill from '@/components/ItemSkill';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import Footer from '@/components/Footer';

export async function getStaticProps() {
  const projects = await getStaticData();

  return {
    props: { projects },
  };
}

function Home({ projects }) {
  const projectsData = projects.data.slice(0, 5);

  return (
    <>
      <Navbar active="home" />
      <div className="fixed h-screen w-full flex flex-col justify-evenly p-4 bg-dark_blue">
        <div className="text-white text-center">
          <h1 className="text-3xl font-josefin font-bold">DANILO DOS REIS</h1>
          <hr className="my-1" />
          <h4 className="text-xl tracking-[0.2em]">Desenvolvedor Web</h4>
        </div>
        <div className="flex flex-row justify-center gap-9">
          <a
            href="https://github.com/DanReiss"
            target="__blank"
          >
            <Image
              src="/icons/github.svg"
              width={39}
              height={39}
              alt="meu github"
            />
          </a>
          <a
            href="mailto:danreis.ctt@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/email.svg"
              width={45}
              height={34}
              alt="meu email"
              className="h-auto w-auto"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/danilo-dos-reis-amaral-8a5405234/"
            target="__blank"
          >
            <Image
              src="/icons/linkedin.svg"
              width={39}
              height={40}
              alt="meu linkedin"
            />
          </a>
        </div>
      </div>
      {/* mostrar o background e espaçar a segunda seção -> */}
      <div className="h-[85vh] w-full" />
      <main className="relative bg-gray">
        <span className="bg-dark_blue w-full h-1 inline-block" />
        <section className="text-white px-4 py-8">
          <div className='mb-8'>
            <div className="flex mb-3">
              <h3 className="font-josefin text-3xl tracking-wide">Sobre Mim</h3>
              <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2" />
            </div>
            <h6 className="mb-3">Desenvolvedor Web Front-End</h6>
            <div className="flex mb-3">
              <Image
                src="/icons/location.svg"
                height={16.4}
                width={13}
                alt="location icon"
                className="w-fit"
              />
              <h6 className="ml-2">Brasília-DF</h6>
            </div>
            <p className="font-light">
              Estou estudando e buscando minha primeira oportunidade na área.
              Tenho buscado aprimorar meus conhecimentos e desenvolver-me com eficiência.
              Estou focado em me  aprofundar no JavaScript e ReactJS na área do Front-End.
            </p>
          </div>
          <div>
            <h3 className="font-josefin text-3xl mb-3">Acadêmico</h3>
            <div className="font-light">
              <div className="grid grid-flow-col auto-cols-auto gap-2 items-center pb-4">
                <div className="flex flex-col">
                  <span>06/25</span>
                  <span>01/23</span>
                </div>
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>Análise e Desenvolvimento de Sistemas</span>
              </div>
              <div className="grid grid-flow-col auto-cols-auto gap-2 items-center pb-4">
                <div className="flex flex-col">
                  <span>10/22</span>
                  <span>05/22</span>
                </div>
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>
                  Desenvolvimento Web - Programador BR
                  <br />
                  JavaScript, CSS, HTML, ReactJS
                </span>
              </div>
              <div className="grid grid-flow-col auto-cols-auto gap-2 items-center pb-4">
                <div className="flex flex-col">
                  <span>10/22</span>
                  <span>05/22</span>
                </div>
                <span className="w-2 h-2 bg-white rounded-full" />
                <span>
                  RocketSeat Discover - Trilha Fundamentar
                  <br />
                  SEO, Git/Github, SQL, NodeJS
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dark_blue text-white px-4 py-8">
          <div className="flex mb-6">
            <h3 className="font-josefin text-3xl tracking-wide">Competências</h3>
            <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2" />
          </div>
          <div className="font-josefin grid grid-cols-2 gap-x-5 gap-y-10 py-4">
            <ItemSkill imagePath="/icons/js.svg" name="JavaScript" />
            <ItemSkill imagePath="/icons/react.svg" name="React" />
            <ItemSkill imagePath="/icons/html.svg" name="HTML" />
            <ItemSkill imagePath="/icons/css.svg" name="CSS" />
            <ItemSkill imagePath="/icons/tailwind.svg" name="Tailwind" />
            <ItemSkill imagePath="/icons/sass.svg" name="SASS" />
            <ItemSkill imagePath="/icons/git.svg" name="Git/Github" />
            <ItemSkill name="SEO" />
            <ItemSkill imagePath="/icons/database.svg" name="SQL" />
            <ItemSkill name="API REST" />
          </div>
        </section>
        <section className="text-white font-josefin px-4 py-8">
          <h3 className="text-3xl mb-6">Projetos Recentes</h3>
          { projectsData
            ? <ProjectsCarousel projects={projectsData} />
            : ''}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
