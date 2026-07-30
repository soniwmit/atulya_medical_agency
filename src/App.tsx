import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { CategoriesSection } from './components/CategoriesSection';
import { TrustSection } from './components/TrustSection';
import { WorkingProcess } from './components/WorkingProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { ContactCTA } from './components/ContactCTA';
import { AboutPage } from './components/AboutPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { SEOInspectorModal } from './components/SEOInspectorModal';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isSEOInspectorOpen, setIsSEOInspectorOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');

  // Global SPA tracking hook
  useTracker(activePage);

  // Synchronize Dark Mode Class on Root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleOpenWhatsAppModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col justify-between`}>
      
      {/* Dynamic SEO Head Tags & JSON-LD Schema Injection */}
      <SEOHead activePage={activePage} />

      <div>
        {/* Sticky Header */}
        <Header
          activePage={activePage}
          setActivePage={setActivePage}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')}
          onOpenSearchModal={() => setIsSearchModalOpen(true)}
        />

        {/* Page View Routing */}
        <main>
          {activePage === 'home' && (
            <>
              <Hero
                onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')}
                onOpenSearchModal={() => setIsSearchModalOpen(true)}
                onNavigateToServices={() => setActivePage('services')}
              />
              <WhyChooseUs />
              <ServicesSection
                onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')}
                onNavigateToServicesPage={() => setActivePage('services')}
              />
              <CategoriesSection
                onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')}
                onOpenSearchModal={() => setIsSearchModalOpen(true)}
              />
              <TrustSection />
              <WorkingProcess />
              <TestimonialsSection />
              <FAQSection onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />
              <GoogleMapSection />
              <ContactCTA onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />
            </>
          )}

          {activePage === 'about' && <AboutPage />}

          {activePage === 'services' && (
            <ServicesSection
              onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')}
              isStandalonePage={true}
            />
          )}

          {activePage === 'gallery' && <GalleryPage />}

          {activePage === 'testimonials' && <TestimonialsSection />}

          {activePage === 'faq' && (
            <FAQSection onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />
          )}

          {activePage === 'contact' && <ContactPage />}
        </main>
      </div>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')}
        onOpenSEOInspector={() => setIsSEOInspectorOpen(true)}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Search Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectMedicineForOrder={(medName) => handleOpenWhatsAppModal(medName)}
      />

      {/* SEO Schema Inspector Modal */}
      <SEOInspectorModal
        isOpen={isSEOInspectorOpen}
        onClose={() => setIsSEOInspectorOpen(false)}
      />

    </div>
  );
}
