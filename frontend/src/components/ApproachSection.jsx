import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Rocket, CheckCheck } from 'lucide-react';

const differentiators = [
  {
    icon: Lightbulb,
    title: 'Nytenkende tilnærming',
    description: 'Historisk har vannkraftbransjen vært trangsynt de siste 20-30 årene. Vi kommer inn for å fornye og effektivisere utviklingen av vannkraft – samtidig som det holdes profesjonelt og nøyaktig utarbeidet.'
  },
  {
    icon: Target,
    title: 'Fokus på fremdrift',
    description: 'Når vi arbeider med et prosjekt fokuserer vi på utvikling og fremdrift. Vi inngår ikke mange avtaler der bare noen blir realisert – når vi har en avtale så skal vi bygge kraftverket. Helt enkelt.'
  },
  {
    icon: Rocket,
    title: 'Tidlige beslutninger',
    description: 'Hos andre større aktører blir gjerne ikke en beslutning tatt før konsesjon er godkjent. Vi tar beslutninger tidlig og har økonomien på plass fra dag én.'
  },
  {
    icon: CheckCheck,
    title: 'Reell gjennomføring',
    description: 'Vi samler ikke avtaler – vi gjennomfører prosjekter. Med solid backing fra store pensjonsfond har vi kapasitet og kapital til å realisere hvert eneste prosjekt vi går inn i.'
  }
];

export const ApproachSection = () => {
  return (
    <section id="var-tilnarming" className="section-padding bg-background">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">HVORFOR VANNFALL</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-2xl mb-5">
          En nytenkende aktør som finner de gode løsningene
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-2xl mb-14">
          VannFall representerer en ny generasjon vannkraftutvikling. Vi kombinerer moderne metoder med solid erfaring for å levere prosjekter som faktisk blir realisert.
        </p>
        
        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <Card key={index} className="card-shadow border-0 bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-secondary-muted flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-secondary-dark" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-foreground-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Quote/Highlight Box */}
        <div className="mt-12 p-8 sm:p-10 bg-primary rounded-lg">
          <blockquote className="text-lg sm:text-xl font-medium text-primary-foreground leading-relaxed max-w-3xl">
            "Når VannFall tar kontakt er vi ute etter å finne nye løsninger – ikke presse grunneiere til avtaler de ikke er komfortabel med. Grunneiere kjenner området best, og sammen finner vi den beste løsningen."
          </blockquote>
          <p className="mt-4 text-primary-foreground/70 text-sm font-medium">
            — VannFall sin tilnærming til samarbeid
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
