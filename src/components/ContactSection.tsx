'use client';

export default function ContactSection() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
      <p className="text-gray-700 mb-6">
        Si tienes preguntas o comentarios sobre esta Política de Privacidad, contáctanos a través de nuestro formulario.
      </p>
      <button
        onClick={() => {
          const formElement = document.getElementById('hubspotForm');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
        className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all animate-bounce"
      >
        Ir al Formulario de Contacto
      </button>
    </div>
  );
}