import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        {/* <!-- Company Logo --> */}
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <h1 className="text-3xl font-bold">YourLogo</h1>
                        </div>
                        {/* <!-- Navigation Links --> */}
                        <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
                            <ul className="flex justify-center space-x-4">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        {/* <!-- Social Media Links --> */}
                        <div className="w-full md:w-1/3 text-center md:text-right">
                            <ul className="flex justify-center md:justify-end space-x-4">
                                <li><a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                        <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer