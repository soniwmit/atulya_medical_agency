import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Tag, 
  Clock, 
  FileText, 
  HeartPulse, 
  Award, 
  MessageSquare 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/pharmacyData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  UserCheck: <UserCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Tag: <Tag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Clock: <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  FileText: <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
  Award: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-teal-600 dark:text-teal-400" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] dark:bg-slate-900/60 transition-colors relative overflow-hidden">
      {/* Subtle geometric background accent */}
      <div className="geometric-accent w-72 h-72 bg-blue-100/50 dark:bg-blue-900/20 top-10 right-[-50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0A8F6A] dark:text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            Our Key Promises
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white mt-3 tracking-tight">
            Why Choose Atulya Medical Agency?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
            We are committed to delivering authentic healthcare products with utmost care, affordability, and fast local service in Paliganj.
          </p>
        </div>

        {/* 8 Geometric Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="service-card hover:scale-[1.02] hover:shadow-lg transition-all group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-700/80 flex items-center justify-center mb-3.5 group-hover:bg-[#0D47A1] group-hover:text-white transition-colors">
                {iconMap[item.icon] || <ShieldCheck className="w-5 h-5 text-[#0A8F6A]" />}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
