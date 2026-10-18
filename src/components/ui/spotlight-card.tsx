'use client';

import { useCallback, useRef } from 'react';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { useViewportFocus } from '@/hooks/useViewportFocus';

/**
 * SpotlightCard
 *
 * Wrapper que encapsula o efeito de brilho spotlight (borda + fundo).
 * Desktop: o glow segue o cursor via CSS variables --mouse-x / --mouse-y,
 * atualizadas com requestAnimationFrame para manter 60fps.
 * Mobile (sem hover): o card mais visível da tela ganha `data-focus` e a borda
 * faz 1 volta de uma luz ("cobrinha") e assenta num anel azul suave.
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
    const localRef = useRef<HTMLDivElement | null>(null);
    useViewportFocus(localRef);

    const setRefs = useCallback(
        (node: HTMLDivElement | null) => {
            localRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.RefObject<HTMLDivElement | null>).current = node;
        },
        [ref]
    );

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
            ref={setRefs}
            onMouseMove={handleMouseMove}
            className={cn('spotlight-card', className)}
            {...props}
        >
            <span aria-hidden className="spotlight-ring" />
            <span aria-hidden className="spotlight-snake" />
            {children}
        </div>
    );
}
