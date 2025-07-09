
import React from 'react';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] bg-sf-black border-2 border-sf-primary-red/20 p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-4 pb-0 flex-shrink-0">
          <DialogTitle className="text-xl md:text-2xl font-bold text-white flex items-center">
            <Play className="mr-2 text-sf-primary-red" size={20} />
            Scale Forge - Digital Solutions Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="relative aspect-video bg-sf-dark-card rounded-xl overflow-hidden mb-4">
            {/* Video Player */}
            
            <iframe
  src="https://www.youtube.com/embed/LWIWx7cmKWo?autoplay=1&si=dNbvQ2hWKUmgMnRe"
  title="Scale Forge Demo Video"
  className="w-full h-full"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  allow="autoplay; encrypted-media"
/>

          </div>
          
          {/* Video Description */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              See How We Transform Businesses
            </h3>
            <p className="text-sf-text-muted leading-relaxed text-sm md:text-base">
              Watch this comprehensive demo showcasing our digital solutions in action. 
              From stunning website designs to powerful automation tools, see how we've 
              helped 500+ businesses scale their operations and achieve remarkable growth.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Website Development",
                "Mobile Apps", 
                "Social Media Marketing",
                "E-commerce Solutions",
                "Automation Tools"
              ].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-sf-primary-red/10 text-sf-primary-red rounded-full text-xs md:text-sm border border-sf-primary-red/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
