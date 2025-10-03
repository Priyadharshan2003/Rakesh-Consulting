
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Database, Code, GitMerge, Bot, BrainCircuit } from 'lucide-react';

// Carousel slides data
const carouselSlides: {
  image: string;
  overlayTitle: string;
  overlayText: string;
  cta: { label: string; href: string };
}[] = [
  {
    image: "/assets/btp-hero-1.jpg",
    overlayTitle: "Award-Winning SAP BTP Solutions",
    overlayText: "Unlock the full power of SAP Business Technology Platform (BTP) with our expert team. We deliver innovative, secure, and scalable solutions for every business challenge—analytics, integration, automation, and more.",
    cta: { label: "Get a Free Consultation", href: "#contact" }
  },
  {
    image: "/assets/btp-hero-2.jpg",
    overlayTitle: "Accelerate Digital Transformation",
    overlayText: "Transform your business with cloud-native, AI-driven, and integrated SAP BTP services. Experience agility, security, and future-ready innovation.",
    cta: { label: "Talk to Experts", href: "#contact" }
  },
  {
    image: "/assets/btp-hero-3.jpg",
    overlayTitle: "Seamless Integration & Automation",
    overlayText: "Connect SAP and non-SAP systems, automate workflows, and unlock real-time insights with our SAP BTP integration and automation expertise.",
    cta: { label: "See How", href: "#contact" }
  }
];

// CarouselHero component
const CarouselHero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = carouselSlides.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play effect
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slideCount]);

  // Manual navigation
  const goTo = (idx: number) => {
    setCurrent(idx);
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  };
  const next = () => {
    setCurrent((prev) => (prev + 1) % slideCount);
  };

  return (
    <div className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden rounded-b-3xl" role="region" aria-roledescription="carousel" aria-label="SAP BTP Features">
      {/* Slides */}
      {carouselSlides.map((slide, idx) => (
        <motion.div
          id={`slide-${idx + 1}`}
          key={idx}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: current === idx ? 1 : 0, scale: current === idx ? 1 : 0.98 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${current === idx ? 'z-10' : 'z-0 pointer-events-none'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden={current !== idx}
          role="group"
          aria-roledescription="slide"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-blue-300/20" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-20">
            <h1 className="font-mono text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg mb-6">
              {slide.overlayTitle}
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto mb-8">
              {slide.overlayText}
            </p>
            {slide.cta && (
              <motion.a
                href={slide.cta.href}
                whileHover={{ scale: 1.07 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg shadow-xl hover:bg-yellow-100 hover:text-indigo-900 transition-all border-2 border-white/80 hover:border-yellow-200 focus:outline-none focus:ring-4 focus:ring-yellow-200"
              >
                {slide.cta.label}
              </motion.a>
            )}
          </div>
        </motion.div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-indigo-700 rounded-full p-2 shadow-lg z-20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-indigo-700 rounded-full p-2 shadow-lg z-20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {carouselSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white bg-white/70 transition-all ${current === idx ? 'bg-yellow-300 border-yellow-400 scale-125' : 'bg-white/40'}`}
          />
        ))}
      </div>

    </div>


  );
};

const pillars: { title: string; description: string; icon: React.ElementType }[] = [
  {
    title: "Data and Analytics",
    description: "SAP HANA Cloud and SAP Analytics Cloud help manage, cleanse, and analyze data in real-time, enabling data-driven decisions and business insights.",
    icon: Database
  },
  {
    title: "Application Development",
    description: "Build custom apps with ABAP, Java, Python, and more. SAP Build Apps and Business Application Studio make development fast and accessible.",
    icon: Code
  },
  {
    title: "Integration",
    description: "SAP Integration Suite connects SAP and non-SAP systems, on-premise and cloud, with prebuilt packs and APIs for rapid deployment.",
    icon: GitMerge
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks with SAP Build Process Automation and Intelligent RPA, boosting efficiency and reducing manual effort.",
    icon: Bot
  },
  {
    title: "Artificial Intelligence",
    description: "Embedded AI, like SAP Conversational AI, enables intelligent processes and self-learning apps for smarter business outcomes.",
    icon: BrainCircuit
  }
];

type PillarCardProps = { title: string; description: string; icon: React.ElementType };
const PillarCard: React.FC<PillarCardProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border-t-4 border-indigo-200 hover:border-indigo-400">
    <div className="mb-4 text-indigo-700"><Icon className="w-10 h-10 mx-auto" /></div>
    <h3 className="text-xl font-semibold mb-2 text-indigo-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SapBtp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
      {/* Hero Section: Responsive Image Carousel */}
      <CarouselHero />

      {/* Core Pillars Section */}
      <section className="py-20 px-4 flex-1 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">Core Pillars of SAP BTP</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center rounded-3xl max-w-5xl mx-auto mb-12 shadow-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform with SAP BTP?</h2>
        <p className="text-lg md:text-xl mb-8 text-indigo-100">
          Let’s build the future together. Contact our SAP BTP experts for a free consultation and see how we can accelerate your digital journey.
        </p>
        <a
          href="mailto:rakeshrit2015@outlook.com"
          className="inline-block px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg shadow-lg hover:bg-indigo-100 transition-all"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
};

export default SapBtp;