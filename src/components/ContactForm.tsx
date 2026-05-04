// src/components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HubspotForm from './HubspotForm/HubspotForm';
import { FaWhatsapp, FaEnvelope, FaPhone, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  const phoneNumber = "56946423844";
  const message = "Hola, me gustaría obtener más información";
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push('/');
  };

/*   const testimonios = [
    {
      text: "Implementamos NearbySOS en nuestro condominio y la respuesta ante emergencias mejoró notablemente. El equipo siempre está disponible.",
      nombre: "Carlos Mendoza",
      cargo: "Presidente Junta de Vecinos"
    },
    {
      text: "La facilidad de contacto por WhatsApp fue clave para nuestra decisión. Resuelven dudas en minutos, no en días.",
      nombre: "Ana Torres",
      cargo: "Administradora Comunidad"
    },
    {
      text: "Desde que tenemos el sistema, la sensación de seguridad en nuestro barrio aumentó un 100%. Excelente soporte.",
      nombre: "Roberto Silva",
      cargo: "Director Seguridad"
    }
  ]; */

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Banner de Oferta para Meta Ads */}
{/*       <div className="max-w-7xl mx-auto text-center mb-12 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl shadow-lg animate-fade-in">
        <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-4 animate-pulse">
          <FaClock className="mr-2 text-red-600" />
          <span className="text-red-600 font-bold">🚀 OFERTA ESPECIAL - TIEMPO LIMITADO</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Primer mes con 30% de descuento
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Contacta hoy mismo y obtén un de
          Oferta válida solo para las primeras 10 comunidades.
        </p>
      </div> */}

      {/* Hero section optimizada */}
      <div className="max-w-7xl mx-auto text-center mb-16 animate-fade-in">
        <div className="inline-block bg-red-50 px-4 py-2 rounded-full mb-6">
          <span className="text-red-600 font-semibold">¿Necesitas ayuda inmediata?</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
          <span className="black-600 bg-clip-text">
            Seguridad que responde al instante
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
          No esperes días por una respuesta. Nuestro equipo está listo para ayudarte ahora.
        </p>
      </div>



      {/* Contenedor principal reorganizado */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* COLUMNA IZQUIERDA: Beneficios y confianza */}
        <div className="lg:col-span-1 space-y-8">
          {/* Tarjeta de beneficios */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">¿Por qué elegirnos?</h3>
            </div>
            
            <ul className="space-y-5">
              {[
                "Respuesta garantizada en menos de 24 horas",
                "Soporte técnico especializado 24/7",
                "Asesoramiento personalizado para tu comunidad",
                "Equipo certificado en seguridad comunitaria"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                    <FaCheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta de garantía */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FaClock className="h-7 w-7 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Respuesta 100% Garantizada</h4>
            </div>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Te responderemos en menos de 24 horas</span>

            </p>
{/*             <div className="flex items-center text-sm text-gray-600">
              <FaUsers className="mr-2 text-green-500" />
              <span>Más de 500 comunidades ya confían en nosotros</span>
            </div> */}
          </div>

          {/* Tarjeta con imagen */}
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/contact/contactanos.jpg"
              alt="Equipo de soporte de NearbySOS disponible 24/7"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-lg font-semibold">Equipo disponible 24/7 para tu seguridad</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Contacto principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* BANNER PRINCIPAL DE WHATSAPP */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl animate-pulseGlow">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0 md:mr-8">
                <h3 className="text-3xl font-bold mb-3">¿Necesitas una respuesta inmediata?</h3>
                <p className="text-lg opacity-90 max-w-md">
                  Chatea directamente con uno de nuestros ejecutivos. 
                </p>

              </div>
              <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-600 hover:bg-gray-50 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center whitespace-nowrap transform hover:shadow-xl"
              >
                <FaWhatsapp className="mr-4 h-8 w-8" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario como opción alternativa */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">O envíanos un mensaje</h3>
              <div className="mt-4 flex items-center justify-center text-gray-500">
                <FaClock className="mr-2" />
                <span>Respuesta garantizada en menos de 24 horas</span>
              </div>
            </div>
            
            <HubspotForm />
            
            {/* Contacto telefónico debajo del formulario */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="text-gray-700 font-medium">Prefieres llamar?</p>
                  <a 
                    href="tel:+56946423844" 
                    className="text-xl font-bold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    +56 9 4642 3844
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonios */}
{/*           <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
              Más de 500 comunidades confían en NearbySOS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-full mr-4">
                      <FaUsers className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonio.nombre}</p>
                      <p className="text-sm text-gray-500">{testimonio.cargo}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonio.text}"</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaCheckCircle key={i} className="h-5 w-5 text-green-400 mr-1" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Sección de contacto alternativo simplificada */}
          <div className="mt-10 bg-gray-50 p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Todos nuestros canales de contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://wa.me/56946423844" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-green-50 transition-all duration-300 group"
              >
                <div className="bg-green-100 p-4 rounded-xl mr-6 group-hover:bg-green-200 transition-colors">
                  <FaWhatsapp className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">WhatsApp</p>
                  <p className="text-gray-600 group-hover:text-green-600">Rapidez en respuesta garantizada</p>
                  <p className="text-gray-800 font-semibold mt-1">+56 9 4642 3844</p>
                </div>
              </a>
              
              <a 
                href="mailto:contacto@nearbysos.cl" 
                className="flex items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-red-50 transition-all duration-300 group"
              >
                <div className="bg-red-100 p-4 rounded-xl mr-6 group-hover:bg-red-200 transition-colors">
                  <FaEnvelope className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Correo electrónico</p>
                  <p className="text-gray-600 group-hover:text-red-600">Respuesta en 24 horas</p>
                  <p className="text-gray-800 font-semibold mt-1">contacto@nearbysos.cl</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de éxito (mantenido) */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden animate-fade-in">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <FaCheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por contactarnos!</h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu mensaje correctamente. Nuestro equipo te responderá dentro de las próximas 24 horas.
              </p>
              
              <button
                onClick={handleCloseModal}
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:from-red-700 hover:to-red-900 transition-colors"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}