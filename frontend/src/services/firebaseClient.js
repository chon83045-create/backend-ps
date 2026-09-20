/**
 * Firebase client — inicializa el SDK Web de Firebase para
 * escuchar cambios en Realtime Database sin polling.
 */
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAasCpbMJ2waC9z61SBiA_-Okn0Jup_9gM",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "proyect-ps.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || "https://proyect-ps-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "proyect-ps",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "proyect-ps.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "406827622507",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:406827622507:web:29bc4bd80d5ac35f04d12e",
  measurementId: "G-CEGLVN9DC6",
};

const firebaseApp = initializeApp(firebaseConfig);
export const rtdb = getDatabase(firebaseApp);
