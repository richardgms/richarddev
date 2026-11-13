import { faqs } from '@/data/faqs';

const SITE = 'https://richardgomes.com.br';

// Dados estruturados (schema.org) para o Google entender quem presta o serviço e mostrar as dúvidas.
const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#richard`,
      name: 'Richard Gomes',
      jobTitle: 'Desenvolvedor Web Freelancer',
      url: SITE,
      image: `${SITE}/assets/images/profile.webp`,
      sameAs: ['https://instagram.com/richard.sites'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#servico`,
      name: 'Richard Gomes — Criação de Sites e Landing Pages',
      description:
        'Criação de landing pages, sites institucionais e automações com foco em conversão, velocidade e SEO.',
      url: SITE,
      image: `${SITE}/assets/images/profile.webp`,
      telephone: '+55-83-98807-3784',
      founder: { '@id': `${SITE}/#richard` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'João Pessoa',
        addressRegion: 'PB',
        addressCountry: 'BR',
      },
      areaServed: { '@type': 'Country', name: 'Brasil' },
      sameAs: ['https://instagram.com/richard.sites'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#site`,
      url: SITE,
      name: 'Richard Gomes',
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE}/#richard` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer.replace(/<[^>]+>/g, '') },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // `<` escapado para o JSON não conseguir fechar a tag <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
