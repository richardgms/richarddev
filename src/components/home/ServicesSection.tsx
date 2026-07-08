'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export function ServicesSection() {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="servicos" className="py-24 bg-background-base relative z-10">
            <div className="layout-container">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <SectionEyebrow number="02" className="mb-5">O Que Eu Faço</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
                        Soluções Digitais Completas
                    </h2>
                </div>

                {/* Services Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
                >
                    {/* Card 1 */}
                    <SpotlightCard
                        className={`p-8 md:p-10 flex flex-col items-start gap-6 text-white shadow-xl transition-all duration-700 delay-100 ease-out h-full ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <CardHeader className="p-0 gap-0">
                            <CardTitle>Sites Institucionais</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-1">
                            <CardDescription className="text-[#a3aed0]">
                            A vitrine digital da sua empresa. Transmita autoridade e profissionalismo com um site completo e elegante.
                            </CardDescription>
                        </CardContent>
                        <ul className="flex flex-col gap-3 w-full mb-6">
                            {['Multi-páginas', 'SEO Otimizado', 'Painel Admin (Opcional)'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                                    <span className="text-brand flex-shrink-0">
                                        <svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <CardFooter className="p-0 mt-auto">
                            <Button href="#contato" variant="link" className="p-0 h-auto">
                            Quero um Site
                            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Button>
                        </CardFooter>
                    </SpotlightCard>

                    {/* Card 2 - Featured */}
                    <SpotlightCard
                        className={`relative overflow-visible p-8 md:p-10 flex flex-col items-start gap-6 text-white transition-all duration-700 delay-200 ease-out border border-brand/30 bg-surface shadow-[0_10px_40px_var(--color-brand)] lg:-translate-y-4 lg:hover:-translate-y-6 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand to-brand-light text-background-base text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                            Mais Escolhido
                        </div>
                        <CardHeader className="p-0 gap-0">
                            <CardTitle>Landing Pages de Alta Conversão</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-1">
                            <CardDescription className="text-[#a3aed0]">
                            Páginas únicas focadas visual e estrategicamente para transformar visitantes em leads no WhatsApp e clientes reais.
                            </CardDescription>
                        </CardContent>
                        <ul className="flex flex-col gap-3 w-full mb-6">
                            {['Design Persuasivo', 'Carregamento Ultra-rápido', 'Integração com WhatsApp'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                                    <span className="text-brand flex-shrink-0">
                                        <svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                        </svg>
                                    </span>
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <CardFooter className="p-0 mt-auto">
                            <Button href="#contato" variant="link" className="p-0 h-auto font-bold">
                            Quero uma Landing Page
                            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Button>
                        </CardFooter>
                    </SpotlightCard>

                    {/* Card 3 */}
                    <SpotlightCard
                        className={`p-8 md:p-10 flex flex-col items-start gap-6 text-white shadow-xl transition-all duration-700 delay-300 ease-out h-full ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <CardHeader className="p-0 gap-0">
                            <CardTitle>Páginas de Infoprodutos</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-1">
                            <CardDescription className="text-[#a3aed0]">
                            Estruturas preparadas para produtores digitais. Design focado em despertar desejo e maximizar o ROI.
                            </CardDescription>
                        </CardContent>
                        <ul className="flex flex-col gap-3 w-full mb-6">
                            {['Alta Taxa de Conversão', 'Copywriting Visual', 'Integração com Checkouts'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                                    <span className="text-brand flex-shrink-0">
                                        <svg width="1.2em" height="1.2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <CardFooter className="p-0 mt-auto">
                            <Button href="#contato" variant="link" className="p-0 h-auto">
                            Vender Infoproduto
                            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Button>
                        </CardFooter>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
