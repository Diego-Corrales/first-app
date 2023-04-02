// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHTd5n4QRDxJiES5QwfM2PmuTTeZUGc5c",
  authDomain: "first-app-e-commerce.firebaseapp.com",
  projectId: "first-app-e-commerce",
  storageBucket: "first-app-e-commerce.appspot.com",
  messagingSenderId: "984007917020",
  appId: "1:984007917020:web:7c9ffdfd181ef836ff6319"
};

// Initialize Firebase - proceso de inicializacion de firestore
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);


// Initialize Firebase Auth - proceso de autenticacion
export const auth = getAuth(app);

// Initialize Firebase Google Auth - proceso de autenticacion con google
export const provider = new GoogleAuthProvider()