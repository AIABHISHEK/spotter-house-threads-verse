
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp, Heart, Minus, Plus, Share, ShoppingCart, Star } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { productsData } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id || '0'));
  
  const [mainImage, setMainImage] = useState(product?.images[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[2] || '');
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize.toUpperCase()}, ${selectedColor}) has been added to your cart.`,
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={mainImage}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden ${mainImage === image ? 'ring-2 ring-primary' : 'opacity-70'}`}
                  onClick={() => setMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-sm">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>
            
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">
                    ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <RadioGroup 
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="flex flex-wrap gap-2"
              >
                {product.colors.map(color => (
                  <div key={color} className="flex items-center">
                    <RadioGroupItem
                      value={color}
                      id={color}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={color}
                      className={`p-1 rounded-md cursor-pointer peer-checked:ring-2 ring-primary`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full border border-gray-300 ${
                          color === 'white' ? 'bg-white' : 
                          color === 'black' ? 'bg-black' : 
                          color === 'gray' ? 'bg-gray-500' : 
                          color === 'navy' ? 'bg-blue-900' : 
                          color === 'red' ? 'bg-red-600' : 
                          color === 'blue' ? 'bg-blue-500' :
                          color === 'green' ? 'bg-green-500' :
                          color === 'burgundy' ? 'bg-red-900' :
                          color === 'forest-green' ? 'bg-green-900' :
                          color === 'olive' ? 'bg-yellow-800' : 'bg-gray-200'
                        }`}
                      />
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <RadioGroup 
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map(size => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 cursor-pointer peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary"
                    >
                      {size.toUpperCase()}
                    </label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-2">
                <Button variant="link" className="text-sm text-primary h-auto p-0">
                  Size Guide
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="h-10 w-10"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="mx-4 text-center w-8">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-primary hover:bg-primary/90 flex-1 flex items-center justify-center gap-2 py-6"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Heart size={18} />
                Add to Wishlist
              </Button>
            </div>
            
            <Button 
              className="w-full bg-primary/10 text-primary hover:bg-primary/20 py-6"
              onClick={() => window.location.href = '/customize'}
            >
              Customize This Design
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details & Care</TabsTrigger>
              <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description">
              <div className="prose max-w-none">
                <p>
                  {product.description} Our t-shirts are made with premium materials to ensure comfort and durability. The vibrant designs are screen printed with high-quality inks that resist fading, even after multiple washes.
                </p>
                <p className="mt-4">
                  Each piece is crafted with attention to detail, ensuring a perfect fit and exceptional comfort. The fabric is pre-shrunk to maintain its shape and size, so you can enjoy your favorite t-shirt for years to come.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="details">
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium mb-4">Product Details</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>100% organic cotton</li>
                  <li>Pre-shrunk fabric</li>
                  <li>Screen printed design</li>
                  <li>Regular fit</li>
                  <li>Machine washable</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-6 mb-4">Care Instructions</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Machine wash cold with like colors</li>
                  <li>Do not bleach</li>
                  <li>Tumble dry low</li>
                  <li>Warm iron if needed</li>
                  <li>Do not dry clean</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <p className="text-sm text-gray-600">{product.reviews} reviews</p>
                  </div>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="space-y-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b pb-8">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={16}
                              className={j < 4 + (i % 2) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {["Great quality!", "Perfect fit", "Love this design"][i]}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>{["John D.", "Sarah M.", "Mark T."][i]}</span>
                        <span className="mx-2">•</span>
                        <span>{["May 15, 2023", "April 3, 2023", "June 20, 2023"][i]}</span>
                      </div>
                      
                      <p className="text-gray-700">
                        {[
                          "I'm extremely happy with this purchase! The material is soft and comfortable, and the print quality is excellent. Fits true to size and looks just like the photos. Will definitely buy from Spotter House again.",
                          "This is my second purchase from Spotter House and I'm just as impressed as the first time. The shirts hold up really well in the wash and the designs are unique.",
                          "Love the design and the quality of this shirt. The fabric is breathable and comfortable for all-day wear. I've received many compliments when wearing it!"
                        ][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
