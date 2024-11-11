import React from 'react'
import { useState, useEffect } from 'react'
import Storage_Services from '../Appwrite/Storage'
import PostCard from './PostCard'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate =  useNavigate()
    const [file, setfile] = useState([])
    useEffect(() => {
        const filelist = async () => {
            try {
                const allfile = await Storage_Services.getListfile()
                setfile(allfile.files)
            } catch (error) {
                console.log("fail to fetch files ", error);
                throw error

            }
        }
        filelist()
    }, [])
    
    return (
        <>

            {/* Hero Section */}
            <h1 className="text-5xl font-bold text-center text-gray-800">Welcome to Article Hub</h1>
            <p className="text-xl text-center text-gray-600 mt-4">Discover, Read, and Share Amazing Articles</p>
            <div className="flex justify-center mt-8 ">
                <p className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 m-1">Get Started</p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 m-1" onClick={() => navigate('/createpost')}>Create Post </button>
            </div>
            {file.map((file) => (
                <span key={file.$id}>
                    <PostCard keys={file.$id} title={file.name} content={"obito"} />
                </span>
            ))}

        </>

    );


}

export default Home



