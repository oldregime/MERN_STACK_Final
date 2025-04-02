import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data from an API
  const product = {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image: 'https://via.placeholder.com/600',
    description: 'This is a detailed description of Product 1. It includes all the features and benefits.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.'
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-600 mb-6">{product.details}</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;