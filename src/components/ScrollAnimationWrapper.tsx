
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'slide-down';
  delay?: number;
  threshold?: number;
}

const ScrollAnimationWrapper = ({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      case 'slide-down':
        return 'scroll-animate';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
