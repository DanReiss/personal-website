import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import getStaticData from 'lib/getStaticData';
import ItemSkill from '@/components/ItemSkill';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import { Title2 } from '@/components/Typography';

export async function getStaticProps() {
  const projects = await getStaticData();

  return {
    props: { projects },
  };
}

function Home({ projects }) {
  const projectsData = projects.data.slice(0, 4);

  const links = {
    initial: { filter: 'drop-shadow(0 0 0 transparent)' },
    hover: { filter: 'drop-shadow(0 4px 0 #004DA7)' },
  };

  const opacityProps = {
    initial: { opacity: 0, y: '50px' },
    whileInView: { opacity: 1, y: '0px' },
    viewport: { once: true },
    transition: { duration: 0.3, delay: 0.2 },
  };

  return (
    <>
      <div className="fixed h-screen w-full flex flex-col justify-evenly p-4 bg-dark_blue">
        <div className="text-white text-center container w-full">
          <Image
            src="/images/maintitle.png"
            width={500}
            height={70}
            alt="Danilo dos Reis"
            className="m-auto"
          />
          <motion.hr
            className="my-8"
            initial={{ clipPath: 'inset(0% 100% 0% 100%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 0.7 }}
          />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-josefin">DESENVOLVEDOR WEB</h2>
        </div>
        <div className="flex flex-row justify-center gap-9 md:gap-20">
          <motion.a
            href="https://github.com/DanReiss"
            target="__blank"
            whileHover="hover"
            initial="initial"
            variants={links}
          >
            <Image
              src="/icons/github.svg"
              width={39}
              height={39}
              alt="meu github"
              className="md:scale-125"
            />
          </motion.a>
          <motion.a
            href="mailto:danreis.ctt@gmail.com"
            target="_blank"
            rel="noreferrer"
            whileHover="hover"
            initial="initial"
            variants={links}
          >
            <Image
              src="/icons/email.svg"
              width={45}
              height={34}
              alt="meu email"
              className="h-auto w-auto md:scale-125"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/daniloreiss"
            target="__blank"
            whileHover="hover"
            initial="initial"
            variants={links}
          >
            <Image
              src="/icons/linkedin.svg"
              width={39}
              height={39}
              alt="meu linkedin"
              className="md:scale-125"
            />
          </motion.a>
        </div>
        <motion.div
          initial={{ scale: 1.5, filter: 'blur(9px)' }}
          animate={{ scale: 1, filter: 'blur(3px)' }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="z-[-1] absolute left-0 hidden md:block bottom-[15vh] w-screen"
        >
          <Image
            src="/images/city.svg"
            width={350}
            height={300}
            alt="background (prédios)"
            className="inline opacity-25 transform scale-x-[-1] lg:w-[450px]"
          />
          <Image
            src="/images/city.svg"
            width={350}
            height={300}
            alt="background (prédios)"
            className="inline float-right opacity-25 lg:scale-200 lg:w-[450px]"
          />
        </motion.div>
      </div>
      {/* mostrar o background e espaçar a segunda seção -> */}
      <div className="h-[85vh] w-full" />
      <main className="relative bg-gray">
        <span className="bg-dark_blue w-full h-1 inline-block" />
        <motion.section {...opacityProps} className="text-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="mb-8 md:mb-12 container">
            <Title2 withDecoration>Sobre Mim</Title2>
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
              Sempre tive afinidade com tecnologia e a internet desde muito novo e procurando
              por algo nesse sentido encontrei a programação. Além da tecnologia,
              tenho uma paixão pela arte, especialmente músicas e narrativas. Atualmente,
              meu foco está em aprofundar meu conhecimento em JavaScript e ReactJS,
              para me especializar no Desenvolvimento Front-End, enquanto também
              estou dedicando tempo ao estudo de Bancos de Dados, NodeJS e Algoritmos.
            </p>
          </div>
          <div className="container">
            <Title2>Acadêmico</Title2>
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
        </motion.section>
        <section className="bg-dark_blue text-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <Title2 withDecoration className="container">Competências</Title2>
          <motion.div {...opacityProps} className="font-josefin grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center container pt-5">
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
          </motion.div>
        </section>
        <motion.section className="text-white font-josefin px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <Title2 className="container">Projetos Recentes</Title2>
          { projectsData
            ? <ProjectsCarousel projects={projectsData} />
            : ''}
        </motion.section>
      </main>
    </>
  );
}

export default Home;
