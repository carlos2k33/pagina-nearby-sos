// components/WhatsAppFloat.jsx
'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const phoneNumber = "56946423844";
  const message = "Hola, me gustaría obtener más información";
  
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      {/* Tooltip - visible en desktop, oculto en móvil o más pequeño */}
      <div className="
        hidden md:block bg-green-600 text-white px-4 py-3 rounded-lg
        shadow-xl whitespace-nowrap mb-3
        relative before:content-[''] before:absolute before:-bottom-2 before:right-5
        before:border-x-8 before:border-t-8 before:border-x-transparent
        before:border-t-green-600
      ">
        <span className="font-semibold text-sm">Contactar por WhatsApp</span>
      </div>
      
      {/* Versión móvil del tooltip (más pequeño) */}
      <div className="
        md:hidden bg-green-600 text-white px-3 py-2 rounded-lg
        shadow-xl whitespace-nowrap mb-2 text-xs
        relative before:content-[''] before:absolute before:-bottom-2 before:right-4
        before:border-x-6 before:border-t-6 before:border-x-transparent
        before:border-t-green-600
      ">
        <span className="font-medium">Contactar por WhatsApp</span>
      </div>
      
      {/* Botón circular - más grande en móvil */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center w-16 h-16 md:w-14 md:h-14 
          bg-green-500 text-white rounded-full shadow-xl 
          hover:bg-green-600 hover:scale-110 transition-all duration-300 
          animate-bounce-slow
        "
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9 md:w-8 md:h-8" />
        
        <span className="absolute flex h-full w-full">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-30"></span>
        </span>
      </a>
    </div>
  );
}