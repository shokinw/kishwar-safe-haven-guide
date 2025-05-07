
import { Shield } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-darkBg text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-emergency mr-2" />
            <h1 className="text-xl md:text-2xl font-display font-bold">
              Stay Safe Kishwar
            </h1>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className={`${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-darkBg z-10 py-4' : 'hidden'} md:block`}>
            <ul className="md:flex md:space-x-6 space-y-2 md:space-y-0 px-4 md:px-0">
              <li>
                <a href="#shelters" className="hover:text-skyBlue transition-colors">
                  Find Shelter
                </a>
              </li>
              <li>
                <a href="#emergency-numbers" className="hover:text-skyBlue transition-colors">
                  Emergency Numbers
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-skyBlue transition-colors">
                  News Updates
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
