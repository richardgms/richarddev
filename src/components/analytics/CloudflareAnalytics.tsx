import Script from 'next/script';

// Token do Cloudflare Web Analytics. Não é segredo: fica visível no HTML do site.
const TOKEN = '3777d96a8d3745c2a5438453880acde6';

// Só conta visitas do site publicado. O Netlify define CONTEXT=production no build do main;
// prévias de PR (deploy-preview) e o ambiente local ficam de fora.
const enabled = process.env.CONTEXT === 'production';

// Contador de visitas leve (~5 KB), sem cookies. Carrega depois da página pronta para não pesar no desempenho.
export function CloudflareAnalytics() {
  if (!enabled) return null;
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: TOKEN })}
      strategy="lazyOnload"
    />
  );
}
