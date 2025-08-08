// Email service configuration
export const emailConfig = {
  // Sign up at https://www.emailjs.com/ to get these credentials
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_rakesh',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_contact_form',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '', // Get from EmailJS dashboard
};
