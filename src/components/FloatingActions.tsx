import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900/90 dark:bg-slate-800 text-white shadow-xl hover:bg-slate-800 dark:hover:bg-slate-700 transition-all pointer-events-auto border border-slate-700 hover:scale-110 active:scale-95"
          title="Back To Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="p-3.5 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-500 transition-all pointer-events-auto hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20"
        title="Call Atulya Medical Agency"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        className="p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-600 transition-all pointer-events-auto hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20 animate-bounce"
        title="WhatsApp Order & Support"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

    </div>
  );
};
