import { MedicineItem, ServiceItem, Testimonial, FAQItem, GalleryImage } from '../types';

export const BUSINESS_INFO = {
  name: "Atulya Medical Agency",
  category: "Pharmacy | Medical Store",
  location: "Paliganj, Bihar 801110",
  address: "Main Market Road, Near Sub-Divisional Hospital, Paliganj, Patna, Bihar 801110",
  phone: "08521210061",
  whatsappPhone: "918521210061",
  formattedPhone: "08521 210061",
  email: "contact@atulyamedical.com",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  ownerName: "Atul Kumar",
  establishedYear: "2012",
  googleRating: 4.9,
  totalReviews: 320,
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14418.156557375218!2d84.801594!3d25.352431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d4077d7f77777%3A0x7777777777777777!2sPaliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  workingHours: [
    { days: "Monday - Saturday", hours: "7:00 AM - 10:00 PM" },
    { days: "Sunday", hours: "8:00 AM - 8:00 PM" },
    { days: "Emergency Medicine Service", hours: "24/7 Available on Call & WhatsApp" }
  ]
};

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Medicines",
    desc: "Sourced directly from authorized WHO-GMP certified pharmaceutical manufacturers & distributors.",
    icon: "ShieldCheck"
  },
  {
    title: "Experienced Staff",
    desc: "Qualified pharmacists ready to assist with prescription guidelines and healthcare advice.",
    icon: "UserCheck"
  },
  {
    title: "Affordable Prices",
    desc: "Fair pricing on branded and generic medicines with attractive discounts on monthly refills.",
    icon: "Tag"
  },
  {
    title: "Fast Service",
    desc: "Quick medicine dispensing in-store and prompt local doorstep delivery in Paliganj area.",
    icon: "Clock"
  },
  {
    title: "Prescription Medicines",
    desc: "Complete inventory of specialty, chronic, and emergency prescription drugs always in stock.",
    icon: "FileText"
  },
  {
    title: "Healthcare Products",
    desc: "Wide range of wellness supplements, baby care, personal hygiene, and diabetic care.",
    icon: "HeartPulse"
  },
  {
    title: "Trusted Local Pharmacy",
    desc: "Serving families across Paliganj and surrounding villages with care for over 12+ years.",
    icon: "Award"
  },
  {
    title: "Easy WhatsApp Support",
    desc: "Simply send your prescription photo on WhatsApp for quick availability check and home delivery.",
    icon: "MessageSquare"
  }
];

export const FEATURED_CATEGORIES = [
  { name: "Tablets", icon: "Pill", count: "1500+ Items", desc: "Pain relief, antibiotics, anti-allergics & chronic disease care." },
  { name: "Capsules", icon: "Capsule", count: "800+ Items", desc: "Vitamins, antacids, multivitamin blends & specialty care." },
  { name: "Syrups", icon: "Bottle", count: "450+ Items", desc: "Cough syrups, digestive tonics, iron & calcium formulations." },
  { name: "Injection", icon: "Syringe", count: "300+ Items", desc: "Hospital grade vials, ampoules, insulin & vaccination supplies." },
  { name: "Medical Equipment", icon: "Stethoscope", count: "200+ Items", desc: "BP monitors, nebulizers, glucometers, thermometers & pulse oximeters." },
  { name: "Protein Supplements", icon: "Dumbbell", count: "120+ Items", desc: "Whey protein, health drinks, nutrition powder for seniors & kids." },
  { name: "Vitamins", icon: "Sparkles", count: "250+ Items", desc: "Immunity boosters, Vitamin C, Zinc, Vitamin D3 & multivitamin tablets." },
  { name: "Skin Care", icon: "Droplets", count: "180+ Items", desc: "Dermatologist approved creams, lotions, anti-fungal ointments & soaps." },
  { name: "Baby Products", icon: "Baby", count: "350+ Items", desc: "Infant formula, diapers, baby wipes, gentle lotions & rash creams." },
  { name: "Personal Hygiene", icon: "Sparkle", count: "220+ Items", desc: "Hand sanitizers, antiseptic liquids, adult diapers & oral care." },
  { name: "Orthopedic Support", icon: "Activity", count: "150+ Items", desc: "Knee caps, lumbar belts, cervical collars, crepe bandages & heat belts." },
  { name: "Diabetic Care", icon: "Heart", count: "190+ Items", desc: "Insulin pens, sugar test strips, lancets, sugar-free sweeteners & care kits." }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "prescriptions",
    title: "Prescription Medicines",
    description: "Complete range of prescription drugs for cardiology, neurology, gastroenterology, orthopedics, and acute medical conditions accurately dispensed.",
    iconName: "FileSpreadsheet",
    features: ["Batch Verified Expiry", "Cold Chain Storage for Insulin & Vaccines", "Subsidized Monthly Refills", "Generic & Branded Options"],
    popularItems: ["Cardiac Care", "Diabetes Management", "Hypertension", "Antibiotics", "Hormonal Therapy"]
  },
  {
    id: "general-otc",
    title: "OTC Medicines",
    description: "Everyday over-the-counter medicines for quick relief from cold, fever, headaches, acidity, stomach upset, and minor ailments.",
    iconName: "PackageCheck",
    features: ["Instant Store Pickup", "Self-Care Guidance", "Trusted Pharma Brands", "Combo Savings Packs"],
    popularItems: ["Paracetamol", "Antacids", "Pain Relief Gels", "Cough Lozenges", "ORSL Hydration"]
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Gentle and dermatologically tested products for newborn infants and toddlers from leading pediatric care brands.",
    iconName: "Baby",
    features: ["Hypoallergenic Formulations", "Pediatrician Recommended", "Fresh Stock Always", "Diaper Combo Packs"],
    popularItems: ["Infant Formula", "Baby Lotion & Soap", "Pampers & Huggies Diapers", "Gripe Water", "Teething Gel"]
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description: "Comprehensive daily hygiene, skincare, hair care, and oral hygiene essentials for the whole family.",
    iconName: "User",
    features: ["Top Skincare Brands", "Antiseptic Solutions", "Organic Options", "Family Packs"],
    popularItems: ["Dermatological Creams", "Medicated Shampoos", "Antiseptic Lotions", "Oral Hygiene Range"]
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    description: "Dedicated sugar management corner offering blood glucose meters, test strips, insulin syringes, and diabetic foot care products.",
    iconName: "Activity",
    features: ["Fresh Test Strips Stock", "Insulin Pen Needles", "Sugar-Free Food Line", "Complimentary Glucose Check Guidance"],
    popularItems: ["Accu-Chek / OneTouch Strips", "Human Insulin / Glargine", "Sugar-Free Sweeteners", "Diabetic Socks"]
  },
  {
    id: "bp-monitors",
    title: "Blood Pressure Monitors & Devices",
    description: "Fully digital and manual BP testing devices, digital thermometers, pulse oximeters, and nebulizers with warranty.",
    iconName: "HeartPulse",
    features: ["Brand Warranty Support", "Free Calibration Check", "Easy One-Button Operation", "Demonstration Included"],
    popularItems: ["Omron Digital BP Monitors", "Dr. Morepen Oximeters", "Mesh Nebulizers", "Infrared Thermometers"]
  },
  {
    id: "first-aid",
    title: "First Aid Supplies",
    description: "Ready-to-use first aid kits for homes, schools, vehicles, and shops equipped with sterile bandages, antiseptics, and burn relief.",
    iconName: "Cross",
    features: ["Custom First Aid Kits", "Emergency Dressing Supplies", "Burn Aid Ointments", "Antiseptic Liquids"],
    popularItems: ["Bandages & Crepe Rolls", "Betadine / Savlon", "Burnol", "Sterile Cotton & Gauze"]
  },
  {
    id: "surgical-items",
    title: "Surgical Supplies",
    description: "High-grade sterile surgical disposables, IV sets, catheters, cannulas, gloves, masks, and post-operative care items.",
    iconName: "Syringe",
    features: ["Hospital Grade Certification", "Bulk Wholesale Discounts", "Sterile Sealed Packaging", "Immediate Availability"],
    popularItems: ["Surgical Gloves", "IV Infusion Sets", "Foley Catheters", "N95 / 3-Ply Masks", "Syringes with Needles"]
  },
  {
    id: "health-supplements",
    title: "Health Supplements & Nutrition",
    description: "Protein powders, multivitamin capsules, calcium supplements, omega-3 fish oils, and immunity builders for all ages.",
    iconName: "Dumbbell",
    features: ["Authenticity Guaranteed", "FSSAI Approved", "Specialty Senior Care Formulas", "Kids Growth Drinks"],
    popularItems: ["Protein Powders", "Calcium + Vitamin D3", "Multivitamin Capsules", "Chyawanprash & Herbal Tonics"]
  },
  {
    id: "home-care",
    title: "Home Care & Orthopedic Support",
    description: "Orthopedic belts, walking sticks, commode chairs, hot water bags, water beds, and patient comfort accessories.",
    iconName: "Home",
    features: ["Ergonomic Design", "Sizes S to XXL Available", "Durable Materials", "Patient Comfort Guarantee"],
    popularItems: ["Lumbosacral Belts", "Knee Braces", "Walking Sticks", "Air Mattresses for Bedridden Patients"]
  }
];

export const WORKING_PROCESS = [
  {
    step: "01",
    title: "Visit Store or WhatsApp",
    desc: "Walk into our store in Paliganj or send your required list/prescription on WhatsApp.",
    icon: "MapPin"
  },
  {
    step: "02",
    title: "Share Prescription / Details",
    desc: "Our qualified pharmacist verifies your prescription and checks exact batch availability.",
    icon: "FileCheck"
  },
  {
    step: "03",
    title: "Get Genuine Medicines",
    desc: "Medicines are carefully packed with batch details, expiry date check, and proper dosage instructions.",
    icon: "Package"
  },
  {
    step: "04",
    title: "Easy Payment & Delivery",
    desc: "Pay via UPI (PhonePe, GPay, Paytm), cash, or card. Pick up immediately or get fast local delivery.",
    icon: "CreditCard"
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar Sharma",
    location: "Paliganj Bazar",
    rating: 5,
    date: "10 days ago",
    review: "Atulya Medical Agency is the most reliable medical store in Paliganj. I buy my father's monthly diabetes and BP medicines from here. They always give fresh stock and reasonable prices with genuine advice.",
    verified: true
  },
  {
    id: "2",
    name: "Anita Devi",
    location: "Chandaus, Paliganj",
    rating: 5,
    date: "2 weeks ago",
    review: "Very cooperative staff! Once I needed an emergency injection late in the evening and the owner opened the shop to help us out. Truly helpful and honest medical store.",
    verified: true
  },
  {
    id: "3",
    name: "Dr. Alok Verma",
    location: "Paliganj Sub-Division",
    rating: 5,
    date: "1 month ago",
    review: "As a local medical practitioner, I recommend Atulya Medical Agency to my patients because they maintain proper cold chain storage for insulin and vaccines. 100% genuine products.",
    verified: true
  },
  {
    id: "4",
    name: "Vikash Singh",
    location: "Bikram Road, Paliganj",
    rating: 5,
    date: "3 weeks ago",
    review: "The WhatsApp prescription ordering service is super convenient. I just send a photo of doctor's slip on WhatsApp and my medicines are ready when I reach the store. Saves a lot of time!",
    verified: true
  },
  {
    id: "5",
    name: "Pooja Kumari",
    location: "Paliganj Town",
    rating: 5,
    date: "1 month ago",
    review: "Best shop for baby products and health supplements in Paliganj. They carry all top pediatric brands at affordable rates. Staff behavior is polite and knowledgeable.",
    verified: true
  },
  {
    id: "6",
    name: "Sunil Prasad",
    location: "Dharhara, Paliganj",
    rating: 5,
    date: "2 months ago",
    review: "Clean store, genuine medicines, and fair discount on bill. They also guide you clearly on dosage time. Best pharmacy experience in Paliganj area.",
    verified: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Where is Atulya Medical Agency located in Paliganj?",
    answer: "Atulya Medical Agency is located on Main Market Road, near Sub-Divisional Hospital in Paliganj, Bihar 801110. It is easily accessible with convenient parking."
  },
  {
    id: "faq-2",
    category: "Ordering",
    question: "How can I order medicines via WhatsApp?",
    answer: "Click the 'WhatsApp Order' button on our website or message us directly at 08521210061. Send a clear photograph of your prescription along with your delivery address and name. Our team will immediately verify and confirm your order."
  },
  {
    id: "faq-3",
    category: "Authenticity",
    question: "Are all medicines at Atulya Medical Agency 100% genuine?",
    answer: "Yes, 100%. All our pharmaceutical products, surgical items, and health supplements are directly sourced from authorized distributors of WHO-GMP certified pharmaceutical companies."
  },
  {
    id: "faq-4",
    category: "Delivery",
    question: "Do you provide home delivery in Paliganj?",
    answer: "Yes, we offer fast local doorstep medicine delivery across Paliganj town and nearby areas for orders placed via phone or WhatsApp."
  },
  {
    id: "faq-5",
    category: "Prescription",
    question: "Is a prescription mandatory for buying medicines?",
    answer: "Prescriptions are required for Schedule H and H1 prescription drugs (like antibiotics, cardiac drugs, psychiatric medicines, and injections). Over-the-counter (OTC) items, vitamins, and health products do not require a prescription."
  },
  {
    id: "faq-6",
    category: "Payments",
    question: "What payment options are accepted at your store?",
    answer: "We accept Cash, UPI payments (PhonePe, Google Pay, Paytm, BHIM), Net Banking, and major Debit/Credit cards."
  },
  {
    id: "faq-7",
    category: "Special Storage",
    question: "How do you store sensitive medicines like Insulin and Vaccines?",
    answer: "We maintain dedicated temperature-monitored pharmaceutical refrigerators with uninterrupted power backup to preserve the cold-chain potency of insulins, vaccines, and biological injections."
  },
  {
    id: "faq-8",
    category: "Equipment",
    question: "Can I buy Blood Pressure monitors and Glucometers here?",
    answer: "Yes, we stock top-rated digital BP monitors (Omron, Dr. Morepen), blood glucose testing meters, pulse oximeters, nebulizers, and infrared thermometers with official manufacturer warranties."
  },
  {
    id: "faq-9",
    category: "Operating Hours",
    question: "What are your business opening hours?",
    answer: "Our store is open Monday through Saturday from 7:00 AM to 10:00 PM, and Sundays from 8:00 AM to 8:00 PM. For emergency medicine inquiries, you can reach us 24/7 on call or WhatsApp at 08521210061."
  },
  {
    id: "faq-10",
    category: "Discounts",
    question: "Do you offer discounts on regular chronic disease medicines?",
    answer: "Yes! We provide attractive discounts and special packages for patients requiring regular monthly refills for hypertension, diabetes, cardiac care, and thyroid treatments."
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Store Exterior & Signboard",
    category: "front",
    imageUrl: "/src/assets/images/pharmacy_storefront_1785395981063.jpg",
    caption: "Atulya Medical Agency storefront located on Main Market Road, Paliganj"
  },
  {
    id: "gal-2",
    title: "Well Organized Medicine Racks",
    category: "shelves",
    imageUrl: "/src/assets/images/pharmacy_hero_banner_1785395965403.jpg",
    caption: "Systematically categorized prescription drugs for instant retrieval"
  },
  {
    id: "gal-3",
    title: "Healthcare Devices & Monitors Section",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
    caption: "Digital BP monitors, pulse oximeters, and nebulizers on display"
  },
  {
    id: "gal-4",
    title: "Baby Care & Infant Nutrition Counter",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1000&auto=format&fit=crop",
    caption: "Complete pediatric nutrition, gentles wipes, and baby care range"
  },
  {
    id: "gal-5",
    title: "Cold Chain Storage Refrigerator",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1000&auto=format&fit=crop",
    caption: "Temperature controlled refrigeration for insulin, vaccines & biologicals"
  },
  {
    id: "gal-6",
    title: "Qualified Pharmacists Assisting Customers",
    category: "customers",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000&auto=format&fit=crop",
    caption: "Friendly guidance on medicine dosage and prescription instructions"
  },
  {
    id: "gal-7",
    title: "Personal Hygiene & Wellness Display",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1000&auto=format&fit=crop",
    caption: "Antiseptic solutions, dermatological lotions, and wellness products"
  },
  {
    id: "gal-8",
    title: "Surgical & First Aid Essentials",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1000&auto=format&fit=crop",
    caption: "Sterile surgical kits, bandages, dressings, and emergency supplies"
  }
];

export const SAMPLE_MEDICINES: MedicineItem[] = [
  { id: "m1", name: "Paracetamol 650mg (Dolo / Crocin)", category: "Tablets", type: "Tablet", description: "Fever and mild to moderate pain relief tablet.", prescriptionRequired: false, priceEstimate: "₹30 - ₹35 / strip", inStock: true, tag: "Best Seller" },
  { id: "m2", name: "Amoxicillin & Potassium Clavulanate 625mg", category: "Tablets", type: "Tablet", description: "Broad-spectrum antibiotic for bacterial infections.", prescriptionRequired: true, priceEstimate: "₹180 - ₹210 / strip", inStock: true, tag: "Rx Only" },
  { id: "m3", name: "Pantoprazole & Domperidone (Pan-D / Pantocid-D)", category: "Capsules", type: "Capsule", description: "Relief from hyperacidity, GERD, and stomach ulcers.", prescriptionRequired: true, priceEstimate: "₹120 - ₹150 / strip", inStock: true, tag: "Popular" },
  { id: "m4", name: "Telmisartan 40mg (Telma / Micardis)", category: "Tablets", type: "Tablet", description: "Hypertension (blood pressure) management.", prescriptionRequired: true, priceEstimate: "₹70 - ₹90 / strip", inStock: true, tag: "Chronic Care" },
  { id: "m5", name: "Metformin 500mg Extended Release", category: "Tablets", type: "Tablet", description: "Type-2 diabetes blood glucose regulation.", prescriptionRequired: true, priceEstimate: "₹40 - ₹60 / strip", inStock: true, tag: "Diabetic Care" },
  { id: "m6", name: "Human Insulin Pen Cartridge / Vial (Mixtard / Lantus)", category: "Injection", type: "Injection", description: "Subcutaneous insulin therapy stored in cold chain.", prescriptionRequired: true, priceEstimate: "₹350 - ₹850", inStock: true, tag: "Cold Chain" },
  { id: "m7", name: "Omron M2 Basic Digital BP Monitor", category: "Medical Equipment", type: "Device", description: "Automatic upper arm blood pressure monitor with cuff.", prescriptionRequired: false, priceEstimate: "₹1,850 - ₹2,200", inStock: true, tag: "Warranty Included" },
  { id: "m8", name: "Accu-Chek Active Blood Glucose Test Strips (50 Strips)", category: "Diabetic Care", type: "Test Strips", description: "Accurate blood sugar monitoring strips.", prescriptionRequired: false, priceEstimate: "₹950 - ₹1,050", inStock: true, tag: "Essential" },
  { id: "m9", name: "Multivitamin & Mineral Capsules (Becosules / Revital)", category: "Vitamins", type: "Capsule", description: "Daily energy, immunity, and vitamin B-complex support.", prescriptionRequired: false, priceEstimate: "₹45 - ₹110", inStock: true, tag: "Immunity" },
  { id: "m10", name: "Protein Powder for Adults / Diabetics (Ensure / Protinex)", category: "Protein Supplements", type: "Powder", description: "Nutritional supplement drink for muscle strength & vitality.", prescriptionRequired: false, priceEstimate: "₹380 - ₹650", inStock: true, tag: "Health Drink" },
  { id: "m11", name: "Benadryl / Ascoril Cough Syrup (100ml)", category: "Syrups", type: "Syrup", description: "Symptomatic relief for wet and dry cough.", prescriptionRequired: false, priceEstimate: "₹110 - ₹135", inStock: true },
  { id: "m12", name: "Lumbosacral Orthopedic Back Support Belt", category: "Orthopedic Support", type: "Support Belt", description: "Lumbar support for lower back pain and spinal alignment.", prescriptionRequired: false, priceEstimate: "₹450 - ₹750", inStock: true }
];
