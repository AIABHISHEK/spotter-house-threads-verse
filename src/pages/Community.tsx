
import React, { useState } from 'react';
import { Heart, MessageSquare, Search, Filter } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const communityDesigns = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    title: 'Urban Wilderness',
    description: 'A fusion of city skylines with nature elements',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    likes: 124,
    comments: 18,
    tags: ['urban', 'nature', 'graphic'],
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    title: 'Minimalist Landscape',
    description: 'Simple lines creating a powerful visual',
    user: {
      name: 'Alex Morgan',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    likes: 98,
    comments: 7,
    tags: ['minimal', 'landscape', 'line-art'],
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'Typography Explosion',
    description: 'Bold typography that makes a statement',
    user: {
      name: 'Jamie Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    likes: 156,
    comments: 23,
    tags: ['typography', 'bold', 'statement'],
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'Abstract Vibes',
    description: 'Colorful abstract pattern that pops',
    user: {
      name: 'Taylor Kim',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    likes: 84,
    comments: 12,
    tags: ['abstract', 'colorful', 'pattern'],
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'Geometric Fusion',
    description: 'Precise geometric shapes blended together',
    user: {
      name: 'Jordan Smith',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    likes: 112,
    comments: 9,
    tags: ['geometric', 'precise', 'shapes'],
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Retro Revival',
    description: 'Classic vintage style with modern elements',
    user: {
      name: 'Casey Jones',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    likes: 78,
    comments: 14,
    tags: ['retro', 'vintage', 'classic'],
  },
];

const testimonials = [
  {
    id: '1',
    content: "I love being part of the Spotter House community. I've been designing for 2 years now and I'm always inspired by the creativity here!",
    user: {
      name: 'Miguel Lopez',
      avatar: 'https://randomuser.me/api/portraits/men/72.jpg',
      title: 'Graphic Designer',
    },
  },
  {
    id: '2',
    content: "The feedback I get from other community members has helped me grow as a designer. Plus, it's amazing to see people wearing my designs!",
    user: {
      name: 'Priya Sharma',
      avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
      title: 'Illustrator',
    },
  },
  {
    id: '3',
    content: "What I love about Spotter House is how easy they make it to turn creative ideas into actual products. The platform is incredibly user-friendly.",
    user: {
      name: 'David Chen',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      title: 'Digital Artist',
    },
  },
];

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-4">Community Designs</h1>
            <p className="text-lg text-gray-600">
              Explore designs created by our talented community. Get inspired, leave feedback, and even purchase community-created designs.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search designs, tags, or creators"
                  className="pl-10 py-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={18} />
                Filter
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Submit Your Design
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="popular" className="mb-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="popular" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communityDesigns.map((design) => (
                  <div key={design.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={design.image} 
                        alt={design.title}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{design.title}</h3>
                      <p className="text-gray-600 mb-4">{design.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {design.tags.map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <img 
                            src={design.user.avatar}
                            alt={design.user.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span className="text-sm font-medium">{design.user.name}</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button className="flex items-center text-gray-500 hover:text-primary">
                            <Heart size={16} className="mr-1" />
                            <span className="text-xs">{design.likes}</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-primary">
                            <MessageSquare size={16} className="mr-1" />
                            <span className="text-xs">{design.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline">Load More</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="text-center py-16">
                <p>Select the "Popular" tab to see community designs</p>
              </div>
            </TabsContent>
            
            <TabsContent value="featured">
              <div className="text-center py-16">
                <p>Select the "Popular" tab to see community designs</p>
              </div>
            </TabsContent>
            
            <TabsContent value="following">
              <div className="text-center py-16">
                <p>Select the "Popular" tab to see community designs</p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Community Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
                  <p className="italic text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.user.avatar}
                      alt={testimonial.user.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{testimonial.user.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.user.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Creative Community</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Share your designs, get feedback from other creators, and even earn money when people purchase your designs.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100">Create an Account</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
