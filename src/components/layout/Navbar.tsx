
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">SPOTTER HOUSE</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/customize" className="nav-link">Customize</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/about" className="nav-link">About Us</Link>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="nav-link">
              <Search size={20} />
            </button>
            <Link to="/account" className="nav-link">
              <User size={20} />
            </Link>
            <Link to="/cart" className="nav-link relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="nav-link relative mr-4">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link px-2 py-1" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="nav-link px-2 py-1" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/customize" className="nav-link px-2 py-1" onClick={() => setIsMenuOpen(false)}>Customize</Link>
              <Link to="/community" className="nav-link px-2 py-1" onClick={() => setIsMenuOpen(false)}>Community</Link>
              <Link to="/about" className="nav-link px-2 py-1" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/account" className="nav-link px-2 py-1 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <User size={18} className="mr-2" /> My Account
              </Link>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pr-10 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
