// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL5r0zdoDj1HXM7k7fIm8rwkKVe-3SDTg",
  authDomain: "greydientlab-a292b.firebaseapp.com",
  projectId: "greydientlab-a292b",
  storageBucket: "greydientlab-a292b.firebasestorage.app",
  messagingSenderId: "479173848104",
  appId: "1:479173848104:web:e649095cead51d3377991d",
  measurementId: "G-70SMYDQXD0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
