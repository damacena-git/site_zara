import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useFormPopup } from './FormPopupContext';

export type LandingHeroConfig = {
  tagline: string;
  headline: React.ReactNode;
  description: React.ReactNode;
  ctaText: string;
  ctaSubtext?: string;
  videoSrc?: string;
  videoPoster?: string;
  /** Override background with a static image instead of video */
  backgroundImage?: string;
};

const LandingHero: React.FC<{ config: LandingHeroConfig }> = ({ config }) => {
  const { openPopup } = useFormPopup();

  return (
    <section id="hero" className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>
      {/* Background */}
      {config.backgroundImage ? (
        <img
          src={config.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={config.videoPoster || "https://images.pexels.com/videos/8964731/bridge-building-site-control-cooperation-8964731.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"}
        >
          <source
            src={config.videoSrc || "https://videos.pexels.com/video-files/8964731/8964731-uhd_3840_2160_25fps.mp4"}
            type="video/mp4"
          />
        </video>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: '#DDAD46' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Tagline */}
        <p
          className="text-gold font-roboto font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6"
          style={{ letterSpacing: '0.2em' }}
        >
          {config.tagline}
        </p>

        {/* Headline */}
        <h1
          className="font-roboto font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight mb-6 sm:mb-8"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
        >
          {config.headline}
        </h1>

        {/* Brief Intro */}
        <p className="font-montserrat text-white/90 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 sm:mb-10">
          {config.description}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={openPopup}
            className="btn-gold text-white font-roboto font-bold text-sm sm:text-base px-8 sm:px-10 py-4 sm:py-5 rounded-sm uppercase tracking-wider shadow-2xl pulse-gold"
            style={{ minWidth: '280px' }}
          >
            {config.ctaText}
          </button>
          {config.ctaSubtext && (
            <span className="font-montserrat text-white/60 text-xs italic">
              {config.ctaSubtext}
            </span>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-gold" size={28} />
      </div>
    </section>
  );
};

export default LandingHero;
