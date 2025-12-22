import React from 'react';

const SMAKRAFTFORENINGA_LOGO = 'https://customer-assets.emergentagent.com/job_waterfall-design/artifacts/ou8yizl0_Sma%CC%8Akraftforeninga%20lang%20logo_upscayl_4x_upscayl-standard-4x.png';

export const PartnersSection = () => {
  return (
    <section id="partnere" className="section-padding-sm bg-surface text-center">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label justify-center">
          <div className="section-label-line" />
          <span className="section-label-text">VÅRE PARTNERE</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground mb-4 mx-auto">
          Samarbeid med de beste
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-xl mx-auto mb-14">
          VannFall er stolt medlem av Småkraftforeninga og samarbeider med anerkjente aktører i bransjen.
        </p>
        
        {/* Partner Logo */}
        <div className="inline-flex flex-col items-center gap-5">
          <a 
            href="https://smakraftforeninga.no" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
          >
            <img 
              src={SMAKRAFTFORENINGA_LOGO}
              alt="Småkraftforeninga"
              className="h-16 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-foreground-secondary max-w-md leading-relaxed">
            Småkraftforeninga jobber for å sikre gode betingelser og rammevilkår for de som eier fallrettigheter og driver småkraftverk i Norge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
