import React from 'react';
import { motion } from 'framer-motion';


const features = [
  {
    title: 'End-to-End SAP BTP Solutions',
    description: 'From architecture to deployment, we deliver robust SAP BTP solutions tailored for every business need—analytics, integration, automation, and more.'
  },
  {
    title: 'Award-Winning Expertise',
    description: 'Our certified SAP BTP consultants have delivered award-winning projects for global enterprises, ensuring innovation and reliability.'
  },
  {
    title: 'Seamless Integration',
    description: 'Connect SAP and non-SAP systems, automate workflows, and unlock real-time insights with our integration and extension services.'
  },
  {
    title: 'Cloud-Native & Secure',
    description: 'We leverage SAP BTP’s cloud-native capabilities for scalable, secure, and future-ready solutions.'
  },
  {
    title: 'AI, ML & Automation',
    description: 'Supercharge your business with intelligent process automation, AI/ML, and advanced analytics on SAP BTP.'
  },
  {
    title: 'Rapid Prototyping & Delivery',
    description: 'Accelerate innovation with our agile approach—rapid prototyping, design thinking, and continuous delivery.'
  }
];


const SapBtp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
      

      {/* Hero Section */}
      <div className="relative min-h-[70vh] w-full flex items-center justify-center px-4 text-center overflow-hidden rounded-b-3xl bg-gradient-to-br from-indigo-700 via-blue-600 to-indigo-400">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center text-center space-y-6 py-20"
        >
          <h1 className="font-mono text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Award-Winning <span className="text-yellow-300">SAP BTP</span> Solutions
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium max-w-2xl">
            Unlock the full power of SAP Business Technology Platform (BTP) with our expert team.<br className="hidden md:block" />
            We deliver innovative, secure, and scalable solutions for every business challenge—<span className="text-yellow-200 font-semibold">analytics, integration, automation, and more</span>.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg shadow-xl hover:bg-yellow-100 hover:text-indigo-900 transition-all border-2 border-white/80 hover:border-yellow-200 focus:outline-none focus:ring-4 focus:ring-yellow-200"
          >
            Get a Free Consultation
          </motion.a>
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-10"
          >
            <span className="animate-bounce text-yellow-200 text-3xl">↓</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Core Pillars Section */}
      <section className="py-20 px-4 flex-1 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">Core Pillars of SAP BTP</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data and Analytics */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border-t-4 border-indigo-200 hover:border-indigo-400">
              <div className="mb-4 text-indigo-700">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 11V7a4 4 0 118 0v4m-4 4v4a4 4 0 11-8 0v-4m4-4V7a4 4 0 00-8 0v4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Data and Analytics</h3>
              <p className="text-gray-600">SAP HANA Cloud and SAP Analytics Cloud help manage, cleanse, and analyze data in real-time, enabling data-driven decisions and business insights.</p>
            </div>
            {/* Application Development */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border-t-4 border-indigo-200 hover:border-indigo-400">
              <div className="mb-4 text-indigo-700">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Application Development</h3>
              <p className="text-gray-600">Build custom apps with ABAP, Java, Python, and more. SAP Build Apps and Business Application Studio make development fast and accessible.</p>
            </div>
            {/* Integration */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border-t-4 border-indigo-200 hover:border-indigo-400">
              <div className="mb-4 text-indigo-700">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h8a2 2 0 002-2v-6" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Integration</h3>
              <p className="text-gray-600">SAP Integration Suite connects SAP and non-SAP systems, on-premise and cloud, with prebuilt packs and APIs for rapid deployment.</p>
            </div>
            {/* Automation */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border-t-4 border-indigo-200 hover:border-indigo-400">
              <div className="mb-4 text-indigo-700">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2m4 0a4 4 0 00-4-4H7a4 4 0 00-4 4v4a4 4 0 004 4h4" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks with SAP Build Process Automation and Intelligent RPA, boosting efficiency and reducing manual effort.</p>
            </div>
            {/* Artificial Intelligence */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all border-t-4 border-indigo-200 hover:border-indigo-400">
              <div className="mb-4 text-indigo-700">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">Artificial Intelligence</h3>
              <p className="text-gray-600">Embedded AI, like SAP Conversational AI, enables intelligent processes and self-learning apps for smarter business outcomes.</p>
            </div>
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