import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
  
  {/* Columna 1: Logo y descripción */}
  <div className="space-y-4">
    <p className="text-gray-400 text-sm leading-relaxed">
      Tecnología de seguridad comunitaria para proteger lo que más importa.
    </p>
    <div className="flex space-x-4 pt-2">
      <Link  href="#" className="text-gray-400 hover:text-white transition-colors">
        <FaFacebook className="h-5 w-5" />
      </Link >
      <Link  href="#" className="text-gray-400 hover:text-white transition-colors">
        <FaInstagram className="h-5 w-5" />
      </Link >
    </div>
  </div>

  {/* Columna 2: Contacto */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Contacto</h3>
    <ul className="space-y-3">
      <li className="flex items-start">
        <FaPhone className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
        <div>
          <p className="text-gray-400">Teléfono</p>
          <a 
              href="https://wa.me/56946423844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
            +56 9 4642 3844
          </a>
        </div>
      </li>
      <li className="flex items-start">
        <FaEnvelope className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
        <div>
          <p className="text-gray-400">Email</p>
          <Link  href="mailto:contacto@nearbysos.cl" className="hover:text-white transition-colors">
            contacto@nearbysos.cl
          </Link >
        </div>
      </li>
      <li className="flex items-start">
        <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
        <div>
          <p className="text-gray-400">Dirección</p>
          <p>Los Militares 5620 of 905, Las Condes, Chile</p>
        </div>
      </li>
      <li className="flex items-start">
        <a
          href="/contacto"
          className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all"
        >
          Ir a página de Contacto
        </a>
      </li>
    </ul>
  </div>

  {/* Columna 3: Enlaces rápidos */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Enlaces Rápidos</h3>
    <ul className="space-y-2">
      <li><Link  href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link ></li>
      <li><Link  href="/como-funciona" className="text-gray-400 hover:text-white transition-colors">Cómo funciona</Link ></li>
      <li><Link  href="/descargar-app" className="text-gray-400 hover:text-white transition-colors">Descarga la App</Link ></li>
      <li><Link  href="/politicas-terminos" className="text-gray-400 hover:text-white transition-colors">Políticas y términos</Link ></li>
    </ul>
  </div>
</div>

        {/* División */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright y legales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NearbySOS. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link  href="/politicas-terminos" className="hover:text-white transition-colors">Política de privacidad</Link >
            <Link  href="#" className="hover:text-white transition-colors">Cookies</Link >
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;