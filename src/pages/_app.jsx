/* eslint camelcase: ["error", {ignoreImports: true}] */

import React from 'react';
import '@/styles/globals.css';
import Head from 'next/head';
import { Roboto, Josefin_Sans } from '@next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-josefin',
  display: 'swap',
});

function App({ Component, pageProps, router }) {
  return (
    <div className={`${josefin.variable} ${roboto.variable} font-roboto max-w[100vw]`}>
      <Head>
        <title>Danilo dos Reis Amaral</title>
        <link rel="shortcut icon" href="icons/logo.svg" type="image/x-icon" />
        <meta name="description" content="Olá, eu sou o Danilo dos Reis. Estou começando na área de desenvolvimento de aplicações web, focado principalmente no Front-end" />
      </Head>
      <Navbar active={router.route} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
