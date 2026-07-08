'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export function CTASection() {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="contato" className="py-32 bg-background-base relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Background Decorative Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="layout-container relative z-10 w-full">
                <SpotlightCard
                    ref={ref}
                    className={`rounded-3xl p-10 md:p-16 lg:p-24 text-center max-w-4xl mx-auto flex flex-col items-center bg-surface/60 backdrop-blur-md shadow-2xl transition-all duration-1000 ease-out ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight mb-6">
                        Pronto para elevar o nível do <br className="hidden md:block" /> seu negócio?
                    </h2>
                    <p className="text-[#a3aed0] text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Não deixe para depois. A internet não para e seu concorrente também não. Dê o primeiro passo rumo à presença digital que converte.
                    </p>

                    {/* Beam Glow CTA Button */}
                    <div className="relative group inline-block">
                        {/* The Outer Beam Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand via-[#9366F5] to-brand rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-[pulse_4s_linear_infinite]"></div>

                        {/* The Actual Button */}
                        <Button
                            href="https://wa.me/5583988073784?text=Ol%C3%A1%20Richard%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20neg%C3%B3cio."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative bg-white text-background-base font-bold text-lg rounded-full hover:scale-105"
                        >
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.59,9.83a130.39,130.39,0,0,1-20.92-20.92l9.83-14.59a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,98.36,56.74l-21.74,16c-13.88,10.22-19.38,28.85-13.11,44.75,19.33,49,60.83,90.54,109.84,109.84,15.9,6.27,34.53.77,44.75-13.11l16-21.74A8,8,0,0,0,230.13,184l-32-16A8,8,0,0,0,187.58,144.84Z" />
                            </svg>
                            Solicitar Orçamento no WhatsApp
                        </Button>
                    </div>

                    <small className="block mt-6 text-[#a3aed0] text-sm font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Resposta rápida em horário comercial.
                    </small>
                </SpotlightCard>
            </div>
        </section>
    );
}
