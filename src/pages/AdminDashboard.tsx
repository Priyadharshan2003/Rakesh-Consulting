import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  MessageSquare,
  Briefcase,
  Settings,
  Eye,
  Trash2,
  Download,
  Mail,
  Phone,
  FileText,
  Building,
  Award,
  Clock,
  CheckCircle,
  Edit,
  Save,
  X,
} from 'lucide-react';
import {
  contactService,
  careerService,
  homepageService,
  analyticsService,
  ContactSubmission,
  CareerSubmission,
  HomepageContent
} from '../services/firebaseService';

// Status badge component
const StatusBadge: React.FC<{ 
  status: string; 
  type: 'contact' | 'career';
  onChange?: (newStatus: string) => void;
}> = ({ status, type, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const getStatusConfig = () => {
    if (type === 'contact') {
      const configs = {
        new: { color: 'bg-blue-100 text-blue-800', label: 'New' },
        contacted: { color: 'bg-yellow-100 text-yellow-800', label: 'Contacted' },
        resolved: { color: 'bg-green-100 text-green-800', label: 'Resolved' }
      };
      return configs[status as keyof typeof configs] || configs.new;
    } else {
      const configs = {
        new: { color: 'bg-blue-100 text-blue-800', label: 'New' },
        reviewing: { color: 'bg-purple-100 text-purple-800', label: 'Reviewing' },
        interviewed: { color: 'bg-yellow-100 text-yellow-800', label: 'Interviewed' },
        hired: { color: 'bg-green-100 text-green-800', label: 'Hired' },
        rejected: { color: 'bg-red-100 text-red-800', label: 'Rejected' }
      };
      return configs[status as keyof typeof configs] || configs.new;
    }
  };

  const config = getStatusConfig();
  const options = type === 'contact' 
    ? ['new', 'contacted', 'resolved']
    : ['new', 'reviewing', 'interviewed', 'hired', 'rejected'];

  if (!onChange) {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  }

  if (isEditing) {
    return (
      <select
        value={status}
        onChange={(e) => {
          onChange(e.target.value);
          setIsEditing(false);
        }}
        onBlur={() => setIsEditing(false)}
        className="px-2 py-1 text-xs border rounded"
        autoFocus
      >
        {options.map(option => {
          const optionConfig = type === 'contact' 
            ? { new: 'New', contacted: 'Contacted', resolved: 'Resolved' }[option]
            : { new: 'New', reviewing: 'Reviewing', interviewed: 'Interviewed', hired: 'Hired', rejected: 'Rejected' }[option];
          return (
            <option key={option} value={option}>{optionConfig}</option>
          );
        })}
      </select>
    );
  }

  return (
    <button
      onClick={() => setIsEditing(true)}
      className={`px-3 py-1 rounded-full text-xs font-medium ${config.color} hover:opacity-80 transition-opacity`}
    >
      {config.label}
    </button>
  );
};

// Contact submission component
const ContactSubmissionCard: React.FC<{ 
  submission: ContactSubmission;
  onStatusChange: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}> = ({ submission, onStatusChange, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{submission.name}</h3>
          <p className="text-gray-600 text-sm">{submission.email}</p>
          {submission.company && (
            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
              <Building className="h-3 w-3" />
              {submission.company}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge
            status={submission.status}
            type="contact"
            onChange={(newStatus) => onStatusChange(submission.id!, newStatus)}
          />
          <span className="text-xs text-gray-500">
            {submission.submittedAt.toDate().toLocaleDateString()}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">{submission.message}</p>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
          >
            <Eye className="h-4 w-4" />
            {showDetails ? 'Hide' : 'View'} Details
          </button>
        </div>
        <button
          onClick={() => onDelete(submission.id!)}
          className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-4 pt-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Email:</strong> 
                <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline ml-1">
                  {submission.email}
                </a>
              </div>
              <div>
                <strong>Submitted:</strong> {submission.submittedAt.toDate().toLocaleString()}
              </div>
              {submission.company && (
                <div>
                  <strong>Company:</strong> {submission.company}
                </div>
              )}
              <div>
                <strong>Status:</strong> {submission.status}
              </div>
            </div>
            <div className="mt-3">
              <strong>Full Message:</strong>
              <p className="mt-1 whitespace-pre-wrap">{submission.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Career submission component
const CareerSubmissionCard: React.FC<{ 
  submission: CareerSubmission;
  onStatusChange: (id: string, status: string) => void;
  onDelete: (id: string) => void;
}> = ({ submission, onStatusChange, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);
  // Removed unused showCVPreview state

  const handleCVPreview = () => {
    if (submission.cv) {
      // Create blob URL for preview
      const byteCharacters = atob(submission.cv.data.split(',')[1] || submission.cv.data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: submission.cv.type });
      const url = window.URL.createObjectURL(blob);
      
      // Open preview in new window
      window.open(url, '_blank', 'width=800,height=600');
      
      // Clean up the URL after a short delay
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 1000);
    }
  };

  const handleCVDownload = () => {
    if (submission.cv) {
      // Create a blob from base64 and download
      const byteCharacters = atob(submission.cv.data.split(',')[1] || submission.cv.data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: submission.cv.type });
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = submission.cv.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{submission.name}</h3>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            <Mail className="h-3 w-3" />
            {submission.email}
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
            <Phone className="h-3 w-3" />
            {submission.phone}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge
            status={submission.status}
            type="career"
            onChange={(newStatus) => onStatusChange(submission.id!, newStatus)}
          />
          <span className="text-xs text-gray-500">
            {submission.submittedAt.toDate().toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="flex items-center gap-1 text-sm text-gray-600">
          <Award className="h-4 w-4" />
          {submission.experience} years exp.
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Skills:</h4>
        <div className="flex flex-wrap gap-1">
          {submission.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">{submission.coverLetter}</p>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
          >
            <Eye className="h-4 w-4" />
            {showDetails ? 'Hide' : 'View'} Details
          </button>
          {submission.cv && (
            <>
              <button
                onClick={handleCVPreview}
                className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm"
              >
                <Eye className="h-4 w-4" />
                Preview CV
              </button>
              <button
                onClick={handleCVDownload}
                className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </>
          )}
        </div>
        <button
          onClick={() => onDelete(submission.id!)}
          className="flex items-center gap-1 text-red-600 hover:text-red-700 text-sm"
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </button>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-4 pt-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Email:</strong> 
                <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline ml-1">
                  {submission.email}
                </a>
              </div>
              <div>
                <strong>Phone:</strong> 
                <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline ml-1">
                  {submission.phone}
                </a>
              </div>
              <div>
                <strong>Experience:</strong> {submission.experience} years
              </div>
              <div>
                <strong>Submitted:</strong> {submission.submittedAt.toDate().toLocaleString()}
              </div>
              {submission.cv && (
                <>
                  <div>
                    <strong>CV File:</strong> {submission.cv.name}
                  </div>
                  <div>
                    <strong>File Size:</strong> {(submission.cv.size / 1024 / 1024).toFixed(2)} MB
                  </div>
                </>
              )}
            </div>
            <div className="mt-3">
              <strong>Cover Letter:</strong>
              <p className="mt-1 whitespace-pre-wrap">{submission.coverLetter}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AdminDashboard: React.FC = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  
  // State
  const [activeTab, setActiveTab] = useState('overview');
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [careerSubmissions, setCareerSubmissions] = useState<CareerSubmission[]>([]);
  const [homepageContent, setHomepageContent] = useState<HomepageContent | null>(null);
  const [analytics, setAnalytics] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Removed unused error state
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [isEditingHomepage, setIsEditingHomepage] = useState(false);
  const [homepageForm, setHomepageForm] = useState({
    heroTitle: '',
    heroSubtitle: '',
    aboutDescription: '',
    phoneNumber: '',
    email: ''
  });

  // Load data with real-time updates
  useEffect(() => {
    loadInitialData();
    setupRealTimeListeners();
    
    // Cleanup listeners on unmount
    return () => {
      // Cleanup will be handled by the onSnapshot return functions
    };
  }, []);

  const loadInitialData = async () => {
    try {
      setIsLoading(true);
      const [homepage, stats] = await Promise.all([
        homepageService.get(),
        analyticsService.getStats()
      ]);

      setHomepageContent(homepage);
      setAnalytics(stats);

      if (homepage) {
        setHomepageForm({
          heroTitle: homepage.heroTitle,
          heroSubtitle: homepage.heroSubtitle,
          aboutDescription: homepage.aboutDescription,
          phoneNumber: homepage.phoneNumber || '+91 7634961424',
          email: homepage.email || 'rakeshrit2015@outlook.com'
        });
      }
    } catch (error) {
      console.error('Error loading initial data:', error);
      // setError removed: error state no longer exists
    } finally {
      setIsLoading(false);
    }
  };

  const setupRealTimeListeners = () => {
    let initialLoadComplete = false;
    
    // Real-time listener for contact submissions
    const unsubscribeContacts = contactService.onSnapshot((contacts) => {
      setContactSubmissions(contacts);
      if (initialLoadComplete) {
        setShowUpdateNotification(true);
        setTimeout(() => setShowUpdateNotification(false), 3000);
      }
    });

    // Real-time listener for career submissions
    const unsubscribeCareers = careerService.onSnapshot((careers) => {
      setCareerSubmissions(careers);
      if (initialLoadComplete) {
        setShowUpdateNotification(true);
        setTimeout(() => setShowUpdateNotification(false), 3000);
      }
    });

    // Mark initial load as complete after a short delay
    setTimeout(() => {
      initialLoadComplete = true;
    }, 2000);

    // Update analytics when data changes
    const updateAnalytics = async () => {
      try {
        const stats = await analyticsService.getStats();
        setAnalytics(stats);
      } catch (error) {
        console.error('Error updating analytics:', error);
      }
    };

    // Update analytics every 30 seconds
    const analyticsInterval = setInterval(updateAnalytics, 30000);

    // Cleanup function
    return () => {
      unsubscribeContacts();
      unsubscribeCareers();
      clearInterval(analyticsInterval);
    };
  };

  const loadData = async () => {
    // This function is kept for compatibility but now just loads initial data
    await loadInitialData();
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  const handleContactStatusChange = async (id: string, status: string) => {
    try {
      await contactService.updateStatus(id, status as ContactSubmission['status']);
      setContactSubmissions(prev => 
        prev.map(sub => sub.id === id ? { ...sub, status: status as ContactSubmission['status'] } : sub)
      );
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const handleCareerStatusChange = async (id: string, status: string) => {
    try {
      await careerService.updateStatus(id, status as CareerSubmission['status']);
      setCareerSubmissions(prev => 
        prev.map(sub => sub.id === id ? { ...sub, status: status as CareerSubmission['status'] } : sub)
      );
    } catch (error) {
      console.error('Error updating career status:', error);
    }
  };

  const handleContactDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await contactService.delete(id);
        setContactSubmissions(prev => prev.filter(sub => sub.id !== id));
      } catch (error) {
        console.error('Error deleting contact submission:', error);
      }
    }
  };

  const handleCareerDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await careerService.delete(id);
        setCareerSubmissions(prev => prev.filter(sub => sub.id !== id));
      } catch (error) {
        console.error('Error deleting career submission:', error);
      }
    }
  };

  const handleHomepageUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await homepageService.update(homepageForm);
      setIsEditingHomepage(false);
      loadData(); // Refresh data
    } catch (error) {
      console.error('Error updating homepage content:', error);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'contacts', label: 'Contact Submissions', icon: MessageSquare },
    { id: 'careers', label: 'Career Applications', icon: Briefcase },
    { id: 'homepage', label: 'Homepage Content', icon: Settings },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {currentUser?.email}</span>
              <button 
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics?.totalContacts || 0}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center">
                    <Briefcase className="h-8 w-8 text-green-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Career Applications</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics?.totalCareers || 0}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-yellow-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Recent Contacts</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics?.recentContacts || 0}</p>
                      <p className="text-xs text-gray-500">Last 30 days</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Recent Applications</p>
                      <p className="text-2xl font-bold text-gray-900">{analytics?.recentCareers || 0}</p>
                      <p className="text-xs text-gray-500">Last 30 days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Submissions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Contact Submissions</h3>
                  <div className="space-y-4">
                    {contactSubmissions.slice(0, 3).map((submission) => (
                      <div key={submission.id} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">{submission.name}</p>
                            <p className="text-sm text-gray-600">{submission.email}</p>
                            <p className="text-xs text-gray-500">
                              {submission.submittedAt.toDate().toLocaleDateString()}
                            </p>
                          </div>
                          <StatusBadge status={submission.status} type="contact" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Career Applications</h3>
                  <div className="space-y-4">
                    {careerSubmissions.slice(0, 3).map((submission) => (
                      <div key={submission.id} className="border-l-4 border-green-500 pl-4 py-2">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{submission.name}</p>
                            <p className="text-sm text-gray-600">{submission.email}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-gray-500">
                                {submission.submittedAt.toDate().toLocaleDateString()}
                              </p>
                              {submission.cv && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  <FileText className="h-3 w-3" />
                                  CV
                                </span>
                              )}
                            </div>
                          </div>
                          <StatusBadge status={submission.status} type="career" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'contacts' && (
            <motion.div
              key="contacts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Contact Submissions</h2>
                <div className="text-sm text-gray-600">
                  Total: {contactSubmissions.length} submissions
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {contactSubmissions.map((submission) => (
                  <ContactSubmissionCard
                    key={submission.id}
                    submission={submission}
                    onStatusChange={handleContactStatusChange}
                    onDelete={handleContactDelete}
                  />
                ))}
              </div>
              
              {contactSubmissions.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No contact submissions yet</h3>
                  <p className="text-gray-600">Contact submissions will appear here when users submit the contact form.</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'careers' && (
            <motion.div
              key="careers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Career Applications</h2>
                <div className="text-sm text-gray-600">
                  Total: {careerSubmissions.length} applications
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {careerSubmissions.map((submission) => (
                  <CareerSubmissionCard
                    key={submission.id}
                    submission={submission}
                    onStatusChange={handleCareerStatusChange}
                    onDelete={handleCareerDelete}
                  />
                ))}
              </div>
              
              {careerSubmissions.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No career applications yet</h3>
                  <p className="text-gray-600">Career applications will appear here when users apply for positions.</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'homepage' && (
            <motion.div
              key="homepage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Homepage Content Management</h2>
                  {!isEditingHomepage && (
                    <button
                      onClick={() => setIsEditingHomepage(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      Edit Content
                    </button>
                  )}
                </div>

                {isEditingHomepage ? (
                  <form onSubmit={handleHomepageUpdate} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hero Title
                      </label>
                      <input
                        type="text"
                        value={homepageForm.heroTitle}
                        onChange={(e) => setHomepageForm(prev => ({ ...prev, heroTitle: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hero Subtitle
                      </label>
                      <input
                        type="text"
                        value={homepageForm.heroSubtitle}
                        onChange={(e) => setHomepageForm(prev => ({ ...prev, heroSubtitle: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        About Description
                      </label>
                      <textarea
                        value={homepageForm.aboutDescription}
                        onChange={(e) => setHomepageForm(prev => ({ ...prev, aboutDescription: e.target.value }))}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={homepageForm.phoneNumber}
                          onChange={(e) => setHomepageForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+91 1234567890"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={homepageForm.email}
                          onChange={(e) => setHomepageForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="contact@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsEditingHomepage(false);
                          if (homepageContent) {
                            setHomepageForm({
                              heroTitle: homepageContent.heroTitle,
                              heroSubtitle: homepageContent.heroSubtitle,
                              aboutDescription: homepageContent.aboutDescription,
                              phoneNumber: homepageContent.phoneNumber || '+91 7634961424',
                              email: homepageContent.email || 'rakeshrit2015@outlook.com'
                            });
                          }
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <X className="h-4 w-4" />
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Hero Title</h3>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {homepageContent?.heroTitle || 'Not set'}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Hero Subtitle</h3>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {homepageContent?.heroSubtitle || 'Not set'}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 mb-2">About Description</h3>
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {homepageContent?.aboutDescription || 'Not set'}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Phone Number</h3>
                        <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                          {homepageContent?.phoneNumber || 'Not set'}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Email</h3>
                        <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                          {homepageContent?.email || 'Not set'}
                        </p>
                      </div>
                    </div>

                    {homepageContent?.updatedAt && (
                      <div className="text-sm text-gray-500">
                        Last updated: {homepageContent.updatedAt.toDate().toLocaleString()}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Update Notification */}
      <AnimatePresence>
        {showUpdateNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>New data received!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
