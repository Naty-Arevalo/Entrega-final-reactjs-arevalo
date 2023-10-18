import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import productos from "./assets/data/productos.json"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSNUxFfrwfzIY638zlC4_s9JTZtxcm8mQ",
  authDomain: "e-commerce-arevalo.firebaseapp.com",
  projectId: "e-commerce-arevalo",
  storageBucket: "e-commerce-arevalo.appspot.com",
  messagingSenderId: "611923373827",
  appId: "1:611923373827:web:58c3eb357c05ee33b7c336",
  measurementId: "G-ZSE7592C24"
};

// Initialize Firebase
export const app= initializeApp(firebaseConfig);
// const db= getFirestore(app)

// productos.forEach((producto) =>{
//   addDoc(collection(db, 'productos'), producto)
//   .then((docRef =>{
//     console.log('documento Agregado con id:', docRef.id)
//   }))
//   .catch((error) =>{
//     console.error("error al agregar documento", error)
//   })
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
