import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-background-base hero-va"
        >
            {/* Background grid + radial gradients (Variant A) */}
            <div className="hero-va-bg" aria-hidden="true" />
            <div className="hero-va-grid" aria-hidden="true" />

            <div className="layout-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(380px,480px)] gap-10 lg:gap-20 items-center">
                    {/* Copy column */}
                    <div className="flex flex-col gap-7 lg:gap-8 animate-[fadeInUp_0.8s_ease-out]">
                        {/* Issue / eyebrow */}
                        <div className="flex items-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                            <span className="text-brand font-semibold">FULLSTACK & IA</span>
                            <span className="w-[60px] h-px bg-brand" />
                            <span>Landing Pages de Alta Conversão</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-display font-extrabold text-white tracking-[-0.04em] leading-[0.9] text-5xl md:text-6xl lg:text-7xl xl:text-[110px]">
                            <span className="block font-secondary italic font-medium tracking-[-0.01em] leading-[1.1] text-text-secondary text-[0.42em] mb-3.5">
                                Design premium de alta conversão —
                            </span>
                            Sites que
                            <br />
                            <em className="not-italic text-gradient">
                                convertem.
                            </em>
                        </h1>

                        {/* Deck */}
                        <p className="font-secondary italic font-light text-base md:text-lg leading-[1.55] text-text-secondary max-w-[460px] m-0">
                            Desenvolvo <span className="font-medium text-white">landing pages sofisticadas</span>, <span className="font-medium text-white">sites institucionais de alto padrão</span> e <span className="font-medium text-white">automações integradas</span>. Posicione sua marca com autoridade e atraia <span className="font-medium text-white">leads qualificados</span> todos os dias direto no seu <span className="font-medium text-white">WhatsApp</span>.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1">
                            <Button href="#contato" size="lg" className="group rounded-full">
                                <span>Solicitar orçamento</span>
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path d="M5 12h14M13 5l7 7-7 7" />
                                </svg>
                            </Button>
                            <a
                                href="#portfolio"
                                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-text-secondary hover:text-white transition-colors"
                            >
                                <span>Ver projetos</span>
                                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0791 12.519C21.0744 12.7044 21.0013 12.8884 20.8599 13.0299L14.8639 19.0301C14.5711 19.3231 14.0962 19.3233 13.8032 19.0305C13.5103 18.7377 13.5101 18.2629 13.8029 17.9699L18.5233 13.2461L4.32813 13.2461C3.91391 13.2461 3.57813 12.9103 3.57812 12.4961C3.57812 12.0819 3.91391 11.7461 4.32812 11.7461L18.5158 11.7461L13.8029 7.03016C13.5101 6.73718 13.5102 6.2623 13.8032 5.9695C14.0962 5.6767 14.5711 5.67685 14.8639 5.96984L20.813 11.9228C20.976 12.0603 21.0795 12.2661 21.0795 12.4961C21.0795 12.5038 21.0794 12.5114 21.0791 12.519Z" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Portrait column */}
                    <div className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto animate-[fadeIn_1s_ease-out_0.3s_both]">
                        <div className="va-portrait relative isolate overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                            <Image
                                src="/assets/images/profile.webp"
                                alt="Richard Gomes - Desenvolvedor Web Freelancer"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 480px"
                                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
                            />
                            <div className="va-portrait-overlay absolute inset-0 pointer-events-none" />

                            {/* Meta footer */}
                            <div className="absolute left-6 right-6 bottom-6 z-10 flex justify-between items-end gap-4">
                                <div>
                                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
                                        Cap. 01 — o autor
                                    </div>
                                    <p className="font-display font-bold text-xl md:text-2xl text-white mt-1 m-0">
                                        Richard Gomes
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="font-display font-extrabold text-3xl md:text-[38px] leading-none tracking-[-0.02em] text-white">
                                        <span className="text-brand">+</span>30
                                    </div>
                                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-secondary mt-0.5">
                                        Projetos entregues
                                    </div>
                                </div>
                            </div>

                            {/* Subtle glow behind */}
                            <div className="absolute -inset-10 -z-10 bg-brand/15 blur-[120px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Ticker */}
                <div className="va-ticker hidden md:flex items-center gap-4 mt-12 lg:mt-16 pt-4 border-t border-white/10 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--color-brand)]" />
                        Aceitando 2 projetos
                    </span>
                    <span className="text-white/20">/</span>
                    <span>Satisfação garantida</span>
                    <span className="text-white/20 hidden lg:inline">/</span>
                    <span className="hidden lg:inline">SEO técnico</span>
                    <span className="text-white/20 hidden lg:inline">/</span>
                    <span className="hidden lg:inline">Automações com IA</span>
                    <span className="ml-auto text-brand">JOÃO PESSOA · PB · BRASIL</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-[bounce_2s_ease-in-out_infinite] hidden md:block">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-brand rounded-full animate-[scrollDown_2s_ease-in-out_infinite]" />
                </div>
            </div>
        </section>
    );
}
