// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYmYRH1U61zjNwcDa8kH8Odp-GzpATWVY",
    authDomain: "twitter-c21df.firebaseapp.com",
    projectId: "twitter-c21df",
    storageBucket: "twitter-c21df.appspot.com",
    messagingSenderId: "851340944553",
    appId: "1:851340944553:web:816eb1025f55353fa6b5b8",
    measurementId: "G-EYQMYX6637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)