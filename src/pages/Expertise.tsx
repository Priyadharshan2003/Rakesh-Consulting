import React from 'react';

const expertise = [
  {
    title: 'SAP Fiori',
    description: 'Role-based, consumer-grade SAP applications for an intuitive user experience.',
    technologies: ['UI5', 'Fiori Elements', 'OData'],
    level: 'Expert',
  },
  {
    title: 'SAP HANA Cloud',
    description: 'In-memory database and cloud analytics for real-time business insights.',
    technologies: ['HANA DB', 'XS Advanced', 'Cloud Foundry'],
    level: 'Advanced',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Custom SAP solutions, integration, and automation for business growth.',
    technologies: ['ABAP', 'Integration Suite', 'BTP'],
    level: 'Expert',
  },
];

const Expertise: React.FC = () => (
  <div className="max-w-5xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-extrabold mb-8 text-primary-700">Our Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {expertise.map((item, idx) => (
        <div key={idx} className="card text-center">
          <h3 className="text-xl font-bold mb-2 expertise-badge">{item.title}</h3>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <div className="mb-2">
            <span className="text-xs text-primary-700 font-semibold">Level: {item.level}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {item.technologies.map((tech) => (
              <span key={tech} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Expertise;
