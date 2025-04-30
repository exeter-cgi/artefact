import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHomeButton: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) return null;

  return (
    <Link
      to="/"
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Back to home"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </Link>
  );
};

export default BackToHomeButton;