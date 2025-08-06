import React from 'react';
import { motion } from 'framer-motion';

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
    <div className={`flex flex-col gap-6 sm:gap-8 ${className}`}>
      {[...testimonials, ...testimonials].map((testimonial, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-4 sm:p-6 shadow-lg"
          style={{
            animation: `scroll ${duration}s linear infinite`,
          }}
        >
          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full" />
            <div className="text-xs sm:text-sm font-medium text-indigo-500">{testimonial.company}</div>
          </div>
          <blockquote className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">"{testimonial.quote}"</blockquote>
          <footer className="mt-3 sm:mt-4">
            <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</div>
            <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
          </footer>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialsColumn;
