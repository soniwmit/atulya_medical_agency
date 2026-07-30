import React from 'react';
import { 
  MapPin, 
  FileCheck, 
  Package, 
  CreditCard, 
  ArrowRight 
} from 'lucide-react';
import { WORKING_PROCESS } from '../data/pharmacyData';

const processIcons: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  FileCheck: <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Package: <Package className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  CreditCard: <CreditCard className="w-6 h-6 text-teal-600 dark:text-teal-400" />
};

export const WorkingProcess: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Simple & Hassle-Free
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white mt-3">
            Our 4-Step Working Process
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            How to easily get your genuine medicines from Atulya Medical Agency in Paliganj.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_PROCESS.map((proc, index) => (
            <div
              key={index}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-emerald-500/60 transition-all group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:scale-105 transition-transform">
                  {processIcons[proc.icon]}
                </div>
                <span className="text-2xl font-black text-emerald-400/40 font-serif">
                  {proc.step}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-white mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proc.desc}
                </p>
              </div>

              {index < WORKING_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-600 z-20">
                  <ArrowRight className="w-5 h-5 text-emerald-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
