import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';
import { GALLERY_IMAGES } from '../data/pharmacyData';
import { GalleryImage } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'front', label: 'Store Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'products', label: 'Products' },
    { id: 'equipment', label: 'Medical Equipment' },
    { id: 'customers', label: 'Store Interior' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    setIsZoomed(false);
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    setIsZoomed(false);
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            Store Visual Tour
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
            Atulya Medical Agency Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Take a look inside our clean, well-stocked medical agency in Paliganj, Bihar.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <span className="self-end p-2 rounded-full bg-white/20 text-white backdrop-blur-md">
                  <ZoomIn className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-bold text-xs text-white line-clamp-1">{img.title}</h3>
                  <p className="text-[10px] text-slate-300 line-clamp-1">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          
          {/* Top Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-3 z-50">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              title="Toggle Zoom"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-50"
            title="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center overflow-auto p-2">
            <img
              src={filteredImages[activeImageIndex].imageUrl}
              alt={filteredImages[activeImageIndex].title}
              className={`max-h-[70vh] rounded-2xl object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="font-bold text-base font-serif">
                {filteredImages[activeImageIndex].title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {filteredImages[activeImageIndex].caption}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-50"
            title="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}
    </div>
  );
};
