import React, { useState } from 'react';
import { 
  Pill, 
  FlaskConical, 
  Syringe, 
  Stethoscope, 
  Dumbbell, 
  Sparkles, 
  Droplets, 
  Baby, 
  Sparkle, 
  Activity, 
  Heart,
  Search,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { FEATURED_CATEGORIES, SAMPLE_MEDICINES } from '../data/pharmacyData';

interface CategoriesSectionProps {
  onOpenWhatsAppModal: () => void;
  onOpenSearchModal: () => void;
}

const categoryIconMap: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Capsule: <Pill className="w-5 h-5 text-indigo-600 dark:text-indigo-400 rotate-45" />,
  Bottle: <FlaskConical className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  Syringe: <Syringe className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-yellow-500" />,
  Droplets: <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  Baby: <Baby className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
  Sparkle: <Sparkle className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
  Activity: <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
  Heart: <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
};

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onOpenWhatsAppModal,
  onOpenSearchModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMedicines = selectedCategory 
    ? SAMPLE_MEDICINES.filter(m => m.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    : SAMPLE_MEDICINES.slice(0, 6);

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#0A8F6A] dark:text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              Complete Store Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white mt-3 tracking-tight">
              Featured Medicine & Healthcare Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Click any category to view common items or search our entire inventory in Paliganj.
            </p>
          </div>

          <button
            onClick={onOpenSearchModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-xs hover:border-[#0A8F6A] transition-colors shadow-sm"
          >
            <Search className="w-4 h-4 text-[#0A8F6A]" />
            <span>Search All 3000+ Items</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {FEATURED_CATEGORIES.map((cat, index) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0D47A1] text-white border-[#0D47A1] shadow-lg shadow-blue-900/30 scale-[1.02]'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#0A8F6A] hover:shadow-md'
                }`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700'
                  }`}>
                    {categoryIconMap[cat.icon] || <Pill className="w-5 h-5 text-[#0A8F6A]" />}
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm line-clamp-1">{cat.name}</h3>
                </div>
                <span className={`text-[10px] font-semibold mt-2 block ${
                  isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected / Featured Medicine Samples Box */}
        <div className="glass-card rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0A8F6A]" />
              {selectedCategory ? `Available in "${selectedCategory}"` : 'Popular Medicines & Health Supplies'}
            </h3>
            {selectedCategory && (
              <button 
                onClick={() => setSelectedCategory(null)}
                className="text-xs text-[#0A8F6A] font-bold hover:underline"
              >
                Show All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedicines.map((med) => (
              <div 
                key={med.id}
                className="service-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">{med.name}</h4>
                    {med.tag && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex-shrink-0">
                        {med.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mb-2 leading-relaxed">
                    {med.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {med.priceEstimate || 'In Stock'}
                  </span>
                  <button
                    onClick={onOpenWhatsAppModal}
                    className="text-[#0A8F6A] dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Order</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
