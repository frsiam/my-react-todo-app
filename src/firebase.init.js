// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF8ESxlcd2NwzGYQ_xWG_EoxmfJFMgvWk",
    authDomain: "my-react-todo-4c4d3.firebaseapp.com",
    projectId: "my-react-todo-4c4d3",
    storageBucket: "my-react-todo-4c4d3.appspot.com",
    messagingSenderId: "786284799185",
    appId: "1:786284799185:web:8e0357d67eb681ed1ed1f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;