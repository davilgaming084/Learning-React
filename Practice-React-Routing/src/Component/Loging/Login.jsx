import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
        <form noValidate className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
            />
            <div className="flex justify-end text-xs text-gray-600">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button className="block w-full p-3 text-center text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition duration-200 transform hover:scale-105">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">Or login with</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-md hover:bg-gray-100 transition duration-200 transform hover:scale-105">
            {/* Google SVG */}
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-md hover:bg-gray-100 transition duration-200 transform hover:scale-105">
            {/* Twitter SVG */}
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-md hover:bg-gray-100 transition duration-200 transform hover:scale-105">
            {/* GitHub SVG */}
          </button>
        </div>
        <p className="text-xs text-center text-gray-600">
          Don't have an account?
          <a href="#" className="underline text-indigo-600 hover:text-indigo-800"> Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
