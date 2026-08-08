import React, { useEffect } from 'react';
import { BUSINESS_INFO, FAQ_LIST } from '../data/pharmacyData';
import { PageView } from '../types';

interface SEOHeadProps {
  activePage: PageView;
  searchQuery?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ activePage }) => {
  useEffect(() => {
    // Dynamic document title update
    let pageTitle = `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`;
    let pageDesc = `Atulya Medical Agency is your trusted pharmacy in Paliganj, Bihar 801110. Genuine medicines, prescription drugs, baby care, diabetic care, and medical supplies at affordable prices. Call ${BUSINESS_INFO.formattedPhone}.`;

    if (activePage === 'about') {
      pageTitle = `About Us - ${BUSINESS_INFO.name} | Trusted Pharmacy in Paliganj`;
      pageDesc = `Learn about Atulya Medical Agency in Paliganj, Bihar. Founded with a vision to provide authentic WHO-GMP certified medicines and compassionate patient care.`;
    } else if (activePage === 'services') {
      pageTitle = `Medical Services & Products - ${BUSINESS_INFO.name} Paliganj`;
      pageDesc = `Explore prescription medicines, OTC items, diabetic care, surgical supplies, baby care, BP monitors, and health supplements at Atulya Medical Agency.`;
    } else if (activePage === 'gallery') {
      pageTitle = `Store Photos & Gallery - ${BUSINESS_INFO.name} Paliganj`;
      pageDesc = `Take a visual tour of Atulya Medical Agency in Paliganj, Bihar. View our clean medicine shelves, cold chain storage, and medical equipment section.`;
    } else if (activePage === 'testimonials') {
      pageTitle = `Customer Reviews & Testimonials - ${BUSINESS_INFO.name}`;
      pageDesc = `Read genuine customer reviews for Atulya Medical Agency in Paliganj. Rated 4.9/5 stars by over 320 satisfied local patients and families.`;
    } else if (activePage === 'faq') {
      pageTitle = `Pharmacy FAQs - ${BUSINESS_INFO.name} Paliganj`;
      pageDesc = `Frequently asked questions about buying genuine medicines, WhatsApp prescription orders, home delivery, and payment options at Atulya Medical Agency.`;
    } else if (activePage === 'contact') {
      pageTitle = `Contact Us & Store Location - ${BUSINESS_INFO.name} Paliganj`;
      pageDesc = `Get in touch with Atulya Medical Agency in Paliganj, Bihar. Address: Main Market Road, Near Sub-Divisional Hospital. Call or WhatsApp 08521210061.`;
    }

    document.title = pageTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', pageDesc);

    // JSON-LD Pharmacy & LocalBusiness Schema
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": "https://atulya-medical-agency.vercel.app/#pharmacy",
      "name": BUSINESS_INFO.name,
      "description": BUSINESS_INFO.tagline,
      "image": "/src/assets/images/pharmacy_storefront_1785395981063.jpg",
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Market Road, Near Sub-Divisional Hospital",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "priceRange": "₹",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": BUSINESS_INFO.googleRating,
        "reviewCount": BUSINESS_INFO.totalReviews
      },
      "sameAs": [
        "https://wa.me/918521210061"
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_LIST.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://atulya-medical-agency.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": activePage.toUpperCase(),
          "item": `https://atulya-medical-agency.vercel.app/#${activePage}`
        }
      ]
    };

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://atulya-medical-agency.vercel.app/${activePage === 'home' ? '' : '#' + activePage}`);

    // Inject or update Script tags for Schemas
    let schemaScript = document.getElementById('jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify([pharmacySchema, faqSchema, breadcrumbSchema]);

  }, [activePage]);

  return null;
};
