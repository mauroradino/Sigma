import React from 'react';

const Intro = () => {
  return (
    <section id="about" className="py-20 px-4 bg-linear-to-r from-[#a7a7a7] from-30% to-[#FFFFFF]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-800">
            <h2 className="font-extralight text-7xl mb-15">
              CONSTRUÍ CON PRECISIÓN, EN MENOS TIEMPO Y SIN IMPREVISTOS
            </h2>
            <p className="text-gray-600 text-3xl mb-6">
              EN SIGMA NOS DEDICAMOS A INTEGRAR LA INGENIERÍA Y LA CONSTRUCCIÓN PARA QUE CONSTRUCTORES, ARQUITECTOS Y PROPIETARIOS REDUZCAN COSTOS Y PLAZOS DE OBRA SIN RESIGNAR CALIDAD, MEDIANTE LA IMPLEMENTACIÓN DE PROCESOS Y METODOLOGÍAS INDUSTRIALES (LEAN SIX SIGMA) DESDE LA CONCEPCIÓN DEL PROYECTO HASTA SU EJECUCIÓN EN OBRA.
            </p>
          </div>
          <div>
            {/* Placeholder for the steel frame structure image */}
            <div className="bg-gray-300 h-80 w-full rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-transparent p-8 border-2">
          <p className="text-gray-700 text-3xl">
            BUSCAMOS QUE CADA PROYECTO SE DESARROLLE CON MAYOR VELOCIDAD, PRECISIÓN Y PREVISIBILIDAD, MINIMIZANDO RETRABAJOS, MEJORANDO EL CONTROL EN OBRA Y LOGRANDO UNA EJECUCIÓN MÁS EFICIENTE DESDE EL INICIO.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          {/* Placeholder for the steel roll image */}
          <div className="bg-gray-300 h-96 w-full max-w-4xl rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-500">Placeholder Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
