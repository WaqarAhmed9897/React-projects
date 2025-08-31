import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAB96_o6I-aCwoYZ4hly45LH4OtKRtRNaU",
    authDomain: "exam-1-react.firebaseapp.com",
    projectId: "exam-1-react",
    storageBucket: "exam-1-react.appspot.com",
    messagingSenderId: "1005710471440",
    appId: "1:1005710471440:web:5ba635a157cf9e890f3595"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  
export const auth = getAuth(app);
const db = getFirestore(app)



export const Registration = async (userInfo) => {
  try {
    const { email, password } = userInfo

    await createUserWithEmailAndPassword(auth, email, password)

    alert('Register Succesfully')

    return true;

  }
  catch (e) {
    alert(e.message);
    throw e;

  }
}
export const Loged = async (userInfo) => {

    try {
      const { email, password } = userInfo
      await signInWithEmailAndPassword(auth, email, password)
  
      alert('Login SuccessFully')
    }
    catch (e) {
      alert(e.message);
      throw e
    }
  
  }
  
  