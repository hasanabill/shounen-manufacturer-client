// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPqc77ixylf6regEMGcxTmv6MuIIhTqKI",
    authDomain: "shounen-manufacturer.firebaseapp.com",
    projectId: "shounen-manufacturer",
    storageBucket: "shounen-manufacturer.appspot.com",
    messagingSenderId: "200470839466",
    appId: "1:200470839466:web:a71ca95b7d47370d3b10d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;