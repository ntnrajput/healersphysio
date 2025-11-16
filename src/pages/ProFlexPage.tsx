import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { User, Calendar, Video, FileText, Award, Clock, CheckCircle2, Star } from "lucide-react";

const ProFlex = () => {
  const programFeatures = [
    {
      icon: User,
      title: "Workplace Assessment",
      description: "Comprehensive evaluation of your work posture, ergonomics, and occupational stress factors.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      icon: FileText,
      title: "Ergonomic Solutions",
      description: "Customized exercise routines and workplace modifications to prevent and treat occupational injuries.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop"
    },
    {
      icon: Video,
      title: "Virtual Consultations",
      description: "Convenient online sessions that fit your work schedule - no need to take time off.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      icon: Calendar,
      title: "Flexible Timing",
      description: "Early morning, lunch breaks, or evening sessions - book when it works for you.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
    },
    {
      icon: Clock,
      title: "Progress Monitoring",
      description: "Regular check-ins and program adjustments to ensure sustained workplace wellness.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop"
    },
    {
      icon: Award,
      title: "Occupational Health Experts",
      description: "Specialized physiotherapists trained in workplace ergonomics and injury prevention.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop"
    }
  ];

  const programTypes = [
    {
      title: "Desk Worker Relief",
      duration: "4 weeks",
      sessions: "8 sessions",
      price: "$299",
      features: [
        "Ergonomic workstation assessment",
        "Neck, shoulder & back pain relief exercises",
        "8 virtual therapy sessions (30 min each)",
        "Posture correction techniques",
        "Desk stretching routine guide",
        "Email support for workplace queries"
      ],
      badge: "Most Popular",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Active Professional Care",
      duration: "8 weeks",
      sessions: "16 sessions",
      price: "$549",
      features: [
        "Everything in Desk Worker Relief",
        "16 one-on-one sessions (45 min each)",
        "Standing & walking fatigue management",
        "Lower back and foot pain protocols",
        "Custom strengthening programs",
        "Priority scheduling",
        "Workplace injury prevention training"
      ],
      badge: "Best Value",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Complete Wellness Package",
      duration: "12 weeks",
      sessions: "24 sessions",
      price: "$799",
      features: [
        "Everything in Active Professional Care",
        "24 comprehensive sessions (60 min each)",
        "Stress management techniques",
        "Corporate wellness consultation",
        "Ergonomic equipment recommendations",
        "3 months follow-up support",
        "24/7 WhatsApp support"
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
            alt="Professional workplace wellness"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ProFlex - Ergonomic Wellcare for Professionals
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized physiotherapy program designed for working professionals facing occupational 
              health challenges. Combat the effects of prolonged sitting, standing, and walking with 
              our expert-guided wellness solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Desk Job Pain Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Standing Work Recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-600" />
                <span>Walking Job Wellness</span>
              </div>
            </div>
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

      {/* Common Workplace Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              We Address These Occupational Hazards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common workplace health issues affecting professionals like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Long Sitting (Desk Jobs)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p>• Chronic lower back pain</p>
                <p>• Neck and shoulder stiffness</p>
                <p>• Carpal tunnel syndrome</p>
                <p>• Poor posture & spinal issues</p>
                <p>• Hip flexor tightness</p>
                <p>• Reduced circulation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Long Standing (Retail/Healthcare)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p>• Plantar fasciitis</p>
                <p>• Varicose veins</p>
                <p>• Knee joint pain</p>
                <p>• Lower back strain</p>
                <p>• Foot & ankle swelling</p>
                <p>• Leg muscle fatigue</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Long Walking (Field Jobs)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p>• Heel and arch pain</p>
                <p>• Achilles tendinitis</p>
                <p>• IT band syndrome</p>
                <p>• Hip and knee overuse</p>
                <p>• Shin splints</p>
                <p>• General body fatigue</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your ProFlex Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the program that best fits your professional lifestyle and health needs. 
              All programs designed specifically for workplace wellness.
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
                    <Link to="/consultation">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop"
            alt="Professional wellness process"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How ProFlex Works for Busy Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process that fits your work schedule
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Work Assessment",
                description: "15-minute consultation to understand your work environment and pain points."
              },
              {
                step: "2",
                title: "Personalized Plan",
                description: "Custom ergonomic and exercise protocol based on your occupation and symptoms."
              },
              {
                step: "3",
                title: "Flexible Sessions",
                description: "Virtual therapy sessions scheduled around your work - before, during breaks, or after."
              },
              {
                step: "4",
                title: "Workplace Integration",
                description: "Learn exercises and modifications you can do at work for lasting relief."
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
      <section className="relative py-20 bg-gray-50">
        <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop"
            alt="Happy professional"
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
              "As a software developer, I was suffering from severe neck and back pain from sitting 
              10+ hours a day. ProFlex completely transformed my workday. The virtual sessions fit 
              perfectly into my schedule, and I've learned exercises I can do right at my desk."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">Rajesh Kumar</div>
            <div className="text-gray-600">Software Engineer, IT Company</div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mt-12">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Working as a nurse meant being on my feet for 12-hour shifts. The foot and back pain 
              was unbearable. ProFlex's standing worker program gave me practical solutions and 
              strengthening exercises that actually work!"
            </blockquote>
            <div className="text-md font-semibold text-gray-900">Priya Sharma</div>
            <div className="text-gray-600">Registered Nurse, Hospital</div>
          </div>
          
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 mt-12">
            <Link to="/consultation">Start Your Workplace Wellness Journey</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose ProFlex */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Professionals Choose ProFlex
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <p className="text-gray-700">Professionals Treated</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
              <p className="text-gray-700">Pain Reduction Rate</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <p className="text-gray-700">Virtual Sessions</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <p className="text-gray-700">Support Available</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProFlex;