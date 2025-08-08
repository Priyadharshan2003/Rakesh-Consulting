import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homepageService, HomepageContent } from '../services/firebaseService';
import { Timestamp } from 'firebase/firestore';

const Footer: React.FC = () => {
  const [homepageContent, setHomepageContent] = useState<HomepageContent | null>(null);

  // Fetch homepage content for contact info
  useEffect(() => {
    const fetchHomepageContent = async () => {
      try {
        const content = await homepageService.get();
        setHomepageContent(content);
      } catch (error) {
        console.error('Error fetching homepage content:', error);
        // Fallback to hardcoded values if fetch fails
        setHomepageContent({
          heroTitle: '',
          heroSubtitle: '',
          aboutDescription: '',
          phoneNumber: '+91 7634961424',
          email: 'rakeshrit2015@outlook.com',
          updatedAt: Timestamp.now()
        });
      }
    };

    fetchHomepageContent();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${homepageContent?.email || 'rakeshrit2015@outlook.com'}`} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  {homepageContent?.email || 'rakeshrit2015@outlook.com'}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${(homepageContent?.phoneNumber || '+91 7634961424').replace(/\s+/g, '')}`} 
                  className="hover:text-indigo-400 transition-colors"
                >
                  {homepageContent?.phoneNumber || '+91 7634961424'}
                </a>
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/company/arig1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/expertise" className="hover:text-indigo-400 transition-colors">Expertise</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} ARIG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;