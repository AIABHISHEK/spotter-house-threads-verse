
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryBanner from '@/components/home/CategoryBanner';
import CommunityShowcase from '@/components/home/CommunityShowcase';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import CustomizationCTA from '@/components/home/CustomizationCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CategoryBanner />
      <CustomizationCTA />
      <CommunityShowcase />
      <TestimonialSlider />
    </Layout>
  );
};

export default Index;
