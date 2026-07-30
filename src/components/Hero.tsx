import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Upload, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface HeroProps {
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppModal,
  onOpenSearchModal,
  onNavigateToServices,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-16 lg:py-24">
      {/* Geometric Background Accents */}
      <div className="geometric-accent w-96 h-96 bg-blue-600/20 top-[-100px] left-[-100px] opacity-70"></div>
      <div className="geometric-accent w-80 h-80 bg-emerald-500/20 bottom-[-50px] right-[10%] opacity-60"></div>

      {/* Background Healthcare Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/src/assets/images/pharmacy_hero_banner_1785395965403.jpg"
          alt="Atulya Medical Agency Pharmacy Interior"
          className="w-full h-full object-cover object-center opacity-20 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-[#0D47A1]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Location Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0A8F6A] animate-pulse"></span>
              <span>Trusted Since 2012 • Paliganj, Bihar</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-[1.15] text-white tracking-tight">
              Your Trusted <span className="text-blue-400">Pharmacy</span> & <span className="text-[#0A8F6A]">Healthcare</span> Partner in Paliganj.
            </h1>

            {/* Sub-headline Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Providing 100% genuine medicines, baby care, surgical supplies, and personal health products at affordable prices. Your health is our top priority.
            </p>

            {/* Primary Action Buttons - Rounded Full Pill style */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D47A1] hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-900/40 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenWhatsAppModal}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F6A] hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href="#map-section"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 backdrop-blur-sm transition-all hover:scale-105"
              >
                <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Search Trigger Bar */}
            <div className="pt-2">
              <div 
                onClick={onOpenSearchModal}
                className="p-3.5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-full cursor-pointer max-w-xl transition-all flex items-center justify-between group shadow-xl"
              >
                <div className="flex items-center gap-3 text-slate-400 text-sm pl-2">
                  <Search className="w-5 h-5 text-[#0A8F6A] group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm">Search medicines (e.g. Paracetamol, Insulin, BP Monitor...)</span>
                </div>
                <span className="bg-[#0A8F6A] group-hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 transition-colors">
                  Search <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Geometric Stats Bar */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-8 flex-wrap">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Genuine</span>
              </div>
              <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">24/7</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support</span>
              </div>
              <div className="w-px h-8 bg-slate-800 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">15k+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Prescription Upload & WhatsApp Fast Track Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 shadow-2xl relative overflow-hidden text-slate-800 dark:text-white border-slate-700/60">
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0A8F6A]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#0D47A1] text-white flex items-center justify-center font-bold shadow-md">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base font-serif">Quick WhatsApp Order</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Order in 1 Minute by uploading doctor slip</p>
                </div>
              </div>

              {/* Card Interactive Feature list */}
              <div className="space-y-3 bg-slate-100/80 dark:bg-slate-900/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0A8F6A] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">Take a photo of your Doctor's Prescription or medicine list.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0A8F6A] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">Attach photo in our WhatsApp form & confirm delivery address.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0A8F6A] text-white flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</div>
                  <p className="text-xs text-slate-700 dark:text-slate-300">Get instant price estimate & fast delivery in Paliganj.</p>
                </div>
              </div>

              {/* Upload CTA Button inside Card */}
              <button
                onClick={onOpenWhatsAppModal}
                className="w-full py-3.5 px-4 rounded-full bg-[#0A8F6A] hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.01]"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Prescription on WhatsApp</span>
              </button>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0A8F6A]" />
                  Strict Patient Data Privacy
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  5 Min Response Time
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
