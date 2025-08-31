import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { Loged } from '../../Firebase/firebase';
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
    return <div className="main-log">
        <div className='log'>
        <h1>Login</h1>
        <input className="reg-inp-log"  onChange={(e)=>{setemail(e.target.value)}}  placeholder="Email"/>       <br/>
            <input className="reg-inp-log" onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password"/>    <br/>
            <button className='btn' onClick={log}>Login</button>    
            <p className='a'>Don't have a Account
                <span onClick={()=> navigate("/")}>Click Here</span>
            </p>
            </div>
    </div>
}


export default Login;