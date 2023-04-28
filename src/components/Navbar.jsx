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
    <div className="fixed w-full z-10 flex justify-between align-center bg-dark_gray text-white font-light tracking-widest p-4 px-5">
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="logo D."
          width={35}
          height={27}
        />
      </Link>
      <div>
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
        <div className={`${navOpen ? '' : 'hidden'}  w-full absolute left-0 top-full p-4 px-5 bg-gray`}>
          <ul className="flex flex-col  text-center uppercase">
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
    </div>
  );
}

export default Navbar;
