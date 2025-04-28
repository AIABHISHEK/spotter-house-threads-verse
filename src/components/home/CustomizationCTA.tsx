
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CustomizationCTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] opacity-20 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Create Your Own Design</h2>
          <p className="text-white text-lg mb-10">
            Express yourself with our easy-to-use customization tool. Upload your artwork, add text, and choose from various colors and styles.
          </p>
          <Link to="/customize">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Start Designing Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomizationCTA;
