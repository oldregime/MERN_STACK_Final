import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>
        <p className="text-center text-sm text-gray-400">
          © 2023 MERN Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;