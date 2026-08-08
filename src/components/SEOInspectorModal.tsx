import React, { useState } from 'react';
import { X, Code, Check, Copy, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, FAQ_LIST } from '../data/pharmacyData';

interface SEOInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOInspectorModal: React.FC<SEOInspectorModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const schemaJson = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Market Road",
        "addressLocality": "Paliganj",
        "addressRegion": "Bihar",
        "postalCode": "801110",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.352431",
        "longitude": "84.801594"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": BUSINESS_INFO.googleRating,
        "reviewCount": BUSINESS_INFO.totalReviews
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_LIST.slice(0, 3).map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    }
  ], null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative animate-scaleIn">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold font-serif">SEO & Schema Markup Inspector</h2>
            <p className="text-xs text-slate-400">Structured Data for Google Local Pharmacy Indexing</p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <p className="font-bold text-emerald-400">Meta Title:</p>
            <p className="text-slate-200">{BUSINESS_INFO.name} | {BUSINESS_INFO.tagline}</p>
          </div>

          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <p className="font-bold text-emerald-400">XML Sitemap & Search Indexing:</p>
            <p className="text-slate-300 font-mono text-[11px] select-all">https://atulya-medical-agency.vercel.app/sitemap.xml</p>
          </div>

          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
            <p className="font-bold text-emerald-400">Open Graph & Twitter Cards:</p>
            <p className="text-slate-300">og:type = "pharmacy", og:locality = "Paliganj", og:region = "Bihar"</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-slate-300">JSON-LD Schema Markup:</span>
              <button
                onClick={handleCopy}
                className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[10px] flex items-center gap-1"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy Schema'}</span>
              </button>
            </div>
            <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto max-h-48">
              {schemaJson}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
};
