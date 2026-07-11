import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'secondary' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg';

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variants: Record<ButtonVariant, string> = {
  default: 'bg-brand text-background-base hover:bg-brand-light shadow-[0_4px_20px_var(--color-brand)] hover:shadow-[0_6px_25px_var(--color-brand)]',
  outline: 'border border-white/15 bg-transparent text-white hover:bg-white/5',
  ghost: 'bg-transparent text-white hover:bg-white/5',
  secondary: 'bg-white/10 text-white hover:bg-white/15',
  link: 'bg-transparent text-brand hover:text-brand-light underline-offset-4 hover:underline',
};

const sizes: Record<ButtonSize, string> = {
  default: 'h-11 px-6 py-3 text-sm',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-8 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background-base disabled:pointer-events-none disabled:opacity-50';

export function Button({
  children,
  className,
  href,
  variant = 'default',
  size = 'default',
  ...props
}: NativeButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
