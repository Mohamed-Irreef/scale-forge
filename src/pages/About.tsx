
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, Rocket, Linkedin, ExternalLink } from 'lucide-react';
import memeber1 from '../assets/irreef.png';
import naresh from '../assets/naresh1.png';
import SplashCursor from '@/components/SplashCursor';
import BackgroundMusic from '@/components/BackgroundMusic';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Focused",
      description: "We're dedicated to scaling businesses through innovative digital marketing solutions that deliver measurable results."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every strategy is tailored to your unique business needs, ensuring personalized attention and customized solutions."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, delivering premium quality work that exceeds expectations."
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "Staying ahead of digital trends and technologies to provide cutting-edge solutions for modern businesses."
    }
  ];

  const team = [
    {
      name: "Mohamed Irreef S",
      role: "Web Developer",
      image: memeber1,
      description: "Web developer with 2+ years of experience helping businesses scale and succeed online.",
      linkedin: "https://www.linkedin.com/in/-mohamed-ireef-s-23-/",
      specialties: ["Digital Strategy", "Business Development", "Client Relations"]
    },
    {
      name: "Naresh B",
      role: "Digital Marketing Specialist",
      image: naresh,
      description: "Creative digital marketer focused on brand growth, online strategy, and high-impact campaigns.",
      linkedin: "https://www.linkedin.com/in/naresh-b-665471316/",
      specialties: ["Brand Design", "Business Development", "Visual Identity"]
    }
  ];

  const timeline = [
  {
    year: "2024",
    title: "Scale Forge Begins",
    description: "Founded with a passion to empower businesses through impactful digital marketing and web development solutions.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  },
  {
    year: "2025",
    title: "Early Growth & Client Wins",
    description: "Served 50+ clients in the first year, built strong partnerships, and launched multiple high-performing websites and campaigns.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
  }
];


  return (
    <>
      <Navigation />
      <SplashCursor/>
      <BackgroundMusic/>
      <div className="min-h-screen bg-sf-black pt-16">
        {/* Hero Section */}
        <section className="py-20 sf-gradient-bg relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-6 animate-text-reveal">
              About <span className="sf-text-gradient">Scale Forge</span>
            </h1>
            <p className="text-xl text-sf-text-muted max-w-3xl mx-auto animate-fade-in-up">
              We're passionate about helping businesses forge their path to digital success through innovative marketing solutions and cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-sf-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-sf-text-muted mb-6 leading-relaxed">
                  Scale Forge was born from a simple observation: many talented businesses were struggling to establish their digital presence effectively. Traditional marketing agencies were either too expensive or didn't understand the unique challenges faced by small and medium businesses in India.
                </p>
                <p className="text-sf-text-muted mb-6 leading-relaxed">
                  We started with a mission to bridge this gap by providing premium digital marketing services at affordable prices, with a focus on measurable results and genuine partnerships. Our bilingual approach (Tamil & English) ensures that language is never a barrier to success.
                </p>
                <p className="text-sf-text-muted leading-relaxed">
                  Today, we've helped over 50+ businesses scale their operations, from local restaurants to tech startups, each with their own unique success story.
                </p>
              </div>
              <div className="relative animate-slide-in-right image-hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Scale Forge Team"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-sf-primary-red text-white p-6 rounded-xl hover-lift">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-sf-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-text-reveal">
                Our Values
              </h2>
              <p className="text-xl text-sf-text-muted max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-sf-dark-card p-6 rounded-xl border border-sf-divider sf-card-hover text-center group animate-scale-in hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-sf-primary-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sf-primary-red/20 transition-colors">
                      <IconComponent className="text-sf-primary-red" size={32} />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sf-text-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section className="py-20 bg-sf-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-text-reveal">
                Meet Our Team
              </h2>
              <p className="text-xl text-sf-text-muted max-w-3xl mx-auto">
                The passionate professionals behind your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-sf-black p-6 rounded-xl border border-sf-divider sf-card-hover text-center group animate-scale-in hover-lift"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="image-hover-scale mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-sf-primary-red"
                    />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-sf-primary-red font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sf-text-muted text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-sf-primary-red/10 text-sf-primary-red px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* LinkedIn Profile */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sf-primary-red hover:text-white transition-colors group-hover:bg-sf-primary-red text-white px-4 py-2 rounded-full"
                  >
                    <Linkedin className="mr-2" size={16} />
                    <span className="text-sm">Connect on LinkedIn</span>
                    <ExternalLink className="ml-1" size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Timeline Section */}
        <section className="py-20 bg-sf-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-text-reveal">
                Our Journey
              </h2>
              <p className="text-xl text-sf-text-muted">
                Key milestones in our growth story
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sf-primary-red"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center mb-12 animate-slide-in-left" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-sf-primary-red rounded-full border-4 border-sf-black animate-pulse"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-sf-dark-card p-6 rounded-xl border border-sf-divider sf-card-hover flex items-center gap-6 hover-lift">
                    <div className="image-hover-scale flex-shrink-0 ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sf-primary-red font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-poppins text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sf-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sf-dark-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6 animate-text-reveal">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-sf-text-muted mb-8">
              Join hundreds of businesses who have scaled their success with Scale Forge
            </p>
            <button className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:sf-glow hover-lift">
              Let's Build Something Great Together
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
