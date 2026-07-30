import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { GoogleMapSection } from './GoogleMapSection';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'General Medicine Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white mt-3">
            Contact Atulya Medical Agency
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Have a question about medicine availability or bulk order? Call, WhatsApp, or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information & Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-6">
              <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                Store Details
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Location Address</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Call Store Directly</h3>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-blue-600 dark:text-blue-400 hover:underline">
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">WhatsApp Order Helpline</h3>
                    <a href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                      +{BUSINESS_INFO.whatsappPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Official Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-xs text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>Business Working Hours</span>
                </h3>
                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {BUSINESS_INFO.workingHours.map((wh, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{wh.days}:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-2">
              Send a Quick Inquiry
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Our team will review your message and reply via phone or email promptly.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-base text-emerald-900 dark:text-emerald-200 font-serif">
                  Inquiry Received!
                </h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300">
                  Thank you, {formData.name}. Our pharmacist at Atulya Medical Agency will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0987654321"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. suresh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option>General Medicine Query</option>
                      <option>Prescription Stock Availability</option>
                      <option>Surgical & Equipment Wholesale</option>
                      <option>Diabetic & BP Device Warranty</option>
                      <option>Home Delivery Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Medicines *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="List required medicines or ask your question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Atulya Medical Agency</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Map Section */}
      <GoogleMapSection />
    </div>
  );
};
