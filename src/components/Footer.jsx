import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import "../index.css"

const Footer = () => {
  return (
    <footer id="contact" className="bg-linear-to-r from-[#bdbdbd] from-40% to-[#FFFFFF] py-20 px-4">
      {/* Añadimos min-h para que el flex tenga espacio que repartir */}
      <div className="container mx-auto grid md:grid-cols-2 gap-16 min-h-150">
        
        {/* Columna Izquierda: Usamos flex-col y justify-between para separar arriba de abajo */}
        <div className="text-white flex flex-col font-bebas tracking-wider">
          
          {/* Bloque Superior: Títulos */}
          <div>
            <h3 className="text-6xl mb-2">CONTACTANOS</h3>
            <p className="mb-4 text-4xl leading-tight">
              OFICINA ADMINISTRATIVA Y PLANTA INDUSTRIAL
            </p>
            <p className="text-2xl opacity-90">
              COORDINÁ UNA REUNIÓN CON NUESTRO EQUIPO TÉCNICO
            </p>
          </div>

          {/* Bloque Inferior: Grid de contacto y Logo (Empujado hacia abajo con mt-auto) */}
          <div className="mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-white mb-12">
              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl flex items-center justify-center min-w-16 h-16">
                  <Mail className="text-gray-500 w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl leading-none mb-1">Email</h3>
                  <p className="text-lg opacity-90 lowercase font-sans">contacto@sigmaframing.uy</p>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl flex items-center justify-center min-w-16 h-16">
                  <Instagram className="text-gray-500 w-8 h-8" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl leading-none mb-1">Instagram</h3>
                  <p className="text-lg opacity-90 lowercase font-sans">@sigmaframing</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl flex items-center justify-center min-w-16 h-16">
                  <Phone className="text-gray-500 w-8 h-8 fill-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl leading-none mb-1">Phone</h3>
                  <p className="text-lg opacity-90 font-sans">29 29 64 55 / 091 911 628</p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-2xl flex items-center justify-center min-w-16 h-16">
                  <MapPin className="text-gray-500 w-8 h-8 fill-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl leading-none mb-1">Location</h3>
                  <p className="text-lg opacity-90 uppercase">Maldonado - Uruguay</p>
                </div>
              </div>
            </div>

            {/* Logo Uruguay Natural al final de todo */}
            <div className="flex items-end">
              <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Uruguay_natural.svg/960px-Uruguay_natural.svg.png' 
                className="w-48 h-auto object-contain" 
                alt='logo Uruguay Natural'
              />
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="flex justify-end items-start">
            <div className="w-full md:w-8/12 bg-[#4a6f8d] px-9 py-12 rounded-4xl shadow-lg font-bebas tracking-wide">
            <h3 className="text-4xl mb-12 text-center text-white">DEJANOS TU CONSULTA</h3>
            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xl text-white">NOMBRE Y APELLIDO</label>
                <input type="text" id="name" className="w-full p-3 border-none rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xl text-white">CORREO ELECTRÓNICO</label>
                <input type="email" id="email" className="w-full p-3 border-none rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xl text-white">TELÉFONO CELULAR</label>
                <input type="tel" id="phone" className="w-full p-3 border-none rounded-2xl bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-lg text-white">MENSAJE (ARQUITECTO, CONSTRUCTOR, PROPIETARIO)</label>
                <textarea id="message" rows="4" className="w-full p-3 border-none rounded-2xl bg-white"></textarea>
                </div>
                <button type="submit" className="mt-4 text-2xl text-white self-start hover:opacity-80 transition-opacity">
                ENVIAR
                </button>
            </form>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;