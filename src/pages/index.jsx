import React from 'react';
import Image from 'next/image';

import Navbar from '@/components/Navbar';

function Home() {
  return (
    <>
      <Navbar active="home" />
      <div className="fixed h-screen w-full flex flex-col justify-evenly p-4 bg-dark_blue">
        <div className="text-white text-center">
          <h1 className="text-3xl font-josefin font-bold">DANILO DOS REIS</h1>
          <hr className="my-1" />
          <h4 className="text-xl">Desenvolvedor Web</h4>
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
            className="h-fit"
            rel="noreferrer"
          >
            <Image
              src="/icons/email.svg"
              width={45}
              height={34}
              alt="meu email"
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
            />
          </a>
        </div>
      </div>
      {/* mostrar o background e espaçar a segunda seção -> */}
      <div className="h-[85vh] w-full" />
      <main className="relative bg-gray pt-2">
        <span className="bg-dark_blue w-full h-1 inline-block" />
        {/* <section className="w-full text-white p-4">
          <h2 className="font-josefin text-3xl w-full">Sobre Mim</h2>
          <span className="bg-blue w-full h-3 inline-block" />
        </section> */}
      </main>
    </>
  );
}

export default Home;
