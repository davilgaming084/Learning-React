import React from 'react';
import StorageService from '../Appwrite/Storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [file, setFile] = useState(''); // for storing file received by user 
  const [filename, setfilename] = useState('') // for naming of file/image
  const navigate = useNavigate(); // navigate for, after complete upload file then go back to home

  // for receiving file by user and storing on state 
  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  // then you have image on state then upload it on appwrite 
  const upload = async () => {
    if (file) { // if file is true then upload 
      await StorageService.uploadfile(file); // UPLODE  FILE/IMG
      

      navigate(-1);      
    } else {
      console.log("Failed to get file from user");
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create a Post</h2>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFile}
          className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="fileName" 
          id="fileName" 
          placeholder="Enter the file name you want" 
          className="mb-4 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={filename}
          onChange={(e)=> setfilename(e.target.value)}
        />
        <button
          onClick={upload}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 w-full"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
