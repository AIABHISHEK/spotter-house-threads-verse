
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-medium mb-1 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="text-lg font-bold">${((product.price * (100 - product.discount)) / 100).toFixed(2)}</span>
                <span className="text-gray-400 line-through ml-2">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            size="sm"
            variant="outline"
            className="flex items-center justify-center rounded-full p-2 hover:bg-primary hover:text-white transition-colors"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
