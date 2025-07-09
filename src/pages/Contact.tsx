
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { sendContactEmail } from '@/utils/emailService';
import axios from 'axios';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send as SendIcon, 
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { log } from 'console';
import SplashCursor from '@/components/SplashCursor';
import BackgroundMusic from '@/components/BackgroundMusic';

const Contact = () => {
  useScrollToTop();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Website Development",
    "App Development", 
    "Social Media Marketing",
    "Graphic Design",
    "Telegram Bot Development",
    "E-Commerce Setup",
    "Lead Generation",
    "Video Editing",
    "SEO Services",
    "Online Course Platform",
    "Content Writing",
    "Other"
  ];

  const sendToTelegram = async (formData: any) => {
    const telegramBotToken = "7573882250:AAHHjZgi1CxCyFkO7dtScp4vmdcXNW2sGZs";
    const chatId = "5674316253";
    
    const message = `🆕 *New Contact Form Submission*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🔧 *Service:* ${formData.service || 'Not specified'}\n` +
      `💬 *Message:* ${formData.message}\n\n` +
      `🌐 *Submitted from:* Scale Forge Website`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      const response1 = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: 5729642920,
          text: message,
          parse_mode: 'Markdown'
        })
      });


      if (!response.ok) {
        throw new Error('Failed to send to Telegram');
      }

      return true;
    } catch (error) {
      console.error('Telegram send error:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send professional emails
      const sentEmail= await axios.post('http://localhost:5000/send-email',formData);
      if (sentEmail.status == 200) {
       // Email sent successfully
      }else{
        console.error("Failed to send email");
        toast({
          title: "Error",
          description: "Failed to send email. Please try again later.",
          variant: "destructive"
        });
        return;
      }
      
      
      // Send to Telegram
      const telegramSent = await sendToTelegram(formData);
      
      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for contacting us! We'll get back to you within 24 hours via email or WhatsApp.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+91 93617 57753 , +91 96774 75924",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email", 
      info: "scaleforge.services@gmail.com",
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Chennai, Tamil Nadu",
      description: "Serving clients across India"
    },
    {
      icon: SendIcon,
      title: "Telegram",
      info: "@scaleforge_support",
      description: "Quick support via Telegram Bot"
    }
  ];

  return (
    <>
      <Navigation />
      <SplashCursor/>
      <BackgroundMusic/>
      <div className="min-h-screen bg-sf-black pt-16">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-20 sf-gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Get In <span className="sf-text-gradient">Touch</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-sf-text-muted max-w-3xl mx-auto px-2 sm:px-4">
                Ready to scale your business? Let's discuss your project and create a custom solution that fits your needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8 sm:py-12 md:py-20 bg-sf-dark-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              
              {/* Contact Form */}
              <AnimatedSection animation="slide-left" className="order-2 lg:order-1">
                <div className="bg-sf-black p-4 sm:p-6 md:p-8 rounded-xl border border-sf-divider">
                  <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sf-text-muted mb-2 text-sm md:text-base">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-sf-dark-card border border-sf-divider text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:border-sf-primary-red transition-colors text-sm md:text-base"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sf-text-muted mb-2 text-sm md:text-base">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-sf-dark-card border border-sf-divider text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:border-sf-primary-red transition-colors text-sm md:text-base"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sf-text-muted mb-2 text-sm md:text-base">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-sf-dark-card border border-sf-divider text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:border-sf-primary-red transition-colors text-sm md:text-base"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sf-text-muted mb-2 text-sm md:text-base">Service Interested</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-sf-dark-card border border-sf-divider text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:border-sf-primary-red transition-colors text-sm md:text-base"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sf-text-muted mb-2 text-sm md:text-base">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-sf-dark-card border border-sf-divider text-white px-3 md:px-4 py-2 md:py-3 rounded-lg focus:outline-none focus:border-sf-primary-red transition-colors resize-none text-sm md:text-base"
                        placeholder="Tell us about your project requirements..."
                        required
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sf-primary-red hover:bg-sf-red-hover text-white py-3 md:py-4 text-base md:text-lg rounded-lg transition-all duration-300 hover:sf-glow group disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <SendIcon className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div>
                    <h2 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                      Contact Information
                    </h2>
                    <p className="text-sf-text-muted mb-4 sm:mb-6 md:mb-8 text-sm md:text-base">
                      Get in touch with us through any of these channels. We're here to help you scale your business.
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <AnimatedSection 
                          key={index}
                          animation="fade-up"
                          delay={index * 100}
                          className="bg-sf-black p-3 sm:p-4 md:p-6 rounded-xl border border-sf-divider sf-card-hover group"
                        >
                          <div className="flex items-start space-x-3 md:space-x-4">
                            <div className="bg-sf-primary-red/10 p-2 md:p-3 rounded-lg group-hover:bg-sf-primary-red/20 transition-colors flex-shrink-0">
                              <IconComponent className="text-sf-primary-red" size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="font-poppins text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                                {info.title}
                              </h3>
                              <div className="text-sf-primary-red font-medium mb-1 text-xs sm:text-sm md:text-base break-words">
                                {info.info}
                              </div>
                              <p className="text-sf-text-muted text-xs md:text-sm">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </AnimatedSection>
                      );
                    })}
                  </div>

                  {/* Business Hours */}
                  <AnimatedSection animation="scale" delay={500}>
                    <div className="bg-sf-black p-3 sm:p-4 md:p-6 rounded-xl border border-sf-divider">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="bg-sf-primary-red/10 p-2 md:p-3 rounded-lg flex-shrink-0">
                          <Clock className="text-sf-primary-red" size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-poppins text-sm sm:text-base md:text-lg font-semibold text-white mb-2">
                            Business Hours
                          </h3>
                          <div className="space-y-1 text-xs md:text-sm">
                            <div className="flex justify-between">
                              <span className="text-sf-text-muted">Monday - Friday:</span>
                              <span className="text-white">9:00 AM - 7:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sf-text-muted">Saturday:</span>
                              <span className="text-white">10:00 AM - 5:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sf-text-muted">Sunday:</span>
                              <span className="text-white">Emergency Only</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <AnimatedSection animation="fade-up">
          <section className="py-8 sm:py-12 md:py-20 bg-sf-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {[
                  {
                    question: "How long does it take to complete a project?",
                    answer: "Project timelines vary based on complexity. Most websites take 7-14 days, while complex applications may take 4-8 weeks. We'll provide a detailed timeline during consultation."
                  },
                  {
                    question: "Do you provide ongoing support after project completion?",
                    answer: "Yes! We offer 30 days of free support post-launch, plus ongoing maintenance packages to keep your digital assets updated and secure."
                  },
                  {
                    question: "Can you work with clients outside Tamil Nadu?",
                    answer: "Absolutely! While we're based in Chennai, we work with clients across India and internationally. All communication happens digitally."
                  },
                  {
                    question: "What's included in your pricing?",
                    answer: "Our pricing includes design, development, testing, and initial setup. We provide transparent quotes with no hidden costs. Additional services like hosting and maintenance are optional."
                  }
                ].map((faq, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 100}
                    className="bg-sf-dark-card p-3 sm:p-4 md:p-6 rounded-xl border border-sf-divider"
                  >
                    <h3 className="font-poppins text-sm sm:text-base md:text-lg font-semibold text-white mb-2 md:mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sf-text-muted text-xs sm:text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="scale">
          <section className="py-8 sm:py-12 md:py-20 bg-sf-dark-card">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-sf-text-muted mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                Ready to scale your business? Get a free consultation and custom quote today.
              </p>
              <Button className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 hover:sf-glow">
                Schedule Free Consultation
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
