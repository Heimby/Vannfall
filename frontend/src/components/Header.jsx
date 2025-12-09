import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, X } from 'lucide-react';
import VannfallLogo from './VannfallLogo';

const navLinks = [
  { href: '#hjem', label: 'Hjem' },
  { href: '#om-oss', label: 'Om oss' },
  { 
    href: '#prosess', 
    label: 'Hvordan vi jobber',
    dropdown: [
      { href: '#grunneieravtale', label: 'Grunneieravtale og fallrett' },
      { href: '#konsesjon', label: 'Utvikling av konsesjon' },
      { href: '#dml', label: 'Utvikling av DML' },
      { href: '#utbygging', label: 'Utbygging' },
    ]
  },
  { href: '#team', label: 'Vårt team' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-surface h-20 flex items-center transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-vannfall w-full flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hjem" 
          className="flex items-center gap-3 focus-ring rounded"
          onClick={(e) => { e.preventDefault(); scrollToSection('#hjem'); }}
        >
          <VannfallLogo className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.href}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-[15px] font-medium text-foreground-secondary hover:text-foreground transition-colors duration-200 flex items-center gap-1 py-2"
              >
                {link.label}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </a>
              
              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.href && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                  {link.dropdown.map((dropItem) => (
                    <a
                      key={dropItem.href}
                      href={dropItem.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(dropItem.href); }}
                      className="block px-5 py-3 text-sm font-medium text-foreground-secondary hover:bg-background hover:text-foreground transition-colors"
                    >
                      {dropItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Button 
            size="default"
            onClick={() => scrollToSection('#kontakt')}
          >
            Ta kontakt
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Åpne meny</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 bg-card">
            <div className="flex flex-col h-full pt-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="block py-4 px-2 text-lg font-semibold text-foreground border-b border-border"
                    >
                      {link.label}
                    </a>
                    {link.dropdown && (
                      <div className="pl-4">
                        {link.dropdown.map((dropItem) => (
                          <a
                            key={dropItem.href}
                            href={dropItem.href}
                            onClick={(e) => { e.preventDefault(); scrollToSection(dropItem.href); }}
                            className="block py-3 px-2 text-base text-foreground-secondary border-b border-border/50"
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-8 px-2">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => scrollToSection('#kontakt')}
                >
                  Ta kontakt
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
