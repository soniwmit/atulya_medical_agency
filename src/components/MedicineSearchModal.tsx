import React, { useState } from 'react';
import { 
  Search, 
  X, 
  Pill, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Tag,
  ArrowRight
} from 'lucide-react';
import { SAMPLE_MEDICINES } from '../data/pharmacyData';
import { MedicineItem } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineForOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Tablets', 'Capsules', 'Syrups', 'Injection', 'Medical Equipment', 'Diabetic Care', 'Vitamins'];

  const filteredList = SAMPLE_MEDICINES.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategoryFilter === 'All' || item.category === selectedCategoryFilter;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-start justify-center p-4 pt-16 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative animate-scaleIn text-slate-900 dark:text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Search className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold font-serif">
              Search Medicines & Products
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            autoFocus
            placeholder="Type medicine name (e.g. Paracetamol, Amoxicillin, Insulin, BP Monitor...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium focus:outline-none focus:border-emerald-500 shadow-inner"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-3 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap transition-colors ${
                selectedCategoryFilter === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto space-y-3 pr-1">
          {filteredList.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              <Pill className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p>No exact match found in quick list for "{searchTerm}".</p>
              <p className="mt-1 font-semibold text-emerald-600 dark:text-emerald-400">
                Don't worry! All medicines are available at our store in Paliganj.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onSelectMedicineForOrder(searchTerm);
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire "{searchTerm}" on WhatsApp</span>
              </button>
            </div>
          ) : (
            filteredList.map((med) => (
              <div
                key={med.id}
                className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-500 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xs text-slate-900 dark:text-white">
                      {med.name}
                    </h3>
                    {med.prescriptionRequired ? (
                      <span className="text-[9px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded border border-amber-300 dark:border-amber-800">
                        Rx Required
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                        OTC Available
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {med.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-1 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                    <span>Estimate: {med.priceEstimate || 'Affordable'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> In Stock
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectMedicineForOrder(med.name);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all flex-shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order Now</span>
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
