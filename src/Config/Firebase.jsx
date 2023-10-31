// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKQd-Y_acgcRZKlVgGnx6v9fWLFn683-4",
  authDomain: "bblog-167db.firebaseapp.com",
  projectId: "bblog-167db",
  storageBucket: "bblog-167db.appspot.com",
  messagingSenderId: "569210597786",
  appId: "1:569210597786:web:387c2acab36ad390aaca23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Create an instance of the Google provider object:
export const provider = new GoogleAuthProvider();