import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
// @ts-ignore
import images from '../*.png';

export const Header = () => {
  return (
    <div className="bg-blue-800 text-white py-24 text-center md:text-right">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-16">
            <h1 className="mb-4 text-5xl font-bold">React Simple Modal</h1>
            <div className="flex flex-row items-center justify-center md:justify-end pb-8">
              <FaGithub className="inline" />
              <a
                className="ml-2 hover:text-blue-300 transition transition-colors duration-200"
                href="https://github.com/mbrookson/react-simple-hook-modal"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img src={images.logo} />
          </div>
        </div>
      </div>
    </div>
  );
};
