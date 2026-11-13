'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SectionEyebrow } from '@/components/ui/section-eyebrow';
import { faqs } from '@/data/faqs';

export function FAQSection() {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="faq" className="py-24 bg-background-deep relative border-t border-white/5">
            <div className="layout-container max-w-3xl">
                <div
                    className={`text-center mb-16 flex flex-col items-center transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <SectionEyebrow number="05" className="mb-5">Dúvidas</SectionEyebrow>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display tracking-tight">
                        Perguntas Frequentes
                    </h2>
                </div>

                <div
                    ref={ref}
                    className="flex flex-col gap-4"
                >
                    <Accordion defaultValue="item-0" className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className={`bg-surface border border-white/5 transition-all duration-700 ease-out rounded-2xl overflow-hidden hover:border-white/10 data-[state=open]:border-brand/30 data-[state=open]:shadow-[0_4px_20px_rgba(0,91,235,0.2)] ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <AccordionTrigger>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
