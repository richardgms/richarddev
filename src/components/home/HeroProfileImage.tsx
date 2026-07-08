"use client";

import Image from 'next/image';
import { useRef } from 'react';

export function HeroProfileImage() {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group relative w-full aspect-square rounded-full bg-[#0F172A] z-10 
            transition-shadow duration-300 spotlight-card"
            style={{
                // Fallback initial values so the glow doesn't start at 0,0 
                '--mouse-x': '-1000px',
                '--mouse-y': '-1000px',
            } as React.CSSProperties}
        >
            <Image
                src="/assets/images/profile.webp"
                alt="Richard Gomes - Desenvolvedor Web Freelancer"
                fill
                priority
                sizes="(max-width: 400px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-full"
            />
            {/* The CSS spotlight-card will use a before/after pseudo-element placed in globals.css */}
        </div>
    );
}
