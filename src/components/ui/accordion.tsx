'use client';

import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type AccordionContextValue = {
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
  collapsible: boolean;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);
const AccordionItemContext = createContext<{ value: string; id: string } | null>(null);

export function Accordion({
  children,
  className,
  defaultValue,
  collapsible = true,
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  defaultValue?: string;
  collapsible?: boolean;
}) {
  const [openValue, setOpenValue] = useState<string | null>(defaultValue ?? null);
  const context = useMemo(() => ({ openValue, setOpenValue, collapsible }), [openValue, collapsible]);

  return (
    <AccordionContext.Provider value={context}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  className,
  value,
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode; value: string }) {
  const id = useId();
  const accordion = useContext(AccordionContext);
  const isOpen = accordion?.openValue === value;

  return (
    <AccordionItemContext.Provider value={{ value, id }}>
      <div className={className} data-state={isOpen ? 'open' : 'closed'}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: HTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error('AccordionTrigger must be used within Accordion and AccordionItem.');
  }

  const isOpen = accordion.openValue === item.value;

  return (
    <button
      type="button"
      id={`${item.id}-trigger`}
      className={cn(
        'flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none',
        className
      )}
      aria-expanded={isOpen}
      aria-controls={`${item.id}-content`}
      onClick={() =>
        accordion.setOpenValue(isOpen && accordion.collapsible ? null : item.value)
      }
    >
      <span className={cn('text-base md:text-lg font-semibold transition-colors', isOpen ? 'text-brand' : 'text-white')}>
        {children}
      </span>
      <span className={cn('text-brand transition-transform duration-300 flex-shrink-0', isOpen ? 'rotate-180' : '')}>
        <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </span>
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  const accordion = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);

  if (!accordion || !item) {
    throw new Error('AccordionContent must be used within Accordion and AccordionItem.');
  }

  const isOpen = accordion.openValue === item.value;

  return (
    <div
      id={`${item.id}-content`}
      role="region"
      aria-labelledby={`${item.id}-trigger`}
      className={cn(
        'grid transition-all duration-300 ease-in-out overflow-hidden',
        isOpen ? 'grid-rows-[1fr] opacity-100 px-6 pb-6' : 'grid-rows-[0fr] opacity-0 px-6 pb-0',
        className
      )}
    >
      <div className="overflow-hidden min-h-0 text-[#a3aed0] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
