import Head from 'next/head';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function PoliticasTerminos() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | Nearby-SOS</title>
        <meta name="description" content="Política de privacidad de la aplicación de alarmas comunitarias Nearby-SOS" />
        <meta name="keywords" content="política de privacidad, alarmas comunitarias, Nearby-SOS" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Contenedor principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>

          {/* Introducción */}
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Bienvenido a nuestra aplicación de alarmas comunitarias <strong>Nearby-SOS</strong>. La App es propiedad y está operada por <strong>Nearby SPA</strong>. Estamos comprometidos con la protección de su privacidad y la seguridad de su información personal. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y protegemos su información al utilizar la App.
          </p>

          {/* Contenedor de secciones */}
          <div className="space-y-10">

            {/* Sección: Información que Recopilamos */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                Recopilamos información personal cuando utiliza la App, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Su nombre y dirección de correo electrónico.</li>
                <li>Información de contacto, como su número de teléfono.</li>
                <li>Información de su dispositivo, como sistema operativo y tipo de dispositivo.</li>
                <li>Otra información que nos proporcione, como mensajes enviados a través de la App.</li>
              </ul>
            </div>

            {/* Sección: Uso de la Información */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Uso de la Información</h2>
              <p className="text-gray-700">
                Utilizamos la información personal para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Proporcionar y mejorar la App.</li>
                <li>Responder a sus preguntas y solicitudes.</li>
                <li>Enviar información importante sobre la App, actualizaciones y ofertas especiales.</li>
                <li>Fines estadísticos y de investigación.</li>
              </ul>
            </div>

            {/* Sección: Divulgación de la Información */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Divulgación de la Información</h2>
              <p className="text-gray-700">
                Podemos divulgar información personal si creemos que es necesario para cumplir con la ley, una orden judicial o solicitud gubernamental, o para proteger nuestros derechos o la seguridad de otros usuarios.
              </p>
            </div>

            {/* Sección: Seguridad */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Seguridad</h2>
              <p className="text-gray-700">
                Tomamos medidas razonables para proteger su información personal contra acceso no autorizado, divulgación, alteración o destrucción. Sin embargo, ninguna medida de seguridad es perfecta y no podemos garantizar la seguridad total de la información.
              </p>
            </div>

            {/* Sección: Cambios a esta Política */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cambios a esta Política de Privacidad</h2>
              <p className="text-gray-700">
                Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos de cualquier cambio importante mediante una notificación en la App o por correo electrónico.
              </p>
            </div>

            {/* Sección: Contacto */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-6">
                Si tienes preguntas o comentarios sobre esta Política de Privacidad, contáctanos a través de nuestro formulario.
              </p>
              <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all animate-bounce"
              >
                Ir a página de Contacto
              </a>
            </div>

          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
