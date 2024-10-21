import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <nav className="flex items-center justify-between p-4">
        {/* Google Logo on the left */}
        <div>
          <Link to="https://www.youtube.com/watch?v=rVORdn4Xpzk&list=RDrVORdn4Xpzk&start_radio=1">
            <img className="h-16 w-auto" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="Google Logo" />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <ul className="flex space-x-4 mx-auto">
          <li>
            <NavLink to="/" className="hover:underline">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:underline">About</NavLink>
          </li>
          <li>
            <NavLink to="/contect" className="hover:underline">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/github" className="hover:underline">GitHub</NavLink>
          </li>
        </ul>

        {/* Login and Get Started Buttons on the right */}
        <div className="flex space-x-4">
          <button className="p-2 bg-blue-600 rounded hover:bg-blue-700 transition duration-200">
            <NavLink to="/login" className="text-white">Login</NavLink>
          </button>
          <button className="p-2 bg-green-600 rounded hover:bg-green-700 transition duration-200">
            <NavLink to="/get-started" className="text-white">Get Started</NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
