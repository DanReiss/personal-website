import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar({ active }) {
  const [navOpen, setNavOpen] = useState(false);

  const routesOptions = [
    {
      name: 'home',
      route: '/',
    },
    {
      name: 'projetos',
      route: '/projects',
    },
    {
      name: 'contato',
      route: '/contact',
    },
  ];

  return (
    <div className="fixed w-full z-10 text-white font-light tracking-widest lg:bg-dark_gray lg:flex lg:flex-row lg:px-16">
      <div className="relative z-20 w-full lg:w-1/2 flex flex-row justify-between items-center bg-dark_gray p-4 px-5 lg:p-0">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="logo do site: 'D.'"
            width={35}
            height={27}
          />
        </Link>
        <button
          type="button"
          onClick={() => {
            setNavOpen((previous) => !previous);
          }}
        >
          <Image
            src="/navbar.svg"
            alt="navbar"
            width={38}
            height={27}
            className="lg:hidden"
          />
        </button>
      </div>
      <div className={`${navOpen ? '' : 'w-full translate-y-[-300px] opacity-0'} lg:translate-y-0 lg:opacity-100 transition-all lg:w-1/2 lg:bg-dark_gray z-0 duration-300 bg-gray p-4 px-5`}>
        <ul className="flex flex-col lg:flex-row lg:justify-end text-center uppercase">
          {routesOptions.map((route) => (
            <li
              key={route.name}
              className={`
              ${
                route.name === active
                  ? 'bg-blue mb-2 text-lg'
                  : 'hover:bg-dark_gray'
              } 
              mb-2 lg:mb-0 lg:ml-4 lg:px-4 text-lg transition-all`}
            >
              <Link
                href={route.route}
                className="block"
              >
                {route.name}

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
