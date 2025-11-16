import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Baby, Users, Briefcase, UserCheck, ArrowRight, Star, Sparkles, TrendingUp } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Baby,
      title: "Matra Shakti",
      subtitle: "Antenatal & Garbha Sanskar",
      description: "Holistic prenatal care combining modern physiotherapy with ancient wisdom for a healthy, joyful pregnancy journey.",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      gradientFrom: "from-pink-500",
      gradientTo: "to-rose-500",
      image: "/src/images/preg2.jpg",
      badge: "Most Popular",
      badgeColor: "bg-pink-500",
      features: ["Prenatal Care", "Garbha Sanskar", "Postnatal Support"],
      link: "/services/matra-shakti"
    },
    {
      icon: Heart,
      title: "Fit Mom",
      subtitle: "Postnatal Recovery Program",
      description: "Comprehensive recovery program helping new mothers regain strength, confidence, and wellness after childbirth.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      gradientFrom: "from-rose-500",
      gradientTo: "to-pink-500",
      image: "/src/images/preg3.jpg",
      badge: "New Mothers",
      badgeColor: "bg-rose-500",
      features: ["Recovery Plan", "Core Strengthening", "Mental Wellness"],
      link: "/services/fit-mom"
    },
    {
      icon: UserCheck,
      title: "Nari Shakti",
      subtitle: "Women's Health & Wellness",
      description: "Complete women's health physiotherapy addressing pelvic floor, hormonal changes, and overall wellness at every life stage.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      gradientFrom: "from-purple-500",
      gradientTo: "to-fuchsia-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      badge: "All Ages",
      badgeColor: "bg-purple-500",
      features: ["Pelvic Health", "Pain Management", "Hormonal Balance"],
      link: "/services/nari-shakti"
    },
    {
      icon: Briefcase,
      title: "ProFlex",
      subtitle: "Work Smart, Move Well",
      description: "Professional workplace wellness with ergonomic assessments and postural education for better work-life balance and productivity.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      image: "/src/images/proflex_1.jpg",
      badge: "Professionals",
      badgeColor: "bg-blue-500",
      features: ["Ergonomic Setup", "Pain Prevention", "Productivity Boost"],
      link: "/services/pro-flex"
    },
    {
      icon: Users,
      title: "Second Innings",
      subtitle: "Geriatric Care & Mobility",
      description: "Specialized care for older adults focusing on mobility, balance, independence, and quality of life enhancement.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      gradientFrom: "from-teal-500",
      gradientTo: "to-emerald-500",
      image: "/src/images/scnd_inn_1.jpg",
      badge: "Senior Care",
      badgeColor: "bg-teal-500",
      features: ["Balance Training", "Fall Prevention", "Independent Living"],
      link: "/services/second-inn"
    },
    {
      icon: TrendingUp,
      title: "RapidiPhy",
      subtitle: "Fast-Track Wellness",
      description: "Accelerated weight management and wellness program to help you achieve your health goals faster with expert guidance.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      image: "././src/images/rapidiphy.png",
      badge: "Quick Results",
      badgeColor: "bg-green-500",
      features: ["Weight Loss", "Fitness Plan", "Nutrition Support"],
      link: "/services/rapidi-phy"
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center">
            <Badge className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 text-sm border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Care Programs
            </Badge>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Specialized Programs
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide expert online physiotherapy services tailored to women's health and wellness needs 
            across all stages of life—from prenatal care to senior wellness, and everything in between.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-semibold">1000+ Women Trust Us</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-600 font-semibold ml-2">4.9/5 Client Rating</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${service.borderColor} shadow-lg overflow-hidden bg-white relative`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`${service.badgeColor} text-white px-3 py-1 text-xs border-0 shadow-lg`}>
                    {service.badge}
                  </Badge>
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - ${service.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-white/50 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${service.gradientFrom} ${service.gradientTo} opacity-0 group-hover:opacity-90 transition-opacity duration-500`}></div>
              </div>

              {/* Content Section */}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all">
                  {service.title}
                </CardTitle>
                <p className={`text-sm font-semibold ${service.color}`}>
                  {service.subtitle}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs px-3 py-1 ${service.bgColor} ${service.color} rounded-full font-medium`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <Link 
                  to={service.link}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${service.color} group/link mt-4`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 ${service.borderColor} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <Card className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
            </div>
            
            <CardContent className="relative py-12 px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Not Sure Which Program is Right for You?
                </h3>
                <p className="text-xl text-teal-50">
                  Book a free consultation with our expert team. We'll help you find the perfect program 
                  tailored to your unique health goals and lifestyle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-teal-700 hover:bg-yellow-300 hover:text-gray-900 text-lg px-10 py-7 h-auto font-bold shadow-xl rounded-full group"
                  >
                    <Link to="/consultation" className="flex items-center gap-2">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="bg-white text-teal-700 hover:bg-yellow-300 hover:text-gray-900 text-lg px-10 py-7 h-auto font-bold shadow-xl rounded-full group"
                  >
                    <Link to="/services">
                      View All Programs
                    </Link>
                  </Button>
                </div>

                {/* Trust Elements */}
                <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
                  <div className="text-white/90">
                    <div className="text-2xl font-bold mb-1">1000+</div>
                    <div className="text-sm text-teal-100">Happy Clients</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl font-bold mb-1">6</div>
                    <div className="text-sm text-teal-100">Programs</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl font-bold mb-1">12+</div>
                    <div className="text-sm text-teal-100">Years Experience</div>
                  </div>
                  <div className="text-white/90">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm text-teal-100">Support</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;