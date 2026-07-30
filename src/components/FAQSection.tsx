import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQ_LIST, BUSINESS_INFO } from '../data/pharmacyData';

interface FAQSectionProps {
  onOpenWhatsAppModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsAppModal }) => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Top 10 questions about buying medicines, WhatsApp ordering, delivery, and store guidelines in Paliganj.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-10">
          {FAQ_LIST.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 pt-3 bg-slate-50/50 dark:bg-slate-900/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <h3 className="font-bold text-base font-serif">Have a specific medicine question?</h3>
            <p className="text-xs text-emerald-200">Our licensed pharmacist in Paliganj is ready to help you directly.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenWhatsAppModal}
              className="px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
