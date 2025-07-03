import React, { useState } from 'react';
import profile from '../data/profile.json';
import perfil from '../assets/img/perfil.jpg';
import { FaUser, FaCode, FaGraduationCap, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiFrontendmentor } from 'react-icons/si';

function About() {
  const { title, description, details } = profile.aboutMe;
  const [activeTab, setActiveTab] = useState('about');
  const now = new Date().getFullYear();

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <div className="space-y-4">
            {details.experience.map((exp, idx) => (
              <div key={idx} className="bg-gradient-to-r from-pink-900/60 to-pink-800/10 p-5 rounded-xl border border-pink-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-800/1 rounded-lg">
                    <FaBriefcase className="text-2xl text-pink-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-pink-200">{exp.company} • {exp.period}</p>
                    <p className="text-zinc-300 mt-2">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <div className="space-y-4">
            {details.education.map((edu, idx) => (
              <div key={idx} className="bg-gradient-to-r from-pink-900/60 to-pink-800/10 p-5 rounded-xl border border-pink-900/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-800/1 rounded-lg">
                    <FaGraduationCap className="text-2xl text-pink-200" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-pink-200">{edu.institution} • {edu.period}</p>
                    <p className="text-zinc-300 mt-2">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="text-zinc-300 space-y-4" dangerouslySetInnerHTML={{ __html: description }} />
            <div className="grid grid-cols-2 gap-4 mt-6">
              {details.quickInfo.map((info, idx) => (
                <div key={idx} className="bg-pink-900/20 p-4 rounded-lg border border-pink-900/30">
                  {info.label === "Edad" ? (
                    <>
                      <p className="text-sm text-pink-200">{info.label}</p>
                      <p className="font-medium text-white">{now - info.value}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-pink-200">{info.label}</p>
                      <p className="font-medium text-white">{info.value}</p>
                    </>
                  )}

                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section className="max-w-10xl mx-auto my-16 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
      Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">Mí</span>
      </h2>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image */}
          <div className="relative p-8 md:p-10 bg-gradient-to-b from-pink-900/80 to-pink-800/10 flex-shrink-0 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-800 to-amber-500 opacity-70 blur-xl group-hover:opacity-90 transition-all duration-500"></div>
              <img
                src={perfil}
                alt="Perfil"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-pink-800/50 shadow-2xl z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white text-center">{title}</h2>
            <p className="text-pink-200 text-center">{details.description}</p>

            <div className="mt-6 flex space-x-4">
              <a href={details.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href={details.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href={details.social.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">
                <FaSquareXTwitter className="text-2xl" />
              </a>
            </div>

            <a
              href={details.social.gmail} target="_blank" rel="noopener noreferrer"
              className="mt-6 px-6 py-2 bg-pink-800/1 text-white rounded-full border border-pink-700 hover:bg-pink-700/70 transition-all flex items-center gap-2"
            >
              <FaEnvelope /> Contáctame
            </a>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8">
            {/* Tabs */}
            <div className="flex space-x-1 bg-zinc-800/50 p-1 rounded-lg mb-8">
              {['about', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex-1 flex items-center justify-center gap-2 ${activeTab === tab
                    ? 'bg-pink-800/70 text-white shadow-md'
                    : 'text-zinc-300 hover:bg-zinc-700/50'
                    }`}
                >
                  {tab === 'about' && <FaUser />}
                  {tab === 'experience' && <FaBriefcase />}
                  {tab === 'education' && <FaGraduationCap />}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="h-full">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
