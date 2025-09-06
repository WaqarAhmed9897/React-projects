import { useState } from "react";
import Styles from './Styles/login.module.css';
import TextField from "../components/TextField";
import Button from "../components/Button";
import { auth, createUserWithEmailAndPassword, db } from "../components/firebase";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";

const SignUpCopy = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassowrd] = useState('');
  const [userName, SetUserName] = useState('');
  const [age, SetAge] = useState('');

  const SignupHandler = async () => {
    try {
      // 🔹 Step 1: Check if email already exists in Firestore
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("⚠️ Email already exists! Please try another one.");
        return;
      }

      // 🔹 Step 2: Create user in Firebase Authentication
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const userUId = response.user.uid;

      // 🔹 Step 3: Save user data in Firestore
      const userObj = {
        uid: userUId,
        email,
        userName,
        age,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "users", userUId), userObj);

      // 🔹 Step 4: Success Message
      alert("🎉 User Registered Successfully!");

      // 🔹 Step 5: Clear input fields
      SetEmail('');
      SetPassowrd('');
      SetUserName('');
      SetAge('');
    } catch (error) {
      console.log("Error:", error.code);
      alert("❌ Something went wrong. Please try again!");
    }
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Sign Up Page</h1>

      <span className={Styles.span}>Email:</span>
      <TextField
        type="text"
        placeholder="Enter Email ..."
        onChange={(e) => SetEmail(e.target.value)}
        value={email}
      />

      <span className={Styles.span}>Password:</span>
      <TextField
        type="password"
        placeholder="Enter Password ..."
        onChange={(e) => SetPassowrd(e.target.value)}
        value={password}
      />

      <span className={Styles.span}>User Name:</span>
      <TextField
        type="text"
        placeholder="Enter Your User Name"
        onChange={(e) => SetUserName(e.target.value)}
        value={userName}
      />

      <span className={Styles.span}>Age:</span>
      <TextField
        type="text"
        placeholder="Enter Your Age"
        onChange={(e) => SetAge(e.target.value)}
        value={age}
      />

      <Button onClick={SignupHandler} text="Signup" />
    </div>
  );
};

export default SignUpCopy;
