import React from 'react';

// Datos de los servicios con URLs de imágenes de ejemplo para que combine
const servicesData = [
  {
    title: '1. DISEÑO',
    description: 'Recibimos los planos de arquitectura y analizamos el proyecto para incorporarlo a nuestro proceso técnico y productivo, respetando fielmente la definición arquitectónica.',
    // Imagen de planos arquitectónicos
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: '2. INGENIERIA',
    description: 'Desarrollamos la ingeniería, el modelado 3D y el cálculo estructural para definir cada componente con precisión y asegurar su viabilidad técnica y constructiva.',
    // Imagen de modelo 3D / Estructura metálica
    imageUrl: 'https://res.cloudinary.com/dpzlsrvzh/image/upload/v1774032472/tercera_ett3wy.jpg',
  },
  {
    title: '3. PRODUCCION',
    description: 'Fabricamos la estructura en un entorno controlado, con equipamiento de alta tecnología, para lograr mayor calidad, velocidad y precisión en cada etapa.',
    // Imagen de operarios trabajando con metal framing
    imageUrl: 'https://res.cloudinary.com/dpzlsrvzh/image/upload/v1774032611/cuarta_rztaec.jpg',
  },
  {
    title: '4. MONTAJE, ASISTENCIA TÉCNICA Y CONTROL DE CALIDAD',
    description: 'Podemos ejecutar el montaje o brindar asistencia técnica en sitio, asegurando una implementación coordinada y el control de calidad tanto de la estructura como de los componentes asociados.',
    // Imagen de obra en construcción con metal framing
    imageUrl: 'https://res.cloudinary.com/dpzlsrvzh/image/upload/v1774032680/quinta_sgf3a5.jpg',
  },
];

const ServiceCard = ({ title, description, imageUrl }) => (
  <div className="flex flex-col h-full font-bebas uppercase tracking-wide">
    {/* Contenedor de Imagen con aspecto de diseño */}
    <div className="border border-white/20 rounded-sm overflow-hidden mb-4">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
    
    {/* Contenedor de Texto con borde blanco fino */}
    <div className="border border-white rounded-sm p-6 grow bg-[#3a5269]/50">
      <h3 className="text-3xl font-normal text-white mb-5 leading-none">
        {title}
      </h3>
      <p className="text-white text-lg font-light">
        {description}
      </p>
    </div>
  </div>
);

const ServicesSigma = () => {
  return (
    <section id="services" className="py-20 px-6 bg-[#3a5269]">
      <div className="container mx-auto max-w-7xl">
        {/* Grid ajustado a 2 columnas fijas en md/lg para calcar el diseño */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSigma;