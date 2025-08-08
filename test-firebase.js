// Test Firebase connection - run this in browser console
// Copy and paste this code in the browser console to test Firebase connectivity

console.log('Testing Firebase connection...');

// Test Firestore connection
async function testFirestore() {
  try {
    const { collection, addDoc, Timestamp } = await import('./src/config/firebase');
    console.log('✅ Firebase imports successful');
    return true;
  } catch (error) {
    console.error('❌ Firebase import failed:', error);
    return false;
  }
}

// Test form submission
async function testContactSubmission() {
  try {
    const { contactService } = await import('./src/services/firebaseService');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      message: 'This is a test message from the browser console.'
    };
    
    const submissionId = await contactService.submit(testData);
    console.log('✅ Contact form submission successful! ID:', submissionId);
    return true;
  } catch (error) {
    console.error('❌ Contact form submission failed:', error);
    return false;
  }
}

// Test career application
async function testCareerSubmission() {
  try {
    const { careerService } = await import('./src/services/firebaseService');
    
    // Create a dummy file for testing
    const dummyFile = new File(['test content'], 'test-cv.pdf', { type: 'application/pdf' });
    
    const testData = {
      name: 'Test Applicant',
      email: 'applicant@example.com',
      phone: '+1234567890',
      skills: ['JavaScript', 'React', 'Firebase'],
      experience: 3,
      cv: dummyFile,
      coverLetter: 'This is a test cover letter from the browser console.'
    };
    
    const submissionId = await careerService.submit(testData);
    console.log('✅ Career application submission successful! ID:', submissionId);
    return true;
  } catch (error) {
    console.error('❌ Career application submission failed:', error);
    return false;
  }
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Starting Firebase tests...');
  
  const firestoreTest = await testFirestore();
  const contactTest = await testContactSubmission();
  const careerTest = await testCareerSubmission();
  
  console.log('\n📊 Test Results:');
  console.log('Firestore Connection:', firestoreTest ? '✅' : '❌');
  console.log('Contact Form:', contactTest ? '✅' : '❌');
  console.log('Career Application:', careerTest ? '✅' : '❌');
  
  if (firestoreTest && contactTest && careerTest) {
    console.log('\n🎉 All tests passed! Your Firebase integration is working correctly.');
    console.log('📝 Check your admin dashboard to see the test submissions.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check your Firebase configuration.');
  }
}

// Auto-run tests
runAllTests();
