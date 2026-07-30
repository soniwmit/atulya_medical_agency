import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  Cross, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { PageView } from '../types';

interface HeaderProps {
  activePage: PageView;
  setActivePage: (page: PageView) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  isDarkMode,
  setIsDarkMode,
  onOpenWhatsAppModal,
  onOpenSearchModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageView) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm transition-colors duration-200">
      {/* Top Emergency & Info Banner */}
      <div className="bg-[#0D47A1] text-white text-xs py-2 px-4 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>{BUSINESS_INFO.location}</span>
            </span>
            <span className="hidden md:inline text-blue-300">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-blue-100">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              <span>Mon-Sat: 7 AM - 10 PM | Sun: 8 AM - 8 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 bg-blue-900/60 text-emerald-300 px-3 py-0.5 rounded-full text-[11px] font-bold border border-blue-700/50">
              <ShieldCheck className="w-3 h-3 text-emerald-300" />
              100% Genuine Medicines
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="font-bold text-white hover:text-emerald-300 flex items-center gap-1 underline decoration-emerald-400"
            >
              <Phone className="w-3 h-3" />
              <span>24/7 Helpline: {BUSINESS_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0D47A1] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              <Cross className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-serif">
                  Atulya <span className="text-[#0D47A1] dark:text-blue-400">Medical</span>
                </span>
                <span className="bg-blue-50 dark:bg-blue-950 text-[#0D47A1] dark:text-blue-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                  Agency
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold hidden sm:block">
                Paliganj, Bihar 801110
              </p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link cursor-pointer ${
                    isActive
                      ? 'text-[#0D47A1] dark:text-blue-400 font-extrabold border-b-2 border-[#0D47A1] pb-1'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#0D47A1] dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Medicine Trigger */}
            <button
              onClick={onOpenSearchModal}
              title="Search Medicines"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-bold border border-slate-200 dark:border-slate-700"
            >
              <Search className="w-4 h-4 text-[#0A8F6A]" />
              <span className="hidden md:inline">Search</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle Dark/Light Mode"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Call Now Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0D47A1] hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order Button */}
            <button
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0A8F6A] hover:bg-emerald-600 text-white text-xs font-bold shadow-md shadow-emerald-900/20 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Order</span>
              <span className="sm:hidden">Order</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 shadow-xl animate-fadeIn">
          <div className="mb-3 px-3 py-2 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
            <span className="font-semibold">Need urgent medicines in Paliganj?</span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold underline text-blue-600 dark:text-blue-400">
              Call {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
