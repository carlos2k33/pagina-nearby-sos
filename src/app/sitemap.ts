// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nearbysos.cl'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/descargar-app`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,  // Subí la prioridad (era 0.8)
    },
    {
      url: `${baseUrl}/contacto`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,  // Bajé la prioridad (era 0.9)
    },
    {
      url: `${baseUrl}/como-funciona`,
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politicas-terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',  // Cambié a yearly (cambia poco)
      priority: 0.3,  // Bajé la prioridad (no es página principal)
    }
  ]
}