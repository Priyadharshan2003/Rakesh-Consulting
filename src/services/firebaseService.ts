import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  Timestamp,
  onSnapshot
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Types for form submissions
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  resume?: string; // URL to uploaded file
  submittedAt: Timestamp;
  status: 'new' | 'contacted' | 'resolved';
}

export interface CareerSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: number;
  cv: {
    name: string;
    type: string;
    size: number;
    data: string; // Base64 data
  } | null;
  coverLetter: string;
  submittedAt: Timestamp;
  status: 'new' | 'reviewing' | 'interviewed' | 'hired' | 'rejected';
}

// Form data interfaces for submission
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface CareerFormData {
  name: string;
  email: string;
  phone: string;
  skills: string[] | { label: string; value: string }[];
  experience: string | number;
  cv: {
    name: string;
    type: string;
    size: number;
    data: string; // Base64 data
  } | null;
  coverLetter: string;
}

export interface HomepageContent {
  id?: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutDescription: string;
  phoneNumber: string;
  email: string;
  updatedAt: Timestamp;
}


// Contact Form Service
export const contactService = {
  // Submit contact form
  async submit(data: ContactFormData) {
    try {
      const submission: Omit<ContactSubmission, 'id'> = {
        name: data.name,
        email: data.email,
        company: data.company || '',
        message: data.message,
        resume: '', // No resume for contact forms
        submittedAt: Timestamp.now(),
        status: 'new'
      };

      const docRef = await addDoc(collection(db, 'contact_submissions'), submission);
      return docRef.id;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw new Error('Failed to submit contact form. Please try again.');
    }
  },

  // Get all contact submissions
  async getAll(): Promise<ContactSubmission[]> {
    try {
      const q = query(collection(db, 'contact_submissions'), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactSubmission[];
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      throw error;
    }
  },

  // Update submission status
  async updateStatus(id: string, status: ContactSubmission['status']) {
    try {
      const docRef = doc(db, 'contact_submissions', id);
      await updateDoc(docRef, { status });
    } catch (error) {
      console.error('Error updating contact submission status:', error);
      throw error;
    }
  },

  // Delete submission
  async delete(id: string) {
    try {
      await deleteDoc(doc(db, 'contact_submissions', id));
    } catch (error) {
      console.error('Error deleting contact submission:', error);
      throw error;
    }
  },

  // Listen to real-time updates
  onSnapshot(callback: (submissions: ContactSubmission[]) => void) {
    const q = query(collection(db, 'contact_submissions'), orderBy('submittedAt', 'desc'));
    
    return onSnapshot(q, (querySnapshot) => {
      const submissions = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContactSubmission[];
      callback(submissions);
    });
  }
};

// Career Form Service
export const careerService = {
  // Submit career form
  async submit(data: CareerFormData) {
    try {
      // Process skills array
      const skillsArray = Array.isArray(data.skills) 
        ? data.skills.map(skill => typeof skill === 'string' ? skill : skill.label || skill.value)
        : [];

      const submission: Omit<CareerSubmission, 'id'> = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        skills: skillsArray,
        experience: Number(data.experience),
        cv: data.cv, // Now storing the full CV object with Base64 data
        coverLetter: data.coverLetter,
        submittedAt: Timestamp.now(),
        status: 'new'
      };

      const docRef = await addDoc(collection(db, 'career_submissions'), submission);
      return docRef.id;
    } catch (error) {
      console.error('Error submitting career form:', error);
      throw new Error('Failed to submit career application. Please try again.');
    }
  },

  // Get all career submissions
  async getAll(): Promise<CareerSubmission[]> {
    try {
      const q = query(collection(db, 'career_submissions'), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as CareerSubmission[];
    } catch (error) {
      console.error('Error fetching career submissions:', error);
      throw error;
    }
  },

  // Update submission status
  async updateStatus(id: string, status: CareerSubmission['status']) {
    try {
      const docRef = doc(db, 'career_submissions', id);
      await updateDoc(docRef, { status });
    } catch (error) {
      console.error('Error updating career submission status:', error);
      throw error;
    }
  },

  // Delete submission
  async delete(id: string) {
    try {
      await deleteDoc(doc(db, 'career_submissions', id));
    } catch (error) {
      console.error('Error deleting career submission:', error);
      throw error;
    }
  },

  // Listen to real-time updates
  onSnapshot(callback: (submissions: CareerSubmission[]) => void) {
    const q = query(collection(db, 'career_submissions'), orderBy('submittedAt', 'desc'));
    
    return onSnapshot(q, (querySnapshot) => {
      const submissions = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as CareerSubmission[];
      callback(submissions);
    });
  }
};

// Homepage Content Service
export const homepageService = {
  // Get homepage content
  async get(): Promise<HomepageContent | null> {
    try {
      const querySnapshot = await getDocs(collection(db, 'homepage_content'));
      
      if (querySnapshot.empty) {
        // Create default content if none exists
        const defaultContent = {
          heroTitle: 'Transform Your Business with SAP Excellence',
          heroSubtitle: 'Leading SAP consultancy delivering innovative solutions for enterprise growth',
          aboutDescription: 'We are a premier SAP consultancy firm specializing in digital transformation, process automation, and enterprise solutions.',
          phoneNumber: '+91 7634961424',
          email: 'rakeshrit2015@outlook.com',
          updatedAt: Timestamp.now()
        };
        
        const docRef = await addDoc(collection(db, 'homepage_content'), defaultContent);
        return { id: docRef.id, ...defaultContent };
      }
      
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() } as HomepageContent;
    } catch (error) {
      console.error('Error fetching homepage content:', error);
      throw error;
    }
  },

  // Update homepage content
  async update(content: Omit<HomepageContent, 'id' | 'updatedAt'>) {
    try {
      const querySnapshot = await getDocs(collection(db, 'homepage_content'));
      
      const updatedContent = {
        ...content,
        updatedAt: Timestamp.now()
      };
      
      if (querySnapshot.empty) {
        // Create new document if none exists
        const docRef = await addDoc(collection(db, 'homepage_content'), updatedContent);
        return docRef.id;
      } else {
        // Update existing document
        const docRef = doc(db, 'homepage_content', querySnapshot.docs[0].id);
        await updateDoc(docRef, updatedContent);
        return querySnapshot.docs[0].id;
      }
    } catch (error) {
      console.error('Error updating homepage content:', error);
      throw error;
    }
  }
};

// Analytics Service
export const analyticsService = {
  async getStats() {
    try {
      const [contactSubmissions, careerSubmissions] = await Promise.all([
        contactService.getAll(),
        careerService.getAll()
      ]);

      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const recentContacts = contactSubmissions.filter(
        sub => sub.submittedAt.toDate() >= thirtyDaysAgo
      ).length;

      const recentCareers = careerSubmissions.filter(
        sub => sub.submittedAt.toDate() >= thirtyDaysAgo
      ).length;

      return {
        totalContacts: contactSubmissions.length,
        totalCareers: careerSubmissions.length,
        recentContacts,
        recentCareers,
        contactsByStatus: {
          new: contactSubmissions.filter(sub => sub.status === 'new').length,
          contacted: contactSubmissions.filter(sub => sub.status === 'contacted').length,
          resolved: contactSubmissions.filter(sub => sub.status === 'resolved').length,
        },
        careersByStatus: {
          new: careerSubmissions.filter(sub => sub.status === 'new').length,
          reviewing: careerSubmissions.filter(sub => sub.status === 'reviewing').length,
          interviewed: careerSubmissions.filter(sub => sub.status === 'interviewed').length,
          hired: careerSubmissions.filter(sub => sub.status === 'hired').length,
          rejected: careerSubmissions.filter(sub => sub.status === 'rejected').length,
        }
      };
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw error;
    }
  }
};
