export interface MedicineItem {
  id: string;
  name: string;
  category: string;
  type: string; // e.g. 'Tablet', 'Syrup', 'Supplement', etc.
  description: string;
  prescriptionRequired: boolean;
  priceEstimate?: string;
  inStock: boolean;
  tag?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  popularItems: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  avatarBg?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'customers' | 'front';
  imageUrl: string;
  caption: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionAttached: boolean;
  prescriptionFileName?: string;
  prescriptionPreviewUrl?: string;
  preferredTime: string;
  message: string;
}

export type PageView = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact';
