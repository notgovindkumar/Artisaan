import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// PASTE YOUR FIREBASE CONFIG FROM THE FIREBASE CONSOLE HERE
const firebaseConfig = {
  apiKey: "AIzaSyCbXOuX7DDkRvbbON5wcYmUOuOiU5r8Qfw",
  authDomain: "artisaan-82e2c.firebaseapp.com",
  projectId: "artisaan-82e2c",
  storageBucket: "artisaan-82e2c.firebasestorage.app",
  messagingSenderId: "719753640157",
  appId: "1:719753640157:web:aeefb1bf61bd911bb9c334",
  measurementId: "G-50CDXE4JXC"
};

const app = initializeApp(firebaseConfig);

// Export the services you'll need
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();