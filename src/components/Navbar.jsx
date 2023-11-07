import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  const navList = {
    hidden: { top: '-300px' },
    show: { top: 'initial' },
  };

  return (
    <div className="sticky top-0 w-full z-10 text-white tracking-widest lg:bg-dark_gray lg:flex lg:flex-row lg:px-16">
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
      <motion.div
        animate={navOpen ? 'show' : 'hidden'}
        variants={navList}
        transition={{ type: 'tween', duration: 0.3, ease: 'linear' }}
        className="w-full z-0 absolute top-[-300px] lg:static border-b-4 border-blue lg:border-0 bg-gray lg:w-1/2 lg:bg-dark_gray p-4 px-5"
      >
        <ul className="flex flex-col lg:flex-row lg:justify-end text-center uppercase">
          {routesOptions.map((route) => (
            <li
              key={route.name}
              className={`
              ${
                route.route === active
                  ? 'bg-blue mb-2 text-lg'
                  : 'hover:bg-dark_gray lg:hover:bg-gray'
              } 
              mb-2 lg:mb-0 lg:ml-4 lg:px-4 text-lg transition-all`}
            >
              <Link
                href={route.route}
                className="block"
                onClick={() => { setTimeout(() => { setNavOpen(false); }, 500); }}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
