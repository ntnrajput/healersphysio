import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle, Star, Heart, Shield, Award, Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 relative z-10">
            {/* Badge */}
            <div className="inline-flex">
              <Badge className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-2 text-sm border-0">
                <Heart className="w-4 h-4 mr-2 inline" />
                Trusted by 1000+ Women Worldwide
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comprehensive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Online Physiotherapy
                </span>
                for Women's Health
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Expert physiotherapy services from the comfort of your home. Specializing in prenatal, 
                postnatal, women's wellness, and holistic care for every stage of life.
              </p>
            </div>

            {/* Key Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Certified Professionals",
                "Personalized Care Plans",
                "24/7 Support Available",
                "Evidence-Based Treatment"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg px-8 py-7 h-auto shadow-lg hover:shadow-xl transition-all rounded-full"
              >
                <Link to="/consultation" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-7 h-auto border-2 border-gray-300 hover:bg-gray-50 hover:border-teal-600 hover:text-teal-600 transition-all rounded-full"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">1000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 font-medium ml-2">4.9/5 Rating</span>
              </div>
            </div>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text mb-1">
                  1000+
                </div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Trusted Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text mb-1">
                  12+
                </div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text mb-1">
                  24/7
                </div>
                <div className="text-xs lg:text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/images/preg1.png"
                alt="Professional online physiotherapy consultation for women's health"
                className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110">
                  <Video className="w-10 h-10 text-teal-600 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Floating Badge - Top Right */}
            <div className="absolute -top-4 -right-4 bg-white p-5 rounded-2xl shadow-2xl border-2 border-teal-100 animate-bounce">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold text-teal-600">Online</div>
                <div className="text-xs text-gray-600">Consultations</div>
              </div>
            </div>
            
            {/* Floating Badge - Bottom Left */}
            <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-2xl shadow-2xl border-2 border-blue-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold text-blue-600">Certified</div>
                <div className="text-xs text-gray-600">Professionals</div>
              </div>
            </div>

            {/* Floating Testimonial Card */}
            <div className="hidden lg:block absolute top-1/2 -left-8 bg-white p-4 rounded-xl shadow-xl max-w-[200px] border border-gray-100">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-600 italic mb-2">
                "Life-changing care! Highly recommend."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full"></div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Sarah M.</div>
                  <div className="text-xs text-gray-500">New Mother</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-teal-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,64 C240,96 480,112 720,96 C960,80 1200,48 1440,64 L1440,120 L0,120 Z" 
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;