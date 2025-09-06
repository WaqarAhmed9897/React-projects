import TextField from '../components/TextField'
import Styles from './Styles/login.module.css'
import SignUp from './SignUp'
import { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import MainApp from '../components/MainApp'


const Login = () => {
  const [email, SetEmail] = useState('')
  const [password, SetPassowrd] = useState('')
  console.log(email);
    const Navigate = useNavigate()
  const loginHandler = () => {
    if (!email || !password) {
      alert("Required Field are missing")
      Navigate(<MainApp />)
    }
  }

  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.h1}>Login page</h1>
        <span className={Styles.span}>Email:</span><TextField type={"text"} placeholder={"Enter Email ..."} onChange={(e) => { SetEmail(e.target.value) }} value={email} />
        <span className={Styles.span}>Password:</span><TextField type={"password"} placeholder={"Enter Password ..."} onChange={(e) => { SetPassowrd(e.target.value) }} value={password} />
        <p>Create Account Signup</p>
        <Button onClick={loginHandler} text={"Login Button"} />
      </div>
    </>
  )
}

export default Login
