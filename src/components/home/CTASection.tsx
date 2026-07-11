'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { SpotlightCard } from '@/components/ui/spotlight-card';

export function CTASection() {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="contato" className="py-20 md:py-32 bg-background-base relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Background Decorative Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-brand/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="layout-container relative z-10 w-full">
                <SpotlightCard
                    ref={ref}
                    className={`relative overflow-visible rounded-3xl p-0 text-left max-w-5xl mx-auto bg-surface/60 backdrop-blur-md shadow-2xl transition-all duration-1000 ease-out border border-white/5 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                >
                    {/* Status Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 z-10 px-4 py-1 bg-gradient-to-r from-brand to-brand-light text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_4px_15px_rgba(0,91,235,0.4)] whitespace-nowrap">
                        Disponível para novos projetos
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full overflow-hidden rounded-3xl items-stretch">
                        {/* Left Side: Copy */}
                        <div className="lg:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-center items-start text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight mb-4">
                                Pronto para elevar o nível do seu negócio?
                            </h2>
                            <p className="text-[#a3aed0] text-base md:text-lg mb-8 leading-relaxed">
                                Não deixe para depois. A internet não para e seu concorrente também não. Dê o primeiro passo rumo à <span className="font-semibold text-white">presença digital que converte</span>.
                            </p>

                            {/* Beam Glow CTA Button */}
                            <div className="relative group inline-block w-full sm:w-auto mb-4">
                                {/* The Outer Beam Glow */}
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand via-brand-light to-brand rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

                                {/* The Actual Button */}
                                <Button
                                    href="https://wa.me/5583988073784?text=Ol%C3%A1%20Richard%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20meu%20neg%C3%B3cio."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="default"
                                    className="relative w-full sm:w-auto justify-center text-white hover:text-white px-8 py-3.5 h-auto text-base font-bold rounded-full hover:scale-105 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5 mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.074 4.89389C17.2091 3.02894 14.6689 2 12.0644 2C6.59814 2 2.12869 6.4373 2.12869 11.9035C2.12869 13.672 2.57885 15.3441 3.44702 16.8875L2.03223 22L7.33769 20.6495C8.78464 21.4212 10.4245 21.8714 12.0965 21.8714C17.5306 21.8392 21.9679 17.4019 21.9679 11.9035C21.9679 9.26688 20.939 6.791 19.074 4.89389ZM12.0322 20.1672C10.5853 20.1672 9.07403 19.7492 7.82001 18.9775L7.49846 18.7846L4.37949 19.5884L5.24766 16.5659L5.05473 16.2444C4.25088 14.926 3.80072 13.3826 3.80072 11.8392C3.80072 7.30547 7.46631 3.63987 12.0322 3.63987C14.2187 3.63987 16.2766 4.50804 17.82 6.05145C19.3634 7.59486 20.2316 9.68489 20.2316 11.9035C20.2959 16.5016 16.566 20.1672 12.0322 20.1672ZM16.566 13.9936C16.3088 13.865 15.119 13.254 14.8297 13.2219C14.6046 13.1254 14.4116 13.0932 14.283 13.3505C14.1544 13.6077 13.6399 14.1222 13.5113 14.3151C13.3827 14.4437 13.2541 14.508 12.9647 14.3473C12.7075 14.2187 11.9358 13.9936 10.9711 13.0932C10.2316 12.4502 9.71711 11.6463 9.62065 11.3569C9.49203 11.0997 9.5885 11.0032 9.74927 10.8424C9.87788 10.7138 10.0065 10.5852 10.103 10.3923C10.2316 10.2637 10.2316 10.135 10.3602 9.97428C10.4888 9.84566 10.3924 9.65274 10.328 9.52412C10.2316 9.3955 9.78142 8.17364 9.55634 7.65917C9.36342 7.1447 9.13834 7.24116 9.00972 7.24116C8.8811 7.24116 8.68817 7.24116 8.55956 7.24116C8.43094 7.24116 8.1094 7.27331 7.91647 7.5627C7.69139 7.81994 7.0483 8.43087 7.0483 9.65273C7.0483 10.8746 7.91647 12 8.07724 12.2251C8.20586 12.3537 9.84573 14.8939 12.2895 15.9871C12.8682 16.2444 13.3184 16.4051 13.7043 16.5338C14.283 16.7267 14.8297 16.6624 15.2477 16.6302C15.73 16.5981 16.6946 16.0514 16.9197 15.4405C17.1126 14.8939 17.1126 14.3473 17.0483 14.2508C16.984 14.1865 16.7911 14.09 16.566 13.9936ZM16.208 12.5C16.208 12.5 16.208 12.5 16.208 12.5C16.208 12.5 16.208 12.5 16.208 12.5Z" fill="currentColor"/>
                                    </svg>
                                    Solicitar Orçamento no WhatsApp
                                </Button>
                            </div>

                            <small className="flex items-center gap-2 text-[#a3aed0] text-sm font-medium">
                                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                                Resposta rápida em horário comercial.
                            </small>
                        </div>

                        {/* Right Side: Code Window */}
                        <div className="lg:col-span-5 p-6 md:p-10 lg:p-14 bg-background-deep/60 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-center items-stretch h-full">
                            <div className="w-full bg-[#060d1e]/80 border border-white/5 rounded-2xl font-mono text-xs md:text-sm text-[#a3aed0] relative overflow-hidden backdrop-blur-sm shadow-xl">
                                {/* Terminal Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">proposta.js</span>
                                </div>

                                {/* Terminal Content */}
                                <div className="p-6">
                                    <pre className="leading-relaxed text-left">
                                        <code className="text-text-secondary">
{`const proposta = {
  prazo: '3-10 dias',
  design: 'exclusivo',
  foco: 'conversão'
};`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
}
