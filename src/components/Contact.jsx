import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { SiGmail, SiGithub, SiLinkedin} from 'react-icons/si';
import profile from "../data/profile.json";

const ContactCard = ({ icon: Icon, platform, link, username, color, delay }) => {
  const platformIcons = {
    gmail: <SiGmail className="text-3xl" />,
    github: <SiGithub className="text-3xl" />,
    linkedin: <SiLinkedin className="text-3xl" />,
    twitter: <FaXTwitter className="text-3xl" />
  };

  const platformColors = {
    gmail: 'from-red-500/10 to-red-900/5 border-red-800/30 hover:shadow-red-500/10',
    github: 'from-gray-500/10 to-gray-900/5 border-gray-800/30 hover:shadow-gray-500/10',
    linkedin: 'from-blue-500/10 to-blue-900/5 border-blue-800/30 hover:shadow-blue-500/10',
    twitter: 'from-sky-500/10 to-sky-900/5 border-sky-800/30 hover:shadow-sky-500/10'
  };

  const getPlatformIcon = (platform) => {
    return platformIcons[platform.toLowerCase()] || <FiMail className="text-3xl" />;
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${platformColors[platform.toLowerCase()] || 'from-pink-500/10 to-pink-900/5 border-pink-800/30 hover:shadow-pink-500/10'} p-6 transition-all duration-300 hover:scale-[1.02] hover:border-opacity-50`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay || 0 }}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${platformColors[platform.toLowerCase()]?.split(' ')[0] || 'from-pink-500/10'} ${platformColors[platform.toLowerCase()]?.split(' ')[1] || 'to-pink-900/5'} border ${platformColors[platform.toLowerCase()]?.split(' ')[2] || 'border-pink-800/30'}`}>
          {getPlatformIcon(platform)}
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-zinc-400 mb-1">{platform}</h3>
          <p className="text-white font-medium">{username}</p>
          <span className="text-xs text-zinc-500 mt-1 block">Click para abrir</span>
        </div>
        <div className="text-zinc-600 group-hover:text-white transition-colors">
          <FiExternalLink className="text-lg" />
        </div>
      </div>
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.a>
  );
};

function Contact() {
  const { linkedin, github, gmail, twitter } = profile.contact;
  const contacts = [
    { platform: 'GitHub', ...github },
    { platform: 'LinkedIn', ...linkedin },
    { platform: 'Email', ...gmail },
    { platform: 'Twitter', ...twitter }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">Contáctame</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o quieres trabajar juntos? No dudes en contactarme a través de cualquiera de estas plataformas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <ContactCard 
            key={index}
            platform={contact.platform}
            link={contact.link}
            username={contact.nickname}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-zinc-400 mb-4">O envíame un correo directamente a</p>
        <a 
          href={gmail.link} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group"
        >
          <FiMail className="mr-2 group-hover:animate-bounce" />
          {gmail.nickname}
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
