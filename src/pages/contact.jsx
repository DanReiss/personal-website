/* eslint-disable import/extensions */
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Contact() {
  return (
    <>
      <Navbar active="contato" />
      <div className="w-full min-h-screen text-white bg-dark_blue pt-[66px] px-6 pb-4">
        <div className="container">
          <div className="flex mb-2 mt-8">
            <h3 className="font-josefin text-3xl tracking-wide">Contato</h3>
            <span className="bg-blue w-full h-1 inline-block flex-1 m-auto ml-2" />
          </div>
          <p className="font-light">
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
      <Footer />
    </>
  );
}

export default Contact;
