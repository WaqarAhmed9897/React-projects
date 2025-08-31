import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { Loged } from '../Firebase';
function Login(){

    const navigate = useNavigate ();   
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
 const log = async()=>{
    try{
   await Loged({email,password})
   navigate('/Dashboard')
}catch(e){
    alert(e);
}
 }
    return <div className="reg">
        <h1>Login</h1>
        <input className="reg-inp"  onChange={(e)=>{setemail(e.target.value)}}  placeholder="Email"/>       <br/>
            <input className="reg-inp" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password"/>    <br/>
            <button onClick={log}>Login</button>    
            <p>Don't have a Account
                <span onClick={()=> navigate("/")}>Click Here</span>
            </p>
    </div>
}


export default Login;