import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const onRootPage = location.pathname === '/';

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "#contact" },
  ];

  const getHref = (itemHref: string) => {
    if (onRootPage || itemHref.startsWith('/')) {
      return itemHref;
    }
    return `/${itemHref}`;
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-red-800">
            Tobias Fu
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const href = getHref(item.href);
              const isExternal = href.startsWith('/');

              return isExternal ? (
                <Link
                  key={item.name}
                  to={href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => {
              const href = getHref(item.href);
              const isExternal = href.startsWith('/');

              return isExternal ? (
                <Link
                  key={item.name}
                  to={href}
                  className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={href}
                  className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
