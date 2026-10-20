import type { Metadata } from 'next';
import { Inter, Outfit, Lexend, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

// Inter, Outfit e Lexend sem `weight`: o arquivo variável já traz todos os pesos (evita negrito imitado).
// JetBrains Mono limitada a 400–600: o eixo completo custa +9 KB e só usamos até 600.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Criação de Sites e Landing Pages | Richard Gomes - Desenvolvedor Web',
  description:
    'Desenvolvedor Web Freelancer especializado em sites de alta performance e landing pages que vendem. Orçamento rápido para seu negócio. Confira meu portfólio!',
  metadataBase: new URL('https://richardgomes.com.br'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Richard Gomes' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://richardgomes.com.br/',
    title: 'Criação de Sites e Landing Pages | Richard Gomes',
    description:
      'Transforme visitantes em clientes com um site profissional e rápido. Solicite seu orçamento!',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Richard Gomes - Desenvolvedor Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criação de Sites e Landing Pages | Richard Gomes',
    description:
      'Transforme visitantes em clientes com um site profissional e rápido. Solicite seu orçamento!',
    images: ['/assets/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable} ${outfit.variable} ${lexend.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-theme-bg text-theme-text font-sans selection:bg-brand/30 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
