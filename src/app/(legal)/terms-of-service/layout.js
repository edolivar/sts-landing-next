import "@/app/globals.css";

export const metadata = {
  title: "STS - TOS",
  description: "Review the Terms of Service for SecureTech Solutions to understand the rules, responsibilities, and conditions for using our cybersecurity and IT services.",
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


