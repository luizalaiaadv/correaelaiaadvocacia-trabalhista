import { WhatsAppLink } from './whatsapp-link';

export const PricingSection = () => {
  return (
    <section className="py-12 md:py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8">
          VAMOS AGENDAR SEU ATENDIMENTO?
        </h2>
        <p className="text-base md:text-xl opacity-90 mb-8 md:mb-12 leading-relaxed">
          Estamos aqui para simplificar sua jornada e encontrar a melhor solução para o seu caso.
          Nossa equipe oferece atendimento humanizado e eficiente, sempre respeitando sua
          individualidade.
        </p>
        <div className="space-y-6">
          <WhatsAppLink
            message="Olá! Gostaria de agendar minha consulta e entender meus direitos."
            label="pricing_cta"
            ariaLabel="Falar agora com um advogado no WhatsApp"
            className="uppercase hover:scale-105 inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white font-bold rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all focus:ring-4 focus:ring-whatsapp/20 outline-none"
          >
            quero agendar meu atendimento
          </WhatsAppLink>
          <p className="text-sm opacity-70 italic">
            Primeira consulta para análise de viabilidade.
          </p>
        </div>
      </div>
    </section>
  );
};
