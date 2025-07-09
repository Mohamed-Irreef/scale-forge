
import React from 'react';
import { X, Check, Star, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ServiceModalProps {
  service: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
    color: string;
    features: string[];
    pricing: string;
    image?: string;
    detailedDescription?: string;
    deliveryTime?: string;
    clientsServed?: string;
    rating?: number;
    packages?: {
      name: string;
      price: string;
      features: string[];
      recommended?: boolean;
    }[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const IconComponent = service.icon;

  // Default values for missing data
  const defaultImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop";
  const defaultDescription = service.detailedDescription || service.description;
  
  // Service-specific defaults based on title
  const getServiceDefaults = () => {
    const title = service.title.toLowerCase();
    
    if (title.includes('video') || title.includes('reel')) {
      return {
        packages: [
          {
            name: "Basic Video Package",
            price: "₹2,000",
            features: ["1 Video Edit", "Basic Transitions", "Music Addition", "1080p Export", "2 Revisions"]
          },
          {
            name: "Professional Package",
            price: "₹5,000",
            recommended: true,
            features: ["3 Video Edits", "Advanced Effects", "Custom Graphics", "4K Export", "Unlimited Revisions", "Color Grading"]
          },
          {
            name: "Premium Package",
            price: "₹8,000",
            features: ["5+ Video Edits", "Motion Graphics", "Custom Animations", "Multi-format Export", "Rush Delivery", "Dedicated Editor"]
          }
        ],
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop",
        detailedDescription: "Create professional video content that engages your audience and drives results. From social media reels to corporate videos, we handle all aspects of video production and editing with cutting-edge tools and creative expertise.",
        deliveryTime: "3-7 days",
        clientsServed: "250+",
        rating: 4.7
      };
    }
    
    if (title.includes('seo') || title.includes('google')) {
      return {
        packages: [
          {
            name: "Local SEO",
            price: "₹8,000/month",
            features: ["Google My Business Setup", "Local Keywords", "Citation Building", "Monthly Reports", "Basic Analytics"]
          },
          {
            name: "Advanced SEO",
            price: "₹10,000/month",
            recommended: true,
            features: ["Complete SEO Audit", "Keyword Research", "Content Optimization", "Link Building", "Technical SEO", "Weekly Reports"]
          },
          {
            name: "Enterprise SEO",
            price: "₹15,000/month",
            features: ["Comprehensive Strategy", "Competitor Analysis", "Content Creation", "Advanced Analytics", "Priority Support", "Dedicated Manager"]
          }
        ],
        image: "https://images.unsplash.com/photo-1571677208775-05aa9c93f96d?w=800&h=400&fit=crop",
        detailedDescription: "Improve your search engine rankings and online visibility with our comprehensive SEO services. We optimize your website, manage your Google My Business profile, and implement local SEO strategies to drive organic traffic.",
        deliveryTime: "2-6 months",
        clientsServed: "180+",
        rating: 4.5
      };
    }
    
    if (title.includes('course') || title.includes('learning')) {
      return {
        packages: [
          {
            name: "Basic Platform",
            price: "₹10,000",
            features: ["Course Upload System", "Student Dashboard", "Basic Analytics", "Payment Integration", "Mobile Responsive"]
          },
          {
            name: "Professional Platform",
            price: "₹15,000",
            recommended: true,
            features: ["Advanced Features", "Quiz System", "Certificate Generation", "Progress Tracking", "Discussion Forums", "6 Months Support"]
          },
          {
            name: "Enterprise Platform",
            price: "₹20,000",
            features: ["Custom Features", "Multi-instructor Support", "Advanced Analytics", "White-label Solution", "API Integration", "1 Year Support"]
          }
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
        detailedDescription: "Build and monetize your knowledge with a professional e-learning platform. We create comprehensive course management systems with video hosting, student tracking, and integrated payment processing.",
        deliveryTime: "4-8 weeks",
        clientsServed: "40+",
        rating: 4.8
      };
    }
    
    if (title.includes('content') || title.includes('writing')) {
      return {
        packages: [
          {
            name: "Basic Content",
            price: "₹3,000/article",
            features: ["Blog Articles", "SEO Optimized", "Research Included", "2 Revisions", "Tamil/English"]
          },
          {
            name: "Professional Content",
            price: "₹5,000/article",
            recommended: true,
            features: ["Premium Research", "Advanced SEO", "Meta Descriptions", "Social Media Posts", "Unlimited Revisions", "Faster Delivery"]
          },
          {
            name: "Enterprise Content",
            price: "₹8,000/article",
            features: ["Industry Expert Writers", "Comprehensive Research", "Multiple Formats", "Content Strategy", "Priority Support", "Rush Delivery"]
          }
        ],
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=400&fit=crop",
        detailedDescription: "Professional content creation that engages your audience and drives results. We write compelling copy for websites, blogs, social media, and marketing campaigns in both Tamil and English.",
        deliveryTime: "2-5 days",
        clientsServed: "500+",
        rating: 4.6
      };
    }
    
    // Default fallback
    return {
      packages: [
        {
          name: "Basic Package",
          price: "8,000",
          features: ["Professional Service", "Quality Delivery", "Basic Support", "1 Month Warranty"]
        },
        {
          name: "Standard Package", 
          price: "₹10,000",
          recommended: true,
          features: ["Everything in Basic", "Extended Support", "Priority Delivery", "3 Months Warranty", "Additional Features"]
        },
        {
          name: "Premium Package",
          price: "₹15,000", 
          features: ["Everything in Standard", "Premium Support", "Rush Delivery", "6 Months Warranty", "Advanced Features", "Custom Solutions"]
        }
      ],
      image: defaultImage,
      detailedDescription: defaultDescription,
      deliveryTime: "1-2 weeks",
      clientsServed: "50+",
      rating: 4.8
    };
  };

  const serviceDefaults = getServiceDefaults();
  const packages = service.packages || serviceDefaults.packages;
  const image = service.image || serviceDefaults.image;
  const detailedDescription = service.detailedDescription || serviceDefaults.detailedDescription;
  const deliveryTime = service.deliveryTime || serviceDefaults.deliveryTime;
  const clientsServed = service.clientsServed || serviceDefaults.clientsServed;
  const rating = service.rating || serviceDefaults.rating;

  const handleGetQuote = () => {
    onClose();
    // Navigate to contact form
    window.location.href = '/contact';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-sf-black border border-sf-divider">
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 text-sf-text-muted hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className={`${service.color} p-3 rounded-xl bg-sf-dark-card`}>
              <IconComponent size={32} />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-white mb-2">
                {service.title}
              </DialogTitle>
              <div className="flex items-center space-x-4 text-sm text-sf-text-muted">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400" size={16} />
                  <span>{rating}/5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{deliveryTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span>{clientsServed} clients served</span>
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <DialogDescription className="sr-only">
          Service details for {service.title}
        </DialogDescription>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Details */}
          <div className="space-y-6">
            {/* Service Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">About This Service</h3>
              <p className="text-sf-text-muted leading-relaxed">
                {detailedDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">What's Included</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sf-text-muted">
                    <Check className="text-sf-primary-red mr-3 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Pricing */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Pricing Packages</h3>
              <div className="space-y-4">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all duration-300 hover:border-sf-primary-red ${
                      pkg.recommended
                        ? 'border-sf-primary-red bg-sf-primary-red/5'
                        : 'border-sf-divider bg-sf-dark-card/50'
                    }`}
                  >
                    {pkg.recommended && (
                      <div className="bg-sf-primary-red text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                        Recommended
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-white">{pkg.name}</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-sf-primary-red">{pkg.price}</div>
                      </div>
                    </div>
                    <ul className="space-y-1 mb-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-sf-text-muted flex items-center">
                          <Check className="text-green-400 mr-2 flex-shrink-0" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleGetQuote}
                      className={`w-full ${
                        pkg.recommended
                          ? 'bg-sf-primary-red hover:bg-sf-red-hover'
                          : 'bg-sf-dark-card hover:bg-sf-primary-red border border-sf-primary-red'
                      } text-white`}
                    >
                      Choose {pkg.name}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-sf-primary-red/10 to-transparent p-6 rounded-xl border border-sf-primary-red/20">
              <h4 className="font-semibold text-white mb-2">Need a Custom Quote?</h4>
              <p className="text-sm text-sf-text-muted mb-4">
                Get a personalized quote based on your specific requirements.
              </p>
              <Button 
                onClick={handleGetQuote}
                className="w-full bg-sf-primary-red hover:bg-sf-red-hover text-white"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
