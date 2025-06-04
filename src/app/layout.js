// app/layout.js
import './globals.css';
import Script from 'next/script'; // Import Script from next/script

// Define the metadata object first
export const metadata = {
  // --- Title (Default for the entire site) ---
  title: 'STSIT | Managed IT Services',

  // --- Basic Meta (charset is often implicitly handled, but explicit is fine) ---
  charset: 'UTF-8',

  // --- Description & Keywords ---
  description: 'Safeguarding Businesses through Cutting-edge Technology. Comprehensive Managed IT Solutions for Network, Cybersecurity, and Application Management tailored for SMBs.',
  keywords: ['Managed IT Solutions', 'cybersecurity', 'network security', 'asset management', 'application management', 'phishing testing', 'SFTP', 'VoIP', 'small business IT', 'medium business IT'],
  author: 'STSIT',

  // --- Robots Meta ---
  robots: 'index, follow',

  // --- Language Specification (This is for the meta tag, `lang` attribute is on <html> below) ---
  'language': 'en-US',

  // --- Content Rating ---
  rating: 'general',

  sitemap: 'https://www.stsit.biz/sitemap.xml', // Direct link to your sitemap

  // --- Canonical URL ---
  alternates: {
    canonical: 'https://stsit.biz',
  },

  // --- SEO for Search Engines ---
  'subject': 'Comprehensive IT and Cybersecurity Solutions',
  'coverage': 'Worldwide',
  'distribution': 'global',

  // --- Custom Meta Tags for Services ---
  'service-type': 'IT and Cybersecurity Services',
  'target-audience': 'Small and Medium Businesses, Enterprises',

  // --- Open Graph Meta ---
  openGraph: {
    title: 'STSIT - Managed IT Services',
    description: 'Comprehensive Managed IT Solutions to meet your Business Needs—Network, Cybersecurity, and Support All in One Place.',
    url: 'https://stsit.biz',
    type: 'website',
    images: [{
      url: 'https://stsit.biz/sts_logo.jpg',
      alt: 'STSIT Logo',
    }],
  },

  // --- Twitter Card ---
  twitter: {
    card: 'summary_large_image',
    title: 'STSIT - Managed IT Services',
    description: 'Affordable, Enterprise-class IT Solutions tailored to SMBs—Network, Cybersecurity, and Support, All in One Place.',
    images: [{
      url: 'https://stsit.biz/sts_logo.jpg',
      alt: 'STSIT Logo',
    }],
  },

  // --- Favicons ---
  icons: {
    icon: 'https://stsit.biz/sts_favicon.svg',
    apple: 'https://stsit.biz/sts_logo.jpg',
  },
};

// Define the viewport export separately
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
  themeColor: '#168991', // Moved themeColor here
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* --- Global Scripts --- */}

        {/* Counter Script */}
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="0b0f4156-a1f0-4d29-a662-f2de85d151f3"
          data-utcoffset="-8"
          strategy="lazyOnload"
          id="counter-script"
        />

        {/* GTranslate Widget */}
        <div className="gtranslate_wrapper"></div>

        {/* Inline script for gtranslateSettings (needs to be available early) */}
        <Script
          id="gtranslate-settings-script"
          dangerouslySetInnerHTML={{
            __html: `window.gtranslateSettings = { "default_language": "en", "languages": ["en", "es", "zh-TW", "vi", "ar", "de", "fr", "it", "ru", "pt"], "wrapper_selector": ".gtranslate_wrapper", "float_switcher_open_direction": "bottom", "alt_flags": { "en": "usa", "es": "mexico" } };`,
          }}
          strategy="beforeInteractive"
        />

        {/* External GTranslate script */}
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="afterInteractive"
          id="gtranslate-float-script"
        />

        {/* Tawk.to Script */}
        <Script
          id="tawk-to-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/6787217b3a842732606ef015/1ihjtlino';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />

      </body>
    </html>
  );
}
