import React from 'react';

const teamMembers = [
  {
    name: 'Kjartan Stornes',
    role: 'DAGLIG LEDER',
    bio: 'Erfaring fra ulike bygge- og industriselskaper, både private og børsnoterte. Grunnlegger av VannFall AS.',
    image: 'https://customer-assets.emergentagent.com/job_waterfall-design/artifacts/7uxzez0u_Kjartan.png'
  },
  {
    name: 'Nils Hoff',
    role: 'STYRELEDER',
    bio: 'CFO/COO i ulike teknologi- og infrastrukturselskaper. Bred erfaring fra børsnoterte selskaper nasjonalt og internasjonalt.',
    image: 'https://customer-assets.emergentagent.com/job_waterfall-design/artifacts/wx2taseg_Nils.png'
  },
  {
    name: 'Johnny Christiansen',
    role: 'STYREMEDLEM',
    bio: 'CEO i ulike teknologiselskaper. Erfaring fra både privateide og børsnoterte selskaper.',
    image: 'https://customer-assets.emergentagent.com/job_waterfall-design/artifacts/rjh8iwmh_Johnny.png'
  },
  {
    name: 'Andreas Strauss Voldsæter',
    role: 'GEOLOG OG UTVIKLER',
    bio: 'Bakgrunn fra geologi ved Universitetet i Bergen. Jobber systematisk for gode løsninger innen vannkraft.',
    image: null
  },
  {
    name: 'Simon Aldal Sætre',
    role: 'STIKNINGSINGENIØR',
    bio: 'Bred erfaring innen oppmåling med solid kompetanse i relevante programvareverktøy.',
    image: 'https://customer-assets.emergentagent.com/job_waterfall-design/artifacts/1aeieikh_Simon.png'
  },
  {
    name: 'Jørn Christiansen',
    role: 'ØKONOMIANSVARLIG (CFO)',
    bio: 'Erfaring som CFO/CEO i ulike teknologiselskaper, både nasjonalt og internasjonalt.',
    image: 'https://customer-assets.emergentagent.com/job_waterfall-design/artifacts/sa4umhh3_J%C3%B8rn.png'
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-surface">
      <div className="container-vannfall">
        {/* Section Label */}
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">VÅRT TEAM</span>
        </div>
        
        {/* Heading */}
        <h2 className="heading-section text-foreground max-w-2xl mb-5">
          Erfarne eksperter med solid bakgrunn
        </h2>
        
        {/* Description */}
        <p className="body-large max-w-2xl mb-14">
          VannFall ledes av et team med bred erfaring fra bygg, industri, finans og teknologi – både nasjonalt og internasjonalt.
        </p>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="team-image flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-primary-foreground/50 text-sm">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
              
              {/* Info */}
              <h3 className="text-lg font-bold text-foreground mt-4">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mt-1">
                {member.role}
              </p>
              <p className="text-sm text-foreground-secondary leading-relaxed mt-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
