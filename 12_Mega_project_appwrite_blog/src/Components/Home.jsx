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
                // console.log ( "useeff",  allfile.files.map((file) => { console.log(file) }));
            } catch (error) {
                console.log("fail to fetch files ", error);
                throw error

            }
        }
        filelist()
    }, [])
    console.log(file);

    const Cretaepost = async (event) => {
        const file = event.target.files[0]  // get image.file of input file by user
        if (file) {
            try {
                await Storage_Services.uploadfile(file)
                const updated_post_after_uploadfile = await Storage_Services.getListfile()
                setfile(updated_post_after_uploadfile.files)

            } catch (error) {
                console.log("faild to uplod file ", error);

            }
        }

    }




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
                    <PostCard keys={file.$id} title={file.name} />
                </span>
            ))}

        </>

    );


}

export default Home



