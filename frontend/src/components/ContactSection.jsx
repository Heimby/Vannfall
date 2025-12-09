import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link for form submission
    const subject = encodeURIComponent(`Henvendelse fra ${formData.name}`);
    const body = encodeURIComponent(
      `Navn: ${formData.name}\n` +
      `E-post: ${formData.email}\n` +
      `Telefon: ${formData.phone}\n\n` +
      `Melding:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:post@vannfall.com?subject=${subject}&body=${body}`;
    
    // Show success message
    toast.success('E-postklient åpnet!', {
      description: 'Send e-posten for å fullføre henvendelsen.'
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="section-padding bg-dark">
      <div className="container-vannfall">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="heading-section text-primary-foreground max-w-lg mb-6">
              Ta kontakt for en hyggelig og uforpliktende samtale
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-primary-foreground/80 max-w-md mb-10">
              Vi er her for å svare på alle dine spørsmål om VannFall og våre tjenester. Ingen forpliktelser – bare en god prat om mulighetene.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-primary-foreground">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0" strokeWidth={1.5} />
                <span>VannFall AS, Kokstadvegen 46, 5257 Kokstad</span>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0" strokeWidth={1.5} />
                <span>906 00 986</span>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground">
                <Mail className="w-6 h-6 text-secondary flex-shrink-0" strokeWidth={1.5} />
                <span>post@vannfall.com</span>
              </div>
            </div>
            
            {/* Opening Hours */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/50 mb-3">
                ÅPNINGSTIDER
              </p>
              <p className="text-[15px] text-primary-foreground/80">Mandag – fredag: 08:00–16:00</p>
              <p className="text-[15px] text-primary-foreground/80">Lørdag – søndag: Stengt</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="card-shadow-floating border-0">
            <CardContent className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="form-label-vannfall">Navn</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ola Nordmann"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input-vannfall"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="form-label-vannfall">E-post</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ola@eksempel.no"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input-vannfall"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="form-label-vannfall">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Ditt telefonnummer"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-vannfall"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="form-label-vannfall">Melding</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Fortell oss gjerne litt om eiendommen din og hva du lurer på..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-input-vannfall resize-y min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-14 text-base" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sender...' : 'Send melding'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
