import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          <li className="text-white font-secondary hover:text-gray-400" aria-label="Home">
            Home
          </li>
          <li className="text-white font-secondary hover:text-gray-400" aria-label="About">
            About
          </li>
          <li className="text-white font-secondary hover:text-gray-400" aria-label="Contact Us">
            Contact Us
          </li>
          <li className="text-white font-secondary hover:text-gray-400" aria-label="Book Now">
            Book Now
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
