import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google'
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    default: 'Nearby SOS - Alarmas Comunitarias | Protección Vecinal',
    template: '%s | Nearby SOS'
  },
  description: 'Sistema de alarma comunitaria instantánea. Activa alertas, notifica vecinos y mejora la seguridad de tu barrio con un solo toque. Respuesta rápida 24/7.',
  icons: {
    // Para favicon en public/image/favicon.png
    icon: '/favicon.png',

  },
  keywords: ['alarma comunitaria', 'seguridad vecinal', 'alertas emergencia', 'protección barrio', 'vecinos seguros', 'alarmas móvil'],
  authors: [{ name: 'Nearby SOS' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Nearby SOS - Alarmas Comunitarias',
    description: 'Protección vecinal con sistema de alarmas activables desde tu móvil',
    url: 'https://nearbysos.cl',
    siteName: 'Nearby SOS',
    images: [
      {
        url: 'https://nearbysos.cl/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nearby SOS - Sistema de Alarma Comunitaria',
      }
    ],
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}
      <WhatsAppFloat />
      <GoogleAnalytics gaId="G-VRVCC2K81F" />
      </body>
    </html>
  );
}