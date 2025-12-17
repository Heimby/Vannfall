import React from 'react';
import { Shield, CheckCircle, Leaf, Handshake } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Tillit',
    description: 'Vi bygger relasjoner basert på åpenhet, balanserte avtaler og profesjonell gjennomføring. Grunneieren skal føle seg trygg.'
  },
  {
    icon: CheckCircle,
    title: 'Profesjonalitet',
    description: 'Vi skiller oss fra "cowboy-aktørene" gjennom strukturerte prosesser, grundig planlegging og solid kapitalbase.'
  },
  {
    icon: Leaf,
    title: 'Naturansvar',
    description: 'Med boreprosjekter som hovedmetode minimerer vi naturinngrep. Kraftstasjonene skal gli naturlig inn i landskapet.'
  },
  {
    icon: Handshake,
    title: 'Samarbeid',
    description: 'Vi er ute etter å finne gode løsninger sammen med grunneiere – ikke presse frem avtaler. Et uforpliktende møte er alltid første steg.'
  }
];

export const ValuesSection = () => {
  return (
    <section id="om-oss" className="section-padding bg-dark">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="w-6 h-0.5 bg-secondary" />
          <span className="section-label-text text-primary-foreground/60">VÅRE VERDIER</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-primary-foreground max-w-2xl mb-5">
          En ny standard i norsk vannkraft
        </h2>
        
        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed text-primary-foreground/80 max-w-2xl mb-14">
          I en bransje preget av historisk skjevfordeling og kortsiktige aktører, representerer VannFall en ny standard: profesjonelle prosesser, balanserte grunneieravtaler, og langsiktig verdiskaping.
        </p>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center mb-5">
                <value.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-foreground-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
