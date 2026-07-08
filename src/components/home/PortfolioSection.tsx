'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
import { CardContent } from '@/components/ui/card';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';

const projects = [
    {
        title: 'Estiga Total',
        desc: 'Landing Page de Alta Conversão para Academia. Foco em matrículas e planos.',
        image: '/assets/images/Cards/estigacard.webp',
        link: 'https://estigatotal.com.br/',
    },
    {
        title: 'NutriBox',
        desc: 'E-commerce de alimentação saudável. Design elegante (Dark Green) com foco em conversão.',
        image: '/assets/images/Cards/nutriboxcard.webp',
        link: 'https://nutriboxfit.com.br/',
    },
    {
        title: 'Leilane Andreia',
        desc: 'Portfólio Institucional Clean/Chic. Foco em transmitir elegância e autoridade no nicho.',
        image: '/assets/images/Cards/leilanecard.webp',
        link: 'https://leilaneandreia.com.br/',
    },
    {
        title: 'Josi Souza',
        desc: 'Site profissional corporativo focado em presença digital e conversão imediata.',
        image: '/assets/images/Cards/josicard.webp',
        link: 'https://josisouza.netlify.app/',
    },
    {
        title: 'Cícero Joias',
        desc: 'Catálogo digital de joias com design elegante e sofisticado p/ atração de clientes VIP.',
        image: '/assets/images/Cards/cicerocard.webp',
        link: 'https://cicerojoias.com/',
    },
    {
        title: 'Joanderson Bombeiro',
        desc: 'Landing page ágil e objetiva focada em serviços de emergência e laudos técnicos.',
        image: '/assets/images/Cards/joandersoncard.webp',
        link: 'https://joandersonbc.netlify.app/',
    },
];

export function PortfolioSection() {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.05 });

    return (
        <section id="portfolio" className="py-24 bg-background-base relative">
            <div className="layout-container">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <SectionEyebrow number="04" className="mb-5">Portfólio</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight mb-4">
                        Projetos Recentes
                    </h2>
                    <p className="text-[#a3aed0] text-lg max-w-2xl mx-auto">
                        Veja na prática o que é possível criar para posicionar o seu negócio à frente.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group block transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <SpotlightCard className="rounded-2xl overflow-hidden bg-surface flex flex-col h-full">
                            <div className="relative w-full aspect-[16/10] overflow-hidden bg-background-base">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90"></div>
                            </div>
                            <CardContent className="p-6 flex flex-col flex-grow relative z-10 -mt-8 bg-surface">
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">{project.title}</h4>
                                <p className="text-sm text-[#a3aed0] leading-relaxed mb-6 flex-grow">{project.desc}</p>
                                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand transition-colors">
                                    Visitar site <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                </span>
                            </CardContent>
                            </SpotlightCard>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
