import React from 'react';

const expertise = [
  {
    title: 'SAP BTP & Cloud Application Programming (CAP)',
    description: 'Develop and deploy scalable applications using SAP BTP and CAP model.',
    technologies: ['CAP', 'Node.js', 'Java', 'Cloud Foundry'],
    level: 'Expert',
  },
  {
    title: 'SAP BTP Business Process Automation (BPA)',
    description: 'Automate workflows and business processes using SAP BPA tools.',
    technologies: ['Process Automation', 'Workflow Management', 'SAP Build'],
    level: 'Advanced',
  },
  {
    title: 'SAP BTP Integration Suite',
    description: 'Seamless integration across SAP and non-SAP systems.',
    technologies: ['API Management', 'Cloud Integration', 'Event Mesh'],
    level: 'Expert',
  },
  {
    title: 'SAP BTP Administration & Security',
    description: 'Manage, secure, and monitor SAP BTP environments.',
    technologies: ['IAM', 'Audit Logs', 'Entitlements', 'Subaccount Management'],
    level: 'Advanced',
  },
  {
    title: 'SAP Fiori & UI5',
    description: 'Role-based, consumer-grade SAP applications for an intuitive user experience.',
    technologies: ['UI5', 'Fiori Elements', 'OData'],
    level: 'Expert',
  },
  {
    title: 'SAP ABAP & OData',
    description: 'Backend development and service provisioning using ABAP and OData.',
    technologies: ['ABAP', 'OData', 'CDS Views'],
    level: 'Expert',
  },
  {
    title: 'ABAP Cloud & Data',
    description: 'Modern ABAP development in the cloud with clean core principles.',
    technologies: ['ABAP RESTful', 'RAP', 'Core Data Services'],
    level: 'Advanced',
  },
  {
    title: 'SAP BASIS & Administration',
    description: 'System administration, monitoring, and performance tuning.',
    technologies: ['SAP NetWeaver', 'System Monitoring', 'Transport Management'],
    level: 'Advanced',
  },
  {
    title: 'SAP Functional Modules',
    description: 'Functional expertise across key SAP modules.',
    technologies: ['FI', 'MM', 'SD', 'PP'],
    level: 'Intermediate',
  },
  {
    title: 'SAP Finance Solutions',
    description: 'Financial management and reporting using SAP Finance tools.',
    technologies: ['SAP FI', 'CO', 'S/4HANA Finance'],
    level: 'Advanced',
  },
  {
    title: 'SAP SuccessFactors & HCM',
    description: 'Cloud-based human capital management and core HR processes.',
    technologies: ['Employee Central', 'Recruiting', 'Payroll'],
    level: 'Advanced',
  },
  {
    title: 'SAP Ariba',
    description: 'Procurement and supply chain collaboration using SAP Ariba.',
    technologies: ['Sourcing', 'Procurement', 'Supplier Management'],
    level: 'Intermediate',
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
              <span key={tech} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Expertise;
