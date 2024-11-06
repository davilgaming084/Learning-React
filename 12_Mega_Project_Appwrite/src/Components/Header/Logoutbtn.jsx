import React from 'react'
import { useDispatch } from 'react-redux'
import AuthService from '../../Appwrite/auth'
import { login, logout } from "../../Store/authslice"
const Logoutbtn = () => {
    const Dispatch = useDispatch()

    const logoutHandler = () => {
        AuthService.logout()
            .then(() => {
                Dispatch(logout)
            })
    }
    return (

        <button> Logout </button>
    )
}

export default Logoutbtn