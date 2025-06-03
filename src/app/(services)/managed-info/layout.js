import "@/app/globals.css";

export const metadata = {
  title: "STSIT - Services",
  description: "Secure Tech Solutions offers reliable managed IT services, including proactive monitoring, system maintenance, and cybersecurity support to keep your business running securely and efficiently.",
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


