import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { register } from '../../config/firebase'

function Register() {
    const navigate = useNavigate()
    const [fullname, setFullname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signup = async () => {
        try {
            await register({ fullname, age, email, password })
            navigate('/login')
        } catch (e) {
            alert(e.message)
        }
    }

    return <div>
        <h1>Signup</h1>

        <input onChange={(e) => setFullname(e.target.value)} placeholder="Fullname" />
        <input onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <button onClick={signup}>Signup</button>

        <p>Already have an account?
            <span onClick={() => navigate('/login')}>Click here</span>
        </p>
    </div>
}

export default Register