import React from 'react';
import { 
  Award, 
  Target, 
  Compass, 
  Heart, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  UserCheck, 
  Building2,
  Calendar
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const AboutPage: React.FC = () => {
  const timeline = [
    { year: "2012", title: "Store Foundation", desc: "Atulya Medical Agency was established in Paliganj town with a commitment to offer genuine medicines." },
    { year: "2016", title: "Expansion into Cold Chain & Vaccines", desc: "Installed dedicated pharmaceutical refrigeration with continuous power backup for insulins & life-saving vaccines." },
    { year: "2020", title: "Emergency Community Response", desc: "Served uninterrupted during healthcare crises, ensuring sanitizers, oxygen oximeters, and essential drugs reached every family." },
    { year: "2023", title: "Digital & WhatsApp Fast Track", desc: "Launched 1-minute WhatsApp prescription ordering and local doorstep medicine delivery in Paliganj." },
    { year: "Present", title: "320+ 5-Star Rated Pharmacy", desc: "Serving over 10,000 local households with genuine WHO-GMP certified pharmaceuticals." }
  ];

  return (
    <div className="py-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            About Atulya Medical Agency
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
            Your Trusted Healthcare Partner in Paliganj
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Established in {BUSINESS_INFO.establishedYear}, Atulya Medical Agency is Paliganj's leading retail and wholesale pharmacy dedicated to providing authentic medicines, surgical supplies, and patient-centered care.
          </p>
        </div>

        {/* Business Story & Store Front Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-black font-serif text-slate-900 dark:text-white">
              Our Business Story
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Atulya Medical Agency was founded with a clear vision: to ensure that no patient in Paliganj and neighboring villages ever has to compromise on medicine quality or struggle to find specialized healthcare supplies.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Located conveniently near the Sub-Divisional Hospital in Paliganj, we have built a reputation for complete inventory availability—from everyday fever tablets to complex cardiac, oncology, and diabetic care medicines.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-serif">12+ Years</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">In Paliganj, Bihar</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/60 rounded-2xl border border-blue-200 dark:border-blue-800">
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400 font-serif">100% Genuine</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Authorized Stock Only</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl relative">
              <img
                src="/src/assets/images/pharmacy_storefront_1785395981063.jpg"
                alt="Atulya Medical Agency Storefront Paliganj"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-900/90 text-white backdrop-blur-md">
                <p className="font-bold text-xs">Main Market Road, Near Sub-Divisional Hospital, Paliganj</p>
                <p className="text-[11px] text-slate-300">Open 7 Days • Emergency Call Hotline Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 font-serif">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To deliver 100% genuine pharmaceutical drugs and healthcare supplies with speed, transparency, and compassionate patient counseling in Paliganj.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 font-serif">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To remain Paliganj's most trusted and modern medical center, bridging patient convenience with digital WhatsApp ordering and doorstep delivery.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 font-serif">Our Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Authenticity, affordability, patient safety, cold-chain precision, and polite local community relationship.
            </p>
          </div>
        </div>

        {/* Store Timeline */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-black font-serif text-slate-900 dark:text-white text-center mb-8">
            Our Journey & Milestones
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-xs font-serif flex-shrink-0">
                  {item.year}
                </span>
                <div className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Message */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-emerald-700 flex items-center justify-center text-3xl font-black font-serif border-4 border-emerald-500 flex-shrink-0 shadow-lg">
            AK
          </div>
          <div className="space-y-2">
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">Owner Message</span>
            <h3 className="text-xl font-bold font-serif">A Note From {BUSINESS_INFO.ownerName}</h3>
            <p className="text-xs text-slate-200 leading-relaxed italic">
              "We consider every patient who walks through our doors or contacts us on WhatsApp as part of our extended family in Paliganj. Our duty goes beyond selling medicines—we ensure you receive authentic, correctly stored drugs with clear dosage guidance."
            </p>
            <p className="text-xs font-bold text-emerald-400 pt-2">— {BUSINESS_INFO.ownerName}, Founder & Lead Pharmacist</p>
          </div>
        </div>

      </div>
    </div>
  );
};
