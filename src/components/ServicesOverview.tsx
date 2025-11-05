
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Baby, Users, Briefcase, UserCheck, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Baby,
      title: "Matra Shakti - Prenatal Care",
      description: "Specialized physiotherapy for expecting mothers, focusing on comfort and preparation for childbirth.",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      image: "/src/images/preg2.jpg"
    },
    {
      icon: Heart,
      title: "Fit Mom - Postnatal Recovery",
      description: "Comprehensive recovery programs to help new mothers regain strength and wellness after childbirth.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      image: "/src/images/preg3.jpg"
    },
    {
      icon: UserCheck,
      title: "Nari Shakti - Women's Health",
      description: "Complete women's health physiotherapy covering pelvic floor, hormonal changes, and wellness.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      icon: Briefcase,
      title: "Proflex - Work Smart, Move Well",
      description: "Professional workplace assessments and postural education for better work-life balance.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/src/images/proflex_1.jpg"
    },
    {
      icon: Users,
      title: "Second Innings - Geriatric Care",
      description: "Specialized care for older adults focusing on mobility, balance, and independent living.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      image: "/src/images/scnd_inn_1.jpg"
    },
    {
      icon: Heart,
      title: "RapidiPhy",
      description: "Fastrack Weight Management Program to expedite achievement of your health goals.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "/src/images/rapidiphy.png"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Specialized Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive online physiotherapy services tailored to women's health needs 
            across all stages of life, from prenatal care to geriatric wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
            <Link to="/services" className="flex items-center gap-2">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
