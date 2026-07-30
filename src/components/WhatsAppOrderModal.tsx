import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Phone, 
  Upload, 
  CheckCircle2, 
  Camera, 
  Clock, 
  FileText, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { OrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    prescriptionAttached: false,
    prescriptionFileName: '',
    prescriptionPreviewUrl: '',
    preferredTime: 'As soon as possible (Urgent)',
    message: ''
  });

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        prescriptionAttached: true,
        prescriptionFileName: file.name,
        prescriptionPreviewUrl: url
      }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
`Hello Atulya Medical Agency 

Customer Name:
${formData.customerName || 'N/A'}

Phone:
${formData.mobileNumber || 'N/A'}

Medicine Required:
${formData.medicineName || 'Attached in prescription'}

Address:
${formData.address || 'Paliganj'}

Prescription Attached:
${formData.prescriptionAttached ? 'Yes (Photo Uploaded)' : 'No'}

Preferred Delivery Time:
${formData.preferredTime}

Message:
${formData.message || 'Please check availability & total bill.'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 shadow-2xl relative my-8 animate-scaleIn text-slate-900 dark:text-white">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-serif">
              WhatsApp Medicine Order
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Atulya Medical Agency • Paliganj, Bihar ({BUSINESS_INFO.phone})
            </p>
          </div>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs">
          
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Kumar"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 08521210061"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Email & Delivery Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. customer@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Delivery Address in Paliganj *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Near Bus Stand / Dharhara, Paliganj"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Required Medicines */}
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Paracetamol 650mg, Insulin Pen, Omron BP Monitor..."
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Prescription Upload Simulator */}
          <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 dark:text-emerald-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Upload Prescription / Doctor Slip Photo</span>
              </span>
              <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
                Optional
              </span>
            </div>

            <div className="flex items-center gap-3">
              <label className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-emerald-500 cursor-pointer font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors">
                <Camera className="w-4 h-4 text-emerald-600" />
                <span>{formData.prescriptionAttached ? 'Change Photo' : 'Choose Photo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {formData.prescriptionAttached && (
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="truncate max-w-[150px]">{formData.prescriptionFileName}</span>
                </div>
              )}
            </div>

            {formData.prescriptionPreviewUrl && (
              <div className="mt-2.5 relative w-20 h-20 rounded-lg overflow-hidden border border-emerald-300">
                <img
                  src={formData.prescriptionPreviewUrl}
                  alt="Prescription Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Preferred Delivery Time & Additional Message */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
              >
                <option>As soon as possible (Urgent)</option>
                <option>Today Evening (5:00 PM - 8:00 PM)</option>
                <option>Tomorrow Morning (8:00 AM - 11:00 AM)</option>
                <option>Store Self-Pickup</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Additional Instructions
              </label>
              <input
                type="text"
                placeholder="e.g. Please send generic option if available"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Store: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-[10px] text-center text-slate-400 pt-1">
            Clicking "Send via WhatsApp" opens WhatsApp with prefilled message to +{BUSINESS_INFO.whatsappPhone}.
          </p>

        </form>

      </div>
    </div>
  );
};
