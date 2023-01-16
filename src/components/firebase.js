// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAX4xu65SdO96Hu7YptwOUbGmSeS0yrMko",
    authDomain: "e-clone-d5e8e.firebaseapp.com",
    projectId: "e-clone-d5e8e",
    storageBucket: "e-clone-d5e8e.appspot.com",
    messagingSenderId: "798347319152",
    appId: "1:798347319152:web:5059e77b1e1a51478da1b5",
    measurementId: "G-5YR6XFG1JT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };