import { useState } from 'react'
import AuthenticationService from '../Appwrite/Authentication'
import { useNavigate } from 'react-router-dom'
function Signup() {
    // AuthenticationService.getCurrentUser().then((res)=>{console.log(res)})
    const navigate = useNavigate()
    const gobackAfterCreatedAccount = () => {
        navigate(-1)
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await AuthenticationService.createAccount(formData)
            console.log("User created successfully:", userData)
            // Add your success logic here (e.g., redirect to dashboard)
        } catch (error) {
            console.error("Sign up failed:", error)
            // Add your error handling here
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Choose a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full mb-2 p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Sign Up
                </button>

                <button onClick={gobackAfterCreatedAccount}>
                    After Creted Account Click Here to GO HOME 
                </button>
            </form>
        </div>
    )
}

export default Signup