import React from 'react'
import appwriteservice from "../Appwrite/Config"
import { Link } from 'react-router-dom'
const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray rounded-xl p-4'>
                <div className='w-full justify-content m4-4'>
                    <img src={appwriteservice.filePreviwe(featuredImage)} alt={title} className='rounded-xl' />
                </div>
                <h1>{title}</h1>
            </div>
        </Link>
    )
}

export default PostCard