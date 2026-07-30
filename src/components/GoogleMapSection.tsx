import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const GoogleMapSection: React.FC = () => {
  return (
    <section id="map-section" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            Store Location & Hours
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white mt-3">
            Visit Atulya Medical Agency in Paliganj
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Centrally located on Main Market Road, near Sub-Divisional Hospital, Paliganj, Bihar 801110.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Card */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                    Store Address
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                    Phone & Emergency
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Main Store: <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-blue-600 dark:text-blue-400 hover:underline">{BUSINESS_INFO.formattedPhone}</a>
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    WhatsApp: +{BUSINESS_INFO.whatsappPhone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                    Working Hours
                  </h3>
                  <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {BUSINESS_INFO.workingHours.map((wh, idx) => (
                      <div key={idx} className="flex justify-between gap-2 border-b border-slate-200/50 dark:border-slate-700/50 pb-1">
                        <span className="font-medium">{wh.days}:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Embedded Google Map iframe */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm min-h-[350px] relative bg-slate-100 dark:bg-slate-800">
            <iframe
              title="Atulya Medical Agency Google Map Location Paliganj Bihar"
              src={BUSINESS_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
