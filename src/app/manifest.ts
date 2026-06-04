import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mati Studio',
    short_name: 'Mati Studio',
    description: 'Barbería premium y salón de cuidado masculino.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    icons: [
      {
        src: '/Mati_Studio_vector-2.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/Mati_Studio_vector-2.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
      {
        src: '/Mati_Studio_vector-2.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      }
    ],
  };
}
