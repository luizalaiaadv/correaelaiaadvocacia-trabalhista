import { MapPin, Clock, Phone } from 'lucide-react';
import { PhoneLink } from './whatsapp-link';

export const ContactBar = () => {
  return (
    <div className="bg-brand text-white py-4 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-primary" />
          <span className="text-sm font-medium text-center">
            Rua dos Timbiras, 1940 - Lourdes, Belo Horizonte - MG
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Clock size={18} className="text-primary" />
          <span className="text-sm font-medium text-center">
            Seg - Sex: 09:00 - 18:00
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-primary" />
          <PhoneLink className="text-sm font-medium hover:text-primary/80 transition-colors">
            (31) 99947-1983
          </PhoneLink>
        </div>
      </div>
    </div>
  );
};
