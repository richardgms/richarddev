'use client';

import { useCallback, useRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * SpotlightCard
 *
 * Wrapper que encapsula o efeito de brilho spotlight (borda + fundo).
 * O glow segue o cursor via CSS variables --mouse-x / --mouse-y,
 * atualizadas com requestAnimationFrame para manter 60fps.
 *
 * O estilo visual base vem da classe .spotlight-card em globals.css.
 * Use className para adicionar padding, tamanho, animação, etc.
 *
 * @example
 * <SpotlightCard className="p-8 flex flex-col gap-5">
 *   <h3>Título</h3>
 *   <p>Descrição</p>
 * </SpotlightCard>
 */
export function SpotlightCard({
    className,
    children,
    onMouseMove,
    ref,
    ...props
}: HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> }) {
    const rafIdRef = useRef<number | null>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
            const card = e.currentTarget;
            rafIdRef.current = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            });
            onMouseMove?.(e);
        },
        [onMouseMove]
    );

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={cn('spotlight-card', className)}
            {...props}
        >
            {children}
        </div>
    );
}
