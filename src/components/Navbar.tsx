import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'A Solução', href: '#solucao' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.97)' : 'rgba(0,0,0,0.3)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
        borderBottom: scrolled ? '1px solid rgba(221,173,70,0.2)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-baseline gap-2">
          <span className="font-roboto font-bold text-white text-xl tracking-wider">
            ZARA
          </span>
          <span
            className="font-roboto font-medium text-xs tracking-widest uppercase"
            style={{ color: '#DDAD46' }}
          >
            ENGENHARIA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-montserrat text-white/75 text-sm hover:text-gold transition-colors"
              style={{ color: undefined }}
              onMouseEnter={e => (e.currentTarget.style.color = '#DDAD46')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToContact}
            className="btn-gold text-white font-roboto font-bold text-xs px-5 py-2.5 rounded-sm uppercase tracking-wider"
          >
            Triagem Técnica
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          backgroundColor: 'rgba(0,0,0,0.98)',
          borderTop: menuOpen ? '1px solid rgba(221,173,70,0.2)' : 'none',
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-montserrat text-white/80 text-base py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToContact}
            className="btn-gold text-white font-roboto font-bold text-sm px-6 py-4 rounded-sm uppercase tracking-wider mt-2"
          >
            Triagem Técnica Gratuita
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
