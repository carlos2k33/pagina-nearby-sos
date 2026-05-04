export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Protección Comunitaria Integral
          </h2>
          <p className="text-xl text-gray-600">
            Nuestro sistema combina tecnología y colaboración vecinal para crear entornos más seguros.
          </p>
        </div>

        {/* Características en grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Activación Instantánea",
              description: "Activa la alarma comunitaria con un solo toque en tu móvil.",
              icon: "🚨"
            },
            {
              title: "Notificación Colectiva",
              description: "Todos los vecinos registrados reciben la alerta inmediatamente.",
              icon: "📢"
            },
            {
              title: "Capacidad de integración",
              description: "Aplicación complementaria habilitada para monitoreo por entidades de seguridad",
              icon: "👮"
            },
            {
              title: "App Móvil Integrada",
              description: "Interfaz sencilla diseñada para usarse en situaciones de emergencia.",
              icon: "📱"
            },
            {
              title: "Geolocalización",
              description: "El sistema identifica automáticamente tu ubicación al activar la alarma.",
              icon: "📍"
            },
            {
              title: "Respuesta Rápida",
              description: "Reducción de tiempos de respuesta ante incidentes comunitarios.",
              icon: "⚡"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#C7170C] hover:border-l-8 hover:-translate-y-2 hover:scale-[1.02] transform-gpu overflow-hidden"
            >
              {/* Efecto de fondo sutil - MODIFICADO: opacity reducida */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#fef2f2] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Contenedor del ícono */}
              <div className="relative z-10 w-12 h-12 mb-4 rounded-full bg-[#C7170C]/10 flex items-center justify-center text-[#C7170C] group-hover:bg-[#C7170C] group-hover:text-white transition-all duration-300">
                <span className="text-xl">{feature.icon}</span>
              </div>
              
              {/* Título y descripción */}
              <h3 className="relative z-10 text-xl font-bold mb-3 text-gray-800 group-hover:text-[#C7170C] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 relative z-10">
                {feature.description}
              </p>
              
              {/* Barra animada inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C7170C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <h2 className="text-center mb-16 max-w-3xl mx-auto text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nuestras Estadísticas
        </h2>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16">
          {[
            { value: "95%", label: "Reducción en tiempos de respuesta", icon: "⏱️" },
            { value: "250+", label: "Vecindarios protegidos", icon: "🏡" },
            { value: "24/7", label: "Monitoreo continuo", icon: "👁️" },
            { value: "99.9%", label: "Disponibilidad del sistema", icon: "⚡" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#C7170C]/20"
            >
              {/* Efecto de iluminación al hover - MODIFICADO: opacity reducida */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7170C]/0 to-[#C7170C]/5 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Icono decorativo */}
              <span className="relative z-10 text-3xl mb-3 block" aria-hidden="true">
                {stat.icon}
              </span>
              
              {/* Valor con animación */}
              <p className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A40C0B] to-[#EE0605] mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </p>
              
              {/* Texto con borde sutil */}
              <p className="relative z-10 text-gray-600 font-medium relative inline-block">
                {stat.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C7170C] group-hover:w-full transition-all duration-500"></span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}