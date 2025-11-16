import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Heart, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Connected with Us</h3>
              <p className="text-gray-400">
                Get health tips, wellness advice, and exclusive updates delivered to your inbox
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-6">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">The Healers</span>
                  <p className="text-xs text-teal-400">Physiotherapy & Wellness</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner in women's health and wellness. We provide comprehensive online 
                physiotherapy services specializing in prenatal care, postnatal recovery, and holistic 
                wellness solutions for every stage of life.
              </p>
            </div>

            {/* Certifications & Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Certified Physiotherapists</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>1000+ Happy Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 bg-teal-900/50 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Evidence-Based Treatment Methods</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/AboutUs" },
                { label: "Our Programs", path: "/services" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Free Consultation", path: "/consultation" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <Link to="/matra-shakti">Matra Shakti - Prenatal Care</Link>
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <Link to="/fit-mom">Fit Mom - Postnatal Recovery</Link>
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <Link to="/nari-shakti">Nari Shakti - Women's Health</Link>
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <Link to="/proflex">ProFlex - Workplace Wellness</Link>
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <Link to="/second-innings">Second Innings - Senior Care</Link>
              </li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">
                <Link to="/rapidiphy">RapidiPhy - Weight Management</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="tel:+917389876573"
                className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Call Us</div>
                  <div className="font-semibold">+91 7389876573</div>
                </div>
              </a>
              
              <a 
                href="mailto:healersphysio@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email Us</div>
                  <div className="font-semibold text-sm">healersphysio@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="font-semibold text-sm">
                    Online Consultations<br />
                    Available Worldwide
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Support Hours</div>
                  <div className="font-semibold text-sm">
                    24/7 Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} The Healers Physiotherapy & Wellness. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Designed with <Heart className="w-3 h-3 inline text-red-500" /> for your health and wellness
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-teal-400 transition-colors">
                Medical Disclaimer
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-teal-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Statement */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-gray-500">
            All information and content on this site is for informational purposes only. 
            Always consult with a qualified healthcare professional before starting any treatment or therapy program.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;