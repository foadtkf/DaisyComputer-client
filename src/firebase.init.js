// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkodgh5b4ZVZ3jrjwf9M6lsXnXiP2PTns",
    authDomain: "manufacturer-c9f9e.firebaseapp.com",
    projectId: "manufacturer-c9f9e",
    storageBucket: "manufacturer-c9f9e.appspot.com",
    messagingSenderId: "1075345779578",
    appId: "1:1075345779578:web:9c687e3a64b22dd36144c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth