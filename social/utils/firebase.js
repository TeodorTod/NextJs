// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase';
import { getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk9-VpJij09jyaj-TOjH-q02Tj3YhvDNM",
    authDomain: "test-landing-67574.firebaseapp.com",
    projectId: "test-landing-67574",
    storageBucket: "test-landing-67574.appspot.com",
    messagingSenderId: "160417234928",
    appId: "1:160417234928:web:fcc76d2c4f2dd3c9212735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFireStore(app);