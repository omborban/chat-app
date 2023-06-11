// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCknrcSwL9y8u0WUQ7BjwwWcZLfuJwDBvM",
  authDomain: "chatcloneapp-e8032.firebaseapp.com",
  projectId: "chatcloneapp-e8032",
  storageBucket: "chatcloneapp-e8032.appspot.com",
  messagingSenderId: "286092531067",
  appId: "1:286092531067:web:02d018c17dcdc9355559de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
