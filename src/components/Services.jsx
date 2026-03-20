import React from 'react';

const services = [
  {
    title: '1. DISEÑO',
    description: 'Recibimos los planos de arquitectura y analizamos el proyecto para incorporarlo a nuestro proceso técnico y productivo, respetando fielmente la definición arquitectónica.',
  },
  {
    title: '2. INGENIERIA',
    description: 'Desarrollamos la ingeniería, el modelado 3D y el cálculo estructural para definir cada componente con precisión y asegurar su viabilidad técnica y constructiva.',
  },
  {
    title: '3. PRODUCCION',
    description: 'Fabricamos la estructura en un entorno controlado, con equipamiento de alta tecnología, para lograr mayor calidad, velocidad y precisión en cada etapa.',
  },
  {
    title: '4. MONTAJE, ASISTENCIA TÉCNICA Y CONTROL DE CALIDAD',
    description: 'Podemos ejecutar el montaje o brindar asistencia técnica en sitio, asegurando una implementación coordinada y el control de calidad tanto de la estructura como de los componentes asociados.',
  },
];

const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
    {/* Placeholder for image */}
    <div className="bg-gray-300 h-48 w-full flex items-center justify-center">
      <span className="text-gray-500">Placeholder</span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-[#3a5269]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
