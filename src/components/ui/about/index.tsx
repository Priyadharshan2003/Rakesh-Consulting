import React from 'react';

// Helper Components
const ExpertiseCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 flex items-center gap-2">
          <svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const CertificationItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
    <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
    <span className="text-gray-700">{text}</span>
  </div>
);

export { ExpertiseCard, CertificationItem };
