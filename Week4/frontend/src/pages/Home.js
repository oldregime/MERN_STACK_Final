import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/300', description: 'This is product 1' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/300', description: 'This is product 2' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/300', description: 'This is product 3' },
  { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/300', description: 'This is product 4' },
];

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white p-12 rounded-lg mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MERN Shop</h1>
        <p className="text-xl">Discover amazing products at great prices</p>
      </div>
      
      {/* Products Section */}
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;