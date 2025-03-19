// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXSBdIaOH_KiDc65OOBIbmdBk_AdRWFlI",
  authDomain: "exclusive-register-a-2.firebaseapp.com",
  projectId: "exclusive-register-a-2",
  storageBucket: "exclusive-register-a-2.firebasestorage.app",
  messagingSenderId: "1035560529180",
  appId: "1:1035560529180:web:ac9db03d88d43c877fded9",
  measurementId: "G-T8V21H0NTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)