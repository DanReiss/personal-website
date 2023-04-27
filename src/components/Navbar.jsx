import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 

const Navbar = ({active}) => {

  const [navOpen, setNavOpen] = useState(false);

  const routesOptions = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "projetos",
      route: "/projects",
    },
    {
      name: "contato",
      route: "/contact",
    },
  ]

  return (
    <div className="fixed w-screen flex justify-between align-center bg-dark_gray text-white font-light tracking-widest p-4 px-5">
      <Link href="/">
        <Image 
          src={"/logo.svg"} 
          alt="logo D." 
          width={35}
          height={27}>
        </Image>
      </Link>
      <div>
        <button onClick={() =>{
          setNavOpen((previous) => !previous);
        }}>
          <Image 
            src={"/navbar.svg"}
            alt="navbar"
            width={38}
            height={27}>
          </Image>
        </button>
        <div className={`${navOpen ? "" : "hidden"}  w-screen absolute left-0 top-full p-4 px-5 bg-gray`}>
          <ul className="flex flex-col  text-center uppercase">
            {routesOptions.map((route, i )=>{
              return (
                <li 
                key={i} 
                className={`
                ${
                  route.name === active
                  ? "bg-blue mb-2 text-lg"
                  : "hover:bg-dark_gray"
                } 
                mb-2 text-lg transition-all`                  
                }>
                  <Link href={route.route}  className="block">{route.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;