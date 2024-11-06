import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authslice, { login as authLogin } from '../Store/authslice'
import Button from "../Components/Button"
import Input from "../Components/Input"
import Logo from "../Components/Logo/"
import AuthService from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
const Login = () => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, seterror] = useState('')

    const login = async (data) => {
        seterror('')
        try {
            const session = await AuthService.login(data)

            if (session) {
                const userData = await AuthService.userExist()
                if (userData) {
                    Dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            seterror(error)
        }
    }
    return (
        <div className=''>
            <div>
                <Logo width='100%' />
            </div>

            <h2>sign in to your account </h2>
            <p>don&apos;t have  any account?&nbsp;
                <Link to={"/signup"} className=''>

                    signup
                </Link>
            </p>

            {error && <p className='text-red-500'>{error}</p>}
            <form onSubmit={handleSubmit(login)}>

                <div>
                    <Input lable="email" placeholder="enter your email " type="email" {...register("email", {
                        required: true,
                        validate: {
                            matchPatern: (value) => {
                                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address"
                            }
                        }
                    })} />


                    <input type="password" lable="password" placeholder='enter password ' {...register("password", {
                        required: true
                    })} />

                    <Button type='submit' className='w-full'>sign in </Button>
                </div>
            </form>
        </div>
    )
}

export default Login