// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTRHfa90yxv2hh4hm4kd7K6s9z2kgJ4xE",
  authDomain: "espresso-emporium-auth.firebaseapp.com",
  projectId: "espresso-emporium-auth",
  storageBucket: "espresso-emporium-auth.firebasestorage.app",
  messagingSenderId: "246249168611",
  appId: "1:246249168611:web:cafdf1c5bd6f0897e8afd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);