import React from 'react';
import { useNavigate } from 'react-router-dom';

const Need_Sign_up = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Article Hub</h1>
        <p className="text-gray-600 mb-6">
          Discover, Read, and Share amazing articles on a variety of topics. Join our community to enjoy personalized content, bookmark your favorite reads, and much more!
        </p>
        <p className="text-gray-600 mb-6">
          Sign up now to get started and become a part of our growing community!
        </p>
        <button
          onClick={handleSignUp}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Need_Sign_up;
