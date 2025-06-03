import "@/app/globals.css";

export const metadata = {
  title: "STSIT - SFTP",
  description: "Learn how Secure Tech Solutions provides secure, encrypted SFTP services for safely transferring sensitive files and ensuring compliance with industry data protection standards.",
};

export default function RootLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  );
}

