import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { WhatsAppLink } from './whatsapp-link';

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[80vh] md:min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/download.webp"
          alt="Construção Civil"
          fill
          priority
          quality={75}
          className="object-cover object-center"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Consulta Gratuita
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-normal text-brand leading-[1.2] uppercase tracking-tight">
            ADVOGADO TRABALHISTA <br />
            EM <span className="font-bold text-primary">BELO HORIZONTE</span>
          </h1>

          <p className="text-sm md:text-base text-brand/80 max-w-lg leading-relaxed font-medium">
            Seu advogado trabalhista em BH para recuperar horas extras, FGTS,
            rescisão indevida e outros direitos — consulta gratuita, sem risco
            para você.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5 text-xs text-brand/70 font-medium">
              <CheckCircle2 size={14} className="text-green-600 shrink-0" />
              Sem pagamento adiantado
            </span>
            <span className="flex items-center gap-1.5 text-xs text-brand/70 font-medium">
              <CheckCircle2 size={14} className="text-green-600 shrink-0" />
              Referências de clientes satisfeitos
            </span>
            <span className="flex items-center gap-1.5 text-xs text-brand/70 font-medium">
              <CheckCircle2 size={14} className="text-green-600 shrink-0" />
              Atendimento online ou presencial
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <WhatsAppLink
                message="Olá! Vi o anúncio e gostaria de uma consulta GRATUITA sobre meus direitos trabalhistas."
                label="hero_cta"
                ariaLabel="Falar agora com um advogado no WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all focus:ring-4 focus:ring-primary/20 outline-none animate-whatsapp-brown"
              >
                FALE COM UM ADVOGADO
              </WhatsAppLink>
              <a
                href="#servicos"
                className="backdrop-blur-lg inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/5 transition-all focus:ring-4 focus:ring-primary/10 outline-none"
              >
                NOSSOS SERVIÇOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
