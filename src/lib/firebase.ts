// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA8rihI6WcbwCWMSW9BES3izilsohuFTK8",
  authDomain: "savemypast-next.firebaseapp.com",
  projectId: "savemypast-next",
  storageBucket: "savemypast-next.appspot.com",
  messagingSenderId: "914561539606",
  appId: "1:914561539606:web:fb620e13b31f0f9ecb5f37",
  measurementId: "G-GBZ8WCXTZ4",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
