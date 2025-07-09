
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import men1 from '@/assets/men1.jpeg';
import men2 from '@/assets/men2.jpeg';
import men3 from '@/assets/men3.jpeg';
import men4 from '@/assets/men4.avif';
import men5 from '@/assets/men5.webp';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Local Restaurant Owner",
      image: men4,
      rating: 5,
      review: "Scale Forge transformed our restaurant's online presence completely. The website looks amazing and our online orders increased by 300% within just 2 months. Their WhatsApp automation saves us hours every day!"
    },
    {
      name: "Rajesh Kumar",
      business: "Fitness Trainer",
      image: men1,
      rating: 5,
      review: "The online course platform they built for me is incredible. I can now reach students across Tamil Nadu and have generated ₹5 lakhs in the first month itself. Professional work at very reasonable prices."
    },
    {
      name: "Meera Patel",
      business: "Fashion Boutique",
      image: men5,
      rating: 5,
      review: "Their social media marketing strategy doubled our Instagram followers and significantly increased foot traffic to our store. The content they create is always on-brand and engaging."
    },
    {
      name: "Arjun Reddy",
      business: "Tech Startup",
      image: men2,
      rating: 5,
      review: "From logo design to complete brand identity, Scale Forge handled everything perfectly. Their attention to detail and creative approach helped us stand out in a competitive market."
    },
    {
      name: "Abrahman",
      business: "Coaching Institute",
      image: men3,
      rating: 5,
      review: "The lead generation campaigns brought us 150+ quality inquiries in just one month. Their SEO work got us to the first page of Google for our target keywords. Excellent ROI!"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-sf-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-sf-text-muted max-w-3xl mx-auto">
            Don't just take our word for it – hear from businesses we've helped scale
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-sf-black rounded-2xl p-8 md:p-12 border border-sf-divider relative">
            {/* Quote Icon */}
            <Quote className="text-sf-primary-red opacity-20 w-16 h-16 absolute top-4 left-4" />
            
            {/* Current Testimonial */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current w-6 h-6" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-sf-text-muted mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-sf-primary-red"
                />
                <div className="text-left">
                  <h4 className="font-poppins text-lg font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sf-text-muted">
                    {testimonials[currentIndex].business}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sf-primary-red/10 hover:bg-sf-primary-red/20 text-sf-primary-red p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sf-primary-red/10 hover:bg-sf-primary-red/20 text-sf-primary-red p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-sf-primary-red' : 'bg-sf-divider'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-sf-primary-red mb-2">50+</div>
              <div className="text-sf-text-muted">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sf-primary-red mb-2">98%</div>
              <div className="text-sf-text-muted">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sf-primary-red mb-2">50+</div>
              <div className="text-sf-text-muted">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sf-primary-red mb-2">4.9★</div>
              <div className="text-sf-text-muted">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
