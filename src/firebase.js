// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQPR2g-8WQnLn2ZpvVOHKBgUxgtslXDnQ",
  authDomain: "copy-assignment.firebaseapp.com",
  projectId: "copy-assignment",
  storageBucket: "copy-assignment.appspot.com",
  messagingSenderId: "721728520802",
  appId: "1:721728520802:web:502b1a8a14f8e8ce35473b",
  measurementId: "G-0SL0YLFP2Y",
  databaseURL: "https://copy-assignment-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
