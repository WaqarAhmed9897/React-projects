// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1KjRs3zlRH1bQyf8ybWIr6ZBfiBEbLPU",
  authDomain: "student-mangment-system9897.firebaseapp.com",
  projectId: "student-mangment-system9897",
  storageBucket: "student-mangment-system9897.firebasestorage.app",
  messagingSenderId: "582577637310",
  appId: "1:582577637310:web:39a545d6d6691ee1b6dbef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{
app ,auth,createUserWithEmailAndPassword,db
}