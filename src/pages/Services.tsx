import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 bg-gradient-to-br from-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-30" />
          <div className="absolute inset-y-0 w-full h-full bg-grid-white/10" />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Enterprise Solutions & Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Comprehensive SAP consulting services tailored to transform your business with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              title="SAP BTP Development"
              description="Full-stack development services on SAP Business Technology Platform, including CAP, Node.js, and cloud-native applications."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              )}
            />
            <ServiceCard
              title="UI/UX Development"
              description="Modern, intuitive user interfaces using SAP Fiori and UI5 frameworks, ensuring optimal user experience and productivity."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              )}
            />
            <ServiceCard
              title="AI & ML Solutions"
              description="Advanced AI/ML implementations leveraging SAP's AI capabilities for intelligent automation and decision-making."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              )}
            />
            <ServiceCard
              title="Process Automation"
              description="End-to-end process automation using SAP Build Process Automation and intelligent bots for improved efficiency."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
            />
            <ServiceCard
              title="Cloud Migration"
              description="Seamless migration services to SAP HANA Cloud, ensuring high performance and scalability for your enterprise."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              )}
            />
            <ServiceCard
              title="Integration Services"
              description="Enterprise integration solutions using SAP Integration Suite and Event Mesh for seamless connectivity."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            />
            <ServiceCard
              title="SAP Training Programs"
              description="Comprehensive training programs covering SAP BTP, Fiori, HANA, and more. Customized curriculum for different skill levels and roles."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
            />
            <ServiceCard
              title="Corporate Consulting"
              description="Strategic consulting services for digital transformation, process optimization, and technology roadmap development."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
            />
            <ServiceCard
              title="SAP Support Services"
              description="Comprehensive support services for SAP solutions, including incident management, system monitoring, and performance tuning."
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
            />
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Let's discuss how our SAP expertise can help you achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium sm:font-semibold text-base sm:text-lg transition-all hover:scale-105 hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
