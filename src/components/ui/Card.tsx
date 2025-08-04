import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-sm p-6 
        ${hover ? 'transition-shadow hover:shadow-md' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
