'use client'

import { useState } from 'react'
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'
import { MdEmail } from 'react-icons/md'
import { MdPhone } from 'react-icons/md';


const navigation = [
  { name: 'Home', href: '/' },
  { name: '¿Cómo funciona?', href: '/como-funciona' },
  { name: 'Descarga la App', href: '/descargar-app' },
  /* { name: 'Blog', href: '/blog' }, */
  { name: 'Políticas y Términos', href: '/politicas-terminos' },
  
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Barra superior - Convenio marco */}
      <div className="hidden lg:flex w-full py-2 border-b border-gray-200 bg-gradient-to-r from-[#A40C0B] via-[#C7170C] to-[#EE0605] bg-animated-gradient">
        <div className="w-full mx-auto flex justify-between items-center">
          {/* Texto izquierdo - oculto en móvil, visible desde md */}
          <div className="hidden md:block text-white tracking-tight pl-4">
            Monitoreo 24/7 para tu vecindario con tecnología de última generación
          </div>
          
          {/* Texto derecho - oculto en móvil, visible desde md */}
          <div className="hidden md:flex items-center gap-1 pr-4 text-white">
            {/* Teléfono con enlace a WhatsApp */}
            <a 
              href="https://wa.me/56946423844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <MdPhone className="text-white" /> 
              +56 9 4642 3844
            </a>
            
            <span className="mx-2"></span> {/* Espacio horizontal */}
            
            {/* Correo con enlace mailto */}
            <a 
              href="mailto:contacto@nearbysos.cl" 
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <MdEmail className="text-white" /> 
              contacto@nearbysos.cl
            </a>
          </div>
        </div>
      </div>

          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 relative">
          {/* Logo (izquierda) */}
          <div className="flex lg:flex-1">
            <Image
              src="/images/logos/logo-nearby-sos-principal.png"
              alt="Nearby SOS - Sistema de alertas de emergencia"
              width={300}
              height={100}
              className="h-16 w-auto"
            />
          </div>

          {/* Menú hamburguesa (mobile) */}
          <div className="absolute right-4 top-4 lg:hidden z-50">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C7170C] transition-all"
          >
            <span className="sr-only">Abrir menú</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>

          {/* Navegación centrada */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 top-5">
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-s font-semibold text-gray-900 hover:text-gray-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

         <div className="hidden lg:flex absolute right-4 top-4"> 
              <a
                href="/contacto"
                className="px-7 py-3 border-2 border-[#C7170C] rounded-full text-m font-semibold text-black hover:bg-red-100 animate-pulse-slow"
              >
                Contacto
              </a>
            </div>
    

          <div className="flex lg:flex-1"></div>
        </nav>    
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Nearby SOS</span>
                <Image
              src="/images/logos/logo-nearby-sos-principal.png"
              alt="Nearby SOS - Sistema de alertas de emergencia"

              width={120}
              height={40}
              className="h-8 w-auto "
            />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>
  );
}