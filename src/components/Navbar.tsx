
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm'
        : 'py-5 bg-transparent'
        } ${className || ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-primary font-bold text-xl animate-fade-in">IELTS Tutoria</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" className="transition-all hover:bg-primary/5">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary transition-all">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[4.5rem] bg-white/95 backdrop-blur-lg border-b animate-slide-down overflow-y-auto">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <NavLinks mobile />
            </div>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/login">
                <Button variant="outline" className="w-full justify-center">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full justify-center">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Navigation Links Component
const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const isActivePath = (path: string) => location.pathname === path;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'For Students', path: '/for-students' },
    { name: 'For Teachers', path: '/for-teachers' },
    { name: 'Resources', path: '/resources' },
    { name: 'Chat', path: '/chat' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${mobile ? 'py-2 block' : ''
            } relative transition-colors ${isActivePath(link.path)
              ? 'text-primary font-medium'
              : 'text-foreground/80 hover:text-primary'
            }`}
        >
          {link.name}
          {isActivePath(link.path) && (
            <span
              className={`absolute ${mobile ? '-left-4' : 'bottom-0 left-0'
                } bg-primary ${mobile ? 'w-1 top-0 h-full rounded-r-full' : 'h-0.5 w-full'
                } transition-all duration-300`}
            />
          )}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
