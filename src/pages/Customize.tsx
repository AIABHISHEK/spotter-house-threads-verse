
import React, { useState } from 'react';
import { ImagePlus, Text, Palette, Trash2, RotateCw } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';

const Customize = () => {
  const [tshirtColor, setTshirtColor] = useState('white');
  const [customText, setCustomText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState(32);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  
  const tshirtColors = [
    { name: 'White', value: 'white', bg: 'bg-white', border: 'border-gray-300' },
    { name: 'Black', value: 'black', bg: 'bg-black', text: 'text-white' },
    { name: 'Gray', value: 'gray', bg: 'bg-gray-500', text: 'text-white' },
    { name: 'Navy', value: 'navy', bg: 'bg-blue-900', text: 'text-white' },
    { name: 'Red', value: 'red', bg: 'bg-red-600', text: 'text-white' },
    { name: 'Green', value: 'green', bg: 'bg-green-600', text: 'text-white' },
  ];
  
  const textColors = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Gray', value: '#808080' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#008000' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Purple', value: '#800080' },
  ];
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHasUploadedImage(true);
      toast({
        title: "Image uploaded",
        description: "Your image has been added to the design.",
      });
    }
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: "Your custom t-shirt has been added to your cart.",
    });
  };
  
  return (
    <Layout>
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Design Your Custom T-Shirt</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Express yourself with a unique design. Customize colors, add text, upload artwork, and create a one-of-a-kind t-shirt that's all you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Design Preview */}
            <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-6">Design Preview</h2>
              
              <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {/* T-shirt background */}
                <div 
                  className={`w-3/4 h-5/6 rounded-md ${
                    tshirtColor === 'white' ? 'bg-white border border-gray-300' :
                    tshirtColor === 'black' ? 'bg-black' : 
                    tshirtColor === 'gray' ? 'bg-gray-500' : 
                    tshirtColor === 'navy' ? 'bg-blue-900' : 
                    tshirtColor === 'red' ? 'bg-red-600' : 
                    tshirtColor === 'green' ? 'bg-green-600' : 'bg-white'
                  }`}
                >
                  {/* Custom text */}
                  {customText && (
                    <div className="h-full flex items-center justify-center p-4">
                      <div 
                        style={{ 
                          color: textColor,
                          fontSize: `${textSize}px`,
                          fontWeight: 'bold',
                          textAlign: 'center',
                          wordBreak: 'break-word',
                          maxWidth: '100%',
                        }}
                      >
                        {customText}
                      </div>
                    </div>
                  )}
                  
                  {/* Uploaded image placeholder */}
                  {hasUploadedImage && !customText && (
                    <div className="h-full flex items-center justify-center p-4">
                      <div className="w-3/4 h-3/4 bg-gray-200 flex items-center justify-center rounded">
                        <img 
                          src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                          alt="User uploaded design"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between">
                  <Button variant="outline" className="flex items-center gap-1">
                    <RotateCw size={16} />
                    Reset
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-1 text-red-500 hover:text-red-600">
                    <Trash2 size={16} />
                    Clear Design
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Design Options */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-6">Customization Options</h2>
              
              <Tabs defaultValue="color">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="color" className="flex-1">
                    <Palette size={16} className="mr-1" />
                    Color
                  </TabsTrigger>
                  <TabsTrigger value="text" className="flex-1">
                    <Text size={16} className="mr-1" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex-1">
                    <ImagePlus size={16} className="mr-1" />
                    Image
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="color">
                  <h3 className="font-medium mb-4">Choose T-shirt Color</h3>
                  <RadioGroup 
                    value={tshirtColor}
                    onValueChange={setTshirtColor}
                    className="grid grid-cols-3 gap-3"
                  >
                    {tshirtColors.map(color => (
                      <div key={color.value}>
                        <RadioGroupItem
                          value={color.value}
                          id={`color-${color.value}`}
                          className="peer sr-only"
                        />
                        <label
                          htmlFor={`color-${color.value}`}
                          className={`flex flex-col items-center justify-center p-2 rounded-md border cursor-pointer ${
                            color.border || ''
                          } peer-checked:ring-2 peer-checked:ring-primary`}
                        >
                          <div className={`w-8 h-8 rounded-full ${color.bg}`} />
                          <span className={`mt-1 text-sm ${color.text || ''}`}>
                            {color.name}
                          </span>
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </TabsContent>
                
                <TabsContent value="text">
                  <div className="space-y-6">
                    <div>
                      <label className="block font-medium mb-2">Add Text</label>
                      <Input
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        placeholder="Enter text for your design"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-medium mb-2">Text Color</label>
                      <div className="grid grid-cols-4 gap-2">
                        {textColors.map(color => (
                          <button
                            key={color.value}
                            type="button"
                            onClick={() => setTextColor(color.value)}
                            style={{ backgroundColor: color.value }}
                            className={`w-8 h-8 rounded-full ${
                              color.value === textColor ? 'ring-2 ring-primary ring-offset-2' : ''
                            } ${color.value === '#FFFFFF' ? 'border border-gray-300' : ''}`}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-medium mb-2">Text Size: {textSize}px</label>
                      <Slider
                        value={[textSize]}
                        onValueChange={(value) => setTextSize(value[0])}
                        min={12}
                        max={72}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="image">
                  <div className="space-y-6">
                    <div>
                      <label className="block font-medium mb-2">Upload Image</label>
                      <div className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus-within:outline-none">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <ImagePlus className="w-10 h-10 text-gray-400" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-10 space-y-4">
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Product Summary</h3>
                  <div className="flex justify-between mb-1">
                    <span>Custom T-Shirt ({tshirtColor})</span>
                    <span>$29.99</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Customization</span>
                    <span>$5.00</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-300 flex justify-between font-bold">
                    <span>Total</span>
                    <span>$34.99</span>
                  </div>
                </div>
                
                <Button className="w-full py-6 bg-primary hover:bg-primary/90" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Customize;
