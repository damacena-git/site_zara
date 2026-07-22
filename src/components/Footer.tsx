import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#343A40' }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            {/* Logo */}
            <div>
              <img
                src="/logo-zara.png"
                alt="Zara Engenharia"
                className="h-12 w-auto mb-2"
              />
              <div
                className="h-px mb-4"
                style={{ backgroundColor: '#DDAD46', width: '60px' }}
              />
              <p className="font-montserrat text-white/60 text-sm leading-relaxed max-w-xs">
                Engenharia de excelência com gestão de ponta a ponta. Sua obra no prazo, com transparência e segurança técnica.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="https://wa.me/5541984211610"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-montserrat text-white/60 text-sm hover:text-gold transition-colors"
              >
                <Phone size={14} style={{ color: '#DDAD46' }} />
                (41) 98421-1610
              </a>
              <a
                href="mailto:contato@zaraengenharia.com.br"
                className="flex items-center gap-2 font-montserrat text-white/60 text-sm hover:text-gold transition-colors"
              >
                <Mail size={14} style={{ color: '#DDAD46' }} />
                contato@zaraengenharia.com.br
              </a>
              <div className="flex items-center gap-2 font-montserrat text-white/60 text-sm">
                <MapPin size={14} style={{ color: '#DDAD46' }} />
                Curitiba — PR, Brasil
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-roboto font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'O Problema', href: '#dores' },
                { label: 'Nossa Solução', href: '#solucao' },
                { label: 'Metodologia', href: '#metodologia' },
                { label: 'Quem Somos', href: '#quem-somos' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-white/55 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t mt-10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="font-montserrat text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Zara Engenharia. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
