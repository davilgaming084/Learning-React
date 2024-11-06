import React from 'react'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const Protected = ({ children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setloader(false)

    }, [authStatus, navigate, authentication])

    return (
        loader ? <h1>loader....</h1> : {children}
    )
}

export default Protected