/* eslint camelcase: ["error", {ignoreImports: true}] */

import React from 'react';
import '@/styles/globals.css';
import Head from 'next/head';
import { Roboto, Josefin_Sans } from '@next/font/google';

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

function App({ Component, pageProps }) {
  return (
    <div className={`${josefin.variable} ${roboto.variable} font-roboto w-screen`}>
      <Head>
        <title>Danilo dos Reis Amaral</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
