import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBDhRu_7L42mPBna9NIU6QUJxz42QTpm9Q",
  authDomain: "huzaifa-karigar.firebaseapp.com",
  projectId: "huzaifa-karigar",
  storageBucket: "huzaifa-karigar.firebasestorage.app",
  messagingSenderId: "798815308866",
  appId: "1:798815308866:web:50fe4cb95c444613e071db",
  measurementId: "G-GZ507XTC4Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
