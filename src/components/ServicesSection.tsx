import React from 'react';
import { 
  FileSpreadsheet, 
  PackageCheck, 
  Baby, 
  User, 
  Activity, 
  HeartPulse, 
  Cross, 
  Syringe, 
  Dumbbell, 
  Home,
  CheckCircle2,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/pharmacyData';

interface ServicesSectionProps {
  onOpenWhatsAppModal: () => void;
  onNavigateToServicesPage?: () => void;
  isStandalonePage?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  Baby: <Baby className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
  User: <User className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  Activity: <Activity className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-red-600 dark:text-red-400" />,
  Cross: <Cross className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
  Syringe: <Syringe className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  Dumbbell: <Dumbbell className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  Home: <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenWhatsAppModal,
  onNavigateToServicesPage,
  isStandalonePage = false
}) => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="geometric-accent w-96 h-96 bg-blue-100/40 dark:bg-blue-950/20 top-[-50px] left-[-100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#0A8F6A] dark:text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            Comprehensive Care
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900 dark:text-white mt-3 tracking-tight">
            Our Healthcare & Medical Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
            From essential prescription drugs to specialized surgical equipment and daily baby care, we have everything to support your family's health in Paliganj.
          </p>
        </div>

        {/* Services Grid with Geometric Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="service-card hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-slate-700/80 text-[#0D47A1] dark:text-blue-300 shadow-sm flex items-center justify-center group-hover:bg-[#0D47A1] group-hover:text-white transition-colors">
                    {iconMap[service.iconName] || <Activity className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <span className="text-[11px] font-bold text-[#0A8F6A] dark:text-emerald-400">
                      In-Stock at Paliganj Store
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-1.5 mb-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Popular Brands / Items Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.popularItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="category-pill text-[10px] text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order / Inquiry Button */}
              <button
                onClick={onOpenWhatsAppModal}
                className="w-full py-2.5 px-4 rounded-full bg-[#0D47A1] hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order {service.title}</span>
              </button>
            </div>
          ))}
        </div>

        {/* View All Services CTA if on Home Page */}
        {!isStandalonePage && onNavigateToServicesPage && (
          <div className="text-center mt-12">
            <button
              onClick={onNavigateToServicesPage}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A8F6A] hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <span>Explore All Services & Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
