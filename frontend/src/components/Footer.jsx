import React from 'react';
import VannfallLogo from './VannfallLogo';

const navigationLinks = [
  { href: '#hjem', label: 'Hjem' },
  { href: '#om-oss', label: 'Om oss' },
  { href: '#team', label: 'Vårt team' },
  { href: '#prosess', label: 'Hvordan vi jobber' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-footer py-16 sm:py-20">
      <div className="container-vannfall">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <VannfallLogo className="h-11 w-auto" variant="inverted" />
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60 max-w-xs">
              Fornybar vannkraft. Profesjonelt utviklet. VannFall utvikler småkraftverk med fokus på balanserte avtaler og langsiktig verdiskaping.
            </p>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5">
              Navigasjon
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-[15px] text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5">
              Kontakt
            </h4>
            <div className="space-y-2">
              <p className="text-[15px] text-primary-foreground/80">Kokstadvegen 46, 5257 Kokstad</p>
              <p className="text-[15px] text-primary-foreground/80">Telefon: 906 00 986</p>
              <p className="text-[15px] text-primary-foreground/80">E-post: post@vannfall.com</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2025 VannFall AS. Alle rettigheter reservert.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors">
              Personvern
            </a>
            <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors">
              Vilkår
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
