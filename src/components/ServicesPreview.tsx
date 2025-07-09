
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceModal from './ServiceModal';

const ServicesPreview = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Globe,
      title: "Website & App Development",
      description: "Modern, responsive websites and mobile apps that convert visitors into customers.",
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      detailedDescription: "We create stunning, high-performance websites and mobile applications using the latest technologies. Our development process focuses on user experience, SEO optimization, and conversion rate optimization. From simple business websites to complex e-commerce platforms and mobile apps, we deliver solutions that drive results for your business.",
      deliveryTime: "2-4 weeks",
      clientsServed: "150+",
      rating: 4.9,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First Approach", "CMS Integration"],
      pricing: "Starting from ₹8,000",
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
      description: "Engaging campaigns across all platforms to build your brand presence.",
      color: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-500/20",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop",
      detailedDescription: "Boost your brand's online presence with our comprehensive social media marketing strategies. We create engaging content, manage your social media accounts, run targeted ad campaigns, and build meaningful connections with your audience across all major platforms including Instagram, Facebook, LinkedIn, and YouTube.",
      deliveryTime: "Ongoing",
      clientsServed: "200+",
      rating: 4.8,
      features: ["Content Strategy", "Post Scheduling", "Community Management", "Analytics & Reporting", "Paid Advertising"],
      pricing: "Starting from ₹2,000/month",
      packages: [
        {
          name: "Starter Plan",
          price: "₹2,000/month",
          features: ["2 Platforms", "12 Posts/Month", "Basic Analytics", "Community Management"]
        },
        {
          name: "Growth Plan",
          price: "₹5,000/month",
          recommended: true,
          features: ["4 Platforms", "24 Posts/Month", "Advanced Analytics", "Paid Ads Management", "Monthly Strategy Call"]
        },
        {
          name: "Premium Plan",
          price: "₹10,000/month",
          features: ["All Platforms", "40 Posts/Month", "Video Content", "Influencer Outreach", "Weekly Strategy Calls", "Dedicated Manager"]
        }
      ]
    },
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Eye-catching logos, branding materials, and visual identity design.",
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-indigo-500/20",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      detailedDescription: "Create a memorable brand identity that stands out in the market. Our design team specializes in logo design, brand guidelines, marketing materials, and complete visual identity systems. We help businesses establish a professional and cohesive brand image across all touchpoints.",
      deliveryTime: "1-2 weeks",
      clientsServed: "300+",
      rating: 4.9,
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Brochures & Flyers", "Social Media Graphics"],
      pricing: "Starting from ₹5,000",
      packages: [
        {
          name: "Logo Package",
          price: "₹3,000",
          features: ["3 Logo Concepts", "2 Revisions", "High-Resolution Files", "Basic Brand Guidelines"]
        },
        {
          name: "Brand Identity",
          price: "₹5,000",
          recommended: true,
          features: ["Complete Logo Design", "Brand Guidelines", "Business Card Design", "Letterhead Design", "Social Media Kit", "Unlimited Revisions"]
        },
        {
          name: "Complete Branding",
          price: "₹10,000",
          features: ["Everything in Brand Identity", "Brochure Design", "Packaging Design", "Marketing Materials", "Brand Strategy Consultation"]
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Telegram Automation",
      description: "Smart chatbots and automation to handle customer queries 24/7.",
      color: "text-green-400",
      gradient: "from-green-500/20 to-emerald-500/20",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
      detailedDescription: "Automate your customer support and engagement with intelligent chatbots for WhatsApp and Telegram. Our automation solutions handle customer queries, process orders, generate leads, and provide 24/7 support, helping you improve customer satisfaction while reducing operational costs.",
      deliveryTime: "1-3 weeks",
      clientsServed: "100+",
      rating: 4.7,
      features: ["Chatbot Development", "Auto-Reply Setup", "Lead Capture", "Order Management", "Customer Support"],
      pricing: "Starting from ₹2,000",
      packages: [
        {
          name: "Basic Bot",
          price: "₹2,000",
          features: ["Simple Auto-Reply", "FAQ Responses", "Lead Capture", "Basic Analytics"]
        },
        {
          name: "Smart Bot",
          price: "₹5,000",
          recommended: true,
          features: ["Advanced Conversations", "Order Processing", "Payment Integration", "CRM Integration", "Detailed Analytics"]
        },
        {
          name: "Enterprise Bot",
          price: "₹7,000",
          features: ["AI-Powered Responses", "Multi-Language Support", "Advanced Integrations", "Custom Workflows", "Priority Support"]
        }
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Setup",
      description: "Complete online store solutions with payment integration and inventory management.",
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      detailedDescription: "Launch your online business with our comprehensive e-commerce solutions. We build feature-rich online stores with secure payment gateways, inventory management, order tracking, and mobile responsiveness. Perfect for businesses looking to sell products or services online.",
      deliveryTime: "3-6 weeks",
      clientsServed: "80+",
      rating: 4.8,
      features: ["Online Store Setup", "Payment Gateway", "Inventory Management", "Order Processing", "Mobile App"],
      pricing: "Starting from ₹8,000",
      packages: [
        {
          name: "Starter Store",
          price: "₹8,000",
          features: ["Up to 50 Products", "Basic Payment Gateway", "Order Management", "Customer Dashboard"]
        },
        {
          name: "Business Store",
          price: "₹10,000",
          recommended: true,
          features: ["Unlimited Products", "Multiple Payment Options", "Inventory Management", "Analytics Dashboard", "SEO Optimization", "3 Months Support"]
        },
        {
          name: "Enterprise Store",
          price: "₹15,000",
          features: ["Custom Features", "Multi-Vendor Support", "Advanced Analytics", "Priority Support", "1 Year Maintenance"]
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Lead Generation",
      description: "Strategic campaigns to attract and convert high-quality leads for your business.",
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      detailedDescription: "Drive qualified leads to your business with our targeted lead generation campaigns. We use a combination of Google Ads, Facebook Ads, LinkedIn campaigns, and landing page optimization to attract potential customers who are ready to buy your products or services.",
      deliveryTime: "Ongoing",
      clientsServed: "120+",
      rating: 4.6,
      features: ["Google Ads", "Facebook Ads", "Landing Pages", "Lead Magnets", "CRM Integration"],
      pricing: "Starting from ₹10,000/month",
      packages: [
        {
          name: "Starter Campaign",
          price: "₹2,000/month",
          features: ["Google Ads Setup", "Basic Landing Page", "Lead Tracking", "Monthly Reports"]
        },
        {
          name: "Growth Campaign",
          price: "₹8,000/month",
          recommended: true,
          features: ["Multi-Platform Ads", "A/B Testing", "CRM Integration", "Lead Nurturing", "Bi-weekly Optimization"]
        },
        {
          name: "Scale Campaign",
          price: "₹10,000/month",
          features: ["Advanced Targeting", "Video Ads", "Retargeting Campaigns", "Custom Funnels", "Weekly Strategy Calls", "Dedicated Manager"]
        }
      ]
    },
    {
      icon: Video,
      title: "Video Editing & Reels",
      description: "Professional video content and engaging social media reels that go viral.",
      color: "text-red-400",
      gradient: "from-red-500/20 to-pink-500/20",
      rating: 4.7
    },
    {
      icon: Search,
      title: "SEO & Google My Business",
      description: "Boost your online visibility and rank higher in search results.",
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-500/20",
      rating: 4.5
    },
    {
      icon: GraduationCap,
      title: "Online Course Platform",
      description: "Complete e-learning platforms to monetize your knowledge and expertise.",
      color: "text-indigo-400",
      gradient: "from-indigo-500/20 to-blue-500/20",
      rating: 4.8
    },
    {
      icon: PenTool,
      title: "Content Writing",
      description: "Compelling content in Tamil & English that engages and converts your audience.",
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/20",
      rating: 4.6
    }
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-sf-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-sf-text-muted max-w-3xl mx-auto">
            Comprehensive digital solutions to scale your business and forge your path to success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-sf-black rounded-2xl border border-sf-divider sf-card-hover cursor-pointer transition-all duration-300 hover:border-sf-primary-red/50"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient || 'from-sf-primary-red/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${service.color} p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} />
                    </div>
                    {service.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="text-yellow-400 fill-current" size={14} />
                        <span className="text-sf-text-muted text-sm">{service.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-poppins text-xl font-bold text-white mb-4 group-hover:text-sf-primary-red transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sf-text-muted mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    onClick={() => handleLearnMore(service)}
                    className="text-sf-primary-red hover:text-white hover:bg-sf-primary-red p-1 h-auto font-medium group/btn transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-sf-primary-red/0 group-hover:border-sf-primary-red/30 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:sf-glow">
              View All Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ServicesPreview;
