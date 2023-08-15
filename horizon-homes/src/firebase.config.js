// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCih_pOiYACoG8ugTqJsavDBsCOmc-FCjY",
  authDomain: "horizon-homes-b8586.firebaseapp.com",
  projectId: "horizon-homes-b8586",
  storageBucket: "horizon-homes-b8586.appspot.com",
  messagingSenderId: "1040759319928",
  appId: "1:1040759319928:web:6d3073a36f2dd78317ac8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);