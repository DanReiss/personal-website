import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import getStaticData from 'lib/getStaticData';
import ItemSkill from '@/components/ItemSkill';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import { Title2 } from '@/components/Typography';

const skills = [
  {
    name: 'Javascript',
    imagePath: '/icons/js.svg',
    description: 'Linguagem de programação usada para tornar sites interativos.',
  },
  {
    name: 'React',
    imagePath: '/icons/react.svg',
    description: 'Biblioteca JavaScript para construir interfaces de usuário interativas em páginas web.',
  },
  {
    name: 'HTML',
    imagePath: '/icons/html.svg',
    description: 'Linguagem usada para criar páginas web, definindo a estrutura e o conteúdo dos elementos na internet.',
  },
  {
    name: 'CSS',
    imagePath: '/icons/css.svg',
    description: 'Utilizado para estilizar páginas web, controlando o layout e a aparência dos elementos, como cores, fontes e espaçamento.',
  },
  {
    name: 'Tailwind',
    imagePath: '/icons/tailwind.svg',
    description: 'Framework de estilos utilitários para desenvolvimento web, permitindo estilizar rapidamente elementos.',
  },
  {
    name: 'Git/Github',
    imagePath: '/icons/git.svg',
    description: 'Sistema de controle de versão que rastreia alterações no código. Cria versões de um código.',
  },
  {
    name: 'SQL',
    imagePath: '/icons/database.svg',
    description: 'Linguagem utilizada para gerenciar e manipular bancos de dados relacionais (em formato de tabela).',
  },
  {
    name: 'REST',
    description: 'Padrão de arquitetura para comunicações entre sistemas.',
  },
];

export async function getStaticProps() {
  const projects = await getStaticData();

  return {
    props: { projects },
  };
}

function Home({ projects }) {
  const projectsData = projects.data.filter((project) => project.starred).slice(0, 4);

  const links = {
    initial: { filter: 'drop-shadow(0 0 0 transparent)' },
    hover: { filter: 'drop-shadow(0 4px 0 #004DA7)' },
  };

  const opacityProps = {
    initial: { opacity: 0, y: '50px' },
    whileInView: { opacity: 1, y: '0px' },
    viewport: { once: true },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <div className="fixed h-[85vh] w-full flex flex-col justify-evenly p-4 bg-dark_blue">
        <section className="w-full container flex flex-col lg:flex-row justify-between items-center gap-6 text-center text-white">
          <div className="flex-1 max-w-[25rem] md:max-w-[27.5rem] h-full rounded-xl bg-white aspect-square">
            <Image
              src="/images/banner.png"
              alt="banner"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 h-[75%] flex flex-col justify-evenly h-full gap-4 lg:gap-0 items-center my-3 ">
            <Image
              src="/images/maintitle.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-w-[700px]"
              alt="Danilo dos Reis"
            />
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold font-josefin">DESENVOLVEDOR WEB</h2>
            <div className="flex flex-row justify-around w-full max-w-[90%] sm:max-w-[75%] md:max-w-[65%] bg-white rounded-full px-2 py-1 sm:px-8 py-6">
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
          </div>
        </section>
      </div>
      {/* mostrar o background e espaçar a segunda seção -> */}
      <div className="h-[75vh] w-full" />
      <main className="relative bg-gray">
        <span className="bg-dark_blue w-full h-1 inline-block" />
        <div className="text-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <motion.section {...opacityProps} className="w-full container flex flex-col lg:flex-row justify-between gap-20 text-white mb-8 md:mb-12 container">
            <div className="flex-1">
              <Title2 withDecoration>Sobre Mim</Title2>
              <div className="flex mb-3">
                <Image
                  src="/icons/suitcase.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-max h-auto"
                  alt="occupation icon"
                />
                <h4 className="ml-3 md:text-lg">Desenvolvedor Web</h4>
              </div>
              <div className="flex mb-3">
                <Image
                  src="/icons/location.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-max h-auto"
                  alt="location icon"
                />
                <h4 className="ml-3 md:text-lg">Brasília-DF</h4>
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
            <div className="flex-1">
              <Title2 withDecoration className="container">Competências</Title2>
              <motion.div {...opacityProps} className="font-josefin grid grid-cols-2 md:grid-cols-3 gap-[4rem] justify-items-center container mt-10 pt-10">
                {
              skills.map((skill) => (
                <ItemSkill
                  key={skill.name}
                  imagePath={skill.imagePath}
                  name={skill.name}
                  tooltipDescription={skill.description}
                />
              ))
            }
              </motion.div>
            </div>
          </motion.section>
          <motion.section {...opacityProps} className="container">
            <Title2>Acadêmico</Title2>
            <div className="relative grid grid-cols-[min-content_8px_auto] items-center gap-x-2 gap-y-5 md:gap-6 md:text-lg">
              <div className="flex flex-col">
                <span>06/23</span>
                <hr />
                <span>07/23</span>
              </div>
              <span className="w-3 h-3 bg-white rounded-full" />
              <span className="text-neutral-200">Banco de Dados: Fundamentos - Aprenda Mais - Bancos de dados relacionais</span>
              <div className="flex flex-col">
                <span>06/25</span>
                <hr />
                <span>01/23</span>
              </div>
              <span className="w-3 h-3 bg-white rounded-full" />
              <span className="text-neutral-200">Análise e Desenvolvimento de Sistemas</span>
              <div className="flex flex-col">
                <span>10/22</span>
                <hr />
                <span>05/22</span>
              </div>
              <span className="w-3 h-3 bg-white rounded-full" />
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
                <hr />
                <span>05/22</span>
              </div>
              <span className="w-3 h-3 bg-white rounded-full vertical-line" />
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
          </motion.section>
        </div>
        <motion.section className="text-white font-josefin px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <Title2 className="container">Principais Projetos</Title2>
          { projectsData && <ProjectsCarousel projects={projectsData} />}
        </motion.section>
      </main>
    </>
  );
}

export default Home;
