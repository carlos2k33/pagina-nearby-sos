'use client'

import Image from 'next/image'

export default function Example() {

  return (
<div className="bg-white">
  <div className="relative isolate px-6 pt-14 lg:px-8">
    {/* Fondo decorativo (opcional) */}

    {/* Contenedor principal con grid */}
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
        {/* Columna izquierda (Texto + CTA) */}
        <div className="py-8 sm:py-24 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
            Protección comunitaria en tiempo real
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestro sistema de alarmas comunitarias conecta vecinos y autoridades mediante tecnología móvil avanzada para una respuesta inmediata ante emergencias.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 lg:ml-24">
          <a
                href="/contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-lg hover:from-red-700 hover:to-red-900 transition-all animate-bounce"
              >
                Ir a Contacto
              </a>

<a
                href="/como-funciona"
                className="px-7 py-3 border-2 border-[#C7170C] rounded-full	 text-s font-semibold text-black hover:bg-red-200"
              >
                 Ver demostración <span aria-hidden="true">→</span>
              </a>

          </div>
        </div>

        {/* Columna derecha (Imagen) */}
        <div className="relative ml-8 lg:ml-32 "> {/* Añade margen izquierdo */}
        <Image
  src="/images/hero/nearby-inicio.jpeg"
  alt="App de alarmas comunitarias en acción"
  width={800}
  height={500}
  className="rounded-xl h-[500px] w-auto"
 />
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-100/20 via-transparent" />
</div>
      </div>
    </div>

  </div>
</div>
  )
}
