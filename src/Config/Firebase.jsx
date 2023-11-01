// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTpoxc1aHu41_cGX-yocIHcBDoGWhLErI",
  authDomain: "blog-b6f2e.firebaseapp.com",
  projectId: "blog-b6f2e",
  storageBucket: "blog-b6f2e.appspot.com",
  messagingSenderId: "169107668452",
  appId: "1:169107668452:web:855c5098f2564c83b79bf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Create an instance of the Google provider object:
export const provider = new GoogleAuthProvider();