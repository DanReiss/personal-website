/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React from 'react';
import Head from 'next/head';
import { Title2 } from '@/components/Typography';

function Contact() {
  return (
    <>
      <Head>
        <title>Danilo dos Reis Amaral | Contato</title>
      </Head>
      <div className="w-full min-h-screen text-white bg-dark_blue  px-6 py-12">
        <div className="container">
          <Title2 withDecoration>Contato</Title2>
          <p className="text-neutral-200 md:text-lg">
            Interessado(a) em tentar algo?
            Me mande uma mensagem ao preencher o formulário abaixo,
            responderei o mais rápido que eu conseguir.
          </p>
          <div className="w-full lg:w-1/2 m-auto bg-gray px-3 py-4 mt-8 md:mt-16">
            <form action="https://formsubmit.co/c4baf9a12205d942d5f8de171813f333" method="POST">
              <label className="block h-full mb-2">
                Assunto
                <input type="text" name="about" required className="w-full transition duration-300 text-dark_blue p-1 border-white focus:border-blue focus:border-r-8 focus:outline-0" />
              </label>
              <label className="block h-full mb-2">
                Email
                <input type="text" name="email" required className="w-full transition duration-300 text-dark_blue p-1 border-white focus:border-blue focus:border-r-8 focus:outline-0" />
              </label>
              <label className="block h-full mb-2">
                Nome
                <input type="text" name="name" required className="w-full transition duration-300 text-dark_blue p-1 border-white focus:border-blue focus:border-r-8 focus:outline-0" />
              </label>
              <label className="block h-full mb-2">
                Mensagem
                <textarea cols="30" rows="10" name="message" required className="w-full transition duration-300 text-dark_blue p-1 border-white focus:border-blue focus:border-4 focus:outline-0" />
              </label>
              <button type="submit" className="block m-auto bg-blue px-10 py-1">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
