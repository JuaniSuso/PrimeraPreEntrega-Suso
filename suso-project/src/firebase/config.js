// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEB9oysEa6Vrl57GtDyL8MLmwXLkvlr3Y",
  authDomain: "suso-project.firebaseapp.com",
  projectId: "suso-project",
  storageBucket: "suso-project.appspot.com",
  messagingSenderId: "991223414080",
  appId: "1:991223414080:web:6cd2e762c2fb9f7b5ecea5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )
export const auth = getAuth(app)


