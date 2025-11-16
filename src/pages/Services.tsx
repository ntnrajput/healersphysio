import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Baby, Users, Briefcase, UserCheck, Stethoscope, CheckCircle, ArrowRight, Award, Clock, Home, Video, Star, Target, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Matra Shakti - Prenatal Physiotherapy",
      description: "Comprehensive care for expecting mothers throughout their pregnancy journey. Experience a healthier, more comfortable pregnancy with expert guidance and personalized exercises designed for each trimester.",
      features: [
        "Back and pelvic pain relief",
        "Posture correction and education",
        "Exercise programs for each trimester",
        "Preparation for labor and delivery",
        "Diastasis recti prevention",
        "Breathing techniques for labor"
      ],
      benefits: [
        "Reduced pregnancy discomfort",
        "Easier labor and delivery",
        "Faster postpartum recovery",
        "Improved baby positioning"
      ],
      duration: "Throughout pregnancy",
      sessions: "Weekly sessions",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      gradient: "from-pink-500 to-rose-500",
      image: "/src/images/preg4.jpg",
      link: "/services/matra-shakti",
      badge: "For Expecting Mothers"
    },
    {
      icon: Heart,
      title: "Fit Mom - Postnatal Recovery",
      description: "Specialized recovery programs to help new mothers regain strength, energy, and wellness. Get back to feeling like yourself while safely caring for your newborn with our evidence-based postnatal rehabilitation.",
      features: [
        "Core strengthening exercises",
        "Pelvic floor rehabilitation",
        "Diastasis recti treatment",
        "Postural restoration",
        "Energy and endurance building",
        "Safe return to exercise guidance"
      ],
      benefits: [
        "Restored core strength",
        "Reduced back pain",
        "Improved bladder control",
        "Enhanced confidence"
      ],
      duration: "6-12 weeks",
      sessions: "2-3 times weekly",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      gradient: "from-rose-500 to-pink-500",
      image: "/src/images/fitmom.jpg",
      link: "/services/fit-mom",
      badge: "For New Mothers"
    },
    {
      icon: UserCheck,
      title: "Nari Shakti - Women's Health",
      description: "Complete physiotherapy solutions for women's unique health needs across all life stages. Addressing sensitive health concerns with empathy, expertise, and evidence-based treatments in a supportive environment.",
      features: [
        "Pelvic floor dysfunction treatment",
        "Hormonal health support",
        "Menopause symptom management",
        "Osteoporosis prevention",
        "Incontinence rehabilitation",
        "Sexual health improvement"
      ],
      benefits: [
        "Improved quality of life",
        "Enhanced pelvic health",
        "Better hormonal balance",
        "Increased confidence"
      ],
      duration: "8-12 weeks",
      sessions: "Customized schedule",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-violet-500",
      image: "/src/images/narishakti1.jpg",
      link: "/services/nari-shakti",
      badge: "For All Women"
    },
    {
      icon: Briefcase,
      title: "Proflex - Ergonomic & Postural Education",
      description: "Professional workplace wellness and postural solutions for the modern workforce. Combat the effects of desk jobs, long standing, and repetitive work with our specialized ergonomic programs.",
      features: [
        "Workplace ergonomic assessments",
        "Postural correction programs",
        "Desk setup optimization",
        "Movement breaks planning",
        "Repetitive strain injury prevention",
        "Corporate wellness programs"
      ],
      benefits: [
        "Reduced workplace pain",
        "Increased productivity",
        "Better work posture",
        "Injury prevention"
      ],
      duration: "4-8 weeks",
      sessions: "Flexible scheduling",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
      image: "/src/images/proflex_1.png",
      link: "/services/pro-flex",
      badge: "For Professionals"
    },
    {
      icon: Users,
      title: "Second Innings - Geriatric Physiotherapy",
      description: "Specialized care for older adults focusing on mobility, independence, and quality of life. Help your loved ones maintain their dignity and independence with our compassionate senior care programs.",
      features: [
        "Fall prevention programs",
        "Balance and coordination training",
        "Strength and flexibility exercises",
        "Pain management strategies",
        "Mobility aid training",
        "Chronic condition management"
      ],
      benefits: [
        "Enhanced independence",
        "Reduced fall risk",
        "Improved mobility",
        "Better quality of life"
      ],
      duration: "12+ weeks",
      sessions: "2-3 times weekly",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      gradient: "from-teal-500 to-green-500",
      image: "/src/images/scnd_inn.png",
      link: "/services/second-inn",
      badge: "For Seniors 60+"
    },
    {
      icon: Stethoscope,
      title: "RapidiPhy - Fast-Track Wellness",
      description: "Accelerated wellness program for rapid health transformation. Comprehensive approach combining physiotherapy with lifestyle modifications for those seeking quick, sustainable results in weight management and overall health.",
      features: [
        "Customized exercise protocols",
        "Metabolic enhancement techniques",
        "Nutritional guidance integration",
        "Body composition monitoring",
        "Lifestyle modification coaching",
        "Progress tracking & adjustments"
      ],
      benefits: [
        "Faster health goals achievement",
        "Sustainable weight management",
        "Improved fitness levels",
        "Enhanced metabolism"
      ],
      duration: "8-16 weeks",
      sessions: "3-4 times weekly",
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
      image: "/src/images/rapidiphy.png",
      link: "/services/rapidi-phy",
      badge: "Fast-Track Program"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "11+ Years Experience",
      description: "Dr. Tina Singh brings expertise from premier hospitals like Medanta and Fortis"
    },
    {
      icon: Home,
      title: "Home Visit Services",
      description: "Professional physiotherapy in the comfort of your home for your convenience"
    },
    {
      icon: Video,
      title: "Online Consultations",
      description: "Virtual sessions available for busy schedules and remote accessibility"
    },
    {
      icon: Target,
      title: "Personalized Programs",
      description: "Every treatment plan is customized to your unique needs and goals"
    }
  ];

  const serviceCategories = [
    {
      category: "Women's Health",
      programs: ["Matra Shakti", "Fit Mom", "Nari Shakti"],
      icon: Heart,
      color: "pink"
    },
    {
      category: "Age-Specific Care",
      programs: ["Second Innings"],
      icon: Users,
      color: "teal"
    },
    {
      category: "Workplace Wellness",
      programs: ["Proflex"],
      icon: Briefcase,
      color: "blue"
    },
    {
      category: "Specialized Programs",
      programs: ["RapidiPhy"],
      icon: Zap,
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-pink-50 py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/images/bg_pic_2.jpg"
            alt="Professional physiotherapy services"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-teal-600 text-white px-4 py-2 text-sm">Comprehensive Care Programs</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Specialized Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Expert physiotherapy services designed to meet your unique health needs at every stage of life.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Personalized care delivered through clinic visits, home sessions, or online consultations 
            - choose what works best for you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-semibold">Clinic Visits</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-semibold">Home Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700 font-semibold">Online Sessions</span>
            </div>
          </div>

          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8">
            <Link to="/consultation">Start Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Programs Organized by Your Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect program tailored to your life stage and health goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((cat, index) => (
              <Card key={index} className={`border-2 border-${cat.color}-200 hover:shadow-lg transition-shadow`}>
                <CardContent className="pt-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${cat.color}-500 to-${cat.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{cat.category}</h3>
                  <div className="space-y-2">
                    {cat.programs.map((program, pIndex) => (
                      <div key={pIndex} className="flex items-center justify-center gap-2">
                        <div className={`w-2 h-2 bg-${cat.color}-500 rounded-full`}></div>
                        <span className="text-sm text-gray-700">{program}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Detailed Program Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore each program in detail to find the perfect fit for your health journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  
                  {/* Program Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${service.gradient} text-white px-3 py-1`}>
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Duration Info */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Clock className="w-4 h-4 text-gray-700" />
                      <span className="text-sm font-semibold text-gray-900">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">4.9/5</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">What's Included:</h4>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className={`${service.bgColor} rounded-lg p-4 mb-6`}>
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 ${service.color.replace('text-', 'bg-')} rounded-full`}></div>
                          <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Session Info & CTA */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Session Frequency</p>
                      <p className="text-sm font-semibold text-gray-900">{service.sessions}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Program Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{service.duration}</p>
                    </div>
                  </div>

                  <Button asChild className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}>
                    <Link to={service.link} className="flex items-center justify-center gap-2">
                      Explore This Program
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose The Healers for Your Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bhilai-Durg's premier physiotherapy clinic with proven results and patient satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-2 border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our Programs Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, proven process to get you from pain to progress
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Book a complimentary consultation to discuss your health concerns and goals",
                icon: "📞"
              },
              {
                step: "2",
                title: "Personalized Assessment",
                description: "Comprehensive evaluation of your condition and creation of custom treatment plan",
                icon: "📋"
              },
              {
                step: "3",
                title: "Begin Treatment",
                description: "Start your sessions - choose clinic visits, home service, or online consultations",
                icon: "💪"
              },
              {
                step: "4",
                title: "Track Progress",
                description: "Regular monitoring and adjustments to ensure optimal recovery and results",
                icon: "📈"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl text-gray-700 italic mb-6">
            "The Healers' personalized approach made all the difference in my recovery. 
            Dr. Tina and her team truly care about their patients' wellbeing and progress."
          </blockquote>
          <div className="text-lg font-semibold text-gray-900">Priya Sharma</div>
          <div className="text-gray-600 mb-6">Fit Mom Program Patient</div>
          <Button asChild variant="outline" className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50">
            <Link to="/testimonials">Read More Success Stories</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-24 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=400&fit=crop"
            alt="Health and wellness"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Join over 1,000 satisfied patients who have transformed their lives at Bhilai-Durg's 
            best physiotherapy clinic. Book your free consultation today and discover how our 
            personalized programs can help you achieve your health goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8 hover:scale-105 transition-transform">
              <Link to="/consultation">Get Your Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-700 text-lg px-8">
              <Link to="/about">Learn About Our Team</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-teal-100 pt-8 border-t border-white/30">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>11+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>1000+ Happy Patients</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;