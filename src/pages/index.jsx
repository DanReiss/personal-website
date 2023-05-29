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
  const projectsData = projects.data.slice(0, 4);

  return (
    <>
      <Navbar active="home" />
      <div className="fixed h-screen w-full flex flex-col justify-evenly p-4 bg-dark_blue">
        <div className="text-white text-center container w-full">
          <h1 className="text-3xl md:text-4xl font-josefin font-bold">DANILO DOS REIS</h1>
          <hr className="my-1 md:my-2" />
          <h2 className="text-xl md:text-2xl tracking-[0.2em]">Desenvolvedor Web</h2>
        </div>
        <div className="flex flex-row justify-center gap-9 md:gap-20">
          <a
            href="https://github.com/DanReiss"
            target="__blank"
          >
            <Image
              src="/icons/github.svg"
              width={39}
              height={39}
              alt="meu github"
              className="md:scale-125"
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
              className="h-auto w-auto md:scale-125"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/danilo-dos-reis-amaral-8a5405234/"
            target="__blank"
          >
            <Image
              src="/icons/linkedin.svg"
              width={39}
              height={39}
              alt="meu linkedin"
              className="md:scale-125"
            />
          </a>
        </div>
      </div>
      {/* mostrar o background e espaçar a segunda seção -> */}
      <div className="h-[85vh] w-full" />
      <main className="relative bg-gray">
        <span className="bg-dark_blue w-full h-1 inline-block" />
        <section className="text-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="mb-8 md:mb-12 container">
            <div className="flex mb-3 md:mb-6">
              <h3 className="font-josefin text-3xl md:text-4xl tracking-wide">Sobre Mim</h3>
              <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2 md:ml-4" />
            </div>
            <h4 className="mb-3 text-lg md:text-xl">Desenvolvedor Web Front-End</h4>
            <div className="flex mb-3">
              <Image
                src="/icons/location.svg"
                height={16.4}
                width={13}
                alt="location icon"
                className="w-fit"
              />
              <h4 className="ml-2 md:text-lg">Brasília-DF</h4>
            </div>
            <p className="text-neutral-200 md:text-lg">
              Sempre tive afinidade com tecnologia e internet desde criança e procurando por algo
              nesse sentido encontrei a área da programação. Por isso, estou buscando
              minha primeira oportunidade na área. Busco aprimorar meus conhecimentos,
              desenvolver-me com eficiência ao longo dessa jornada. Neste momento, estou focado
              em me aprofundar em JavaScript e ReactJS, dessa forma me especializando na área do
              Front-End.
            </p>
          </div>
          <div className="container">
            <h3 className="font-josefin text-3xl mb-3 md:mb-6">Acadêmico</h3>
            <div className="relative grid grid-cols-[min-content_8px_auto] items-center gap-x-2 gap-y-5 md:gap-6 md:text-lg">
              <div className="flex flex-col">
                <span>06/25</span>
                <hr className="text-blue" />
                <span>01/23</span>
              </div>
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="text-neutral-200">Análise e Desenvolvimento de Sistemas</span>
              <div className="flex flex-col">
                <span>10/22</span>
                <hr className="text-blue" />
                <span>05/22</span>
              </div>
              <span className="w-2 h-2 bg-white rounded-full" />
              <div className="text-neutral-200">
                <span className="sm:after:content-['-']">
                  Desenvolvimento Web - Programador BR
                </span>
                <br className="sm:hidden" />
                <span>
                  JavaScript, CSS, HTML, ReactJS
                </span>
              </div>
              <div className="flex flex-col">
                <span>10/22</span>
                <hr className="text-blue" />
                <span>05/22</span>
              </div>
              <span className="w-2 h-2 bg-white rounded-full vertical-line" />
              <div className="text-neutral-200">
                <span className="sm:after:content-['-']">
                  RocketSeat Discover - Trilha Fundamentar
                </span>
                <br className="sm:hidden" />
                <span>
                  SEO, Git/Github, SQL, NodeJS
                </span>
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-dark_blue text-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="flex mb-6 md:mb-9 container">
            <h3 className="font-josefin text-3xl tracking-wide">Competências</h3>
            <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2" />
          </div>
          <div className="font-josefin grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center container py-4">
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
        <section className="text-white font-josefin px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <h3 className="container text-3xl mb-6">Projetos Recentes</h3>
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
