// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Correct import

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "prifaestate.firebaseapp.com",
//   projectId: "prifaestate",
//   storageBucket: "prifaestate.firebasestorage.app",
//   messagingSenderId: "45045396631",
//   appId: "1:45045396631:web:49686fd16c02e2646965d2",
// };

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prifaestate.firebaseapp.com",
  projectId: "prifaestate",
  storageBucket: "prifaestate.firebasestorage.app",
  messagingSenderId: "45045396631",
  appId: "1:45045396631:web:49686fd16c02e2646965d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)