
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import SplashCursor from '@/components/SplashCursor';
import BackgroundMusic from '@/components/BackgroundMusic';

const Index = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-sf-black home-page">
      <SplashCursor/>
      <BackgroundMusic/>
      <Navigation />
      <HeroSection />
      
      <AnimatedSection animation="fade-up" delay={100}>
        <ServicesPreview />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-left" delay={200}>
        <WhyChooseUs />
      </AnimatedSection>
      
      <AnimatedSection animation="scale" delay={300}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={100}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
