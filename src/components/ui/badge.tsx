import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
