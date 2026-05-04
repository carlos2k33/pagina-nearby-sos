// components/Icons.js
import { 
    BellAlertIcon, 
    MapPinIcon, 
    UserGroupIcon as UsersIcon,
    DevicePhoneMobileIcon as QrCodeIcon 
  } from '@heroicons/react/24/outline';
  
  // SVG personalizados para tiendas (optimizados para SEO)
  export const GooglePlayIcon = () => (
    <svg 
      aria-label="Disponible en Google Play" 
      role="img"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <title>Descargar NearbySOS en Google Play Store</title>
      <path fill="currentColor" d="M3.6 1.8L13.8 12 3.6 22.2a1 1 0 0 1-.6-.9V2.7a1 1 0 0 1 .6-.9zM16.8 8.9l-2.3 2.3 8.6 8.6zM5.8 2.6L16.8 9l-2.3 2.3-8.7-8.7z"/>
    </svg>
  );
  
  export const AppleIcon = () => (
    <svg 
      aria-label="Disponible en App Store" 
      role="img"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <title>Descargar NearbySOS en Apple App Store</title>
      <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
  
  // Re-exportar iconos genéricos de Heroicons
  export { BellAlertIcon, MapPinIcon, UsersIcon, QrCodeIcon };