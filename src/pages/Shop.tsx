
import React, { useState } from 'react';
import { Filter, Grid, List, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/shop/ProductCard';
import ProductFilters from '@/components/shop/ProductFilters';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { productsData } from '@/data/products';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shop All Tees</h1>
            <p className="text-gray-600">Find your perfect style from our collection of customizable t-shirts</p>
          </div>
        </div>
        
        {/* Mobile filters */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-auto">
              <ProductFilters isMobile={true} />
            </SheetContent>
          </Sheet>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border rounded-md"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Desktop filters */}
          <div className="hidden md:block w-64 mr-8 flex-shrink-0">
            <ProductFilters />
          </div>
          
          <div className="flex-1">
            {/* Desktop sorting and view options */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="flex items-center">
                <span className="mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <span className="mr-2">View:</span>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  className="mr-2 p-2"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={16} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  className="p-2"
                  onClick={() => setViewMode('list')}
                >
                  <List size={16} />
                </Button>
              </div>
            </div>
            
            {/* Products grid */}
            <div className={`grid ${
              viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'
            }`}>
              {productsData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex">
                <Button variant="outline" size="sm" className="mr-2">
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="mx-1 bg-primary text-white">
                  1
                </Button>
                <Button variant="outline" size="sm" className="mx-1">
                  2
                </Button>
                <Button variant="outline" size="sm" className="mx-1">
                  3
                </Button>
                <Button variant="outline" size="sm" className="ml-2">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
