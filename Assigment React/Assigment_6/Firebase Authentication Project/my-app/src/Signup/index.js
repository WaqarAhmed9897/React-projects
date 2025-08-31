import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Registration } from "../Firebase"

function Signup() {
    const navigate = useNavigate()
    const [fullname, setfullname] = useState()
    const [age, setage] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const reg = async() => {
        try{
       await Registration({ email, password, fullname, age })
       navigate('/Login')
           }catch(error){
            console.log(error);
           }
    }
    // console.log(email);
    return <div className="main-cont">
        <div className="reg">
            <h1>Registration </h1>
            <input onChange={(e) => { setfullname(e.target.value) }} value={fullname} className="reg-inp" placeholder="Full Name" />   <br />
            <input onChange={(e) => { setage(e.target.value) }} value={age} className="reg-inp" placeholder="Age" />         <br />
            <input onChange={(e) => { setemail(e.target.value) }} value={email} className="reg-inp" placeholder="Email" />       <br />
            <input onChange={(e) => { setpassword(e.target.value) }} value={password} className="reg-inp" placeholder="Password" />    <br />
            <button onClick={reg}>Registerd</button>
            <p>Al Ready have a Account
                <span onClick={() => navigate("/Login")}>Click Here</span>
            </p>
        </div>
    </div>
}
export default Signup