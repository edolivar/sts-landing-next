import "@/app/globals.css";

export const metadata = {
  title: "STS - Planning",
  description: "Compare Secure Tech Solutions' service plans to find the right cybersecurity and IT support package for your business. Flexible options designed to meet your security and budget needs.",
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



