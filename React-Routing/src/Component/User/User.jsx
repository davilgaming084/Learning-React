import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const { id } = useParams()
    return (
        <div className='bg-green-700 text-white text-3xl p-2 m-4'>User:{id}</div>
    )
}

export default User