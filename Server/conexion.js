// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmwo-ZSsKB_VL8Kljdzd4Gnw5mjVg9dUU",
  authDomain: "taller-aad05.firebaseapp.com",
  databaseURL: "https://taller-aad05-default-rtdb.firebaseio.com",
  projectId: "taller-aad05",
  storageBucket: "taller-aad05.appspot.com",
  messagingSenderId: "150608804946",
  appId: "1:150608804946:web:a872b895f9738537c8738b"
};

// Initialize Firebase
export const appfb = initializeApp(firebaseConfig);
export const db = getFirestore(appfb);