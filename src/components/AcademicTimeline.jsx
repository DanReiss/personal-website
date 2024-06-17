import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Title2 } from './Typography';

function AcademicTimeline() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-45%']); // -30 % para md
  const gradientPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const gradientStyle = useTransform(gradientPercent, (value) => `linear-gradient(90deg, #004da7 ${value}%, #d1d4da ${value}%)`);

  return (
    <section
      ref={targetRef}
      className="text-white container relative h-[300vh]"
    >
      <div className="sticky flex flex-col justify-center md:h-[75vh] top-16">
        <Title2>Acadêmico</Title2>
        <div className="flex items-center overflow-hidden m-4">
          <motion.div style={{ x }} className="grid grid-cols-12 grid-rows-[1fr_150px_1fr] md:grid-rows-3 min-w-[300vw] md:min-w-[150vw]">
            <div className="col-span-3 row-start-3 my-4">
              <p className="font-josefin text-xl md:text-2xl font-bold">05/22 - 10/22</p>
              <p className="font-josefin text-xl md:text-2xl font-bold">RocketSeat Discover - Trilha Fundamentar</p>
              <p>
                SEO, Git/Github, SQL, NodeJS.
              </p>
            </div>
            <span className="w-1 h-16 row-start-2 bg-white self-end place-self-center" />

            <div className="col-span-3 col-start-3 my-2 md:my-4">
              <p className="font-josefin text-xl md:text-2xl font-bold">05/22 - 10/22</p>
              <p className="font-josefin text-xl md:text-2xl font-bold">Desenvolvimento Web - Programador BR</p>
              <p>
                JavaScript, CSS, HTML, ReactJS.
              </p>
            </div>
            <span className="w-1 h-16 col-start-3 row-start-2 bg-white self-start place-self-center" />

            <div className="col-span-3 row-start-3 col-start-5 my-2 md:my-4">
              <p className="font-josefin text-xl md:text-2xl font-bold">01/23 - 06/25</p>
              <p className="font-josefin text-xl md:text-2xl font-bold">Análise e Desenvolvimento de Sistemas</p>
              <p>
                Sistemas de Informações Gerenciais, Gerência de Projetos, Metodologias Ágeis,
                Design Thinking, Algoritmos e Lógica de Programação, UX - Experiência do Usuário.
              </p>
            </div>
            <span className="w-1 h-16 col-start-5 row-start-2 bg-white self-end place-self-center" />

            <div className="col-span-3 col-start-7 my-2 md:my-4">
              <p className="font-josefin text-xl md:text-2xl font-bold">06/23 - 07/23</p>
              <p className="font-josefin text-xl md:text-2xl font-bold">Banco de Dados: Fundamentos - Aprenda Mais - Bancos de dados relacionais</p>
              <p>
                Bancos de dados, bancos de dados relacionais, SQL e normalização.
              </p>
            </div>
            <span className="w-1 h-16 col-start-7 row-start-2 bg-white self-start place-self-center" />

            <motion.span
              className="min-w-[100vw] w-full absolute self-center h-3 bg-blue"
              style={{ background: gradientStyle }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AcademicTimeline;
