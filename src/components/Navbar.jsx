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
    <div className="fixed w-full z-10 text-white font-light tracking-widest">
      <div className="relative z-20 w-full flex flex-row justify-between align-center bg-dark_gray p-4 px-5">
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
          />
        </button>
      </div>
      <div className={`${navOpen ? '' : 'w-full translate-y-[-300px] opacity-0'} transition-all z-0 duration-300 bg-gray p-4 px-5`}>
        <ul className="flex flex-col text-center uppercase">
          {routesOptions.map((route, i) => (
            <li
              key={i}
              className={`
              ${
                route.name === active
                  ? 'bg-blue mb-2 text-lg'
                  : 'hover:bg-dark_gray'
              } 
              mb-2 text-lg transition-all`}
            >
              <Link href={route.route} className="block">{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
