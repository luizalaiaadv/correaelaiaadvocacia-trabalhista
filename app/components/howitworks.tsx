import { WhatsAppLink } from './whatsapp-link';
import { MessageSquare, Calendar, Scale, CheckCircle } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      title: 'Entre em Contato',
      description: 'Fale conosco através do WhatsApp ou telefone e conte brevemente o seu caso.',
      icon: MessageSquare,
    },
    {
      title: 'Agende o Atendimento',
      description:
        'Marcamos uma reunião presencial ou online para analisar todos os detalhes e documentos.',
      icon: Calendar,
    },
    {
      title: 'Análise Estratégica',
      description: 'Nossa equipe estuda as melhores vias jurídicas para garantir seus direitos.',
      icon: Scale,
    },
    {
      title: 'Início da Solução',
      description: 'Protocolamos a ação e acompanhamos cada etapa até a resolução final.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Processo</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mt-4">
            COMO FUNCIONA O ATENDIMENTO?
          </h3>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-accent hidden lg:block -translate-y-1/2" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 bg-white border-4 border-accent rounded-full flex items-center justify-center text-primary shadow-lg mx-auto">
                    <step.icon size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-brand">{step.title}</h4>
                  <p className="text-brand font-medium text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <WhatsAppLink
          message="Olá! Quero entender como funciona o processo. Gostaria de agendar uma consulta."
          label="how_it_works_cta"
          ariaLabel="Quero resolver meu caso trabalhista"
          className="uppercase hover:scale-105 inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp text-white font-bold rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all focus:ring-4 focus:ring-whatsapp/20 outline-none"
        >
          quero resolver meu caso trabalhista
        </WhatsAppLink>
      </div>
    </section>
  );
};
