import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * SectionEyebrow
 *
 * Pílula numerada usada como cabeçalho editorial de cada seção
 * (padrão do design "Site Melhorado"): ponto brilhante + número mono + rótulo.
 *
 * @example
 * <SectionEyebrow number="01">O Problema</SectionEyebrow>
 */
export function SectionEyebrow({
  number,
  children,
  className,
}: {
  number: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand',
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_var(--color-brand)]" />
      <span className="font-mono text-text-muted">{number}</span>
      {children}
    </span>
  );
}
