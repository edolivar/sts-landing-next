// app/layout.js
import { Suspense } from 'react';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | STSIT',
    default: 'STSIT',
  },
  description: 'Expert cybersecurity solutions for businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Suspense fallback={<div className="loading-container">Loading content...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
