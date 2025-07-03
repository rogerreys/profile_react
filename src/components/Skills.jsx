import React, { useState } from 'react';
import profile from '../data/profile.json';
import { FaChevronDown, FaChevronUp, FaCode, FaServer, FaMobile, FaDatabase, FaShieldAlt, FaLink, FaRocket, FaBrain, FaBolt } from 'react-icons/fa';

const categoryIcons = [
  <FaCode className="text-2xl" />,
  <FaServer className="text-2xl" />,
  <FaMobile className="text-2xl" />,
  <FaDatabase className="text-2xl" />,
  <FaShieldAlt className="text-2xl" />,
  <FaLink className="text-2xl" />,
  <FaRocket className="text-2xl" />,
  <FaBrain className="text-2xl" />,
  <FaBolt className="text-2xl" />
];

function Skills() {
  const skills = profile.skills;
  const skillscompuestos = profile.skillscompuestos;
  const categories = Object.entries(skills);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Generate a pastel color based on a string
  const getPastelColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 80%, 85%)`;
  };

  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
        Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">Conocimientos</span>
      </h2>
      
      {/* Skills Compuestos Section */}
      <div className="mb-16 space-y-6">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-8">Habilidades Avanzadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillscompuestos).map(([categoria, subcategorias], idx) => (
            <div 
              key={categoria}
              className={`bg-gradient-to-br from-pink-900/50 to-pink-800/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 ${
                expandedCategory === categoria ? 'row-span-2' : 'h-auto'
              }`}
            >
              <div 
                className="p-5 cursor-pointer flex justify-between items-center bg-pink-800/70 hover:bg-pink-800/90 transition-colors"
                onClick={() => toggleCategory(categoria)}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-pink-700/50">
                    {React.cloneElement(categoryIcons[idx % categoryIcons.length], { className: 'text-2xl text-pink-200' })}
                  </div>
                  <h2 className="text-xl font-bold text-white capitalize">
                    {categoria.replace(/_/g, " ")}
                  </h2>
                </div>
                {expandedCategory === categoria ? (
                  <FaChevronUp className="text-pink-200" />
                ) : (
                  <FaChevronDown className="text-pink-200" />
                )}
              </div>
              
              <div className={`p-5 space-y-4 transition-all duration-300 ${expandedCategory === categoria ? 'block' : 'hidden'}`}>
                {Object.entries(subcategorias).map(([subcategoria, items]) => (
                  <div key={subcategoria} className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-1.5 h-5 bg-amber-400 rounded-full"></div>
                      <h3 className="text-lg font-semibold text-amber-200 capitalize">
                        {subcategoria.replace(/_/g, " ")}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-4">
                      {items.map((item, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 text-sm rounded-full bg-pink-700/50 text-gray-100 hover:bg-pink-600/70 transition-colors"
                          style={{ border: `1px solid ${getPastelColor(item)}40` }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-8">Habilidades Técnicas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(([categoria, items], idx) => (
          <div
            key={categoria}
            className={`relative rounded-2xl shadow-xl p-6 flex flex-col min-h-[200px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-amber-400/50`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl md:text-3xl animate-pulse group-hover:animate-none">{categoryIcons[idx % categoryIcons.length]}</span>
              <h2 className="text-xl md:text-2xl font-bold text-white capitalize drop-shadow-sm">
                {categoria.replace(/_/g, " ")}
              </h2>
            </div>
            <ul className="list-disc list-inside ml-4 mt-2 flex-1">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-white/90 font-medium mb-1.5 transition-all duration-200 group-hover:text-amber-200 group-hover:translate-x-1 flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 group-hover:scale-150 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-amber-400/50 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
