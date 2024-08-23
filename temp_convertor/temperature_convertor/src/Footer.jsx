import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>
        made with <span role="img" aria-label="heart">❤️</span> by piyali mukherjee &copy; {new Date().getFullYear()} all rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
