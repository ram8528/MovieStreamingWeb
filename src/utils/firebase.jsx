// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5AA6E82345p_DZzVGn-57pWvbuG-bwHo",
  authDomain: "netflixgpt-7408f.firebaseapp.com",
  projectId: "netflixgpt-7408f",
  storageBucket: "netflixgpt-7408f.firebasestorage.app",
  messagingSenderId: "10837800356",
  appId: "1:10837800356:web:9d5c4392c0d452491d7d31",
  measurementId: "G-K2EGLQ3VJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);