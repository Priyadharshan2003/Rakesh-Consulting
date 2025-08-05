import React from 'react';
import { ExpertiseCard, CertificationItem } from '../components/ui/about';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 text-white">
            <h1 className="text-xl opacity-90">SAP Full Stack Developer & AI Specialist</h1>
          </div>
          
          <div className="p-8">
            {/* Expertise Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ExpertiseCard 
                  title="SAP AI & ML"
                  items={[
                    "Core AI Certified",
                    "Gen AI Implementation",
                    "Launchpad AI Integration",
                    "AI-Driven Solutions"
                  ]}
                />
                
                <ExpertiseCard 
                  title="SAP BTP Development"
                  items={[
                    "CAP Full Stack Development",
                    "Node.js Integration",
                    "UI5/Fiori Applications",
                    "Event Mesh Architecture"
                  ]}
                />
                
                <ExpertiseCard 
                  title="SAP Build Suite"
                  items={[
                    "Process Automation",
                    "SAP Build Apps",
                    "Workzone Configuration",
                    "Low-Code Solutions"
                  ]}
                />
              </div>
            </div>

            {/* Certifications Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Certifications & Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <CertificationItem text="SAP Certified Core AI Developer" />
                  <CertificationItem text="SAP Certified Gen AI Specialist" />
                  <CertificationItem text="SAP Certified Launchpad AI Expert" />
                  <CertificationItem text="SAP BTP CAP Full Stack Developer" />
                </div>
                <div className="space-y-2">
                  <CertificationItem text="SAP UI5/Fiori Expert Developer" />
                  <CertificationItem text="SAP Build Process Automation Specialist" />
                  <CertificationItem text="SAP Build Workzone Administrator" />
                  <CertificationItem text="Event Mesh Integration Expert" />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="mailto:rakeshrit2015@outlook.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  rakeshrit2015@outlook.com
                </a>
                <a 
                  href="tel:+917634961424"
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 7634961424
                </a>
                <a 
                  // href="https://www.linkedin.com/in/rakesh-kumar-21164b154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
