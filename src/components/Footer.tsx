import React, { useState } from 'react';
import { 
  Cross, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Code,
  X
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/pharmacyData';
import { PageView } from '../types';

interface FooterProps {
  setActivePage: (page: PageView) => void;
  onOpenWhatsAppModal: () => void;
  onOpenSEOInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenWhatsAppModal,
  onOpenSEOInspector
}) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNav = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D47A1] flex items-center justify-center text-white shadow-md">
                <Cross className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black font-serif text-white tracking-tight">
                  Atulya <span className="text-blue-400">Medical</span> Agency
                </span>
                <p className="text-[10px] text-[#0A8F6A] uppercase font-bold tracking-widest">
                  Paliganj, Bihar 801110
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted medical store for genuine prescription drugs, surgical supplies, baby care, and daily healthcare products in Paliganj.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#0A8F6A] font-semibold bg-emerald-950/60 p-3 rounded-full border border-emerald-800/60">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>100% Genuine WHO-GMP Medicines</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-bold text-sm text-white font-serif">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 transition-colors">Medical Services</button></li>
              <li><button onClick={() => handleNav('gallery')} className="hover:text-emerald-400 transition-colors">Store Gallery</button></li>
              <li><button onClick={() => handleNav('testimonials')} className="hover:text-emerald-400 transition-colors">Customer Reviews</button></li>
              <li><button onClick={() => handleNav('faq')} className="hover:text-emerald-400 transition-colors">Pharmacy FAQs</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-sm text-white font-serif">Our Services</h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((svc) => (
                <li key={svc.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{svc.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Store Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-sm text-white font-serif">Contact Store</h3>
            
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-white hover:underline">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <button onClick={onOpenWhatsAppModal} className="font-bold text-emerald-400 hover:underline">
                  WhatsApp: +{BUSINESS_INFO.whatsappPhone}
                </button>
              </p>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <p className="font-bold text-white mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Hours
                </p>
                <p>Mon-Sat: 7:00 AM - 10:00 PM</p>
                <p>Sun: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & SEO Markup Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. | Developed by{' '}
           <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-slate-300">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-slate-300">Terms & Conditions</button>
            <span>•</span>
            <button onClick={() => setActiveLegalModal('disclaimer')} className="hover:text-slate-300">Medical Disclaimer</button>
            <span>•</span>
            <button
              onClick={onOpenSEOInspector}
              className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
            >
              <Code className="w-3.5 h-3.5" />
              <span>SEO Schema Inspector</span>
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-lg w-full text-slate-200 relative animate-scaleIn text-xs space-y-3">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base font-bold text-white font-serif capitalize">
              {activeLegalModal === 'privacy' && 'Privacy Policy'}
              {activeLegalModal === 'terms' && 'Terms & Conditions'}
              {activeLegalModal === 'disclaimer' && 'Medical Disclaimer'}
            </h3>

            {activeLegalModal === 'privacy' && (
              <p className="leading-relaxed text-slate-300">
                Atulya Medical Agency respects patient confidentiality. Personal health information, phone numbers, and uploaded prescription images shared via WhatsApp or web forms are strictly protected and used solely to process your medicine order in Paliganj.
              </p>
            )}

            {activeLegalModal === 'terms' && (
              <p className="leading-relaxed text-slate-300">
                Prescription medicines (Schedule H/H1) require a valid doctor's prescription before dispensing. Prices are subject to pharmaceutical MRP guidelines. Returns are accepted for sealed, undamaged goods as per drug store regulations.
              </p>
            )}

            {activeLegalModal === 'disclaimer' && (
              <p className="leading-relaxed text-slate-300">
                Information provided on this website is for educational and informational purposes only and does not substitute professional medical diagnosis or doctor advice. Always consult a registered medical practitioner.
              </p>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
