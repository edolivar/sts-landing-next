import "@/app/globals.css";

export const metadata = {
  title: "STSIT - CyberSecurity",
  description: "Explore Secure Tech Solutions' cybersecurity services, including phishing simulations, threat mitigation strategies, and employee training to protect your business from cyberattacks.",
};

export default function RootLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}

