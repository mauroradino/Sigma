import React from 'react';

const Hero = () => {
  return (
    // TODO: Replace bg-gray-900 with a background image
    // e.g., style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    <div className="relative bg-gray-900 bg-cover bg-center text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider">SIGMA</h1>
        <p className="text-4xl md:text-6xl font-light">FRAMING</p>
        <p className="mt-4 text-lg md:text-xl font-thin tracking-widest">INGENIERIA EN CONSTRUCCION</p>
      </div>
    </div>
  );
};

export default Hero;
