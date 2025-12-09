import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PROJECT_IMAGE_1 = 'https://images.unsplash.com/photo-1560279966-2d681f3d4dfc?auto=format&fit=crop&w=1200&q=80';
const PROJECT_IMAGE_2 = 'https://images.unsplash.com/photo-1631585114391-3b9c452cd308?auto=format&fit=crop&w=1200&q=80';

const projects = [
  {
    image: PROJECT_IMAGE_1,
    label: 'KRAFTSTASJON TYPE 1',
    description: 'Eksempel på hvordan våre kraftstasjoner integreres i terrenget med minimalt synlig fotavtrykk.',
    specs: [
      { label: 'Installert effekt', value: 'X MW' },
      { label: 'Byggeår', value: '20XX' },
      { label: 'Metode', value: 'Boreprosjekt' },
      { label: 'Lokasjon', value: '[Fylke]' },
    ]
  },
  {
    image: PROJECT_IMAGE_2,
    label: 'KOMMENDE PROSJEKT',
    description: 'Flere prosjekter er under utvikling. Vi utvider kontinuerlig vår portefølje av bærekraftige vannkraftverk.',
    specs: [
      { label: 'Status', value: 'Under planlegging' },
      { label: 'Forventet', value: '2025' },
      { label: 'Metode', value: 'Boreprosjekt' },
      { label: 'Lokasjon', value: 'TBA' },
    ]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="kraftstasjoner" className="section-padding bg-background">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">VÅRE KRAFTSTASJONER</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-xl mb-14">
          Bygget for å gli inn i landskapet
        </h2>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="rounded-lg overflow-hidden card-shadow border-0">
              {/* Image */}
              <div className="h-72 relative">
                <img 
                  src={project.image}
                  alt={project.label}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <CardContent className="p-8 bg-card">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-foreground-tertiary mb-3">
                  {project.label}
                </p>
                <p className="text-[15px] leading-relaxed text-foreground-secondary mb-5">
                  {project.description}
                </p>
                
                {/* Specs */}
                <div className="grid grid-cols-2 gap-3">
                  {project.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-sm text-foreground-secondary">
                      <span className="font-medium text-foreground">{spec.label}:</span> {spec.value}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
