import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <h3 className="text-xl font-semibold text-indigo-600 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const IndustryCard: React.FC<{ industry: string; icon: string }> = ({ industry, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg flex items-start gap-4"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
        <span className="material-icons text-2xl" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
    </div>
    <p className="text-gray-800 font-medium mt-1">{industry}</p>
  </motion.div>
);



const About: React.FC = () => {
  const services = [
    {
      title: "SAP Implementation",
      description: "End-to-end deployment tailored to your business needs, ensuring seamless integration and optimal performance."
    },
    {
      title: "Upgrades & Migration",
      description: "Smooth transition to newer SAP platforms with minimal disruption to your business operations."
    },
    {
      title: "Application Support",
      description: "Continuous optimization and maintenance to keep your systems running at peak efficiency."
    },
    {
      title: "Process Enhancements",
      description: "Streamlined workflows and improved efficiency through innovative process optimization."
    },
    {
      title: "Business Process Consulting",
      description: "Strategic advisory services for SAP-led growth and digital transformation."
    },
    {
      title: "SAP Analytics & Reporting",
      description: "Real-time insights and data-driven decision making through advanced analytics solutions."
    }
  ];

  const industries = [
    {
      name: "Engineering, Construction & Operations (EC&O)",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>`
    },
    {
      name: "Engineering, Procurement & Construction (EPC)",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>`
    },
    {
      name: "Infrastructure & Real Estate",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>`
    },
    {
      name: "Highways, Airports, Metro, Power, Water",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>`
    },
    {
      name: "Oil & Gas, Mining, Manufacturing",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>`
    },
    {
      name: "Facility Management & Smart Cities",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-r from-indigo-600 to-blue-500 py-24 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Transforming Industries Through Digital Excellence</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            As a certified SAP Gold Partner, we deliver innovative ERP solutions that drive growth and efficiency in the Engineering and Construction sector.
          </p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About ARIG</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At ARIG, we specialize in transforming the Engineering, Construction & Operations (EC&O) and Real Estate sectors through innovative ERP and digital solutions. We combine deep domain expertise with cutting-edge technology to deliver scalable, tailored systems that streamline operations, enhance project delivery, and accelerate business growth.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <IndustryCard industry={industry.name} icon={industry.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:contact@arig.com"
              className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">contact@arig.com</span>
            </a>
            <a 
              href="tel:+1234567890"
              className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">+1 (234) 567-890</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/arig1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-lg">Follow us on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;