'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Início' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#portfolio', label: 'Portfólio' },
        { href: '#faq', label: 'Dúvidas' },
    ];

    return (
        <nav
            aria-label="Menu de Navegação Principal"
            className={`fixed top-0 w-full z-50 bg-background-base/75 backdrop-blur-md border-b border-white/5 transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-3.5'
                }`}
        >
            <div className="layout-container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 font-display text-lg md:text-xl font-bold text-white tracking-tight" aria-label="Ir para a página inicial">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-background-deep border-[1.5px] border-white overflow-hidden box-border">
                        <Image src="/assets/icons/rg-monogram.png" alt="" width={36} height={36} className="w-full h-full object-cover" />
                    </span>
                    <span>Richard Gomes<span className="text-brand">.</span></span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-[#a3aed0] hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#contato"
                            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-semibold text-background-base shadow-[0_4px_20px_rgba(0,91,235,0.5)] transition-all duration-300 hover:bg-brand-light hover:shadow-[0_6px_25px_rgba(0,91,235,0.6)]"
                        >
                            Orçamento →
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-background-base border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
                    }`}
                aria-hidden={!isMobileMenuOpen}
            >
                <ul className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-base font-medium text-[#a3aed0] hover:text-white transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#contato"
                            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-background-base shadow-[0_4px_20px_rgba(0,91,235,0.5)] transition-all duration-300 hover:bg-brand-light"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Orçamento →
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
