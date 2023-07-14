// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa0EqQjpECc4Q99ZSI9jEI1IXr8aPnZN4",
  authDomain: "house-marketplace-cd1e2.firebaseapp.com",
  projectId: "house-marketplace-cd1e2",
  storageBucket: "house-marketplace-cd1e2.appspot.com",
  messagingSenderId: "1082764644978",
  appId: "1:1082764644978:web:bc953d2cef8ab96d8b68eb"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();