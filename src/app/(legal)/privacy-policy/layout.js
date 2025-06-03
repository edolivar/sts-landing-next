import "@/app/globals.css";

export const metadata = {
  title: "STS - Privacy Policy",
  description: "Read Secure Tech Solutions' Privacy Policy to learn how we collect, use, and protect your personal information when you visit our website or use our services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

