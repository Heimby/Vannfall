import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const processSteps = [
  {
    number: '1',
    title: 'Uforpliktende dialog',
    content: 'Alt starter med en uforpliktende samtale. Vi ønsker å skape dialog med grunneiere for å forstå området og finne ut hva som kan være en god løsning for det aktuelle kraftverket. Grunneiere kjenner sitt område best, og sammen finner vi de beste mulighetene.'
  },
  {
    number: '2',
    title: 'Grunneieravtale og fallrett',
    content: 'Når vi er enige om veien videre, inngår vi en balansert grunneieravtale som sikrer dine rettigheter og gir deg forutsigbare inntekter. Når VannFall inngår en avtale, har vi allerede økonomien på plass til å utvikle prosjektet. Avtalen omfatter leie av fallrettigheter, varighet, og hvordan falleie beregnes basert på produksjon.'
  },
  {
    number: '3',
    title: 'Utvikling av konsesjon',
    content: 'Vi håndterer hele konsesjonsprosessen med NVE (Norges vassdrags- og energidirektorat). Dette inkluderer kartlegging av naturforhold, miljøkonsekvensutredninger, og dialog med lokale myndigheter. Du holdes informert gjennom hele prosessen.'
  },
  {
    number: '4',
    title: 'Detaljert miljø- og landskapsplan (DML)',
    content: 'DML-planen sikrer at utbyggingen tar hensyn til miljø og landskap. Vi utarbeider detaljerte planer for hvordan kraftverket skal integreres i omgivelsene, inkludert byggesøknad og nødvendige godkjenninger fra kommunen.'
  },
  {
    number: '5',
    title: 'Utbygging og drift',
    content: 'Vi samarbeider med lokale og nasjonale entreprenører for selve byggingen. Typisk byggetid er 18-24 måneder. Etter ferdigstillelse overtar vi drift og vedlikehold, og du mottar din andel av inntektene som avtalt.'
  }
];

export const ProcessSection = () => {
  return (
    <section id="prosess" className="section-padding bg-background">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">HVORDAN VI JOBBER</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-xl mb-5">
          Tett samarbeid fra start til slutt
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-2xl mb-14">
          Som samarbeidspartner hos VannFall blir du tett involvert i prosessen. Vi legger vekt på åpen kommunikasjon, jevnlig oppdatering, og ikke minst – å finne løsninger som fungerer for alle parter.
        </p>
        
        {/* Accordion */}
        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
          {processSteps.map((step, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`}
              className="bg-card rounded-lg shadow-sm border border-border/50 overflow-hidden"
            >
              <AccordionTrigger className="px-6 sm:px-8 py-5 hover:no-underline hover:bg-background/50 transition-colors [&[data-state=open]]:bg-background/30">
                <div className="flex items-center gap-4 text-left">
                  <div className="accordion-number">{step.number}</div>
                  <span className="text-lg font-semibold text-foreground">
                    {step.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 sm:px-8 pb-6">
                <div className="pl-14 text-[15px] leading-relaxed text-foreground-secondary">
                  {step.content}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ProcessSection;
