import React from 'react';
import profile from '../data/profile.json';
import perfil from '../assets/img/perfil.jpg';

function About() {
  const { title, description } = profile.aboutMe;
  return (
    <section className="about">
      <div className="about-content">
        <h2>{title}</h2>
        {/* Usamos dangerouslySetInnerHTML porque la descripción contiene HTML */}
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <img src={perfil} alt="Perfil" />
    </section>
  );
}

export default About;
