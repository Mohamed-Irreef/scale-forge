
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Code, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoModal from '@/components/VideoModal';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();
  const fullText = "Transform your business with cutting-edge digital marketing solutions.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const handleGetQuote = () => {
    navigate('/contact');
  };

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen mt-12 flex items-center justify-center sf-gradient-bg overflow-hidden pt-20">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sf-primary-red rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sf-primary-red rounded-full blur-3xl animate-pulse animate-delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse animate-delay-500"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-32 left-20 text-sf-primary-red opacity-20 animate-bounce animate-delay-100" size={40} />
          <Zap className="absolute top-48 right-32 text-sf-primary-red opacity-20 animate-bounce animate-delay-300" size={35} />
          <TrendingUp className="absolute bottom-32 left-32 text-sf-primary-red opacity-20 animate-bounce animate-delay-500" size={45} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8">
            {/* Main Heading with Enhanced Animation */}
            <div className="space-y-4">
              <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block animate-slide-down">Scale Your Brand.</span>
                <span className="block animate-slide-down animate-delay-200">
                  <span className="sf-text-gradient animate-pulse">
                    Forge Your Success.
                  </span>
                </span>
              </h1>
            </div>

            {/* Typewriter Effect */}
            <div className="animate-fade-in-up animate-delay-400 space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-sf-text-muted max-w-4xl mx-auto leading-relaxed min-h-[60px]">
                {displayText}
                <span className="animate-ping text-sf-primary-red">|</span>
              </p>
              
              {/* Secondary Text with Better Spacing */}
              <div className="animate-fade-in-up animate-delay-600 py-4">
                <p className="text-base sm:text-lg text-sf-text-muted max-w-3xl mx-auto leading-relaxed">
                  From stunning websites to powerful automation, we forge success stories that last.
                </p>
              </div>
            </div>

            {/* CTA Buttons with Improved Spacing */}
            <div className="animate-fade-in-up animate-delay-800 pt-8 pb-12">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  onClick={handleGetQuote}
                  className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-8 py-4 text-lg rounded-full transition-all duration-300 group hover-lift transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleWatchDemo}
                  className="border-2 border-sf-primary-red text-sf-primary-red hover:bg-sf-primary-red hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 group hover-lift transform hover:scale-105 bg-transparent backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "1+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className={`text-center hover-lift animate-fade-in-up animate-delay-${1000 + index * 100} transform hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sf-primary-red mb-2 animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-sf-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sf-text-muted rounded-full flex justify-center hover:border-sf-primary-red transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-sf-primary-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
