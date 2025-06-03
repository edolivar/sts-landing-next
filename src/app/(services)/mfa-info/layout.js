import "@/app/globals.css";

export const metadata = {
  title: "STSIT - MFA",
  description: "Learn how Secure Tech Solutions helps businesses implement multi-factor authentication (MFA) to strengthen account security, prevent unauthorized access, and meet compliance requirements.",
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


