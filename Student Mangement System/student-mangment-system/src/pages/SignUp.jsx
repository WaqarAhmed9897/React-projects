import { useState } from "react";
import Styles from './Styles/login.module.css'
import TextField from "../components/TextField";
import Button from "../components/Button";
import { auth, createUserWithEmailAndPassword } from "../components/firebase";
const SignUp = () => {
  const [email, SetEmail] = useState('')
  const [password, SetPassowrd] = useState('')
  const [userName, SetUserName] = useState('')
  const [age, SetAge] = useState('')
  console.log(email);

  const SignupHandler = async() => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      
      if(email == response.email){
        alert('Email Already Exist')
      }else{
      console.log(response);
      }
      alert("User Registerd")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.h1}>SignUp Page</h1>
        <span className={Styles.span}>Email:</span><TextField type={"text"} placeholder={"Enter Email ..."} onChange={(e) => { SetEmail(e.target.value) }} value={email} />
        <span className={Styles.span}>Password:</span><TextField type={"password"} placeholder={"Enter Password ..."} onChange={(e) => { SetPassowrd(e.target.value) }} value={password} />
        <span className={Styles.span}>User Name:</span><TextField type={"text"} placeholder={"Enter Your User Name"} onChange={(e) => { SetUserName(e.target.value) }} value={userName} />
        <span className={Styles.span}>Age:</span><TextField type={"text"} placeholder={"Enter Your Age"} onChange={(e) => { SetAge(e.target.value) }} value={age} />
        <Button onClick={SignupHandler} text={"Signup"} />

      </div>
    </>
  )
}

export default SignUp
