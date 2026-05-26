'use client';

import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  y = 20,
  className,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-50px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-800 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] ${
        visible
          ? 'opacity-100 translate-y-0'
          : `opacity-0 ${y > 0 ? 'translate-y-5' : ''}`
      } ${className ?? ''}`}
    >
      {children}
    </div>
  );
};
