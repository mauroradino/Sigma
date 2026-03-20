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
              <img src="https://res.cloudinary.com/dpzlsrvzh/image/upload/v1774032472/tercera_ett3wy.jpg" alt="" />
          </div>
        </div>

        <div className="mt-16 text-center bg-transparent p-8 border-2">
          <p className="text-gray-700 text-3xl">
            BUSCAMOS QUE CADA PROYECTO SE DESARROLLE CON MAYOR VELOCIDAD, PRECISIÓN Y PREVISIBILIDAD, MINIMIZANDO RETRABAJOS, MEJORANDO EL CONTROL EN OBRA Y LOGRANDO UNA EJECUCIÓN MÁS EFICIENTE DESDE EL INICIO.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          {/* Placeholder for the steel roll image */}
            <img className='md:w-6/12' src="https://res.cloudinary.com/dpzlsrvzh/image/upload/v1774031914/segunda_rljwzv.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
