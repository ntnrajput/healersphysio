
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comprehensive
                <span className="text-teal-600 block">Online Physiotherapy</span>
                for Women's Health
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert physiotherapy services from the comfort of your home. Specializing in prenatal, 
                postnatal, geriatric care, and professional ergonomic solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3 h-auto"
              >
                <Link to="/consultation" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 h-auto border-2 hover:bg-gray-50"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">200+</div>
                <div className="text-sm text-gray-600">Trusted Moms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">12+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/src/images/preg1.png"
                alt="Online physiotherapy consultation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">Online</div>
                <div className="text-sm text-gray-600">Consultations</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Certified</div>
                <div className="text-sm text-gray-600">Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
