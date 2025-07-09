
import React from 'react';
import { 
  Zap, 
  Clock, 
  Globe2, 
  Shield, 
  HeartHandshake, 
  Rocket,
  Award,
  Headphones
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Quick turnaround times without compromising on quality. Most projects delivered within 7-14 days."
    },
    {
      icon: Globe2,
      title: "Tamil & English Support",
      description: "Bilingual team providing seamless communication and content creation in both languages."
    },
    {
      icon: Rocket,
      title: "Advanced Automation",
      description: "Cutting-edge AI and automation tools to streamline your business processes and save time."
    },
    {
      icon: HeartHandshake,
      title: "Affordable Pricing",
      description: "Premium quality services at competitive rates. No hidden costs, transparent pricing structure."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "50+ successful projects with 98% client satisfaction rate and measurable business growth."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to ensure your business never stops running smoothly."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Top-notch security measures and reliable hosting solutions to protect your digital assets."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule, every single time."
    }
  ];

  return (
    <section className="py-20 bg-sf-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="sf-text-gradient">Scale Forge</span>?
          </h2>
          <p className="text-xl text-sf-text-muted max-w-3xl mx-auto">
            We don't just deliver services – we forge partnerships that scale your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-sf-dark-card p-6 rounded-xl border border-sf-divider sf-card-hover group text-center"
              >
                <div className="bg-sf-primary-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sf-primary-red/20 transition-colors">
                  <IconComponent className="text-sf-primary-red group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-white mb-3 group-hover:text-sf-primary-red transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sf-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sf-primary-red/10 to-transparent p-8 rounded-2xl border border-sf-primary-red/20">
            <h3 className="font-poppins text-2xl font-bold text-white mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-sf-text-muted mb-6">
              Join 500+ satisfied clients who have transformed their businesses with Scale Forge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-8 py-3 rounded-full transition-all duration-300 hover:sf-glow">
                Start Your Project
              </button>
              <button className="border border-sf-primary-red text-sf-primary-red hover:bg-sf-primary-red hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
