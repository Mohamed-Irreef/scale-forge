import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Eye, Filter, Globe, Smartphone, Palette, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SplashCursor from '@/components/SplashCursor';
import BackgroundMusic from '@/components/BackgroundMusic';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Websites', 'Apps', 'Branding', 'E-Commerce', 'Marketing'];

  // Service Cards Data
  const serviceCards = [
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <Globe className="w-8 h-8" />,
      description: 'Boost your online presence with targeted campaigns',
      features: ['SEO Optimization', 'Meta Ads', 'Content Strategy', 'Analytics & Reporting'],
      gradient: 'from-blue-500 to-purple-600',
      projects: 10
    },
    {
      id: 'branding',
      title: 'Branding & Design',
      icon: <Palette className="w-8 h-8" />,
      description: 'Create memorable brand identities that resonate',
      features: ['Logo Design', 'Brand Guidelines', 'Print Materials', 'Visual Identity'],
      gradient: 'from-pink-500 to-red-600',
      projects: 20
    },
    {
      id: 'websites',
      title: 'Website Development',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Modern, responsive websites that convert visitors',
      features: ['Responsive Design', 'CMS Integration', 'SEO Ready', 'Fast Loading'],
      gradient: 'from-green-500 to-teal-600',
      projects: 10
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      icon: <ShoppingCart className="w-8 h-8" />,
      description: 'Complete online stores that drive sales',
      features: ['Payment Integration', 'Inventory Management', 'Mobile Optimized', 'Security Features'],
      gradient: 'from-orange-500 to-yellow-600',
      projects: 15
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Restaurant Website",
      category: "Websites",
      description: "Responsive website with online ordering system and table reservation",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB"],
      client: "Spice Garden Restaurant",
      results: "300% increase in online orders"
    },
    {
      id: 2,
      title: "Fitness Training App",
      category: "Apps",
      description: "Mobile app for personal trainers to manage clients and workout plans",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Stripe"],
      client: "FitLife Coaching",
      results: "₹5L revenue in first month"
    },
    {
      id: 3,
      title: "Fashion Brand Identity",
      category: "Branding",
      description: "Complete brand identity design including logo, business cards, and packaging",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      client: "Elegance Fashion",
      results: "50% increase in brand recognition"
    },
    {
      id: 4,
      title: "E-Commerce Store",
      category: "E-Commerce",
      description: "Full-featured online store with inventory management and payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Shopify", "React", "Stripe", "AWS"],
      client: "TechGadgets Store",
      results: "₹10L+ monthly revenue"
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Marketing",
      description: "Instagram and Facebook marketing campaign for local business",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop",
      technologies: ["Facebook Ads", "Instagram", "Canva", "Analytics"],
      client: "Urban Cafe",
      results: "200% follower growth"
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "Websites",
      description: "Online learning platform with video streaming and progress tracking",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "AWS", "Video.js"],
      client: "SkillAcademy",
      results: "1000+ students enrolled"
    },
    {
      id: 7,
      title: "Healthcare App",
      category: "Apps",
      description: "Telemedicine app connecting patients with doctors for consultations",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["React Native", "WebRTC", "Firebase", "Razorpay"],
      client: "HealthConnect",
      results: "2000+ consultations completed"
    },
    {
      id: 8,
      title: "Real Estate Website",
      category: "Websites",
      description: "Property listing website with advanced search and virtual tours",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Maps API"],
      client: "PrimeProperties",
      results: "40% increase in inquiries"
    },
    {
      id: 9,
      title: "Tech Startup Branding",
      category: "Branding",
      description: "Modern brand identity for AI-powered startup including pitch deck design",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
      technologies: ["Adobe Creative Suite", "Figma", "After Effects"],
      client: "AI Innovations",
      results: "₹50L funding raised"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Navigation />
      <SplashCursor/>
      <BackgroundMusic/>
      <div className="min-h-screen bg-sf-black pt-16">
        {/* Hero Section */}
        <section className="py-20 sf-gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="sf-text-gradient animate-pulse">Portfolio</span>
            </h1>
            <p className="text-xl text-sf-text-muted max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Explore our successful projects and see how we've helped businesses scale their digital presence
            </p>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="py-20 bg-sf-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
                Our Expertise
              </h2>
              <p className="text-xl text-sf-text-muted animate-fade-in-up animate-delay-200">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {serviceCards.map((service, index) => (
                <div
                  key={service.id}
                  className={`group relative overflow-hidden rounded-xl border border-sf-divider hover:border-sf-primary-red transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-6 bg-sf-black/80 backdrop-blur-sm h-full">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins text-xl font-semibold text-white mb-3 group-hover:text-sf-primary-red transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sf-text-muted mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-sf-text-muted flex items-center">
                          <div className="w-1.5 h-1.5 bg-sf-primary-red rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Projects Count */}
                    <div className="text-center pt-4 border-t border-sf-divider">
                      <div className="text-2xl font-bold text-sf-primary-red">{service.projects}+</div>
                      <div className="text-xs text-sf-text-muted">Completed Projects</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-sf-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105 ${
                    activeFilter === category
                      ? 'bg-sf-primary-red text-white sf-glow'
                      : 'bg-sf-dark-card text-sf-text-muted border border-sf-divider hover:text-white hover:border-sf-primary-red'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-sf-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-sf-dark-card rounded-xl overflow-hidden border border-sf-divider sf-card-hover group animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-sf-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button className="bg-sf-primary-red text-white p-3 rounded-full hover:bg-sf-red-hover transition-colors transform hover:scale-110">
                          <Eye size={20} />
                        </button>
                        <button className="bg-sf-primary-red text-white p-3 rounded-full hover:bg-sf-red-hover transition-colors transform hover:scale-110">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-sf-primary-red/10 text-sf-primary-red px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="text-xs text-sf-text-muted">
                        {project.client}
                      </div>
                    </div>

                    <h3 className="font-poppins text-xl font-semibold text-white mb-3 group-hover:text-sf-primary-red transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sf-text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-sf-black text-sf-text-muted px-2 py-1 rounded text-xs border border-sf-divider hover:border-sf-primary-red transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="bg-sf-black p-3 rounded-lg">
                      <div className="text-xs text-sf-text-muted mb-1">Results:</div>
                      <div className="text-sf-primary-red font-semibold text-sm">
                        {project.results}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-2 border-sf-primary-red text-sf-primary-red hover:bg-sf-primary-red hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                Load More Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-sf-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
                Success by the Numbers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "₹70,000+", label: "Revenue Generated" },
                { value: "50+", label: "Industries Served" }
              ].map((stat, index) => (
                <div key={index} className={`text-center animate-fade-in-up transform hover:scale-110 transition-transform duration-300`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold text-sf-primary-red mb-2 animate-pulse">{stat.value}</div>
                  <div className="text-sf-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sf-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-sf-text-muted mb-8 animate-fade-in-up animate-delay-200">
              Let's create something amazing together. Your project could be our next showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:sf-glow transform hover:scale-105 animate-fade-in-up animate-delay-400">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-2 border-sf-primary-red text-sf-primary-red hover:bg-sf-primary-red hover:text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-500">
                View More Work
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
