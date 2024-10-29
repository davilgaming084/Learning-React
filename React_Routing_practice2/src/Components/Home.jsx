import React from 'react'

const Home = () => {
  return (
    <div 
      style={{
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("https://venngage-wordpress.s3.amazonaws.com/uploads/2018/04/Landing-Page-Examples.png")', // Replace with your victory style image URL
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the image
        color: 'white', // Text color
        textAlign: 'center', // Center text
        padding: '20px', // Add some padding
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)', // Optional shadow for depth
      }}
    >
      <h1>Welcome to Our Victory Page!</h1>
      <p>Your journey to success begins here.</p>
    </div>
  )
}

export default Home;
