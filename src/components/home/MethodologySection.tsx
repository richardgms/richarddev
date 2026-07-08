'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

export function MethodologySection() {
    const { ref: textRef, isIntersecting: isTextVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: codeRef, isIntersecting: isCodeVisible } = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="py-24 relative overflow-hidden bg-background-deep border-t border-white/5">
            <div className="layout-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div
                    ref={textRef}
                    className={`flex flex-col gap-6 transition-all duration-700 ease-out ${isTextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}
                >
                    <SectionEyebrow number="03" className="self-start">Método</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight leading-tight">
                        Tecnologia de Ponta, <br className="hidden md:block" /> Custo Acessível.
                    </h2>
                    <p className="text-[#a3aed0] text-lg leading-relaxed">
                        Utilizo uma metodologia de <strong className="text-white font-medium">Desenvolvimento Ágil</strong> que combina as melhores ferramentas do mercado com design premium.
                    </p>

                    <div className="flex flex-col gap-5 mt-4">
                        {[
                            { text: 'Entrega rápida com Metodologia Ágil', bold: 'Metodologia Ágil' },
                            { text: 'Design exclusivo (sem templates prontos)' },
                            { text: 'Código limpo e otimizado para o Google (SEO)' }
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                                    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                                        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                    </svg>
                                </div>
                                <p className="text-[#e2e8f0]">
                                    {benefit.bold ? (
                                        <>Entrega rápida com <strong className="text-white font-medium">{benefit.bold}</strong></>
                                    ) : (
                                        benefit.text
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual / Code Block */}
                <div
                    ref={codeRef}
                    className={`relative transition-all duration-700 delay-200 ease-out ${isCodeVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                >
                    <SpotlightCard className="rounded-2xl overflow-hidden bg-background-base border border-white/10 shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">stack.js</span>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed text-[#a3aed0]">
                            <pre className="whitespace-pre-wrap">
{`// Tech Stack & Performance SEO
const richardStack = {
  frameworks: ["React", "Next.js", "Vite"],
  styling: ["Tailwind CSS", "Vanilla CSS"],
  backend: ["Node.js", "Supabase"],
  performance: ["WebP", "Lazy Loading"],
  ui: ["Figma", "Design System"]
};

// Resultado: Alta Conversão & Design Premium`}
                            </pre>
                        </div>
                    </SpotlightCard>

                    {/* Subtle Glow behind the code block */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand/10 blur-[80px] rounded-full -z-10 pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
}
