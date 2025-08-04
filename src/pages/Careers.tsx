'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Upload, 
  X, 
  ChevronDown,
  Building2,
  Code,
  Database,
  Cloud,
  Cpu,
  Workflow,
  Zap,
  Globe,
  CheckCircle,
  Sparkles
} from 'lucide-react';

// Shining Text Component
function ShiningText({ text }: { text: string }) {
  return (
    <motion.span
      className="bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-sm font-medium text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  )
}

// Success Toast Component
function SuccessToast({ 
  isVisible = true, 
  onClose = () => {}, 
  title = "Application Received Successfully!",
  message = "Our team will contact you within 2-3 business days"
}) {
  const [show, setShow] = React.useState(isVisible);

  React.useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6
          }}
          className="fixed top-4 right-4 z-50 max-w-md"
        >
          <motion.div
            className="relative overflow-hidden rounded-xl border border-green-200/50 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-6 shadow-2xl backdrop-blur-sm"
            initial={{ boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)" }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0)",
                "0 0 0 8px rgba(34, 197, 94, 0.1)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Animated background sparkles */}
            <motion.div
              className="absolute inset-0 opacity-20"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="absolute top-2 right-8 h-3 w-3 text-green-400" />
              <Sparkles className="absolute bottom-4 left-6 h-2 w-2 text-emerald-400" />
              <Sparkles className="absolute top-8 left-12 h-2 w-2 text-green-300" />
            </motion.div>

            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative flex items-start gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <CheckCircle className="relative h-8 w-8 text-green-600" />
                </div>
              </motion.div>

              <div className="flex-1 space-y-2">
                <motion.h3
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg font-semibold text-green-800"
                >
                  {title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-green-700"
                >
                  {message}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-2"
                >
                  <ShiningText text="Thank you for your patience!" />
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="flex-shrink-0 rounded-full p-1 text-green-600 hover:bg-green-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Animated Grid Pattern Component
interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = React.useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares, { width: 0, height: 0 }));

  function getPos(dims: { width: number; height: number }) {
    if (dims.width === 0 || dims.height === 0) return [0, 0];
    return [
      Math.floor((Math.random() * dims.width) / width),
      Math.floor((Math.random() * dims.height) / height),
    ];
  }

  function generateSquares(count: number, dims: { width: number; height: number }) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(dims),
    }));
  }

  const updateSquarePosition = (id: number) => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(dimensions),
            }
          : sq,
      ),
    );
  };

  // Initialize squares when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setSquares(generateSquares(numSquares, dimensions));
    }
  }, [dimensions.width, dimensions.height, numSquares]);

  // Set up resize observer
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${x}-${y}-${index}`}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  );
}

// Background Beams Component
const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
      "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    ];
    
    return (
      <div
        className={`absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center ${className}`}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
          ))}
          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor="#3B82F6" stopOpacity="0" />
                <stop stopColor="#3B82F6" />
                <stop offset="32.5%" stopColor="#1E40AF" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
              </motion.linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";

// Skills data
const skillOptions = [
  { value: 'SAP Fiori', label: 'SAP Fiori' },
  { value: 'SAP HANA Cloud', label: 'SAP HANA Cloud' },
  { value: 'SAP BTP', label: 'SAP BTP' },
  { value: 'SAP Build', label: 'SAP Build' },
  { value: 'Process Automation', label: 'Process Automation' },
  { value: 'Event Mesh', label: 'Event Mesh' },
  { value: 'Core AI/ML', label: 'Core AI/ML' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'UI5', label: 'UI5' },
  { value: 'Integration Suite', label: 'Integration Suite' },
];

// Multi-select component
const MultiSelect = ({ value, onChange, options, placeholder }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelect = (option: any) => {
    const isSelected = value?.some((item: any) => item.value === option.value);
    if (isSelected) {
      onChange(value.filter((item: any) => item.value !== option.value));
    } else {
      onChange([...(value || []), option]);
    }
  };

  const removeItem = (optionToRemove: any) => {
    onChange(value.filter((item: any) => item.value !== optionToRemove.value));
  };

  return (
    <div className="relative">
      <div
        className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-1 flex-1">
          {value && value.length > 0 ? (
            value.map((item: any) => (
              <span
                key={item.value}
                className="inline-flex items-center px-2 py-1 rounded-md bg-blue-100 text-blue-800 text-xs"
              >
                {item.label}
                <button
                  type="button"
                  className="ml-1 hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(item);
                  }}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map((option: any) => (
            <div
              key={option.value}
              className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm"
              onClick={() => handleSelect(option)}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={value?.some((item: any) => item.value === option.value)}
                  readOnly
                  className="rounded border-gray-300"
                />
                <span>{option.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Form interfaces
interface CareerFormInputs {
  name: string;
  email: string;
  phone: string;
  skills: { value: string; label: string }[];
  experience: string;
  cv: FileList;
  coverLetter: string;
}

const Careers: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors, isSubmitSuccessful }, reset } = useForm<CareerFormInputs>();
  const [cvFileName, setCvFileName] = useState('');
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data: CareerFormInputs) => {
    console.log('Form submitted:', data);
    setShowToast(true);
    reset();
    setCvFileName('');
  };

  const technologies = [
    { name: 'SAP BTP', icon: Cloud },
    { name: 'SAP Fiori/UI5', icon: Globe },
    { name: 'SAP HANA Cloud', icon: Database },
    { name: 'SAP Build', icon: Building2 },
    { name: 'Process Automation', icon: Workflow },
    { name: 'Event Mesh', icon: Zap },
    { name: 'Core AI/ML', icon: Cpu },
    { name: 'Node.js', icon: Code },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <BackgroundBeams className="opacity-30" />
        <AnimatedGridPattern
          className="absolute inset-0 opacity-20"
          width={30}
          height={30}
          duration={6}
          maxOpacity={0.3}
          numSquares={75}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Team
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build the future of enterprise solutions with cutting-edge SAP technologies
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Application</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience (years) *
                      </label>
                      <input
                        type="number"
                        {...register('experience', { required: 'Experience is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="5"
                      />
                      {errors.experience && (
                        <span className="text-red-500 text-sm mt-1">{errors.experience.message}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills *
                    </label>
                    <Controller
                      name="skills"
                      control={control}
                      rules={{ required: 'Please select at least one skill' }}
                      render={({ field }) => (
                        <MultiSelect
                          value={field.value}
                          onChange={field.onChange}
                          options={skillOptions}
                          placeholder="Select your skills..."
                        />
                      )}
                    />
                    {errors.skills && (
                      <span className="text-red-500 text-sm mt-1">{errors.skills.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register('cv', { required: 'CV is required' })}
                        onChange={(e) => setCvFileName(e.target.files?.[0]?.name || '')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {cvFileName && (
                        <span className="text-sm text-gray-500 mt-1">Selected: {cvFileName}</span>
                      )}
                    </div>
                    {errors.cv && (
                      <span className="text-red-500 text-sm mt-1">{errors.cv.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      {...register('coverLetter', { required: 'Cover letter is required' })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us why you're interested in joining our team..."
                    />
                    {errors.coverLetter && (
                      <span className="text-red-500 text-sm mt-1">{errors.coverLetter.message}</span>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Apply Now
                  </button>
                  
                  {isSubmitSuccessful && (
                    <p className="text-green-600 text-center mt-4">
                      Application submitted successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">rakeshrit2015@outlook.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+91 7634961424</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Connect</h4>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <tech.icon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessToast
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default Careers;
