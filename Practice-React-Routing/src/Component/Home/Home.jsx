import React from 'react';

const Home = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/18/34/action-game-concept-landing-page-vector-23831834.jpg"
            alt=""
            className="object-contain w-full h-full" // Changed to w-full and h-full
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl md:text-6xl">Ac mattis
            <span className="dark:text-violet-600"> senectus</span> erat pharetra
          </h1>
          <p className="mt-4 mb-6 text-base sm:mb-12 sm:text-lg md:text-xl">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" /> turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
