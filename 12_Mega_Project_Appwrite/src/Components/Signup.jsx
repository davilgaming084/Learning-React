import React from 'react'
import { useState } from "react"
import AuthService from '../Appwrite/auth'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { login } from '../Store/authslice'
import Button from './Button'
import {Input} from './Input'
import Logo from './Logo/'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
Link
const Signup = () => {
    const navigate = useNavigate()
    const Dispatch = useDispatch()
    const [error, seterror] = useState('')
    const { register, handleSubmit } = useForm()

    const createSignUp = async (data) => {
        seterror('')
        try {
            const userData = await AuthService.createAccount(data)
            if (userData) {
                const userData = await AuthService.userExist()
                if (userData) {
                    Dispatch(login(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            seterror(error.message)
        }
    }
    return (
        <div>
            <div>
                <div>
                    <Logo />
                </div>
                <h2>sign up to create account </h2>
                <p>already  have an account?&nbsp;

                    <Link to={'/login'}>
                        sign in
                    </Link>
                </p>
                {error && <p className='text-red-600'>{error}</p>}

                <form onSubmit={handleSubmit(createSignUp)}>
                    <div >
                        <Input lable="Full :  name" placeholder="  enter your full name" {...register("name", {
                            required: true
                        })} />
                        <Input lable="email" placeholder="enter your email " type="email" {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => {
                                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            }
                        })} />
                        <input lable="PASSWORD" type='PASSWORD' placeholder='ENTER YOUR PASSWORD ' {...register("password", {
                            required: true
                        })} />

                        <button type='submit' className='w-full'> Create Account </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup