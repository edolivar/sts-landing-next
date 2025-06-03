'use client';

import { useRouter } from 'next/navigation';

const ScrollToTopLink = ({ to, children, className = '' }) => {
  const router = useRouter();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    router.push(to); // Navigate to the new route
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default ScrollToTopLink;
