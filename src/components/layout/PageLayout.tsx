import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToHomeButton from '../ui/BackToHomeButton';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <BackToHomeButton />
    </div>
  );
};

export default PageLayout;