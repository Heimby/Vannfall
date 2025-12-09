import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1679051266808-4dd9de9a01d9?auto=format&fit=crop&w=2400&q=80';

export const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hjem" className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={HERO_IMAGE}
          alt="Norsk fjellandskap med fossefall"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay md:hero-overlay lg:hero-overlay" />
      <div className="absolute inset-0 hero-overlay-mobile md:hidden" />
      
      {/* Content */}
      <div className="relative z-10 container-vannfall">
        <div className="max-w-2xl animate-fade-slide-up-delay-1">
          <h1 className="heading-display text-primary-foreground mb-6">
            Fornybar vannkraft. Profesjonelt utviklet.
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl font-normal leading-relaxed text-primary-foreground/85 max-w-xl mb-10 animate-fade-slide-up-delay-2">
          VannFall utvikler, bygger og drifter småkraftverk i hele Norge. Vi tilbyr balanserte grunneieravtaler og profesjonell prosjektledelse fra start til slutt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-slide-up-delay-3">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('#kontakt')}
          >
            Kontakt oss
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            onClick={() => scrollToSection('#om-oss')}
          >
            Om VannFall
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('#hva-vi-gjor')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-subtle"
        aria-label="Scroll ned"
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/60" strokeWidth={2} />
      </button>
    </section>
  );
};

export default HeroSection;
