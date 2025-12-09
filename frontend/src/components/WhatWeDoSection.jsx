import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { number: '10+', label: 'Nye kraftverk årlig' },
  { number: '100M+', label: 'NOK i prosjektkapital' },
  { number: '24', label: 'Måneder typisk byggetid' },
];

export const WhatWeDoSection = () => {
  return (
    <section id="hva-vi-gjor" className="section-padding bg-background">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">HVA VI GJØR</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-3xl mb-5">
          Vi jobber målrettet mot mikro- og småvannkraft over hele Norge
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-2xl">
          VannFall er en nytenkende aktør innen vannkraft som utvikler, bygger, selger og drifter kraftverk. I et land som står ovenfor et stort energibehov, er VannFall en aktør som skal stå fremst i produksjonen av norsk, fornybar vannkraft.
        </p>
        
        {/* Stats Card */}
        <Card className="mt-14 card-shadow border-0 bg-card">
          <CardContent className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center relative ${
                    index < stats.length - 1 ? 'md:border-r md:border-border' : ''
                  }`}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="text-base font-medium text-foreground-secondary mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
