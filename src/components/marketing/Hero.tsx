import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  ctaLink = '/',
  image
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-600 to-indigo-800">
      <div className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {description}
            </p>
            {ctaText && (
              <div className="mt-10">
                <a href={ctaLink}>
                  <Button variant="primary" size="lg">
                    {ctaText}
                  </Button>
                </a>
              </div>
            )}
          </div>
          {image && (
            <div className="mt-16 flow-root sm:mt-24">
              <div className="relative">
                <img
                  src={image}
                  alt="Hero"
                  className="rounded-xl shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
