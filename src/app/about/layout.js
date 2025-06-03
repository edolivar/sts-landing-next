import '../globals.css'
export const metadata = {
  title: "STSIT - About",
  description: "Learn about Secure Tech Solutions—our mission, team, and commitment to helping businesses defend against cyber threats through expert-led phishing simulations and security training.",
};

export default function RootLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}

