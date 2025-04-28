
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (id: string) => void;
}

interface ProductFiltersProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, options, selectedOptions, onChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center">
            <Checkbox 
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={() => onChange(option.id)}
            />
            <label htmlFor={option.id} className="ml-2 text-sm cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductFilters: React.FC<ProductFiltersProps> = ({ onClose, isMobile }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const categories = [
    { id: 'graphic', label: 'Graphic Tees' },
    { id: 'minimal', label: 'Minimal Designs' },
    { id: 'statement', label: 'Statement Pieces' },
    { id: 'collaborative', label: 'Community Designed' },
  ];

  const sizes = [
    { id: 'xs', label: 'XS' },
    { id: 's', label: 'S' },
    { id: 'm', label: 'M' },
    { id: 'l', label: 'L' },
    { id: 'xl', label: 'XL' },
    { id: 'xxl', label: '2XL' },
  ];

  const colors = [
    { id: 'white', label: 'White' },
    { id: 'black', label: 'Black' },
    { id: 'gray', label: 'Gray' },
    { id: 'blue', label: 'Blue' },
    { id: 'red', label: 'Red' },
    { id: 'green', label: 'Green' },
  ];

  const handleCategoryChange = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSizeChange = (id: string) => {
    setSelectedSizes(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleColorChange = (id: string) => {
    setSelectedColors(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 100]);
  };

  return (
    <div className={isMobile ? "p-4" : ""}>
      {isMobile && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-medium">Applied filters: {selectedCategories.length + selectedSizes.length + selectedColors.length}</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-sm text-primary hover:text-primary/90"
        >
          Clear all
        </Button>
      </div>
      
      <FilterGroup 
        title="Category" 
        options={categories} 
        selectedOptions={selectedCategories}
        onChange={handleCategoryChange}
      />
      
      <FilterGroup 
        title="Size" 
        options={sizes} 
        selectedOptions={selectedSizes}
        onChange={handleSizeChange}
      />
      
      <FilterGroup 
        title="Color" 
        options={colors} 
        selectedOptions={selectedColors}
        onChange={handleColorChange}
      />
      
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="px-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
      
      {isMobile && (
        <div className="mt-8">
          <Button className="w-full bg-primary">Apply Filters</Button>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
