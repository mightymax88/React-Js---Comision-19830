import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2WjZ5eYhbBcAriCTclWFZ_tG0DIe3xFs",
    authDomain: "react-js---19830-filipuzzi.firebaseapp.com",
    projectId: "react-js---19830-filipuzzi",
    storageBucket: "react-js---19830-filipuzzi.appspot.com",
    messagingSenderId: "312169202830",
    appId: "1:312169202830:web:8aa7a4e68a65dea0f875df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestone(){
    return firebase.firestone(app);
}