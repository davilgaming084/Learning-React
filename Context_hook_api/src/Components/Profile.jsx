import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Profile = () => {
    const { User, pass } = useContext(UserContext)
    return (
        <>
            <div>{User}</div>
            <div>{pass}</div>
        </>
    )
}

export default Profile