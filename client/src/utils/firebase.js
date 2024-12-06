// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-8b76d.firebaseapp.com",
  projectId: "taskmanager-8b76d",
  storageBucket: "taskmanager-8b76d.firebasestorage.app",
  messagingSenderId: "341966362731",
  appId: "1:341966362731:web:a346d1d8216eee602d392e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);