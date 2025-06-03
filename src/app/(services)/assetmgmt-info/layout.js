import "@/app/globals.css";

export const metadata = {
  title: "STSIT - Management",
  description: "Discover how Secure Tech Solutions streamlines IT asset management with secure, organized tracking of hardware, software, and licensing to enhance visibility and reduce risk.",
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



