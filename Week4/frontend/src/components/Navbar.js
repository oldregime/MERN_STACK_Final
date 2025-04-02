import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MERN Shop</Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/" className="hover:text-gray-300">Products</Link>
          <Link to="/" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;