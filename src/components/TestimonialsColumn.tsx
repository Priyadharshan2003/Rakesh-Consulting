import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  duration: number;
  className?: string;
}

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  duration,
  className = '',
}) => {
  return (
    <div className={`flex flex-col space-y-8 animate-scroll ${className}`}>
      {[...testimonials, ...testimonials].map((testimonial, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow-lg"
          style={{
            animation: `scroll ${duration}s linear infinite`,
          }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <div className="text-sm font-medium text-indigo-500">{testimonial.company}</div>
          </div>
          <blockquote className="text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
          <footer className="mt-4">
            <div className="font-semibold text-gray-900">{testimonial.author}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsColumn;
