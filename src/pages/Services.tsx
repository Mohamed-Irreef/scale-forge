
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceModal from '@/components/ServiceModal';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  MessageSquare, 
  ShoppingCart, 
  TrendingUp, 
  Video, 
  Search,
  GraduationCap,
  PenTool,
  ArrowRight,
  Check,
  Star,
  Clock,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SplashCursor from '@/components/SplashCursor';
import BackgroundMusic from '@/components/BackgroundMusic';

const Services = () => {
  useScrollToTop();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Website & App Development",
      description: "Create stunning, responsive websites and mobile applications that convert visitors into customers with modern design and seamless functionality.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First Approach", "CMS Integration"],
      pricing: "Starting from ₹8,000",
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      detailedDescription: "We create stunning, high-performance websites and mobile applications using the latest technologies. Our development process focuses on user experience, SEO optimization, and conversion rate optimization. From simple business websites to complex e-commerce platforms and mobile apps, we deliver solutions that drive results for your business.",
      deliveryTime: "2-4 weeks",
      clientsServed: "150+",
      rating: 4.9,
      packages: [
        {
          name: "Basic Website",
          price: "₹8,000",
          features: ["5 Pages", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"]
        },
        {
          name: "Business Website",
          price: "₹10,000",
          recommended: true,
          features: ["10 Pages", "CMS Integration", "Advanced SEO", "Analytics Setup", "3 Months Support", "Social Media Integration"]
        },
        {
          name: "E-commerce Website",
          price: "₹15,000",
          features: ["Unlimited Products", "Payment Gateway", "Inventory Management", "Order Tracking", "6 Months Support", "Mobile App"]
        }
      ]
    },
    {
      icon: Smartphone,
      title: "Social Media Marketing",
      description: "Build your brand presence across all social media platforms with engaging content, strategic campaigns, and community management.",
      features: ["Content Strategy", "Post Scheduling", "Community Management", "Analytics & Reporting", "Paid Advertising"],
      pricing: "Starting from ₹2,000/month",
      color: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-500/20",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop",
      detailedDescription: "Boost your brand's online presence with our comprehensive social media marketing strategies. We create engaging content, manage your social media accounts, run targeted ad campaigns, and build meaningful connections with your audience across all major platforms.",
      deliveryTime: "Ongoing",
      clientsServed: "20+",
      rating: 4.8
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Create a memorable brand identity with professional logo design, branding materials, and visual assets that make you stand out.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Brochures & Flyers", "Social Media Graphics"],
      pricing: "Starting from ₹2,000",
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-indigo-500/20",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      detailedDescription: "Create a memorable brand identity that stands out in the market. Our design team specializes in logo design, brand guidelines, marketing materials, and complete visual identity systems.",
      deliveryTime: "1-2 weeks",
      clientsServed: "10+",
      rating: 4.9
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Telegram Automation",
      description: "Automate customer support and engagement with intelligent chatbots that handle queries, bookings, and lead generation 24/7.",
      features: ["Chatbot Development", "Auto-Reply Setup", "Lead Capture", "Order Management", "Customer Support"],
      pricing: "Starting from ₹2,000",
      color: "text-green-400",
      gradient: "from-green-500/20 to-emerald-500/20",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
      detailedDescription: "Automate your customer support and engagement with intelligent chatbots for WhatsApp and Telegram. Our automation solutions handle customer queries, process orders, generate leads, and provide 24/7 support.",
      deliveryTime: "1-3 weeks",
      clientsServed: "20+",
      rating: 4.7
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Setup",
      description: "Launch your online store with complete e-commerce solutions including payment integration, inventory management, and order processing.",
      features: ["Online Store Setup", "Payment Gateway", "Inventory Management", "Order Processing", "Mobile App"],
      pricing: "Starting from ₹8,000",
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      detailedDescription: "Launch your online business with our comprehensive e-commerce solutions. We build feature-rich online stores with secure payment gateways, inventory management, order tracking, and mobile responsiveness.",
      deliveryTime: "3-6 weeks",
      clientsServed: "10+",
      rating: 4.8
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      description: "Attract and convert high-quality leads with strategic campaigns across Google Ads, Facebook Ads, and other digital channels.",
      features: ["Google Ads", "Facebook Ads", "Landing Pages", "Lead Magnets", "CRM Integration"],
      pricing: "Starting from ₹2,000/month",
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      detailedDescription: "Drive qualified leads to your business with our targeted lead generation campaigns. We use a combination of Google Ads, Facebook Ads, LinkedIn campaigns, and landing page optimization.",
      deliveryTime: "Ongoing",
      clientsServed: "20+",
      rating: 4.6
    },
    {
      icon: Video,
      title: "Video Editing & Reels",
      description: "Create engaging video content and viral social media reels that capture attention and drive engagement for your brand.",
      features: ["Video Editing", "Motion Graphics", "Social Media Reels", "YouTube Videos", "Brand Videos"],
      pricing: "Starting from ₹2,000/video",
      color: "text-red-400",
      gradient: "from-red-500/20 to-pink-500/20",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop",
      detailedDescription: "Create professional video content that engages your audience and drives results. From social media reels to corporate videos, we handle all aspects of video production and editing.",
      deliveryTime: "3-7 days",
      clientsServed: "10+",
      rating: 4.7
    },
    {
      icon: Search,
      title: "SEO & Google My Business",
      description: "Improve your online visibility and rank higher in search results with comprehensive SEO strategies and local business optimization.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Google My Business", "Local SEO"],
      pricing: "Starting from ₹5,000/month",
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-500/20",
      image: "https://images.unsplash.com/photo-1571677208775-05aa9c93f96d?w=800&h=400&fit=crop",
      detailedDescription: "Improve your search engine rankings and online visibility with our comprehensive SEO services. We optimize your website, manage your Google My Business profile, and implement local SEO strategies.",
      deliveryTime: "2-6 months",
      clientsServed: "10+",
      rating: 4.5
    },
    {
      icon: GraduationCap,
      title: "Online Course Platform",
      description: "Monetize your expertise with a complete e-learning platform featuring course creation tools, student management, and payment processing.",
      features: ["Course Platform", "Video Hosting", "Student Management", "Payment Integration", "Certificates"],
      pricing: "Starting from ₹8,000",
      color: "text-indigo-400",
      gradient: "from-indigo-500/20 to-blue-500/20",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      detailedDescription: "Build and monetize your knowledge with a professional e-learning platform. We create comprehensive course management systems with video hosting, student tracking, and integrated payment processing.",
      deliveryTime: "4-8 weeks",
      clientsServed: "5+",
      rating: 4.8
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Compelling content creation in Tamil and English that engages your audience and drives conversions across all digital platforms.",
      features: ["Blog Writing", "Website Content", "Social Media Copy", "Email Marketing", "SEO Content"],
      pricing: "Starting from ₹3,000/article",
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/20",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
      detailedDescription: "Professional content creation that engages your audience and drives results. We write compelling copy for websites, blogs, social media, and marketing campaigns in both Tamil and English.",
      deliveryTime: "2-5 days",
      clientsServed: "10+",
      rating: 4.6
    }
  ];

  const handleGetQuote = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleDirectQuote = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <Navigation />
      <SplashCursor/>
      <BackgroundMusic/>
      <div className="min-h-screen bg-sf-black pt-16">
        {/* Hero Section */}
        <section className="py-20 sf-gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="sf-text-gradient">Services</span>
            </h1>
            <p className="text-xl text-sf-text-muted max-w-3xl mx-auto mb-8">
              Comprehensive digital solutions designed to scale your business and forge your path to success
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-sf-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-sf-black rounded-2xl border border-sf-divider sf-card-hover transition-all duration-300 hover:border-sf-primary-red/50"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient || 'from-sf-primary-red/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`${service.color} p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={32} />
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="text-yellow-400 fill-current" size={14} />
                          <span className="text-sf-text-muted text-sm">{service.rating || '4.8'}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-poppins text-2xl font-bold text-white mb-4 group-hover:text-sf-primary-red transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-sf-text-muted mb-6 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="mb-6">
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-sf-text-muted">
                              <Check className="text-sf-primary-red mr-2 flex-shrink-0" size={14} />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {service.features.length > 4 && (
                          <p className="text-sf-primary-red text-sm mt-2">+{service.features.length - 4} more features</p>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-6 text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sf-text-muted">
                            <Clock size={14} className="mr-1" />
                            <span>{service.deliveryTime || '1-2 weeks'}</span>
                          </div>
                          <div className="flex items-center text-sf-text-muted">
                            <Users size={14} className="mr-1" />
                            <span>{service.clientsServed || '50+'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-sf-divider">
                        <div>
                          <div className="text-sf-primary-red font-bold text-xl">
                            {service.pricing}
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleGetQuote(service)}
                          className="bg-sf-primary-red hover:bg-sf-red-hover text-white rounded-full px-6 py-2 group/btn transition-all duration-300 hover:sf-glow"
                        >
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 border-2 border-sf-primary-red/0 group-hover:border-sf-primary-red/30 rounded-2xl transition-all duration-300 pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sf-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-sf-primary-red/10 to-transparent p-12 rounded-2xl border border-sf-primary-red/20">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-sf-text-muted mb-8">
                Let's discuss your project and create a custom solution that fits your needs and budget
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleDirectQuote}
                  className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:sf-glow"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/portfolio'}
                  className="border-2 border-sf-primary-red text-sf-primary-red hover:bg-sf-primary-red hover:text-white px-8 py-4 text-lg rounded-full"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      
      <Footer />
    </>
  );
};

export default Services;
