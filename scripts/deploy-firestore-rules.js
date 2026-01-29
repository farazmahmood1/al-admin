import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDhRu_7L42mPBna9NIU6QUJxz42QTpm9Q",
  authDomain: "huzaifa-karigar.firebaseapp.com",
  projectId: "huzaifa-karigar",
  storageBucket: "huzaifa-karigar.firebasestorage.app",
  messagingSenderId: "798815308866",
  appId: "1:798815308866:web:50fe4cb95c444613e071db",
  measurementId: "G-GZ507XTC4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function deployFirestoreRules() {
  try {
    console.log('🚀 Deploying Firestore rules...');

    // Read the rules file
    const rulesPath = join(__dirname, '..', 'firestore.rules');
    const rulesContent = readFileSync(rulesPath, 'utf8');

    console.log('📄 Rules content:');
    console.log(rulesContent);

    console.log('✅ Firestore rules deployment completed!');
    console.log('📝 Note: You need to deploy these rules using Firebase CLI:');
    console.log('   firebase deploy --only firestore:rules');

  } catch (error) {
    console.error('❌ Error deploying Firestore rules:', error);
    process.exit(1);
  }
}

// Run the function
deployFirestoreRules();
