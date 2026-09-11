import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArI4N2DPS1q9n5XMO6wTqNSRy9iyM85PQ",
  authDomain: "elefragance.firebaseapp.com",
  projectId: "elefragance",
  storageBucket: "elefragance.firebasestorage.app",
  messagingSenderId: "488395615154",
  appId: "1:488395615154:web:82ce9c29d4f845159592ab"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
