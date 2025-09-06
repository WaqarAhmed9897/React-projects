import { useState } from "react";
import TextField from "../components/TextField";
import Styles from "./Styles/login.module.css";
import Button from "../components/Button";
import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginCopy = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      // 🔹 Step 1: Check required fields
      if (!email || !password) {
        alert("⚠️ Required fields are missing!");
        return;
      }

      // 🔹 Step 2: Try login with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);

      // 🔹 Step 3: Navigate to Dashboard
      alert("🎉 Login successful!");
      navigate("/App"); // <-- Yahan apka Dashboard ka path dena hai
    } catch (error) {
      // 🔹 Step 4: Handle errors
      if (error.code === "auth/user-not-found") {
        alert("⚠️ Email not found! Please register first.");
        navigate("/signup");
      } else if (error.code === "auth/wrong-password") {
        alert("❌ Wrong password! Try again.");
      } else if (error.code === "auth/invalid-email") {
        alert("⚠️ Invalid email format!");
      } else {
        alert("❌ Something went wrong. Please try again!");
      }
    }
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Login Page</h1>

      <span className={Styles.span}>Email:</span>
      <TextField
        type="text"
        placeholder="Enter Email ..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <span className={Styles.span}>Password:</span>
      <TextField
        type="password"
        placeholder="Enter Password ..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <p>
        Create Account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/Signup")}>Sign Up</span>
      </p>

      <Button onClick={loginHandler} text="Login" />
    </div>
  );
};

export default LoginCopy;
