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

// VAPID public key for Web Push (FCM) on client side
// Note: Private VAPID key is sensitive and must only be kept in backend environment variables.
export const vapidPublicKey = "BKAkeL4GoTZAm7MWtC3-gO2SXLc-Gh-wAWeBAl1mFATjZwaBEz19tB3lfm02MoYHEwQv9C9vnohXtRX8c0PTRM4";

export default app;
