import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar active="home"></Navbar>
      <main>
        <div className="fixed h-screen w-screen flex flex-col justify-evenly p-4 bg-dark_blue">
          <div className="text-white text-center">
            <h1 className="text-3xl font-josefin font-bold">DANILO DOS REIS</h1>
            <hr className="my-1" />
            <h4 className="text-xl">Desenvolvedor Web</h4>
          </div>
          <div className="flex flex-row justify-center gap-9">
            <a 
            href="https://github.com/DanReiss"
            target="__blank">
              <Image 
              src={"/icons/github.svg"} 
              width={39} 
              height={39} 
              alt="meu github"></Image>
            </a>       
            <a 
            href="mailto:danreis.ctt@gmail.com"
            target="_blank"
            className="h-fit">
              <Image 
              src={"/icons/email.svg"} 
              width={45} 
              height={34} 
              alt="meu email"></Image>              
            </a>
            <a 
            href="https://www.linkedin.com/in/danilo-dos-reis-amaral-8a5405234/"
            target="__blank">
              <Image 
              src={"/icons/linkedin.svg"} 
              width={39} 
              height={39} 
              alt="meu linkedin"></Image>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;