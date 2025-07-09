
import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm Scale Forge Assistant Bot. I'm here to help you with any questions about our digital marketing services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToTelegram = async (userMessage: string, botResponse: string) => {
    const telegramBotToken = "7573882250:AAHHjZgi1CxCyFkO7dtScp4vmdcXNW2sGZs";
    const chatId = "@scaleforge_support";
    
    const message = `🤖 *Scale Forge Assistant Bot - Chat Log*\n\n` +
      `👤 *User:* ${userMessage}\n` +
      `🤖 *Bot Response:* ${botResponse}\n\n` +
      `⏰ *Time:* ${new Date().toLocaleString()}\n` +
      `🌐 *Source:* Scale Forge Website`;

    try {
      await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
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
    } catch (error) {
      console.error('Failed to send to Telegram:', error);
    }
  };

  const predefinedResponses = {
    'pricing': "💰 Our pricing varies based on your specific needs:\n\n• Website Development: ₹8,000 - ₹15,000\n• Social Media Marketing: ₹8,000/month onwards\n• Graphic Design: ₹5,000 onwards\n• E-commerce Setup: ₹15,000 onwards\n• Telegram Bot Development: ₹2,000 onwards\n\nWould you like a detailed quote for any specific service?",
    'services': "🚀 We offer comprehensive digital solutions:\n\n• Web & App Development\n• Social Media Marketing\n• SEO & Digital Marketing\n• Graphic Design & Branding\n• E-commerce Solutions\n• Telegram Bot Development\n• Video Editing & Content Creation\n\nWhich service interests you most?",
    'portfolio': "🎨 We've completed 500+ successful projects with 98% client satisfaction! Our portfolio includes:\n\n• Modern responsive websites\n• E-commerce platforms\n• Telegram bots & automation\n• Brand identity designs\n• Marketing campaigns\n\nVisit our Portfolio page to see our latest work and client success stories!",
    'contact': "📞 Ready to get started? Here's how to reach us:\n\n• Email: scaleforge.services@gmail.com\n• Phone: +91-93617-57753\n• Telegram: @scaleforge_support\n• Office: Chennai, Tamil Nadu\n\nYou can also click 'Get Quote' on any service for instant consultation!",
    'timeline': "⏰ Project timelines depend on complexity:\n\n• Basic Websites: 1-2 weeks\n• E-commerce Sites: 3-4 weeks\n• Mobile Apps: 4-6 weeks\n• Telegram Bots: 3-7 days\n• Full Marketing Campaigns: 2-4 weeks\n• Branding Projects: 1-2 weeks\n\nWe'll provide exact timelines after understanding your specific requirements!",
    'support': "🛟 We provide comprehensive support:\n\n• 24/7 technical assistance via Telegram\n• 6 months free maintenance\n• Lifetime technical support\n• Priority response for clients\n• Regular updates & backups\n\nYour success is our priority!",
    'hello': "👋 Hello! Great to see you here! I'm your virtual assistant at Scale Forge. I can help you with:\n\n• Service information & pricing\n• Portfolio & past work\n• Contact details & quotes\n• Project timelines\n• Support options\n\nWhat would you like to know?",
    'team': "👥 Our expert team includes:\n\n• Senior Web Developers\n• UI/UX Designers\n• Digital Marketing Specialists\n• Telegram Bot Developers\n• SEO Experts\n• Content Creators\n• Project Managers\n\nBased in Chennai, we serve clients globally with local expertise and international standards!",
    'quote': "📋 Getting a quote is easy! You can:\n\n• Click 'Get Quote' on any service card\n• Visit our Contact page\n• Call us directly: +91-93617-57753\n• Message us on Telegram: @scaleforge_support\n\nWe'll provide a detailed proposal within 24 hours!",
    'telegram': "📱 We specialize in Telegram bot development! Our services include:\n\n• Custom Telegram bots\n• Business automation\n• Customer support bots\n• E-commerce integration\n• Payment processing\n• Multi-language support\n\nContact us to build your custom Telegram solution!",
    'default': "🤔 I'd be happy to help! You can ask me about:\n\n• Our services & pricing\n• Portfolio & past work\n• Contact information\n• Project timelines\n• Getting quotes\n• Our team & expertise\n• Telegram bot development\n\nWhat specific information are you looking for?"
  };

  const quickButtons = [
    { text: "🚀 Our Services", key: "services" },
    { text: "💰 Pricing Info", key: "pricing" },
    { text: "🎨 View Portfolio", key: "portfolio" },
    { text: "📞 Contact Us", key: "contact" },
    { text: "📋 Get Quote", key: "quote" },
    { text: "📱 Telegram Bots", key: "telegram" }
  ];

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Bot response with typing simulation
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = predefinedResponses.default;

      Object.entries(predefinedResponses).forEach(([key, value]) => {
        if (lowerText.includes(key) && key !== 'default') {
          response = value;
        }
      });

      // Special handling for specific queries
      if (lowerText.includes('price') || lowerText.includes('cost')) {
        response = predefinedResponses.pricing;
      } else if (lowerText.includes('service') || lowerText.includes('what do you do')) {
        response = predefinedResponses.services;
      } else if (lowerText.includes('time') || lowerText.includes('how long')) {
        response = predefinedResponses.timeline;
      } else if (lowerText.includes('telegram') || lowerText.includes('bot')) {
        response = predefinedResponses.telegram;
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);

      // Send conversation to Telegram
      sendToTelegram(text, response);
    }, 1500);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-sf-primary-red to-red-600 hover:from-sf-red-hover hover:to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          <Bot size={24} className="relative z-10" />
          <Sparkles className="absolute -top-1 -right-1 text-yellow-300" size={12} />
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-sf-primary-red/20 animate-scale-in flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-sf-primary-red to-red-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Bot className="text-sf-primary-red" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Scale Forge Assistant Bot</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs opacity-90">Connected to Telegram</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl shadow-md ${
                    message.sender === 'user'
                      ? 'bg-sf-primary-red text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-red-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-md border border-gray-200 shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons */}
          <div className="p-3 border-t bg-white">
            <div className="flex flex-wrap gap-1 mb-3">
              {quickButtons.map((button) => (
                <button
                  key={button.key}
                  onClick={() => handleSendMessage(button.text)}
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-sf-primary-red hover:text-white text-gray-700 rounded-full transition-all duration-200 border border-gray-200 hover:border-sf-primary-red"
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sf-primary-red focus:border-transparent text-gray-800 bg-white placeholder-gray-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="bg-sf-primary-red hover:bg-sf-red-hover disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
