import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAyxAIWUb-Z5Y2qfquJ7J0o_bS_2mTqhdw",
  authDomain: "growthboostbr.firebaseapp.com",
  projectId: "growthboostbr",
  storageBucket: "growthboostbr.firebasestorage.app",
  messagingSenderId: "643253346249",
  appId: "1:643253346249:web:a906089b119a57590fd218",
  measurementId: "G-48YVMSY01Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics dynamically
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// VAPID keys for Web Push Notifications (FCM)
export const vapidKeys = {
  publicKey: "BKAkeL4GoTZAm7MWtC3-gO2SXLc-Gh-wAWeBAl1mFATjZwaBEz19tB3lfm02MoYHEwQv9C9vnohXtRX8c0PTRM4",
  privateKey: "307i81GNXBdd_CW_oEbVb1dgksqjAtVBqT9f2h7DULU"
};

export default app;
