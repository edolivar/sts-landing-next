import "@/app/globals.css";

export const metadata = {
  title: "STS - Ticket Portal",
  description: "Get support with Secure Tech Solutions’ ticketing system. Submit, track, and manage your IT and cybersecurity service requests efficiently for fast resolution.",
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


