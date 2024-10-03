// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoYcFGi8vturT3DMVtmtEm_Zr8rTbzwA8",
    authDomain: "upload-image-product-54525.firebaseapp.com",
    projectId: "upload-image-product-54525",
    storageBucket: "upload-image-product-54525.appspot.com",
    messagingSenderId: "319121692610",
    appId: "1:319121692610:web:fccb99939bbb461400e85b",
    measurementId: "G-87HXQ3N7NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);