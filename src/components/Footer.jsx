import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="relative w-full bg-dark_gray text-white font-light">
      <div className="w-full grid grid-cols-12 px-4 md:m-auto md:w-3/4 md:pt-12">
        <div className="py-8 md:py-0 col-span-12 md:col-span-4">
          <h3 className="text-xl font-bold">Danilo dos Reis Amaral</h3>
          <h4>Desenvolvedor Web</h4>
        </div>
        <div className="col-span-7 md:col-span-4">
          <h3 className="text-xl font-bold">Contato</h3>
          <ul>
            <li>
              <Link
                href="/contact"
              >
                Formulário de Contato
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/danilo-dos-reis-amaral-8a5405234/"
                target="_blank"
                rel="noreferrer"
              >
                Meu Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4">
          <h3 className="text-xl font-bold">Navegação</h3>
          <ul>
            <li>
              <Link
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 w-full py-8 mt-8 border-t-2 border-blue">
          <Image
            src="/icons/logo.svg"
            width={35}
            height={27}
            alt="logo do site: 'D.'"
            className="m-auto"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
