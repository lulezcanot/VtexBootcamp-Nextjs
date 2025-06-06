import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* VTEX Academy Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/imagenes/logo.png"
                alt="VTEX BootCamp Logo"
                width={40}
                height={40}
                className="mr-3 rounded"
              />
              <h3 className="text-white font-semibold text-lg">VTEX BootCamp</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Formando la próxima generación de desarrolladores de comercio digital
            </p>
          </div>

          {/* Recursos Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="/documentacion" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Documentación
                </a>
              </li>
              <li>
                <a href="/documentacion/guias-paso-a-paso" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tutoriales
                </a>
              </li>
            </ul>
          </div>

          {/* Compañía Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Compañía</h4>
            <ul className="space-y-3">
              <li>
                <a href="/acerca-de" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="https://wa.link/jnje1w" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom section with copyright and social links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 VTEX BootCamp by Luis Lezcano Tirado.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/lulezcanot" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/luis-lezcano-tirado-66b4b5285/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/luis_lezcanot/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
