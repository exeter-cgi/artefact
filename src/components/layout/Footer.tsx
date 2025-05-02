// Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Youtube, Instagram, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-green-500 font-bold mb-4"
            >
              <Leaf size={24} />
              Let’s Make the Environment Better
            </Link>
            <p className="text-gray-600 text-sm">
              True sustainability doesn't end with choosing electric cars — it
              begins with asking the right questions, seeing the full picture,
              and acting with knowledge and responsibility.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Useful Links</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <Link to="/data" className="hover:text-green-500">
                  Public Perception vs Reality
                </Link>
              </li>
              <li>
                <Link to="/production" className="hover:text-green-500">
                Battery Production Impact
                </Link>
              </li>
              <li>
                <Link to="/lifespan" className="hover:text-green-500">
                Battery Lifespan in EVs
                </Link>
              </li>
              <li>
                <Link to="/recycling" className="hover:text-green-500">
                Battery Recycling and Disposal
                </Link>
              </li>
              <li>
                <Link to="/battery-production" className="hover:text-green-500">
                Analysis & Results
                </Link>
              </li>
              <li>
                <Link to="/life-cycle" className="hover:text-green-500">
                Take the Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gray-800 font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Youtube size={16} />
                <a
                  href="https://www.youtube.com/@Exeter-CGI-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  CGI Project
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a
                  href="https://www.instagram.com/uniofexeter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  University of Exeter
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} />
                <a
                  href="https://github.com/exeter-cgi/artefact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} EVs vs ICEs Environmental Research. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
