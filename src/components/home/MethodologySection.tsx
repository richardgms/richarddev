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
                        Utilizo uma metodologia de <span className="font-medium text-white">Desenvolvimento Ágil</span> que combina as melhores ferramentas do mercado com <span className="font-medium text-white">design premium</span>.
                    </p>

                    <div className="flex flex-col gap-5 mt-4">
                        {[
                            {
                                text: 'Entrega rápida com Metodologia Ágil',
                                bold: 'Metodologia Ágil',
                                icon: (
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.35281 2.61417C5.69063 2.37448 5.77017 1.90631 5.53048 1.5685C5.29079 1.23068 4.82262 1.15114 4.48481 1.39083C3.25694 2.26205 2.18702 3.34102 1.3261 4.57669C1.08931 4.91655 1.17287 5.38401 1.51273 5.6208C1.85259 5.85759 2.32006 5.77403 2.55684 5.43417C3.31882 4.34051 4.26601 3.3853 5.35281 2.61417Z" fill="#ffffff"/>
                                        <path d="M19.5143 1.39083C19.1765 1.15114 18.7083 1.23068 18.4686 1.5685C18.2289 1.90631 18.3085 2.37448 18.6463 2.61417C19.7331 3.3853 20.6803 4.34051 21.4423 5.43417C21.6791 5.77403 22.1465 5.85759 22.4864 5.6208C22.8263 5.38401 22.9098 4.91655 22.673 4.57669C21.8121 3.34102 20.7422 2.26205 19.5143 1.39083Z" fill="#ffffff"/>
                                        <path d="M11.2496 11.9999V6.50024C11.2496 6.08603 11.5854 5.75024 11.9996 5.75024C12.4138 5.75024 12.7496 6.08603 12.7496 6.50024V11.6894L15.3582 14.298C15.6511 14.5909 15.6511 15.0658 15.3582 15.3587C15.0653 15.6516 14.5904 15.6516 14.2976 15.3587L11.4692 12.5304L11.2496 11.9999Z" fill="#ffffff"/>
                                        <path d="M11.4677 12.5288L11.2496 11.9999C11.2496 12.2062 11.3329 12.3932 11.4677 12.5288Z" fill="#ffffff"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00007 12C2.00007 6.477 6.47706 2.00037 11.9997 2.00037C17.5224 2.00037 21.9994 6.477 21.9994 12C21.9994 17.5227 17.5224 21.9997 11.9997 21.9997C6.47706 21.9997 2.00007 17.5227 2.00007 12ZM11.9997 3.50037C7.30549 3.50037 3.50007 7.30579 3.50007 12C3.50007 16.6939 7.30549 20.4997 11.9997 20.4997C16.694 20.4997 20.4994 16.6939 20.4994 12C20.4994 7.30579 16.694 3.50037 11.9997 3.50037Z" fill="#ffffff"/>
                                    </svg>
                                )
                            },
                            {
                                text: 'Design exclusivo (sem templates prontos)',
                                icon: (
                                    <svg className="w-5 h-5" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0279 7.22682C15.516 6.73867 16.3075 6.73867 16.7956 7.22682C17.2838 7.71498 17.2839 8.50651 16.7957 8.99466C16.3075 9.48282 15.516 9.48282 15.0279 8.99466C14.5398 8.50651 14.5397 7.71498 15.0279 7.22682Z" fill="#ffffff"/>
                                        <path d="M9.01828 15.0053C8.53013 14.5171 7.73867 14.5171 7.25052 15.0053C6.76236 15.4934 6.76236 16.2849 7.25052 16.773C7.73867 17.2612 8.5302 17.2613 9.01836 16.7731C9.50651 16.2849 9.50644 15.4934 9.01828 15.0053Z" fill="#ffffff"/>
                                        <path d="M7.0341 9.369C7.70093 9.54768 8.09666 10.2331 7.91798 10.8999C7.7393 11.5668 7.05386 11.9622 6.38702 11.7839C5.72019 11.6052 5.32446 10.9198 5.50314 10.253C5.68182 9.58615 6.36726 9.19032 7.0341 9.369Z" fill="#ffffff"/>
                                        <path d="M10.9228 7.89465C11.5896 7.71598 11.9853 7.03056 11.8067 6.36372C11.628 5.69689 10.9426 5.30116 10.2757 5.47984C9.60889 5.65852 9.21306 6.34396 9.39174 7.0108C9.57042 7.67763 10.2559 8.07333 10.9228 7.89465Z" fill="#ffffff"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.02344 12C2.02344 6.47715 6.50059 2 12.0234 2C17.5463 2 22.0234 6.47715 22.0234 12C22.0234 12.7351 21.4156 13.2734 20.7352 13.2734H17.0372C15.3782 13.2734 14.0332 14.6184 14.0332 16.2775C14.0332 17.0726 14.3484 17.8353 14.9098 18.3984C15.4491 18.9393 15.6486 19.6836 15.5 20.3542C15.3477 21.042 14.8269 21.6373 14.0164 21.8012C13.3717 21.9317 12.7052 22 12.0234 22C6.50059 22 2.02344 17.5228 2.02344 12ZM12.0234 3.5C7.32902 3.5 3.52344 7.30558 3.52344 12C3.52344 16.6944 7.32902 20.5 12.0234 20.5C12.6047 20.5 13.1717 20.4418 13.7189 20.331C13.9076 20.2929 14.0023 20.18 14.0355 20.0297C14.0727 19.8622 14.028 19.6385 13.8476 19.4575C13.0059 18.6132 12.5332 17.4696 12.5332 16.2775C12.5332 13.79 14.5497 11.7734 17.0372 11.7734H20.5205C20.4004 7.18374 16.6421 3.5 12.0234 3.5Z" fill="#ffffff"/>
                                    </svg>
                                )
                            },
                            {
                                text: 'Código limpo e otimizado para o Google (SEO)',
                                icon: (
                                    <svg className="w-5 h-5" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.93795 6.58496C8.42885 6.58496 8.0177 6.73221 7.72973 7.04721C7.44426 7.35344 7.31195 7.77879 7.31195 8.30096C7.31195 8.68993 7.39826 9.04522 7.57356 9.36335L7.57421 9.3645C7.74806 9.67357 8.04715 10.0105 8.4607 10.3754L8.46147 10.3761C8.7815 10.6547 8.98899 10.885 9.09664 11.068L9.09767 11.0697C9.20155 11.2411 9.25595 11.4444 9.25595 11.685C9.25595 11.8921 9.21262 12.0104 9.15806 12.0722C9.11089 12.1261 9.03223 12.165 8.89295 12.165C8.7527 12.165 8.67243 12.1244 8.62315 12.0656C8.56962 12.0017 8.52995 11.8897 8.52995 11.703V11.121H7.29395V11.631C7.29395 12.1638 7.42252 12.5974 7.70096 12.9098L7.70207 12.911C7.98471 13.2212 8.39371 13.365 8.90195 13.365C9.41635 13.365 9.83081 13.2181 10.1191 12.9028C10.4109 12.5902 10.5459 12.1525 10.5459 11.613C10.5459 11.1971 10.4639 10.8271 10.2944 10.5077C10.126 10.1902 9.82547 9.84908 9.40542 9.48382C9.0857 9.20553 8.87391 8.97726 8.75938 8.79781C8.65392 8.62328 8.60195 8.43757 8.60195 8.23796C8.60195 8.05368 8.64037 7.94334 8.69163 7.88089C8.73825 7.8241 8.81373 7.78496 8.94695 7.78496C9.07524 7.78496 9.15099 7.82372 9.2001 7.88336L9.20306 7.88674C9.25133 7.9419 9.29195 8.05309 9.29195 8.25596V8.72996H10.5279V8.31896C10.5279 7.78717 10.3998 7.35606 10.121 7.04922C9.84462 6.73227 9.44095 6.58496 8.93795 6.58496Z" fill="#ffffff"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0241 6.58496C15.5091 6.58496 15.0925 6.73208 14.7985 7.04653C14.5069 7.35854 14.3711 7.78992 14.3711 8.31896V11.631C14.3711 12.16 14.5069 12.5914 14.7985 12.9034C15.0925 13.2178 15.5091 13.365 16.0241 13.365C16.5391 13.365 16.9557 13.2178 17.2497 12.9034C17.5413 12.5914 17.6771 12.16 17.6771 11.631V8.31896C17.6771 7.78992 17.5413 7.35854 17.2497 7.04653C16.9557 6.73208 16.5391 6.58496 16.0241 6.58496ZM15.6611 8.25596C15.6611 8.06585 15.701 7.95117 15.755 7.88574C15.8045 7.82581 15.8846 7.78496 16.0241 7.78496C16.1636 7.78496 16.2437 7.82581 16.2932 7.88574C16.3473 7.95117 16.3871 8.06585 16.3871 8.25596V11.694C16.3871 11.8841 16.3473 11.9988 16.2932 12.0642C16.2437 12.1241 16.1636 12.165 16.0241 12.165C15.8846 12.165 15.8045 12.1241 15.755 12.0642C15.701 11.9988 15.6611 11.8841 15.6611 11.694V8.25596Z" fill="#ffffff"/>
                                        <path d="M13.9936 6.67496H10.9936V13.275H13.9936V12.075H12.2836V10.44H13.6426V9.23996H12.2836V7.87496H13.9936V6.67496Z" fill="#ffffff"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.78711 4.17188C3.54447 4.17188 2.53711 5.17923 2.53711 6.42187V13.8281C2.53711 15.0708 3.54447 16.0781 4.78711 16.0781H11.7871V18.3281H9.53714C9.12293 18.3281 8.78714 18.6639 8.78714 19.0781C8.78714 19.4923 9.12293 19.8281 9.53714 19.8281H15.5371C15.9514 19.8281 16.2871 19.4923 16.2871 19.0781C16.2871 18.6639 15.9514 18.3281 15.5371 18.3281H13.2871V16.0781H20.2871C21.5298 16.0781 22.5371 15.0708 22.5371 13.8281V6.42188C22.5371 5.17923 21.5297 4.17188 20.2871 4.17188H4.78711ZM4.03711 6.42187C4.03711 6.00766 4.3729 5.67188 4.78711 5.67188H20.2871C20.7013 5.67188 21.0371 6.00766 21.0371 6.42188V13.8281C21.0371 14.2423 20.7013 14.5781 20.2871 14.5781H4.78711C4.3729 14.5781 4.03711 14.2423 4.03711 13.8281V6.42187Z" fill="#ffffff"/>
                                    </svg>
                                )
                            }
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                                    {benefit.icon}
                                </div>
                                <p className="text-[#e2e8f0]">
                                    {benefit.bold ? (
                                        <>Entrega rápida com <span className="text-white font-medium">{benefit.bold}</span></>
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
