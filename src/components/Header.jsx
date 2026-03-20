import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          SIGMA <span className="font-light">FRAMING</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-gray-300">Servicios</a>
          <a href="#about" className="hover:text-gray-300">Nosotros</a>
          <a href="#contact" className="hover:text-gray-300">Contacto</a>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 2 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
