// app/layout.js
import './globals.css';

export const metadata = {
  title: 'STSIT - Home',
  description: 'Expert cybersecurity solutions for businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
