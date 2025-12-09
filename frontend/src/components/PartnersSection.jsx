import React from 'react';

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
          VannFall er stolt medlem av Småkraftforeningen og samarbeider med anerkjente aktører i bransjen.
        </p>
        
        {/* Partner Logo */}
        <div className="inline-flex flex-col items-center gap-5">
          <div className="w-52 h-16 bg-background rounded-lg flex items-center justify-center text-foreground-tertiary text-sm opacity-70 hover:opacity-100 transition-opacity">
            Småkraftforeningen
          </div>
          <p className="text-sm text-foreground-secondary max-w-md leading-relaxed">
            Småkraftforeningen jobber for å sikre gode betingelser og rammevilkår for de som eier fallrettigheter og driver småkraftverk i Norge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
