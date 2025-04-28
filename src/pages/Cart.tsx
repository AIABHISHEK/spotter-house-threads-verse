
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight, ShoppingCart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CartItem } from '@/types';
import { productsData } from '@/data/products';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: productsData[0],
      quantity: 1,
      color: 'black',
      size: 'm',
    },
    {
      product: productsData[2],
      quantity: 2,
      color: 'white',
      size: 'l',
    }
  ]);
  
  const [promoCode, setPromoCode] = useState('');
  
  const handleQuantityChange = (index: number, change: number) => {
    const newCartItems = [...cartItems];
    const newQuantity = newCartItems[index].quantity + change;
    
    if (newQuantity > 0) {
      newCartItems[index].quantity = newQuantity;
      setCartItems(newCartItems);
    }
  };
  
  const handleRemoveItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.product.price;
      const discountedPrice = item.product.discount > 0 
        ? price * (1 - item.product.discount / 100) 
        : price;
      return sum + (discountedPrice * item.quantity);
    }, 0);
  };
  
  const subtotal = calculateSubtotal();
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <span className="text-gray-500 ml-4">({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
          </div>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="flex justify-center mb-6">
                <ShoppingCart size={64} className="text-gray-300" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/shop">
                <Button className="bg-primary hover:bg-primary/90">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-medium">Cart Items</h2>
                  </div>
                  
                  {cartItems.map((item, index) => (
                    <div key={index} className="p-6 border-b flex flex-col md:flex-row">
                      <div className="w-full md:w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <h3 className="font-medium">{item.product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">
                              Size: {item.size.toUpperCase()} | Color: {item.color}
                            </p>
                            
                            {item.product.discount > 0 ? (
                              <div className="flex items-center mb-2">
                                <span className="font-medium mr-2">
                                  ${((item.product.price * (100 - item.product.discount)) / 100).toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                  ${item.product.price.toFixed(2)}
                                </span>
                              </div>
                            ) : (
                              <div className="font-medium mb-2">
                                ${item.product.price.toFixed(2)}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center mt-4 md:mt-0">
                            <div className="flex items-center border rounded">
                              <button 
                                className="px-2 py-1 text-gray-500"
                                onClick={() => handleQuantityChange(index, -1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-4">{item.quantity}</span>
                              <button 
                                className="px-2 py-1 text-gray-500"
                                onClick={() => handleQuantityChange(index, 1)}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button 
                              className="ml-4 text-gray-400 hover:text-red-500"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="p-6 flex justify-between items-center">
                    <Link to="/shop" className="text-primary hover:underline text-sm flex items-center">
                      <ChevronRight size={16} className="rotate-180 mr-1" />
                      Continue Shopping
                    </Link>
                    
                    <Button 
                      variant="outline" 
                      className="text-sm"
                      onClick={() => setCartItems([])}
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-medium">Order Summary</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <form className="flex">
                        <Input 
                          type="text" 
                          placeholder="Promo Code" 
                          className="rounded-r-none"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button 
                          type="submit"
                          variant="secondary"
                          className="rounded-l-none bg-gray-200 hover:bg-gray-300 border border-l-0 border-gray-300"
                        >
                          Apply
                        </Button>
                      </form>
                    </div>
                    
                    <Button className="w-full py-6 bg-primary hover:bg-primary/90">
                      Proceed to Checkout
                    </Button>
                    
                    <div className="text-center text-sm text-gray-500">
                      <p>We accept</p>
                      <div className="flex justify-center space-x-2 mt-2">
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
