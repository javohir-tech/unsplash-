// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCge1OXV7pW2XIev6wsigR_S94JtwJ3Ed0",
  authDomain: "my-splash-e941b.firebaseapp.com",
  projectId: "my-splash-e941b",
  storageBucket: "my-splash-e941b.firebasestorage.app",
  messagingSenderId: "818614937986",
  appId: "1:818614937986:web:cce4c1011292af72c1079b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//auth 
export const auth = getAuth()

//database
export const db = getFirestore(app)

