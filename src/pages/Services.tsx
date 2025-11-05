
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Baby, Users, Briefcase, UserCheck, Stethoscope, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Matra Shakti - Prenatal Physiotherapy",
      description: "Comprehensive care for expecting mothers throughout their pregnancy journey.",
      features: [
        "Back and pelvic pain relief",
        "Posture correction and education",
        "Exercise programs for each trimester",
        "Preparation for labor and delivery",
        "Diastasis recti prevention",
        "Breathing techniques"
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      gradient: "from-pink-500 to-rose-500",
      image: "/src/images/preg4.jpg",
      link: "/services/matra-shakti"
    },
    {
      icon: Heart,
      title: "Fit Mom - Postnatal Recovery",
      description: "Specialized recovery programs to help new mothers regain strength and wellness.",
      features: [
        "Core strengthening exercises",
        "Pelvic floor rehabilitation",
        "Diastasis recti treatment",
        "Postural restoration",
        "Energy and endurance building",
        "Sleep position guidance"
      ],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      gradient: "from-rose-500 to-pink-500",
      image: "/src/images/fitmom.jpg",
      link: "/services/fit-mom"
    },
    {
      icon: UserCheck,
      title: "Nari Shakti - Women's Health",
      description: "Complete physiotherapy solutions for women's unique health needs.",
      features: [
        "Pelvic floor dysfunction treatment",
        "Hormonal health support",
        "Menopause symptom management",
        "Osteoporosis prevention",
        "Incontinence rehabilitation",
        "Sexual health improvement"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-violet-500",
      image: "/src/images/narishakti1.jpg",
      link: "/services/nari-shakti"
    },
    {
      icon: Briefcase,
      title: "Proflex - Ergonomic & Postural Education",
      description: "Professional workplace assessments and postural solutions.",
      features: [
        "Workplace ergonomic assessments",
        "Postural correction programs",
        "Desk setup optimization",
        "Movement breaks planning",
        "Repetitive strain injury prevention",
        "Corporate wellness programs"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-cyan-500",
      image: "/src/images/proflex_1.png",
      link: "/services/pro-flex"
    },
    {
      icon: Users,
      title: "Second Innings - Geriatric Physiotherapy",
      description: "Specialized care for older adults focusing on mobility and independence.",
      features: [
        "Fall prevention programs",
        "Balance and coordination training",
        "Strength and flexibility exercises",
        "Pain management strategies",
        "Mobility aid training",
        "Chronic condition management"
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      gradient: "from-teal-500 to-green-500",
      image: "/src/images/scnd_inn.png",
      link: "/services/second-inn"
    },
    {
      icon: Stethoscope,
      title: "RapidiPhy",
      description: "Fastrack Weight Management Program to expedite achievement of your health goals.",
      features: [
        "Chronic pain management",
        "Post-surgical rehabilitation",
        "Sports injury recovery",
        "Arthritis management",
        "Fibromyalgia support",
        "Neurological conditions"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
      image: "/src/images/rapidiphy.png",
      link: "/services/rapidi-phy"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/images/bg_pic_2.jpg"
            alt="Professional physiotherapy services"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Focused Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Focused Online physiotherapy services designed to meet your unique health needs.<br/>
            Personalized care from the comfort of your home.
          </p>
          
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link to="/consultation">Start Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=400&fit=crop"
            alt="Health and wellness"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Book your free consultation today and discover how our personalized physiotherapy 
            services can help you achieve your health goals.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8">
            <Link to="/consultation">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
