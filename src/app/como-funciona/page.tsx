// src/app/como-funciona/page.tsx
import Head from 'next/head';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ComoFunciona() {
  return (
    <>
      <Head>
        <title>Cómo funciona Nearby SOS | Alarmas Comunitarias</title>
        <meta name="description" content="Descubre cómo nuestra app de alarmas comunitarias protege tu vecindario y conecta a tu comunidad de manera rápida y segura." />
        <meta property="og:title" content="Cómo funciona Nearby SOS | Alarmas Comunitarias" />
        <meta property="og:description" content="Descubre cómo nuestra app de alarmas comunitarias protege tu vecindario y conecta a tu comunidad de manera rápida y segura." />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Hero / Título */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Cómo funciona Nearby SOS
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Descubre paso a paso cómo nuestra app de alarmas comunitarias te permite proteger tu vecindario y mantener tu comunidad segura.
          </p>
        </section>

        {/* Sección de video + descripción */}
        <section className="max-w-5xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Video - CORREGIDO */}
          <div className="relative rounded-xl shadow-2xl overflow-hidden bg-gray-200">
            <video
              controls
              className="w-full h-auto rounded-xl"
            >
              <source src="/videos/como-funciona.mp4" type="video/mp4" />
              <source src="/videos/como-funciona.webm" type="video/webm" />
              Tu navegador no soporta videos HTML5. 
            </video>
          </div>

          {/* Descripción */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Protege tu comunidad en minutos</h2>
            <p className="text-gray-700 text-justify">
              Nuestra aplicación permite que cada vecino active alarmas comunitarias con un solo clic, notificando inmediatamente a todos los usuarios registrados en el área.
            </p>
            <p className="text-gray-700 text-justify">
              Gracias a la tecnología de geolocalización y alertas instantáneas, tu comunidad estará conectada y lista para actuar en situaciones de emergencia.
            </p>
            <p className="text-gray-700 text-justify">
              Podrás recibir alertas, reportar incidentes y mantener una comunicación segura con tus vecinos, todo desde tu móvil.
            </p>

            {/* Botón de llamado a la acción */}
            <a
              href="/contacto"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all"
            >
              Contáctanos para más información
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}