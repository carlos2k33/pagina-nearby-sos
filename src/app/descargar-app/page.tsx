import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
//import { AppleIcon, GooglePlayIcon, QrCodeIcon, BellAlertIcon, MapPinIcon, UsersIcon } from "@/components/Icons";
import { AppleIcon, GooglePlayIcon, BellAlertIcon, MapPinIcon, UsersIcon, QrCodeIcon } from "@/components/Icons";

export default function DescargarApp() {
  return (
    <>
      <Head>
        <title>Descargar NearbySOS | Alarmas Comunitarias</title>
        <meta name="description" content="Descarga la app de alarmas comunitarias para Android e iOS. Protección vecinal en tu móvil." />
        <meta name="keywords" content="descargar app seguridad, alarma comunitaria app, nearby sos app, protección vecinal móvil" />
        <meta property="og:title" content="Descargar NearbySOS | Alarmas Comunitarias" />
        <meta property="og:description" content="Descarga la app de seguridad vecinal para recibir y enviar alertas en tu comunidad" />
      </Head>

      <main className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-white pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#C7170C]">Descarga la app</span> y protege tu comunidad
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Disponible para dispositivos Android e iOS. Activa alarmas comunitarias y recibe alertas en tiempo real.
              </p>
            </div>

            {/* Badges de descarga */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <a 
                href="https://play.google.com/store/apps/details?id=app.nearbysos.android&pcampaignid=web_share" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-lg hover:shadow-xl"
              >
                <div className="h-10 w-10 mr-3">
                <GooglePlayIcon />
                </div>
                <div className="text-left">
                  <div className="text-sm">Disponible en</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </a>
              
              <a 
                href="https://apps.apple.com/cl/app/nearby-sos/id6446780344" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-lg hover:shadow-xl"
              >
                <div className="h-10 w-10 mr-3">
                <AppleIcon  />
                </div >
                <div className="text-left">
                  <div className="text-sm">Descarga en</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </a>
            </div>

            {/* Mockup de la app */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/descarga/descarga.jpeg" 
                  alt="Pantallas de la app NearbySOS"
                  width={800}
                  height={600}
                  className="w-1/3 h-auto mx-auto" // 75% del ancho disponible
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-6">
                Si tienes preguntas o comentarios sobre la descarga de NearbySOS, contáctanos.
              </p>
              <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all animate-bounce"
              >
                Ir a página de Contacto
              </a>
            </div>

        {/* Sección de características */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Características principales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BellAlertIcon className="h-12 w-12 text-[#C7170C]" />,
                  title: "Alertas instantáneas",
                  description: "Activa la alarma comunitaria con un solo botón en situaciones de emergencia."
                },
                {
                  icon: <MapPinIcon className="h-12 w-12 text-[#C7170C]" />,
                  title: "Geolocalización precisa",
                  description: "Comparte tu ubicación exacta con vecinos y autoridades de forma segura."
                },
                {
                  icon: <UsersIcon className="h-12 w-12 text-[#C7170C]" />,
                  title: "Red comunitaria",
                  description: "Conéctate con vecinos verificados y recibe alertas de tu zona."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#C7170C]/30 transition-all">
                  <div className="bg-[#A40C0B]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de descarga con QR */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg text-center">
              <div className="bg-[#A40C0B]/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <QrCodeIcon className="h-10 w-10 text-[#C7170C]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Descarga rápida con QR</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Escanea este código y serás redirigido automáticamente a tu tienda de aplicaciones
              </p>
              <div className="bg-white p-4 rounded-lg inline-block shadow-md">
                <Image 
                  src="/images/nearbysos-qr.png" 
                  alt="Código QR inteligente para descargar NearbySOS - Detecta automáticamente tu dispositivo"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>
              <p className="mt-6 text-sm text-gray-500">
                O descarga directamente desde:
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=app.nearbysos.android&pcampaignid=web_share" 
                  className="text-[#C7170C] hover:text-[#EE0605] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
                <span className="text-gray-300">|</span>
                <a 
                  href="https://apps.apple.com/cl/app/nearby-sos/id6446780344" 
                  className="text-[#C7170C] hover:text-[#EE0605] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </div>
              
              {/* Texto explicativo adicional */}
              <p className="mt-4 text-xs text-gray-400">
                El código QR detecta automáticamente si usas Android o iPhone
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-[#A40C0B] py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para unirte a la red de seguridad?</h2>
            <p className="text-xl text-white/90 mb-8">
              Descarga NearbySOS hoy y contribuye a una comunidad más segura.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://play.google.com/store/apps/details?id=app.nearbysos.android&pcampaignid=web_share" 
                className="bg-white hover:bg-gray-100 text-[#A40C0B] px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-lg"
              >
                <div className="h-8 w-8 mr-3">
                <GooglePlayIcon  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-[#A40C0B]/80">Disponible en</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
              <a 
                href="https://apps.apple.com/cl/app/nearby-sos/id6446780344" 
                className="bg-white hover:bg-gray-100 text-[#A40C0B] px-6 py-4 rounded-xl flex items-center justify-center transition-colors shadow-lg"
              >
                <div className="h-8 w-8 mr-3" >
                <AppleIcon />
                </div>
                <div className="text-left">
                  <div className="text-xs text-[#A40C0B]/80">Descarga en</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}