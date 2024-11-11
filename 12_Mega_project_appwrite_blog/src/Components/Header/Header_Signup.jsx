import React, { useState } from 'react';
import Header from './Header';
const Header_Signup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigatehandle = () => {
        navigate(<Header />)
    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-3xl font-bold">
                    YourLogo
                </div>
                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                </nav>
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button className="text-2xl" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">Sign In</a>
                        <a href="#" className="hover:text-gray-400">Sign Up</a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header_Signup;
