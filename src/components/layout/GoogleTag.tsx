import Script from 'next/script';

const TAG_ID = 'GTM-K8ZWMDSL';

// Tag do Google (GA4). Carrega só depois que a página fica ociosa para não pesar no PageSpeed.
export function GoogleTag() {
  return (
    <>
      <Script
        id="google-tag"
        src={`https://www.googletagmanager.com/gtm.js?id=${TAG_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-tag-init" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
    </>
  );
}
