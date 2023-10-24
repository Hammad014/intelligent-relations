// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth'; // If you need authentication
import 'firebase/firestore'; // If you need Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATyPnWS-_84lE0F5_k2gHjmjtacSM-DkQ",
  authDomain: "intelligent-relations.firebaseapp.com",
  projectId: "intelligent-relations",
  storageBucket: "intelligent-relations.appspot.com",
  messagingSenderId: "284888650404",
  appId: "1:284888650404:web:50cae2b14a379d9b078c31",
  measurementId: "G-1GGDMT62FH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default firebase as typeof firebase;

