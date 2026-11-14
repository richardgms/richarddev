import type { MetadataRoute } from 'next';

// Só rotas públicas reais: âncoras não são páginas e a data do build não é revisão do conteúdo.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://richardgomes.com.br/',
    },
    {
      url: 'https://richardgomes.com.br/privacidade',
    },
  ];
}
