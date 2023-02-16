import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4lZt6_uaxj15qga_P79vy9Ig6NocgZos",
  authDomain: "chat-app-f803b.firebaseapp.com",
  projectId: "chat-app-f803b",
  storageBucket: "chat-app-f803b.appspot.com",
  messagingSenderId: "578491400072",
  appId: "1:578491400072:web:96378540ecdbe4285dc43d",
  measurementId: "G-27GN9GQV3N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();