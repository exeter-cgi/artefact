// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Thoughts', href: '#perception' },
    { name: 'Research', href: '#research-focus' },
    { name: 'Interviews', href: '#interviews' },
    { name: 'Results', href: '#analysis' },
    { name: 'Quiz', href: '#quiz' },
    { name: 'Additional Info', href: '#additional-info' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-green-500 font-bold">
          <Leaf size={24} />
          <span className="text-xl">ENV. ISSUES</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-green-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-green-500 transition-colors z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
<div className={`fixed inset-0 bg-white z-40 flex flex-col transition-all duration-300 ease-in-out ${
  isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}>


  {/* Mobile Links */}
  <div className="flex flex-col items-center mt-24 gap-6">
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="text-base font-medium text-gray-700 hover:text-green-500 transition-all"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </a>
    ))}
  </div>
</div>




    </nav>
  );
};

export default Navbar;
