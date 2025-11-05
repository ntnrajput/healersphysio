import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { User, Calendar, Video, FileText, Award, Clock, CheckCircle2, Star } from "lucide-react";
import { useEffect } from "react";

const RapidiPhy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  
  const programFeatures = [
    {
      icon: User,
      title: "Personalized Assessment",
      description: "Comprehensive evaluation of your specific needs, health history, and goals.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      icon: FileText,
      title: "Custom Treatment Plan",
      description: "Tailored exercise programs and therapy protocols designed just for you.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop"
    },
    {
      icon: Video,
      title: "One-on-One Sessions",
      description: "Direct video consultations with certified physiotherapists.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions at times that work best for your schedule.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Regular monitoring and adjustments to ensure optimal results.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop"
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Work with licensed and experienced physiotherapy specialists.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop"
    }
  ];

  const programTypes = [
    {
      title: "Essential Program",
      duration: "4 weeks",
      sessions: "8 sessions",
      price: "$299",
      features: [
        "Initial comprehensive assessment",
        "Personalized exercise program",
        "8 one-on-one video sessions (30 min each)",
        "Progress tracking and adjustments",
        "Educational resources",
        "Email support"
      ],
      badge: "Most Popular",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Comprehensive Program",
      duration: "8 weeks",
      sessions: "16 sessions",
      price: "$549",
      features: [
        "Everything in Essential Program",
        "16 one-on-one video sessions (45 min each)",
        "Detailed progress reports",
        "Nutritional guidance",
        "Family member education session",
        "Priority scheduling",
        "24/7 support chat"
      ],
      badge: "Best Value",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Premium Program",
      duration: "12 weeks",
      sessions: "24 sessions",
      price: "$799",
      features: [
        "Everything in Comprehensive Program",
        "24 one-on-one video sessions (60 min each)",
        "Weekly progress calls",
        "Home equipment recommendations",
        "Lifetime access to resources",
        "Monthly follow-up sessions (3 months)",
        "Direct phone line to therapist"
      ],
      badge: "Complete Care",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/images/preg2.jpg"
            alt="Individual physiotherapy program"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              RapidiPhy - Fast Track Weight Management Program
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Personalized one-on-one physiotherapy programs designed specifically for your unique 
              needs, goals, and lifestyle. Get the attention and care you deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the program that best fits your needs and schedule. All programs include 
              personalized care from certified physiotherapists.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${index === 1 ? 'transform scale-105 border-2 border-teal-200' : ''}`}>
                {program.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${program.badgeColor} text-white px-4 py-1`}>
                      {program.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-teal-600">{program.price}</div>
                    <div className="text-gray-600">{program.duration} • {program.sessions}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link to="/consultation">Choose This Program</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop"
            alt="Healthcare process"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our Individual Programs Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, effective process designed to get you the best results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Book your free 30-minute consultation to discuss your needs and goals."
              },
              {
                step: "2",
                title: "Assessment & Planning",
                description: "Comprehensive health assessment and personalized treatment plan creation."
              },
              {
                step: "3",
                title: "Regular Sessions",
                description: "One-on-one video sessions with your dedicated physiotherapist."
              },
              {
                step: "4",
                title: "Track Progress",
                description: "Monitor your improvement and adjust your program as needed."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop"
            alt="Happy client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 italic mb-6">
              "The individual program was exactly what I needed. The personalized attention and 
              flexible scheduling made it easy to fit into my busy life as a new mom. 
              My physiotherapist was incredibly knowledgeable and supportive."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">Sarah Johnson</div>
            <div className="text-gray-600">Postnatal Recovery Program</div>
          </div>
          
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link to="/consultation">Start Your Individual Program</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RapidiPhy;
