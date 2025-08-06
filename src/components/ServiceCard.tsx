import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl opacity-25 group-hover:opacity-100 blur transition duration-500"></div>
      <div className="relative p-6 sm:p-8 bg-white rounded-2xl h-full transition-all duration-500 group-hover:shadow-xl">
        <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-indigo-600">
          <Icon className="w-full h-full" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
