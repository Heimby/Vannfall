import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const LANDOWNER_IMAGE = 'https://images.unsplash.com/photo-1631892504412-609c3b7ab0e0?auto=format&fit=crop&w=1200&q=80';

const benefits = [
  'Ingen økonomisk risiko for deg som grunneier',
  'Stabile, årlige inntekter gjennom falleie',
  'Balanserte avtaler med konsuler som gir deg del i oppsider',
  'Profesjonell partner som faktisk gjennomfører',
];

export const LandownersSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="grunneiere" className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      {/* Content Side */}
      <div className="bg-surface px-6 sm:px-12 lg:px-20 py-16 lg:py-20 flex flex-col justify-center order-2 lg:order-1">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">FOR GRUNNEIERE</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-lg mb-6">
          Du har vunnet i lotto – uten å kjøpe lodd
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-lg mb-8">
          Når VannFall kontakter deg som grunneier, har du ingen økonomiske forpliktelser – kun mulighet for stabile, langsiktige inntekter gjennom falleie.
        </p>
        
        {/* Benefits List */}
        <ul className="space-y-4 mb-10">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-4">
              <div className="benefit-icon">
                <Check className="w-4 h-4 text-secondary-dark" strokeWidth={2} />
              </div>
              <span className="text-base font-medium text-foreground">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <div>
          <Button 
            size="lg"
            onClick={() => scrollToSection('#prosess')}
          >
            Les mer om grunneieravtaler
          </Button>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="relative min-h-[300px] lg:min-h-0 order-1 lg:order-2">
        <img 
          src={LANDOWNER_IMAGE}
          alt="Norsk landskap med gård og fjell"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Left Edge Gradient */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary/30 to-transparent hidden lg:block" />
      </div>
    </section>
  );
};

export default LandownersSection;
