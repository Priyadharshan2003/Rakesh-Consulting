// Use CommonJS require instead of ES imports
const emailjs = require('@emailjs/browser');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
try {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    console.log('Loading environment variables from .env file');
    dotenv.config({ path: envPath });
  } else {
    console.warn('.env file not found');
  }
} catch (error) {
  console.warn('Could not load .env file:', error.message);
}

// Create emailConfig from environment variables
const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_rakesh',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_contact_form',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
};

// If you want to manually override for testing
// emailConfig.serviceId = 'your_service_id';
// emailConfig.templateId = 'your_template_id';
// emailConfig.publicKey = 'your_public_key';

// Initialize EmailJS
emailjs.init(emailConfig.publicKey);

// Test email parameters
const testParams = {
  from_name: 'Test User',
  from_email: 'test@example.com',
  company: 'Test Company',
  message: 'This is a test message from the contact form',
  to_name: 'Admin',
  reply_to: 'test@example.com',
  subject: 'Test Email from Contact Form'
};

// Send a test email
console.log('Sending test email with params:', testParams);
console.log('Using EmailJS config:', {
  serviceId: emailConfig.serviceId,
  templateId: emailConfig.templateId,
  publicKey: emailConfig.publicKey ? '[REDACTED]' : '[MISSING]'
});

emailjs.send(
  emailConfig.serviceId,
  emailConfig.templateId,
  testParams,
  emailConfig.publicKey
)
.then(response => {
  console.log('Email sent successfully!', response);
  console.log('Status:', response.status);
  console.log('Text:', response.text);
})
.catch(error => {
  console.error('Error sending email:', error);
  
  if (!emailConfig.publicKey) {
    console.error('\nERROR: Missing EmailJS public key!');
    console.error('Please set your REACT_APP_EMAILJS_PUBLIC_KEY in .env file');
    console.error('Or update the publicKey in src/config/emailConfig.ts');
  }
  
  if (error.text) {
    console.error('Error text:', error.text);
  }
});
