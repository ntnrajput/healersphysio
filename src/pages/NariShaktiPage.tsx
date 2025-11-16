import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Activity, Target, Shield, Sparkles, Calendar, Video, Award, Clock, CheckCircle2, Star, TrendingUp, Smile, Users, Zap, Brain } from "lucide-react";

const NariShakti = () => {
  const programFeatures = [
    {
      icon: Target,
      title: "Pelvic Floor Health & Rehabilitation",
      description: "Comprehensive pelvic floor assessment and strengthening for improved bladder control, sexual health, and core stability.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      icon: Activity,
      title: "Bone Density & Osteoporosis Management",
      description: "Weight-bearing exercises and strength training to build and maintain bone density, preventing fractures and osteoporosis.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Menopause Support & Symptom Management",
      description: "Specialized exercise programs to manage hot flashes, mood changes, weight gain, and other menopausal symptoms.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=200&fit=crop"
    },
    {
      icon: Zap,
      title: "Hormonal Balance & Energy Optimization",
      description: "Tailored fitness routines to support hormonal health, boost energy levels, and combat fatigue throughout your cycle.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
    },
    {
      icon: Brain,
      title: "Stress Management & Mental Wellness",
      description: "Mind-body practices including yoga, meditation, and breathing techniques for emotional balance and stress relief.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=200&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Strength, Flexibility & Functional Fitness",
      description: "Progressive strength training, mobility work, and functional exercises for daily life activities and independence.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop"
    }
  ];

  const programTypes = [
    {
      title: "Foundation Wellness",
      duration: "8 weeks",
      sessions: "16 sessions",
      price: "$449",
      features: [
        "Comprehensive women's health assessment",
        "Pelvic floor evaluation & training",
        "Personalized exercise program",
        "16 one-on-one video sessions (30 min each)",
        "Bone health & posture screening",
        "Nutritional guidance basics",
        "Educational resources library",
        "Progress tracking & adjustments"
      ],
      badge: "Getting Started",
      badgeColor: "bg-purple-500"
    },
    {
      title: "Complete Health Transformation",
      duration: "16 weeks",
      sessions: "32 sessions",
      price: "$849",
      features: [
        "Everything in Foundation Wellness",
        "32 one-on-one video sessions (45 min each)",
        "Advanced pelvic health therapy",
        "Menopause symptom management plan",
        "Strength & bone density optimization",
        "Hormonal health support",
        "Stress management techniques",
        "Mental wellness counseling",
        "Priority scheduling & 24/7 chat support"
      ],
      badge: "Most Popular",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Lifetime Vitality Mastery",
      duration: "6 months",
      sessions: "48+ sessions",
      price: "$1,499",
      features: [
        "Everything in Complete Health Transformation",
        "48+ personalized sessions (60 min each)",
        "Comprehensive hormonal health optimization",
        "Advanced cardiovascular fitness plan",
        "Sexual health & intimacy support",
        "Chronic pain management protocols",
        "Pre/post-surgical rehabilitation (if needed)",
        "Lifestyle & habit coaching",
        "Group wellness workshops",
        "Lifetime access to all resources",
        "3-month post-program support",
        "Direct phone access to therapist"
      ],
      badge: "Complete Care",
      badgeColor: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
            alt="Women's health and wellness"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-2 text-sm border-0">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Complete Women's Health & Fitness Program
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Nari Shakti
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600 mb-6">
              Comprehensive Women's Health & Wellness Program
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Empowering women at every life stage with specialized physiotherapy, fitness guidance, and holistic wellness support. 
              From pelvic health to bone density, hormonal balance to stress management — achieve optimal health and vitality at any age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                <Link to="/consultation">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Wellness Journey
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full">
                <Link to="/consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-1">800+</div>
              <div className="text-xs text-gray-600">Women Empowered</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-fuchsia-600 mb-1">All Ages</div>
              <div className="text-xs text-gray-600">20s to 80s+</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-pink-600 mb-1">90%</div>
              <div className="text-xs text-gray-600">Improved Quality of Life</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
              <div className="text-xs text-gray-600">Personalized Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Women's Health Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based physiotherapy and fitness programs addressing every aspect of women's 
              health from reproductive years through menopause and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-purple-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Who Is Nari Shakti For?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our program supports women at every life stage with personalized care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Women in Reproductive Years (20s-40s)",
                description: "Pelvic health, menstrual health, sexual wellness, fitness optimization, and preventive care."
              },
              {
                icon: Heart,
                title: "Perimenopausal Women (40s-50s)",
                description: "Managing hormonal changes, bone health, weight management, and symptom relief."
              },
              {
                icon: Sparkles,
                title: "Postmenopausal Women (50s+)",
                description: "Bone density preservation, cardiovascular health, balance, and vitality maintenance."
              },
              {
                icon: Target,
                title: "Women with Pelvic Floor Issues",
                description: "Incontinence, prolapse, pelvic pain, painful intercourse, or post-surgical recovery."
              },
              {
                icon: Shield,
                title: "Women with Chronic Conditions",
                description: "Osteoporosis, arthritis, fibromyalgia, autoimmune diseases, or chronic pain."
              },
              {
                icon: Activity,
                title: "Active Women & Athletes",
                description: "Performance optimization, injury prevention, and sport-specific training support."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur border-2 border-purple-100 hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Conditions Addressed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Women's Health Conditions We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized care for a wide range of women's health concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Pelvic floor dysfunction & weakness",
              "Urinary & fecal incontinence",
              "Pelvic organ prolapse",
              "Pelvic pain & endometriosis",
              "Painful intercourse (dyspareunia)",
              "Vaginismus & sexual dysfunction",
              "Osteoporosis & bone density loss",
              "Menopause symptoms (hot flashes, night sweats)",
              "Weight gain & metabolic changes",
              "Joint pain & arthritis",
              "Fibromyalgia & chronic fatigue",
              "Lower back & SI joint pain",
              "Neck & shoulder tension",
              "Hormonal imbalances",
              "PCOS (Polycystic Ovary Syndrome)",
              "Breast health & lymphedema",
              "Pre/post-surgical rehabilitation",
              "Cardiovascular health concerns",
              "Balance & fall prevention",
              "Stress, anxiety & depression",
              "Sleep disturbances",
              "Digestive issues & constipation"
            ].map((condition, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-purple-50 border border-purple-100 hover:shadow-lg hover:border-purple-300 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Wellness Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just starting your wellness journey or seeking comprehensive transformation, 
              we have a program designed for your unique needs. All packages include personalized care from 
              certified women's health physiotherapists.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${index === 1 ? 'transform lg:scale-105 border-4 border-purple-200 shadow-xl' : 'border-2 border-gray-200'}`}>
                {program.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className={`${program.badgeColor} text-white px-6 py-2 shadow-lg`}>
                      {program.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-transparent bg-clip-text">
                      {program.price}
                    </div>
                    <div className="text-gray-600 font-medium">{program.duration}</div>
                    <div className="text-sm text-gray-500">{program.sessions}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className={`w-full ${index === 1 ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600' : 'bg-teal-600 hover:bg-teal-700'} text-lg py-6`}>
                    <Link to="/consultation">
                      Choose This Package
                      <Heart className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Wellness Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, supportive process designed to help you achieve optimal health and vitality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Discuss your health goals, concerns, and lifestyle in a complimentary 30-minute session.",
                icon: Calendar,
                color: "from-purple-500 to-fuchsia-500"
              },
              {
                step: "2",
                title: "Comprehensive Assessment",
                description: "Full evaluation of pelvic health, musculoskeletal function, fitness level, and health history.",
                icon: Target,
                color: "from-fuchsia-500 to-pink-500"
              },
              {
                step: "3",
                title: "Personalized Program",
                description: "Custom wellness plan designed for your specific needs, goals, and life stage.",
                icon: Heart,
                color: "from-pink-500 to-rose-500"
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Regular sessions, progress tracking, and adjustments as you transform your health.",
                icon: TrendingUp,
                color: "from-teal-500 to-blue-500"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.step}
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg mx-auto -mt-10 mb-4 flex items-center justify-center border-2 border-gray-100">
                  <step.icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-fuchsia-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Women Thriving with Nari Shakti
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from women who transformed their health and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                quote: "At 52, I thought my active days were over with menopause symptoms and joint pain. Nari Shakti changed everything! My bone density improved, I lost 15 pounds, and I feel stronger and more energetic than I did in my 40s!",
                name: "Lakshmi Iyer",
                role: "Age 52, Business Owner",
                rating: 5
              },
              {
                quote: "Years of pelvic floor issues and painful intercourse made me feel broken. The Nari Shakti program gave me my confidence and intimacy back. The care is compassionate, professional, and truly life-changing!",
                name: "Meera Kapoor",
                role: "Age 38, Teacher",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-purple-200 hover:shadow-2xl transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-lg px-10 py-7 rounded-full shadow-lg">
              <Link to="/consultation">
                <Heart className="w-6 h-6 mr-2" />
                Start Your Nari Shakti Journey
              </Link>
            </Button>
            <p className="text-gray-600 mt-6">Join 800+ women who transformed their health with Nari Shakti</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
            alt="Women's wellness"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Embrace Your Full Potential?
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Your health journey starts here. Get expert guidance, personalized care, and evidence-based 
            treatment to optimize your pelvic health, bone density, hormonal balance, and overall vitality — 
            at any age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-xl">
              <Link to="/consultation">
                <Calendar className="w-6 h-6 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Certified Women's Health Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6" />
              <span>800+ Women Empowered</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>Evidence-Based Care</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NariShakti;