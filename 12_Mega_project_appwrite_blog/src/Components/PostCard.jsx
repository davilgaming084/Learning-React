import React from 'react';
import Storage_Services from '../Appwrite/Storage';
import { Link } from 'react-router-dom';

const PostCard = ({ keys, title , content }) => {
  return (
    <>
      <div className="flex flex-wrap mt-8">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-black rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            <img src={Storage_Services.getfilepreviwe(keys)} alt="" className="w-full h-auto" />
            <p className="text-gray-600 mt-4">{content}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
