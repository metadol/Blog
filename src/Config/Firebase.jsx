// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2w2kZbdvNvEOa6y6XEUHN2RgeiQ1NCVU",
  authDomain: "dblog-47b03.firebaseapp.com",
  projectId: "dblog-47b03",
  storageBucket: "dblog-47b03.appspot.com",
  messagingSenderId: "850894327476",
  appId: "1:850894327476:web:c80db280782a2495c751e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Create an instance of the Google provider object:
export const provider = new GoogleAuthProvider();