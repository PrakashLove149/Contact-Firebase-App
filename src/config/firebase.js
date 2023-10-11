// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNnC-C6i5rxDlJeiyagTDmst1SXVSWBsQ",
  authDomain: "vite-content-73837.firebaseapp.com",
  projectId: "vite-content-73837",
  storageBucket: "vite-content-73837.appspot.com",
  messagingSenderId: "690726140927",
  appId: "1:690726140927:web:bd48b5b15a6780cb4bc5ca",
  measurementId: "G-7SY1VNJYT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
  export const db = getFirestore(app);
