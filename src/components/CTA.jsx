import React from 'react';

const CTA = () => {
  return (
    // TODO: Replace bg-gray-800 with a background image
    <div className="bg-image backdrop-blur-sm bg-cover bg-center py-24 px-4 text-white" style={{ backgroundImage: "url('https://res.cloudinary.com/dpzlsrvzh/image/upload/v1774032386/home_jrvbrr.jpg')"}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl leading-tight">
          LLEVAMOS PRINCIPIOS DE INGENIERÍA E INDUSTRIA A LA CONSTRUCCIÓN PARA DESARROLLAR OBRAS MÁS PRECISAS, EFICIENTES Y PROFESIONALIZADAS
        </h2>
      </div>
    </div>
  );
};

export default CTA;
