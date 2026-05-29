import Image from 'next/image';

export const GallerySection = () => {
  const images = [
    { src: '/img1.webp', alt: 'Recepção do escritório Correa & Laia Advocacia em Belo Horizonte' },
    { src: '/img2.webp', alt: 'Sala de reunião para atendimento trabalhista em BH' },
    { src: '/img3.webp', alt: 'Escritório de advocacia trabalhista no bairro Lourdes, BH' },
    { src: '/img4.webp', alt: 'Ambiente do escritório Correa & Laia Advocacia' },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">
            Ambiente
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand mt-4">
            NOSSO ESCRITÓRIO
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
