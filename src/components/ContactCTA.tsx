import React from 'react';
import { Phone, MessageSquare, Cross } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface ContactCTAProps {
  onOpenWhatsAppModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="py-14 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          <Cross className="w-6 h-6 stroke-[2.5]" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-black font-serif tracking-tight mb-2">
          Need Medicines Urgently in Paliganj?
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8">
          Call us directly or send your doctor prescription on WhatsApp. Fast verification, genuine stock, and local home delivery.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>Call: {BUSINESS_INFO.formattedPhone}</span>
          </a>

          <button
            onClick={onOpenWhatsAppModal}
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Order Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
