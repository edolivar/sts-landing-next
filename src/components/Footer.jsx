// No "use client" needed here unless you add client-side specific hooks/features that aren't purely DOM manipulation like window.scrollTo
import Link from "next/link"; // Replaced 'react-router-dom' Link

const footerNavigation = {
  support: [
    { name: "Ticket Portal", href: "https://ticket.securetechsolutions.biz/" },
    { name: "SFTP Portal", href: "https://us3.hostedftp.com/login/" },
  ],
  company: [{ name: "About", href: "/about" }],
  legal: [
    { name: "Terms of service", href: "/terms-of-service" },
    { name: "Privacy policy", href: "/privacy-policy" },
  ],
};

const Footer = () => {
  // scrollToTop can remain as is; it uses browser APIs directly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="border-t border-gray-900/10 py-12 sm:py-16 lg:py-24">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          {/* For the logo, if it navigates to home, use Next.js Link */}
          <Link href="/" onClick={scrollToTop}>
            <span className="sr-only">Company name</span>
            {/* Image assets from the public folder */}
            <img alt="Secure Tech Solutions Favicon" src="/sts_favicon.svg" className="h-12" />
          </Link>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      {/* External links remain standard <a> tags */}
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer" // Added for security
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      {/* Use Next.js Link for internal navigation */}
                      <Link
                        href={item.href}
                        onClick={scrollToTop}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      {/* Use Next.js Link for internal navigation */}
                      <Link
                        href={item.href}
                        onClick={scrollToTop}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
