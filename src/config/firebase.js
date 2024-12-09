// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo4Ef5bkO9ZPPlxI6XRMbPXphWHN4FOZA",
    authDomain: "phonedialer-c2ba3.firebaseapp.com",
    projectId: "phonedialer-c2ba3",
    storageBucket: "phonedialer-c2ba3.firebasestorage.app",
    messagingSenderId: "972690213039",
    appId: "1:972690213039:web:69d8f702cf6ef35404ac5a",
    measurementId: "G-PJNMW81XM4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
// export const storage = firebase.storage();
export default firebase;
