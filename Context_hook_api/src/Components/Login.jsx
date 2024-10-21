import React from 'react'
import { UserContext } from '../Context/UserContext'
import { useContext, useState } from 'react'
const Login = () => {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')

    const { setUser, setpass } = useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser(name)
        setpass(password)
    }
    return (
        <>
            <div>Login</div>
            <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='pass' value={password} onChange={(e) => setpassword(e.target.value)} />
            <button onClick={handlesubmit}>Submit</button>
        </>
    )
}

export default Login