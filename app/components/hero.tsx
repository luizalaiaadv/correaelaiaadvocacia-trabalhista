import Image from 'next/image';
import { FadeIn } from './fade-in';

export const Hero = () => {
  const whatsappUrl =
    'https://wa.me/5531999471983?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria.';

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/download.webp"
          alt="Construção Civil"
          fill
          priority
          quality={75}
          className="object-cover object-center"
          fetchPriority="high"
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="max-w-2xl space-y-8">
          <FadeIn delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-normal text-brand leading-[1.2] uppercase tracking-tight">
              ADVOGADO TRABALHISTA <br />
              EM <span className="font-bold text-primary">BELO HORIZONTE</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-sm md:text-base text-brand/80 max-w-lg leading-relaxed font-medium">
              Seu advogado trabalhista em BH para recuperar horas extras, FGTS,
              rescisão indevida e outros direitos — consulta gratuita, sem risco
              para você.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all focus:ring-4 focus:ring-primary/20 outline-none animate-whatsapp-brown"
                aria-label="Falar agora com um advogado no WhatsApp"
              >
                FALE COM UM ADVOGADO
              </a>
              <a
                href="#servicos"
                className="backdrop-blur-lg inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-all focus:ring-4 focus:ring-primary/10 outline-none"
              >
                NOSSOS SERVIÇOS
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
