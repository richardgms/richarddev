import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background-deep border-t border-white/5 pt-16 pb-8" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Rodapé
            </h2>
            <div className="layout-container flex flex-col items-center">
                {/* Superior */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 mb-12">

                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-flex items-center gap-2.5 font-display text-xl md:text-2xl font-bold text-white tracking-tight mb-2" aria-label="Ir para a página inicial">
                            <span className="grid place-items-center w-[30px] h-[30px] rounded-full bg-background-deep border-[1.5px] border-white overflow-hidden box-border">
                                <Image src="/assets/icons/rg-monogram.png" alt="" width={30} height={30} className="w-full h-full object-cover" />
                            </span>
                            <span>Richard Gomes<span className="text-brand">.</span></span>
                        </Link>
                        <p className="text-[#a3aed0] text-sm">
                            Desenvolvedor Web Freelancer.
                        </p>
                    </div>

                    <nav className="flex items-center gap-6" aria-label="Navegação do Rodapé">
                        <Link href="#home" className="text-sm text-[#a3aed0] hover:text-white transition-colors">Início</Link>
                        <Link href="#servicos" className="text-sm text-[#a3aed0] hover:text-white transition-colors">Serviços</Link>
                        <Link href="#portfolio" className="text-sm text-[#a3aed0] hover:text-white transition-colors">Portfólio</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://instagram.com/richard.sites"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a3aed0] hover:text-brand transition-colors text-sm font-medium"
                            aria-label="Acessar Instagram (abre em nova aba)"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://linkedin.com/in/richard-gomes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a3aed0] hover:text-brand transition-colors text-sm font-medium"
                            aria-label="Acessar LinkedIn (abre em nova aba)"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/richardgms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a3aed0] hover:text-brand transition-colors text-sm font-medium"
                            aria-label="Acessar GitHub (abre em nova aba)"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Linha Divisória */}
                <Separator className="mb-8" />

                {/* Inferior */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3">
                    <p className="text-xs text-[#a3aed0]/60">
                        &copy; {currentYear} Richard Gomes - Todos os direitos reservados
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                        richardgomes<span className="text-brand">.br</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
