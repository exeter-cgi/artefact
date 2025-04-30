// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Section - physically left */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-green-500 font-bold mb-4">
              <Leaf size={24} />
              Let’s Make the Environment Better
            </Link>
            <p className="text-gray-600 text-sm">
              True sustainability doesn't end with choosing electric cars — it begins with asking the right questions, seeing the full picture, and acting with knowledge and responsibility.
            </p>
          </div>

          {/* Useful Links - physically center */}
          <div>
  <h4 className="text-gray-800 font-semibold mb-4">Useful Links</h4>
  <ul className="text-gray-600 text-sm space-y-2">
    <li><Link to="/research" className="hover:text-green-500">Research Summary</Link></li>
    <li><Link to="/quiz" className="hover:text-green-500">Take the Quiz</Link></li>
    <li><Link to="/full-analysis" className="hover:text-green-500">Full Analysis</Link></li>
    <li><Link to="/battery-production" className="hover:text-green-500">Battery Production Impact</Link></li>
    <li><Link to="/life-cycle" className="hover:text-green-500">Life-Cycle Analysis</Link></li>
    <li><Link to="/battery-recycling" className="hover:text-green-500">Battery Recycling Insights</Link></li>
  </ul>
</div>

          {/* Contact Info - physically right */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:team@evresearch.com" className="hover:text-green-500">team@evresearch.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">GitHub</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} EVs vs ICEs Environmental Research. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
