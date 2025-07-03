import React from 'react';
import profile from '../data/profile.json';
import perfil from '../assets/img/perfil.jpg';

function About() {
  const { title, description } = profile.aboutMe;
  return (
    <section className="bg-zinc-900 rounded-2xl shadow-xl max-w-4xl mx-auto my-12 px-8 py-10 flex flex-col md:flex-row items-center md:items-start gap-10">
      <div className="flex-1 text-left">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h2>
        {/* Usamos dangerouslySetInnerHTML porque la descripción contiene HTML */}
        <div className="text-white" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
        <img src={perfil} alt="Perfil" className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-pink-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-100" />
      </div>
    </section>
  );
}

export default About;
