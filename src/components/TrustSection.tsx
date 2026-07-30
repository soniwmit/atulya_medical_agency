import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Zap, 
  HeartHandshake, 
  Percent, 
  MapPin, 
  ShieldAlert 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: "Experienced Pharmacy",
      desc: "Over 12+ years of dedicated service in Paliganj with qualified licensed pharmacists.",
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: "Quality Medicines",
      desc: "Strict WHO-GMP distribution standards ensuring 100% genuine and fresh batch drugs.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Quick Service",
      desc: "Minimal wait time in store and swift WhatsApp delivery verification for local orders.",
      icon: <Zap className="w-6 h-6 text-amber-500" />
    },
    {
      title: "Friendly Staff",
      desc: "Patient, helpful, and polite guidance on prescription dosage times and precautions.",
      icon: <HeartHandshake className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: "Reasonable Pricing",
      desc: "Honest pricing with genuine discounts on monthly chronic disease refill medicines.",
      icon: <Percent className="w-6 h-6 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Convenient Location",
      desc: "Centrally located on Main Market Road, near Sub-Divisional Hospital in Paliganj.",
      icon: <MapPin className="w-6 h-6 text-rose-600 dark:text-rose-400" />
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
              Community Reputation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white">
              Why Customers Trust Atulya Medical Agency
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              When it comes to healthcare and critical medicines, authenticity and trust are non-negotiable. For over a decade, families across Paliganj and surrounding villages have depended on us for authentic pharmaceutical supplies.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-4">
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-serif">
                {BUSINESS_INFO.googleRating}★
              </div>
              <div>
                <p className="font-bold text-xs text-slate-900 dark:text-white">
                  Rated {BUSINESS_INFO.googleRating} / 5 by Local Patients
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Based on {BUSINESS_INFO.totalReviews}+ Google reviews in Paliganj, Bihar
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Trust Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((pt, idx) => (
              <div 
                key={idx}
                className="p-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center mb-3">
                  {pt.icon}
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
