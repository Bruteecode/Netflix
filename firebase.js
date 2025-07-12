// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ9FD6FTYs-IpJ4CJV8wIAKhog_sLIvEM",
  authDomain: "netflixgpt-695fe.firebaseapp.com",
  projectId: "netflixgpt-695fe",
  storageBucket: "netflixgpt-695fe.firebasestorage.app",
  messagingSenderId: "520397461597",
  appId: "1:520397461597:web:aa3d93f063d948fccf95b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();