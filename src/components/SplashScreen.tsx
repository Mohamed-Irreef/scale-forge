
import React, { useState, useEffect } from 'react';
import { Zap, Code, Palette, TrendingUp } from 'lucide-react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-sf-black flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sf-primary-red rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sf-primary-red rounded-full blur-3xl opacity-10 animate-pulse animate-delay-300"></div>
      </div>

      {/* Main Content */}
      <div className="relative text-center space-y-8 animate-fade-in-up">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-r from-sf-primary-red to-red-600 rounded-xl flex items-center justify-center shadow-2xl">
              <Zap className="text-white h-8 w-8 animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </div>
          <div>
            <h1 className="font-poppins text-4xl font-bold text-white">
              Scale Forge
            </h1>
            <p className="text-sf-text-muted text-lg">Digital Solutions</p>
          </div>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="animate-bounce animate-delay-100">
            <Code className="text-sf-primary-red h-8 w-8" />
          </div>
          <div className="animate-bounce animate-delay-200">
            <Palette className="text-sf-primary-red h-8 w-8" />
          </div>
          <div className="animate-bounce animate-delay-300">
            <TrendingUp className="text-sf-primary-red h-8 w-8" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white animate-pulse">
            Forging Your Digital Success
          </h2>
          <p className="text-sf-text-muted">
            Preparing your transformative experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-sf-dark-card rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-sf-primary-red to-red-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sf-text-muted text-sm">
            {progress}% Complete
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
