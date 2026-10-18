'use client';

import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * useViewportFocus
 *
 * Marca com `data-focus="true"` apenas UM elemento por vez: o registrado que
 * tem mais área visível na viewport. Pensado para dar ao mobile (sem mouse)
 * um equivalente ao "foco" que o hover dá no desktop.
 *
 * Só roda em telas sem hover (touch). Um único IntersectionObserver é
 * compartilhado entre todos os elementos registrados.
 */

const SWITCH_MARGIN = 1.15; // o novo candidato precisa ter 15% mais área visível que o atual (evita piscar)
const MIN_VISIBLE = 0.35; // fração mínima do próprio elemento visível para ganhar o foco

const visibleArea = new Map<Element, number>();
const visibleRatio = new Map<Element, number>();
let observer: IntersectionObserver | null = null;
let current: Element | null = null;

function pick() {
    let best: Element | null = null;
    let bestArea = 0;
    for (const [el, area] of visibleArea) {
        if ((visibleRatio.get(el) ?? 0) < MIN_VISIBLE) continue;
        if (area > bestArea) {
            best = el;
            bestArea = area;
        }
    }
    const currentArea = current ? visibleArea.get(current) ?? 0 : 0;
    const currentOk = current && (visibleRatio.get(current) ?? 0) >= MIN_VISIBLE;
    if (currentOk && best !== current && bestArea < currentArea * SWITCH_MARGIN) return;
    if (best === current) return;
    current?.removeAttribute('data-focus');
    best?.setAttribute('data-focus', 'true');
    current = best;
}

function getObserver() {
    if (!observer) {
        observer = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    visibleArea.set(e.target, e.intersectionRect.width * e.intersectionRect.height);
                    visibleRatio.set(e.target, e.intersectionRatio);
                }
                pick();
            },
            { threshold: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1] }
        );
    }
    return observer;
}

export function useViewportFocus(ref: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const el = ref.current;
        if (!el || !window.matchMedia('(hover: none)').matches) return;
        const obs = getObserver();
        obs.observe(el);
        return () => {
            obs.unobserve(el);
            visibleArea.delete(el);
            visibleRatio.delete(el);
            if (current === el) {
                el.removeAttribute('data-focus');
                current = null;
                pick();
            }
        };
    }, [ref]);
}
