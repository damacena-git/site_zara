import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Variant = 'comercial' | 'residencial';

const stats: Record<Variant, { value: string; label: string }[]> = {
  comercial: [
    { value: '+10', label: 'Anos de experiência no mercado' },
    { value: '+100', label: 'Projetos entregues com excelência' },
    { value: '+5000m²', label: 'Entre galpões, clínicas e lojas' },
    { value: '98%', label: 'Satisfação B2B' },
  ],
  residencial: [
    { value: '+10', label: 'Anos de experiência no mercado' },
    { value: '+100', label: 'Projetos entregues com excelência' },
    { value: '100%', label: 'Das obras com ART emitida' },
    { value: 'Semanal', label: 'Relatório fotográfico da sua obra' },
  ],
};

const projectPhotos = [
  {
    url: 'https://images.pexels.com/photos/13068378/pexels-photo-13068378.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    label: 'Ambiente comercial'
  },
  {
    url: 'https://images.pexels.com/photos/8146200/pexels-photo-8146200.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    label: 'Corredor comercial de alto padrão'
  },
  {
    url: 'https://images.pexels.com/photos/13068374/pexels-photo-13068374.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    label: 'Acabamento premium'
  },
  {
    url: 'https://images.pexels.com/photos/7028110/pexels-photo-7028110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    label: 'Espaço executivo'
  },
  {
    url: 'https://images.pexels.com/photos/27452443/pexels-photo-27452443.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    label: 'Ambiente corporativo'
  },
];

const testimonials = [
  {
    name: 'Ricardo M.',
    role: 'CEO — Rede de Clínicas Estéticas',
    text: 'A Zara entregou nossas 3 unidades no prazo combinado. Jamais vi tanta organização e limpeza num canteiro de obras. O sistema de medição semanal nos deu total controle do nosso caixa.',
    stars: 5,
  },
  {
    name: 'Carla F.',
    role: 'Diretora — Grupo Varejista Sul',
    text: 'Finalmente uma empresa que cumpre o que promete. Inauguramos 45 dias antes do que eu esperava. O Thiago e a Mari estiveram presentes em cada detalhe. Meu retorno sobre o investimento veio antes do previsto.',
    stars: 5,
  },
];

const ProvaSection: React.FC<{ variant?: Variant }> = ({ variant = 'comercial' }) => {
  const isResidencial = variant === 'residencial';
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const scrollLeft = () => {
    if (currentPhoto > 0) {
      setCurrentPhoto(currentPhoto - 1);
    } else {
      setCurrentPhoto(projectPhotos.length - 1);
    }
  };

  const scrollRight = () => {
    if (currentPhoto < projectPhotos.length - 1) {
      setCurrentPhoto(currentPhoto + 1);
    } else {
      setCurrentPhoto(0);
    }
  };

  return (
    <section id="numeros" className="py-12 sm:py-24 px-5 sm:px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="separator-gold mb-4 sm:mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-black text-2xl sm:text-4xl md:text-5xl leading-tight">
            Números que constroem{' '}
            <span style={{ color: '#DDAD46' }}>confiança</span>.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-12 sm:mb-20">
          {stats[variant].map((stat, index) => (
            <div
              key={index}
              className="counter-card bg-black text-white rounded-sm p-6 sm:p-8 flex flex-col gap-2"
            >
              <span
                className="font-roboto font-bold text-gold text-3xl sm:text-4xl leading-none"
                style={{ color: '#DDAD46' }}
              >
                {stat.value}
              </span>
              <span className="font-montserrat text-white/70 text-xs sm:text-sm leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Photo Carousel (imagens comerciais ilustrativas — oculto na versão residencial) */}
        {!isResidencial && (
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-sm">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPhoto * 100}%)` }}
            >
              {projectPhotos.map((photo, index) => (
                <div key={index} className="flex-shrink-0 w-full relative" style={{ aspectRatio: '16/8' }}>
                  <img
                    src={photo.url}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                    style={{ filter: 'contrast(1.15) brightness(0.92)' }}
                  />
                  <div className="photo-overlay absolute inset-0" />
                  <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-montserrat text-white text-sm font-medium">
                    {photo.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)', border: '1px solid rgba(221,173,70,0.5)' }}
          >
            <ChevronLeft className="text-gold" size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)', border: '1px solid rgba(221,173,70,0.5)' }}
          >
            <ChevronRight className="text-gold" size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {projectPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPhoto(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ backgroundColor: i === currentPhoto ? '#DDAD46' : 'rgba(0,0,0,0.25)' }}
              />
            ))}
          </div>
          <p className="font-montserrat text-gray-400 text-[11px] text-center mt-2">Imagens ilustrativas</p>
        </div>

        )}

        {/* Testimonials (clientes B2B — ocultos na versão residencial até termos depoimentos residenciais) */}
        {!isResidencial && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-black rounded-sm p-7 sm:p-8 flex flex-col gap-4"
              style={{ border: '1px solid rgba(221,173,70,0.2)' }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={16} fill="#DDAD46" style={{ color: '#DDAD46' }} />
                ))}
              </div>
              <p className="font-montserrat text-white/80 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-roboto font-bold text-white text-sm">{t.name}</p>
                <p className="font-montserrat text-gold text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default ProvaSection;
