import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/Typography';

export default function Custom404() {
  return (
    // o height deve ser screen - navbar
    <div className="grid place-items-center flex-1 bg-gray text-white">
      <div className="flex flex-col md:flex-row items-center max-w-screen-lg gap-8 px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="text-center md:text-start">
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[12rem] leading-none font-josefin font-semibold">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-josefin font-semibold">Página não encontrada</h2>
          <Text className="my-4 sm:my-6">
            A URL requisitada não foi encontrada. O link que você usou está
            provavelmente quebrado ou essa página foi removida.
          </Text>
          <a href="/" className="my-4 sm:my-6">
            <button type="button" className="p-2 rounded border border-blue bg-blue hover:bg-dark_gray  hover:border-white active:bg-dark_gray active:border-white transition-all">RETORNAR À HOME</button>
          </a>
        </div>
        <Image
          src="/icons/404page.png"
          width={250}
          height={250}
          alt="404 page illustration"
          className="md:scale-[1.25]"
        />
      </div>
    </div>
  );
}
