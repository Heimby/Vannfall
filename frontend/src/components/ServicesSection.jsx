import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crosshair, Building2 } from 'lucide-react';

const timelineSteps = [
  { number: 1, title: 'Grunneieravtale', description: 'Vi inngår balansert avtale om leie av fallrettigheter' },
  { number: 2, title: 'Konsesjon', description: 'Grundig planlegging og søknad til NVE' },
  { number: 3, title: 'DML', description: 'Detaljert miljø- og landskapsplan utarbeides' },
  { number: 4, title: 'Utbygging', description: 'Profesjonell bygging med lokale entreprenører' },
];

const services = [
  {
    icon: Crosshair,
    badge: 'BÆREKRAFTIG',
    title: 'Boreprosjekter',
    description: 'For VannFall er det svært viktig å ivareta inntrykket av landskapet rundt kraftverk. Med boring som hovedmetode for vannvei kan vi bygge kraftverk uten å gripe mer inn i naturen enn nødvendig.'
  },
  {
    icon: Building2,
    badge: 'INTEGRERT DESIGN',
    title: 'Kraftstasjoner',
    description: 'Våre kraftstasjoner designes for å gli naturlig inn i omgivelsene. Kompakte anlegg tilpasset terrenget som ikke dominerer landskapet.'
  }
];

export const ServicesSection = () => {
  return (
    <section id="tjenester" className="section-padding bg-surface">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">VÅRE TJENESTER</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-xl mb-5">
          Fra idé til ferdig kraftverk
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-2xl">
          VannFall tilbyr skreddersydde tjenester som dekker alt fra planlegging og design til bygging og drift av vannkraftprosjekter.
        </p>
        
        {/* Timeline */}
        <div className="mt-14 mb-20">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-6 left-10 right-10 h-1 bg-border" />
            <div className="flex justify-between">
              {timelineSteps.map((step) => (
                <div key={step.number} className="flex flex-col items-center flex-1">
                  <div className="timeline-circle">{step.number}</div>
                  <div className="text-center mt-6 max-w-[180px]">
                    <h4 className="text-base font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-border" />
            <div className="space-y-8">
              {timelineSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  <div className="timeline-circle flex-shrink-0">{step.number}</div>
                  <div className="pt-2">
                    <h4 className="text-base font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow border-0 bg-card">
              <CardContent className="p-8 sm:p-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="service-icon">
                    <service.icon className="w-7 h-7 text-secondary-dark" strokeWidth={1.5} />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary-muted text-secondary-dark text-[11px] font-semibold uppercase tracking-wider px-3 py-1"
                  >
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-foreground-secondary">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
