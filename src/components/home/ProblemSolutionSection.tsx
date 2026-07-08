'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

export function ProblemSolutionSection() {
    const { ref: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: cardsRef, isIntersecting: areCardsVisible } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section className="py-24 bg-background-deep relative overflow-hidden text-center z-10 border-t border-white/5">
            <div className="layout-container">
                <div
                    ref={headerRef}
                    className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out flex flex-col items-center ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <SectionEyebrow number="01" className="mb-5">O Problema</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display tracking-tight leading-tight text-balance">
                        Por que você está <span className="text-gradient">perdendo dinheiro</span>?
                    </h2>
                    <p className="text-[#a3aed0] text-lg lg:text-xl max-w-2xl text-balance">
                        Hoje em dia, não ter um site ou ter um site ruim é dar clientes de graça para a concorrência.
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
                >
                    {/* Card 1 */}
                    <SpotlightCard
                        className={`p-8 md:p-10 flex flex-col gap-5 transition-all duration-700 delay-100 ease-out ${areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center text-[2.5rem]">
                            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                <path d="M232,128v64H168Z" opacity="0.2" />
                                <path d="M235.06,120.61a8,8,0,0,0-8.72,1.73L200,148.69,141.66,90.34a8,8,0,0,0-11.32,0L96,124.69,29.66,58.34A8,8,0,0,0,18.34,69.66l72,72a8,8,0,0,0,11.32,0L136,107.31,188.69,160l-26.35,26.34A8,8,0,0,0,168,200h64a8,8,0,0,0,8-8V128A8,8,0,0,0,235.06,120.61ZM224,184H187.31L224,147.31Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Sua Concorrência Está no Topo</h3>
                        <p className="text-[#a3aed0] leading-relaxed">
                            Enquanto você adia a criação de um posicionamento forte, outras empresas da sua região já estão
                            escalando e dominando o mercado.
                        </p>
                    </SpotlightCard>

                    {/* Card 2 */}
                    <SpotlightCard
                        className={`p-8 md:p-10 flex flex-col gap-5 transition-all duration-700 delay-200 ease-out relative overflow-hidden ${areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl -z-10 rounded-full pointer-events-none"></div>
                        <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center text-[2.5rem]">
                            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                <path d="M192,64V75.64A8,8,0,0,1,188.82,82L128,128,67.2,82.4A8,8,0,0,1,64,76V64Z" opacity="0.2" />
                                <path d="M184,24H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64V40A16,16,0,0,0,184,24Zm0,16V56H72V40Zm0,176H72V180l56-42,56,42.35Zm-56-98L72,76V72H184v3.64Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Filtre Curiosos no WhatsApp</h3>
                        <p className="text-[#a3aed0] leading-relaxed">
                            Pare de perder tempo com quem não quer comprar. Um site profissional atua como seu melhor vendedor,
                            filtrando e educando o lead 24h.
                        </p>
                    </SpotlightCard>

                    {/* Card 3 */}
                    <SpotlightCard
                        className={`p-8 md:p-10 flex flex-col gap-5 transition-all duration-700 delay-300 ease-out ${areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center text-[2.5rem]">
                            <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                <path d="M192,40V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V40A16,16,0,0,1,80,24h96A16,16,0,0,1,192,40Z" opacity="0.2" />
                                <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight">81% Pesquisam no Google</h3>
                        <p className="text-[#a3aed0] leading-relaxed">
                            Antes de comprar qualquer coisa, seu cliente já procurou no Google. Se você não está lá, sem dúvida ele compra do
                            concorrente.
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
