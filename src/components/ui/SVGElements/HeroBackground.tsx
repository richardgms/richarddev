export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <svg
                className="absolute w-full h-full opacity-40"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 100 100"
            >
                <defs>
                    <radialGradient id="hero-glow-1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="var(--color-background-base)" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="hero-glow-2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--color-brand-light)" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="var(--color-background-base)" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 91, 235, 0.1)" />
                        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.02)" />
                        <stop offset="100%" stopColor="rgba(0, 91, 235, 0.05)" />
                    </linearGradient>
                    <filter id="glow-filter">
                        <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Animated Glow Orbs */}
                <circle
                    cx="25"
                    cy="35"
                    r="35"
                    fill="url(#hero-glow-1)"
                    className="animate-[pulse_8s_ease-in-out_infinite]"
                    style={{ willChange: 'transform, opacity' }}
                />
                <circle
                    cx="75"
                    cy="65"
                    r="40"
                    fill="url(#hero-glow-2)"
                    className="animate-[pulse_10s_ease-in-out_infinite_alternate]"
                    style={{ willChange: 'transform, opacity' }}
                />
                <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="url(#hero-glow-1)"
                    className="animate-[pulse_12s_ease-in-out_infinite]"
                    style={{ willChange: 'transform, opacity' }}
                />

                {/* Animated Grid Lines with Gradient */}
                <g stroke="url(#grid-gradient)" strokeWidth="0.15" filter="url(#glow-filter)">
                    {Array.from({ length: 11 }).map((_, i) => (
                        <path
                            key={`h-${i}`}
                            d={`M0 ${i * 10} L100 ${i * 10}`}
                            className="animate-[pulse_4s_ease-in-out_infinite]"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                    {Array.from({ length: 11 }).map((_, i) => (
                        <path
                            key={`v-${i}`}
                            d={`M${i * 10} 0 L${i * 10} 100`}
                            className="animate-[pulse_5s_ease-in-out_infinite]"
                            style={{ animationDelay: `${i * 0.3}s` }}
                        />
                    ))}
                </g>

                {/* Floating Particles */}
                <g fill="rgba(0, 91, 235, 0.3)" filter="url(#glow-filter)">
                    {[...Array(15)].map((_, i) => {
                        const cx = Math.random() * 100;
                        const cy = Math.random() * 100;
                        const r = 0.2 + Math.random() * 0.3;
                        const delay = Math.random() * 5;
                        const duration = 3 + Math.random() * 4;
                        return (
                            <circle
                                key={`particle-${i}`}
                                cx={cx}
                                cy={cy}
                                r={r}
                                className="animate-[pulse_duration_ease-in-out_infinite]"
                                style={{ 
                                    animationDelay: `${delay}s`,
                                    animationDuration: `${duration}s`
                                } as React.CSSProperties}
                            />
                        );
                    })}
                </g>

                {/* Diagonal Accent Lines */}
                <g stroke="rgba(0, 91, 235, 0.08)" strokeWidth="0.3">
                    <path d="M0 0 L100 100" className="animate-[pulse_6s_ease-in-out_infinite]" />
                    <path d="M100 0 L0 100" className="animate-[pulse_6s_ease-in-out_infinite_alternate]" />
                </g>
            </svg>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-base/50 to-background-base"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5"></div>
        </div>
    );
}
