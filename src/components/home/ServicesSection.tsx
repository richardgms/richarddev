'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export function ServicesSection() {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="servicos" className="py-12 md:py-24 bg-background-base relative z-10">
            <div className="layout-container">
                {/* Section Header */}
                <div
                    className={`text-center mb-8 md:mb-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center"
                >
                    {/* Card 1 */}
                    <SpotlightCard
                        className={`p-4 md:p-8 flex flex-col items-start gap-2 md:gap-4 text-white shadow-xl transition-all duration-700 delay-100 ease-out h-full ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        {/* Background Decorative Icon */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 text-brand/[0.07]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <div className="w-15 h-15 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1.5 w-full">
                            <CardHeader className="p-0 gap-0">
                                <CardTitle className="!text-2xl">Sites Institucionais</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardDescription className="text-[#a3aed0]">
                                    A <span className="font-medium text-white">vitrine digital</span> da sua empresa. Transmita <span className="font-medium text-white">autoridade e profissionalismo</span> com um site completo e elegante.
                                </CardDescription>
                            </CardContent>
                        </div>
                        <div className="w-full h-px bg-white/5 my-1"></div>
                        <ul className="flex flex-col gap-1.5 md:gap-2.5 w-full flex-1">
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
                        <CardFooter className="p-0 w-full flex justify-center mt-2">
                            <Button href="#contato" variant="outline" className="group w-full justify-center border-brand/35 text-brand-light hover:text-white hover:border-brand/60 px-6 py-2.5 h-auto text-sm transition-all duration-300">
                                <span>Quero um Site</span>
                                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ml-1.5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0791 12.519C21.0744 12.7044 21.0013 12.8884 20.8599 13.0299L14.8639 19.0301C14.5711 19.3231 14.0962 19.3233 13.8032 19.0305C13.5103 18.7377 13.5101 18.2629 13.8029 17.9699L18.5233 13.2461L4.32813 13.2461C3.91391 13.2461 3.57813 12.9103 3.57812 12.4961C3.57812 12.0819 3.91391 11.7461 4.32812 11.7461L18.5158 11.7461L13.8029 7.03016C13.5101 6.73718 13.5102 6.2623 13.8032 5.9695C14.0962 5.6767 14.5711 5.67685 14.8639 5.96984L20.813 11.9228C20.976 12.0603 21.0795 12.2661 21.0795 12.4961C21.0795 12.5038 21.0794 12.5114 21.0791 12.519Z" fill="currentColor" />
                                </svg>
                            </Button>
                        </CardFooter>
                    </SpotlightCard>

                    {/* Card 2 - Featured */}
                    <SpotlightCard
                        className={`relative overflow-visible p-4 md:p-8 flex flex-col items-start gap-2 md:gap-4 text-white transition-all duration-700 delay-200 ease-out border border-brand/30 bg-surface shadow-[0_10px_40px_rgba(0,91,235,0.25)] lg:-translate-y-4 lg:hover:-translate-y-6 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        {/* Background Decorative Icon */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                            <svg className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 text-brand/[0.07]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-gradient-to-r from-brand to-brand-light text-background-base text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                            Mais Escolhido
                        </div>
                        <div className="w-15 h-15 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1.5 w-full">
                            <CardHeader className="p-0 gap-0">
                                <CardTitle className="!text-2xl">Landing Pages de Alta Conversão</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardDescription className="text-[#a3aed0]">
                                    Páginas únicas focadas visual e estrategicamente para transformar visitantes em <span className="font-medium text-white">leads no WhatsApp</span> e clientes reais.
                                </CardDescription>
                            </CardContent>
                        </div>
                        <div className="w-full h-px bg-white/5 my-1"></div>
                        <ul className="flex flex-col gap-1.5 md:gap-2.5 w-full flex-1">
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
                        <CardFooter className="p-0 w-full flex justify-center mt-2">
                            <Button href="#contato" variant="default" className="group w-full justify-center text-white hover:text-white px-6 py-2.5 h-auto text-sm transition-all duration-300">
                                <span>Quero uma Landing Page</span>
                                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ml-1.5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0791 12.519C21.0744 12.7044 21.0013 12.8884 20.8599 13.0299L14.8639 19.0301C14.5711 19.3231 14.0962 19.3233 13.8032 19.0305C13.5103 18.7377 13.5101 18.2629 13.8029 17.9699L18.5233 13.2461L4.32813 13.2461C3.91391 13.2461 3.57813 12.9103 3.57812 12.4961C3.57812 12.0819 3.91391 11.7461 4.32812 11.7461L18.5158 11.7461L13.8029 7.03016C13.5101 6.73718 13.5102 6.2623 13.8032 5.9695C14.0962 5.6767 14.5711 5.67685 14.8639 5.96984L20.813 11.9228C20.976 12.0603 21.0795 12.2661 21.0795 12.4961C21.0795 12.5038 21.0794 12.5114 21.0791 12.519Z" fill="currentColor" />
                                </svg>
                            </Button>
                        </CardFooter>
                    </SpotlightCard>

                    {/* Card 3 */}
                    <SpotlightCard
                        className={`p-4 md:p-8 flex flex-col items-start gap-2 md:gap-4 text-white shadow-xl transition-all duration-700 delay-300 ease-out h-full ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`}
                    >
                        {/* Background Decorative Icon */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none -z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute -bottom-6 -right-6 w-36 h-36 md:w-44 md:h-44 text-brand/[0.07]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </div>
                        <div className="w-15 h-15 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-1.5 w-full">
                            <CardHeader className="p-0 gap-0">
                                <CardTitle className="!text-2xl">Páginas de Infoprodutos</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardDescription className="text-[#a3aed0]">
                                    Estruturas preparadas para produtores digitais. Design focado em despertar desejo e <span className="font-medium text-white">maximizar o ROI</span>.
                                </CardDescription>
                            </CardContent>
                        </div>
                        <div className="w-full h-px bg-white/5 my-1"></div>
                        <ul className="flex flex-col gap-1.5 md:gap-2.5 w-full flex-1">
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
                        <CardFooter className="p-0 w-full flex justify-center mt-2">
                            <Button href="#contato" variant="outline" className="group w-full justify-center border-brand/35 text-brand-light hover:text-white hover:border-brand/60 px-6 py-2.5 h-auto text-sm transition-all duration-300">
                                <span>Vender Infoproduto</span>
                                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ml-1.5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0791 12.519C21.0744 12.7044 21.0013 12.8884 20.8599 13.0299L14.8639 19.0301C14.5711 19.3231 14.0962 19.3233 13.8032 19.0305C13.5103 18.7377 13.5101 18.2629 13.8029 17.9699L18.5233 13.2461L4.32813 13.2461C3.91391 13.2461 3.57813 12.9103 3.57812 12.4961C3.57812 12.0819 3.91391 11.7461 4.32812 11.7461L18.5158 11.7461L13.8029 7.03016C13.5101 6.73718 13.5102 6.2623 13.8032 5.9695C14.0962 5.6767 14.5711 5.67685 14.8639 5.96984L20.813 11.9228C20.976 12.0603 21.0795 12.2661 21.0795 12.4961C21.0795 12.5038 21.0794 12.5114 21.0791 12.519Z" fill="currentColor" />
                                </svg>
                            </Button>
                        </CardFooter>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
