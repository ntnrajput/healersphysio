import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Calendar } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/AboutUs", label: "About Us" },
    { path: "/services", label: "Programs" },
    { path: "/testimonials", label: "Testimonials" },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+917389876573" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 7389876573</span>
              </a>
              <a href="mailto:healersphysio@gmail.com" className="flex items-center gap-2 hover:text-teal-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>healersphysio@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-teal-100">🌟 Online Consultations Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="/images/logo.png" alt="The Healers Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 tracking-tight">THE HEALERS</span>
                <span className="text-xs text-teal-600 font-medium">Physiotherapy & Wellness</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                    isActive(link.path)
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-teal-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                asChild 
                variant="outline" 
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                <Link to="/consultation" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Free Consultation
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all">
                <Link to="/consultation">Book Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-teal-50"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-base font-semibold px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(link.path)
                        ? "text-teal-600 bg-teal-50"
                        : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="border-t border-gray-200 mt-4 pt-4 px-4 space-y-3">
                  <a href="tel:+917389876573" className="flex items-center gap-3 text-gray-600 hover:text-teal-600">
                    <Phone className="w-5 h-5" />
                    <span>+91 7389876573</span>
                  </a>
                  <a href="mailto:healersphysio@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-teal-600">
                    <Mail className="w-5 h-5" />
                    <span>healersphysio@gmail.com</span>
                  </a>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-2 px-4 pt-4">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-2 border-teal-600 text-teal-600"
                  >
                    <Link to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Free Consultation
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-teal-600 to-blue-600">
                    <Link to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;