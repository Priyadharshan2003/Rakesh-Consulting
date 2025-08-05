import React from 'react';
import { Link } from 'react-router-dom';
import { Waves } from '../components/ui/waves';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  Shield, 
  Users, 
  BarChart, 
  Code, 
  Settings 
} from 'lucide-react';

const Home: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const industries = [
    { name: 'Retail', icon: '🏪' },
    { name: 'Consumer Packed Goods', icon: '📦' },
    { name: 'Professional Services', icon: '💼' },
    { name: 'Wholesale Distribution', icon: '🏭' },
    { name: 'Utilities', icon: '⚡' },
    { name: 'Manufacturing', icon: '🔧' }
  ];

  return (
    <div className="relative bg-white">
      {/* Interactive Background */}
      <Waves
        lineColor="rgb(99, 102, 241)"
        waveSpeedX={0.015}
        waveSpeedY={0.01}
        waveAmpX={20}
        waveAmpY={10}
        className="opacity-20"
      />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-[85vh] sm:min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-12 lg:mb-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6">
                <span className="block text-gray-900">Business</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                  Simplified.
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your enterprise with SAP solutions. Unlock efficiency, innovation, and growth with our expert consulting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-base sm:text-lg transition-all hover:border-indigo-500 hover:text-indigo-600"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl transform rotate-3"></div>
                <img 
                  src="/assets/image.png" 
                  alt="Digital Transformation Illustration" 
                  className="relative z-10 rounded-3xl shadow-xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Client Marquee Section */}
<section className="relative z-10 py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
    </motion.div>
  </div>

  <div className="relative">
    {/* Gradient Overlays */}
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

    {/* Marquee */}
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12 px-4">
        {[
          "adam_infotech_logo.png",
          "capgemini_logo.jpeg",
          "DTJ_logo.png",
          "highbar-technocrat-sap-gold-partner_logo.png",
          "proximaray_technologies_logo.jpeg",
          "Stripedata_logo.png",
          "sage_logo.png",
        ].map((logo, index) => (
          <div key={index} className="flex items-center justify-center min-w-[120px]">
            <img
              src={`/assets/clients/${logo}`}
              alt={logo.replace(/_/g, ' ').replace(/\..+$/, '')}
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[
          "adam_infotech_logo.png",
          "capgemini_logo.jpeg",
          "DTJ_logo.png",
          "highbar-technocrat-sap-gold-partner_logo.png",
          "proximaray_technologies_logo.jpeg",
          "Stripedata_logo.png",
          "sage_logo.png",
        ].map((logo, index) => (
          <div key={`dup-${index}`} className="flex items-center justify-center min-w-[120px]">
            <img
              src={`/assets/clients/${logo}`}
              alt={logo.replace(/_/g, ' ').replace(/\..+$/, '')}
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Solutions Section */}
      <section className="relative z-10 bg-gray-50 py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              Customized Solutions For Your Need
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive SAP solutions tailored to transform your business processes and drive digital innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* RISE with SAP */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-indigo-50 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold">RISE with SAP</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Transform your business with cloud-first ERP solutions and intelligent technologies.
                </p>
                <Link to="/services/rise-with-sap" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 text-sm sm:text-base">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* SAP Analytics Cloud */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <BarChart className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">Analytics Cloud</h3>
                <p className="text-gray-600 mb-4">
                  Make confident decisions with real-time analytics and business intelligence solutions.
                </p>
                <Link to="/services/analytics-cloud" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* SAP SuccessFactors */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-green-50 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold">SuccessFactors</h3>
                <p className="text-gray-600 mb-4">
                  Transform HR with cloud-based human experience management solutions.
                </p>
                <Link to="/services/success-factors" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              Empowering Your SAP Journey
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              End-to-end SAP services to drive your digital transformation success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Implementation */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-8 border border-indigo-100/50 transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600">
                  <Settings className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Expert SAP implementation services using SAP Activate methodology and industry best practices.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                    System Design & Configuration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                    Data Migration & Testing
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-indigo-500 mr-2" />
                    User Training & Support
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Conversion */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 border border-blue-100/50 transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Conversion</h3>
                <p className="text-gray-600 mb-6">
                  Seamless transition from legacy systems to modern SAP solutions with minimal business disruption.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                    System Assessment & Planning
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                    Data & Code Migration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Integration */}
            <motion.div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 border border-green-100/50 transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Integration</h3>
                <p className="text-gray-600 mb-6">
                  Seamless integration of SAP with your existing enterprise systems and third-party applications.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                    API Development & Management
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                    System Integration
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                    Data Synchronization
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative z-10 bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Expertise across diverse industries to deliver targeted solutions for your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="group text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center text-3xl bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all"
            >
              Get Industry-Specific Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
