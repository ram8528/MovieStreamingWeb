// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBszmSx35iv9iv7kBMI4ec0z4d4Fhl3vm8",
  authDomain: "netflixgpt-59980.firebaseapp.com",
  projectId: "netflixgpt-59980",
  storageBucket: "netflixgpt-59980.firebasestorage.app",
  messagingSenderId: "2694720330",
  appId: "1:2694720330:web:e322a1120506fa5ca72fb3",
  measurementId: "G-NEQSWCFDFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);