'use client';

import { useEffect, useState, useRef } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useIntersectionObserver({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let reducedMotionTimeout: ReturnType<typeof setTimeout> | null = null;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            reducedMotionTimeout = setTimeout(() => {
                setIsIntersecting(true);
            }, 0);
            return () => {
                if (reducedMotionTimeout) {
                    clearTimeout(reducedMotionTimeout);
                }
            };
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsIntersecting(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (reducedMotionTimeout) {
                clearTimeout(reducedMotionTimeout);
            }
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isIntersecting };
}
