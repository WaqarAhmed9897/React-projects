import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { login } from '../../config/firebase'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signin = async () => {
        try {
            await login({ email, password })
            navigate('/')
        } catch (e) {
            alert(e.message)
        }
    }

    return <div>
        <h1>Sign In</h1>

        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <button onClick={signin}>Sign In</button>

        <p>Don't you have an account.
            <span onClick={() => navigate('/register')}>Click here</span>
        </p>
    </div>
}

export default Login