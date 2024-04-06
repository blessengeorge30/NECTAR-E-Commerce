import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBx9GikRW8vUgpk4e_niDIfSaWWdZj8CW4",
  authDomain: "fir-auth-126d4.firebaseapp.com",
  projectId: "fir-auth-126d4",
  storageBucket: "fir-auth-126d4.appspot.com",
  messagingSenderId: "213255649737",
  appId: "1:213255649737:web:437d1765b0ee66b38dd018",
  measurementId: "G-BDVFHSB4FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const fireDB = getFirestore(app);

// Get Auth instance
const auth = getAuth(app);

export { fireDB, auth };
