
import React, { useState } from 'react';
import { MessageCircle, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const admins = [
    {
      id: 1,
      name: "Admin 1",
      number: "+91 9361757753",
      whatsappLink: "https://wa.me/919361757753?text=Hi! I'm interested in Scale Forge services. Can you help me?",
      status: "online"
    },
    {
      id: 2,
      name: "Admin 2", 
      number: "+91 96774 75924",
      whatsappLink: "https://wa.me/919677475924?text=Hi! I'm interested in Scale Forge services. Can you help me?",
      status: "online"
    }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleAdminClick = (admin: typeof admins[0]) => {
    window.open(admin.whatsappLink, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        {/* Admin Selection Panel */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-scale-in w-80 sm:w-96">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Scale Forge Support</h3>
                  <p className="text-xs opacity-90">Choose an admin to chat with</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Admin List */}
            <div className="p-2">
              {admins.map((admin) => (
                <button
                  key={admin.id}
                  onClick={() => handleAdminClick(admin)}
                  className="w-full p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center space-x-3 group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <User size={20} className="text-green-600" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900 text-sm">{admin.name}</div>
                    <div className="text-gray-500 text-xs">{admin.number}</div>
                    <div className="text-green-600 text-xs font-medium">● Online</div>
                  </div>
                  <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MessageCircle size={16} />
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-3 text-center">
              <p className="text-xs text-gray-600">
                Powered by <span className="font-semibold text-green-600">WhatsApp</span>
              </p>
            </div>
          </div>
        )}

        {/* Chat Button */}
        

        {/* Notification Dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse">
            <div className="w-full h-full bg-red-500 rounded-full animate-ping"></div>
          </div>
        )}
      </div>

      {/* Mobile Optimization - Floating Helper Text */}
      {!isOpen && (
        <div className="fixed bottom-20 right-4 sm:hidden bg-green-500 text-white px-3 py-1 rounded-full text-xs animate-bounce shadow-lg">
          Chat with us!
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
