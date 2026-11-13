import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Richard Gomes',
  description: 'Como o site richardgomes.com.br usa cookies e o Google Analytics.',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <section className="max-w-3xl mx-auto px-4 pt-32 pb-20 text-[#a3aed0] space-y-6 leading-relaxed">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white">Política de Privacidade</h1>
      <p>
        Este site usa o <strong className="text-white">Google Analytics</strong> para entender, de forma
        agregada, quantas pessoas visitam as páginas, de onde vêm e quais botões clicam. Isso me ajuda a
        melhorar o site. Não vendo nem compartilho esses dados com terceiros para publicidade.
      </p>
      <h2 className="font-display text-xl font-bold text-white">Cookies</h2>
      <p>
        O Google Analytics grava cookies no seu navegador para diferenciar visitas. Eles não identificam
        você pelo nome, e-mail ou telefone. Você pode bloquear ou apagar cookies nas configurações do
        navegador a qualquer momento, ou instalar o{' '}
        <a className="underline hover:text-white" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          complemento de desativação do Google Analytics
        </a>.
      </p>
      <h2 className="font-display text-xl font-bold text-white">Como o Google usa os dados</h2>
      <p>
        Saiba mais em{' '}
        <a className="underline hover:text-white" href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">
          Como o Google usa informações de sites ou apps que usam nossos serviços
        </a>.
      </p>
      <h2 className="font-display text-xl font-bold text-white">Contato</h2>
      <p>
        Dúvidas sobre seus dados? Fale comigo pelo WhatsApp disponível na página inicial. Seus direitos
        seguem a Lei Geral de Proteção de Dados (LGPD).
      </p>
    </section>
  );
}
