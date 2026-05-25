import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from './fade-in';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LocationSection = () => {
  return (
    <section id="localizacao" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <div className="space-y-10">
            <FadeIn>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">
                Onde Estamos
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mt-4">
                VENHA NOS VISITAR
              </h3>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.2} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-brand text-lg">Endereço</div>
                  <p className="text-brand/60 leading-relaxed">
                    Rua dos Timbiras, 1940 - Lourdes
                    <br />
                    Belo Horizonte - MG, 30140-069
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-brand text-lg">Contato</div>
                  <p className="text-brand/60 leading-relaxed">
                    (31) 99947-1983
                    <br />
                    contato@correalaiadvocacia.com.br
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} className="flex gap-4">
              <a
                aria-label="Instagram Correa & Laia Advocacia"
                href="https://www.instagram.com/correaelaia.advocacia"
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                aria-label="Facebook Correa & Laia Advocacia"
                href="https://www.facebook.com/profile.php?id=61568707289617"
                rel="noopener noreferrer"
                target="_blank"
                className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                aria-label="LinkedIn Correa & Laia Advocacia"
                href="https://www.linkedin.com/company/correa-laia-advocacia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.4}
            className="h-72 sm:h-80 md:h-96 lg:h-112.5 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.961017316925!2d-43.941071!3d-19.9260475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x223d422b6a4636ad%3A0x4ea4be78ddb98723!2sCorrea%20%26%20Laia%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1776091683706!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps localização Correa & Laia Advocacia"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
