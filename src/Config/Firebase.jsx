// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxtK4y8bl8eu_6coZK9BM56Uf_LM6fBWw",
  authDomain: "mblog-115a0.firebaseapp.com",
  projectId: "mblog-115a0",
  storageBucket: "mblog-115a0.appspot.com",
  messagingSenderId: "839251686808",
  appId: "1:839251686808:web:a5a35a17cd497e8f09e7ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Create an instance of the Google provider object:
export const provider = new GoogleAuthProvider();