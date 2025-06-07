import React from 'react';
import NotFoundImage from '../assets/404.svg';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <figure className="w-full max-w-3xl mx-auto">
          <img
            className="w-full h-auto rounded-lg"
            src={NotFoundImage}
            alt="404 image"
          />
          <figcaption className="mt-4 text-center text-gray-500 dark:text-gray-400">
            <p className="text-xl text-gray-600 mb-2">Oops! Page not found</p>
            <a href="/" className="text-blue-500 hover:text-blue-700 underline">
              Return to Home
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default NotFound;
