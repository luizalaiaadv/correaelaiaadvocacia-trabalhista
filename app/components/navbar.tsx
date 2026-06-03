'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import imgLogo from '@/public/logo.webp';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'servicos', 'sobre', 'depoimentos', 'faq', 'localizacao'];

    // IntersectionObserver: zero getBoundingClientRect on scroll.
    // rootMargin strips the navbar height from the top and keeps only the
    // top 40 % of the remaining viewport as the "active" detection zone —
    // tight enough that only one section fires at a time.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-90px 0px -60% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    // window.scrollY is layout-free — keep only for isScrolled flag
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio', id: 'inicio' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Localização', href: '#localizacao', id: 'localizacao' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/40 backdrop-blur-md shadow-sm py-3'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <Image
              src={imgLogo}
              alt="Correa & Laia Advocacia"
              priority
              width={76}
              height={56}
              sizes="76px"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-all duration-300 hover:text-primary relative py-1',
                activeSection === link.id ? 'text-primary' : 'text-brand'
              )}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full transition-opacity duration-200 ${
                  activeSection === link.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          id="button-menu"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          className="md:hidden flex items-center justify-center text-brand cursor-pointer p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'relative font-medium transition-colors py-2 pl-4',
                activeSection === link.id ? 'text-primary bg-primary/5' : 'text-brand'
              )}
            >
              <span
                className={`absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r transition-opacity duration-200 ${
                  activeSection === link.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
