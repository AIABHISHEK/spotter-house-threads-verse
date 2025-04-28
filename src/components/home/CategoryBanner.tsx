
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBanner: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/shop?category=graphic" className="relative overflow-hidden rounded-lg group">
            <img 
              src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
              alt="Graphic Tees" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold">Graphic Tees</h3>
                <div className="mt-4 bg-white text-accent px-4 py-2 rounded-full inline-block font-medium">
                  Shop Now
                </div>
              </div>
            </div>
          </Link>
          
          <Link to="/shop?category=minimal" className="relative overflow-hidden rounded-lg group">
            <img 
              src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Minimal Designs" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold">Minimal Designs</h3>
                <div className="mt-4 bg-white text-accent px-4 py-2 rounded-full inline-block font-medium">
                  Shop Now
                </div>
              </div>
            </div>
          </Link>
          
          <Link to="/shop?category=statement" className="relative overflow-hidden rounded-lg group">
            <img 
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80" 
              alt="Statement Pieces" 
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold">Statement Pieces</h3>
                <div className="mt-4 bg-white text-accent px-4 py-2 rounded-full inline-block font-medium">
                  Shop Now
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
