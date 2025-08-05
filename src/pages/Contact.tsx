import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Building, 
  ArrowRight,
  CheckCircle,
  Upload
} from 'lucide-react';

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {/* First set of paths */}
        <svg
          className="w-full h-full"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={`path1-${i}`}
              d={`M-${380 - i * 30} -${189 + i * 20}C-${380 - i * 30} -${
                189 + i * 20
              } -${312 - i * 30} ${216 - i * 20} ${152 - i * 30} ${
                343 - i * 20
              }C${616 - i * 30} ${470 - i * 20} ${684 - i * 30} ${
                875 - i * 20
              } ${684 - i * 30} ${875 - i * 20}`}
              stroke="currentColor"
              strokeOpacity={0.3}
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 0.4, 0.2],
                pathOffset: [0, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </svg>
        
        {/* Second set of paths going the opposite direction */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.path
              key={`path2-${i}`}
              d={`M${380 + i * 30} ${189 - i * 20}C${380 + i * 30} ${
                189 - i * 20
              } ${312 + i * 30} -${216 + i * 20} -${152 + i * 30} -${
                343 + i * 20
              }C-${616 + i * 30} -${470 + i * 20} -${684 + i * 30} -${
                875 + i * 20
              } -${684 + i * 30} -${875 + i * 20}`}
              stroke="currentColor"
              strokeOpacity={0.3}
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 0.4, 0.2],
                pathOffset: [0, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "rakeshrit2015@outlook.com",
    link: "mailto:rakeshrit2015@outlook.com",
    gradient: "from-indigo-500/20 to-blue-500/20",
    hoverColor: "indigo"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+91 7634961424",
    link: "tel:+917634961424",
    gradient: "from-indigo-500/20 to-blue-500/20",
    hoverColor: "indigo"
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    resume: null as File | null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <AnimatedBackground />
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all ${
                          errors.name ? 'border-red-400' : 'border-gray-200'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all ${
                          errors.email ? 'border-red-400' : 'border-gray-200'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Company (Optional)"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-all resize-none ${
                        errors.message ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV (Optional)</label>
                    <div className="relative border border-gray-200 rounded-lg bg-gray-50 px-6 py-4">
                      <input
                        type="file"
                        onChange={(e) => handleInputChange('resume', e.target.files?.[0] || null)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.doc,.docx"
                      />
                      <div className="flex items-center gap-3 text-gray-500">
                        <Upload className="h-5 w-5" />
                        <span>{formData.resume ? formData.resume.name : 'Upload your resume'}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '', resume: null });
                    }}
                    className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-indigo-200 transition-all group"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <method.icon className="w-7 h-7 text-indigo-600" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                    <p className="text-gray-700 font-medium">{method.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}

            <motion.div
              className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-100"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We pride ourselves on rapid response times. All inquiries are typically answered within 2 hours during business hours, 
                and we'll schedule a call within 24 hours to discuss your project in detail.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
