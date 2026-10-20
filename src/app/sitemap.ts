import type { MetadataRoute } from 'next';

// Página única: as âncoras (#portfolio etc.) não entram, o Google ignora fragmentos.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://richardgomes.com.br/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
