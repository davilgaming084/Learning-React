import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Article Hub, your go-to destination for discovering, reading, and sharing amazing articles on a variety of topics. Our mission is to create a community where readers and writers can connect and share knowledge.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Curated Articles: Enjoy a collection of hand-picked articles from various genres.</li>
          <li>Personalized Recommendations: Get article suggestions based on your interests.</li>
          <li>Bookmark and Share: Save your favorite articles and share them with your network.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
        <p className="text-gray-700 mb-4">
          We are a team of passionate writers, editors, and developers committed to bringing you the best reading experience. Our goal is to foster a community of knowledge seekers and sharers.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Have any questions or feedback? Feel free to reach out to us at <a href="mailto:contact@articlehub.com" className="text-blue-500 hover:underline">contact@articlehub.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
