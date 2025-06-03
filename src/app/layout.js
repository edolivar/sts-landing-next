import "./globals.css";

export const metadata = {
  title: "STS - Home",
  description: "Secure Tech Solutions helps businesses strengthen cybersecurity with realistic phishing simulations, security awareness training, and expert consulting tailored to your organization’s needs.",
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
