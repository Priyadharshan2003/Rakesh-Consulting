// Test Firebase Storage Configuration
// Run this in browser console to test storage connectivity

const testFirebaseStorage = async () => {
  try {
    // Test basic Firebase connectivity
    console.log('Testing Firebase configuration...');
    
    // Check if Firebase is initialized
    if (!window.firebase) {
      console.error('Firebase not found on window object');
      return false;
    }
    
    // Test Firestore connection
    console.log('Testing Firestore...');
    const db = window.firebase.firestore();
    
    // Try to add a test document
    const testDoc = {
      test: 'connectivity',
      timestamp: new Date()
    };
    
    const result = await db.collection('test_connection').add(testDoc);
    console.log('✅ Firestore working, test doc ID:', result.id);
    
    // Clean up test document
    await db.collection('test_connection').doc(result.id).delete();
    console.log('✅ Test document cleaned up');
    
    return true;
  } catch (error) {
    console.error('❌ Firebase test failed:', error);
    return false;
  }
};

// Run the test
testFirebaseStorage();
