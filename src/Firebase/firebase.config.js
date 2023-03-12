// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsbsO4IM3NLLUXcGSk5mKRfqcCQDi-rSw",
    authDomain: "desivibes-19018.firebaseapp.com",
    projectId: "desivibes-19018",
    storageBucket: "desivibes-19018.appspot.com",
    messagingSenderId: "788511629081",
    appId: "1:788511629081:web:dbf313f66ff4fbd2b56f88",

    /* 
     apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
    */

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;