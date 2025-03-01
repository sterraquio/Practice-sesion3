// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkauKJCtBRkXkBk8KNc8C6Eu6-F3iJtv8",
  authDomain: "sesion-3-628f4.firebaseapp.com",
  projectId: "sesion-3-628f4",
  storageBucket: "sesion-3-628f4.firebasestorage.app",
  messagingSenderId: "599077043804",
  appId: "1:599077043804:web:9625d648151ae133c9f099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 