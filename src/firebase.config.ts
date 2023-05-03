// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHbxVzfjMO1RdeokDSOTE-uRaggl7FCjI",
  authDomain: "house-marketplace-eb7b1.firebaseapp.com",
  projectId: "house-marketplace-eb7b1",
  storageBucket: "house-marketplace-eb7b1.appspot.com",
  messagingSenderId: "934228866320",
  appId: "1:934228866320:web:5062ad020366c26c416195",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
