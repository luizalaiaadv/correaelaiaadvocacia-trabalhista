import Image from 'next/image';

export const GallerySection = () => {
  const images = ['/img1.webp', '/img2.webp', '/img3.webp', '/img4.webp'];

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
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-square"
            >
              <Image
                src={src}
                alt={`Escritório ${index + 1}`}
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
