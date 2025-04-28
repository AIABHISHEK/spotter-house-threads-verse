
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] opacity-10 bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-lg md:text-xl">
              Spotter House was born from a simple idea: everyone deserves to express their unique identity through what they wear.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  Empower individuals to express their identity through trendy, customizable, and inclusive T-shirts.
                </p>
                <p className="text-gray-700">
                  We believe that fashion should be accessible, personal, and meaningful. Our platform makes it easy for anyone to create or find t-shirts that truly represent who they are.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  Become the go-to destination for bold, creative, and collaborative fashion — where everyone can wear or create what they love.
                </p>
                <p className="text-gray-700">
                  We're building a future where fashion is not just consumed but co-created, where self-expression is celebrated, and where community drives innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brand Values */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Expression</h3>
              <p className="text-gray-700">
                We create spaces where individuals can authentically express themselves through fashion and design.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Creativity</h3>
              <p className="text-gray-700">
                We foster imagination and innovation, constantly pushing the boundaries of what's possible in fashion.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-700">
                We build connections among like-minded creators and fashion enthusiasts, celebrating collective creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How We Started</h2>
            
            <div className="prose max-w-none">
              <p>
                Spotter House began in 2019 when our founder, Jane Doe, became frustrated with the limited options for expressing individuality through everyday clothing. As a graphic designer with a passion for fashion, she wanted to create a platform where creativity and wearability could coexist.
              </p>
              
              <p>
                What started as a small studio offering custom-designed t-shirts for friends quickly evolved into something bigger. People loved the ability to wear designs that reflected their personalities, interests, and values.
              </p>
              
              <p>
                By 2020, we launched our online platform with a simple mission: to democratize fashion design and make self-expression accessible to everyone. We introduced our customization tool, allowing users to create their own designs from scratch.
              </p>
              
              <p>
                In 2021, we expanded to include community features, enabling designers and artists to share their creations and earn royalties when their designs were purchased. This collaborative approach transformed Spotter House from a simple t-shirt company into a creative community.
              </p>
              
              <p>
                Today, Spotter House continues to grow as a platform where expression, creativity, and community intersect. We're committed to sustainable practices, inclusive sizing, and creating opportunities for independent designers around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="aspect-square">
                <img 
                  src="https://randomuser.me/api/portraits/women/79.jpg" 
                  alt="Jane Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">Jane Doe</h3>
                <p className="text-gray-500 mb-4">Founder & Creative Director</p>
                <p className="text-sm text-gray-700">
                  Jane brings over 15 years of design experience and a passion for accessible fashion.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="aspect-square">
                <img 
                  src="https://randomuser.me/api/portraits/men/52.jpg" 
                  alt="John Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">John Smith</h3>
                <p className="text-gray-500 mb-4">Chief Technology Officer</p>
                <p className="text-sm text-gray-700">
                  John leads our development team, making sure our platform is intuitive and cutting-edge.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="aspect-square">
                <img 
                  src="https://randomuser.me/api/portraits/women/31.jpg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">Sarah Johnson</h3>
                <p className="text-gray-500 mb-4">Head of Community</p>
                <p className="text-sm text-gray-700">
                  Sarah fosters our creative community and manages collaborations with artists.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="aspect-square">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Wong" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">Michael Wong</h3>
                <p className="text-gray-500 mb-4">Production Manager</p>
                <p className="text-sm text-gray-700">
                  Michael ensures that all our products meet high quality standards and sustainability goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sustainability */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to Sustainability</h2>
            
            <div className="prose max-w-none">
              <p>
                At Spotter House, we believe that fashion shouldn't come at the expense of our planet. We're committed to sustainable practices throughout our production process:
              </p>
              
              <ul>
                <li>We use 100% organic cotton for all our t-shirts, grown without harmful pesticides or fertilizers.</li>
                <li>Our production facilities run on renewable energy wherever possible.</li>
                <li>We use water-based, non-toxic inks for all our printing processes.</li>
                <li>Our packaging is made from recycled materials and is fully recyclable.</li>
                <li>We participate in carbon offset programs to minimize our environmental impact.</li>
              </ul>
              
              <p>
                We're continuously working to improve our sustainability efforts and transparency. Through our annual sustainability reports, we share our progress and set new goals for reducing our ecological footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Us CTA */}
      <div className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')] opacity-10 bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg mb-8">
              Whether you're a designer looking to showcase your work, or someone who wants to express their unique style, Spotter House has something for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6">
                Start Designing
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6">
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
