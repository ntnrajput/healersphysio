import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Activity, Target, Shield, Sparkles, Calendar, Video, Award, Clock, CheckCircle2, Star, TrendingUp, Smile } from "lucide-react";

const FitMom = () => {
  const programFeatures = [
    {
      icon: Target,
      title: "Pelvic Floor Restoration",
      description: "Evidence-based exercises to strengthen your pelvic floor, reduce leakage, and restore bladder control after delivery.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      icon: Activity,
      title: "Core Rebuilding & Diastasis Management",
      description: "Specialized protocols to heal abdominal separation, rebuild core strength, and regain functional stability.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
    },
    {
      icon: Shield,
      title: "Posture & Spine Rebalancing",
      description: "Correct postural imbalances from pregnancy and feeding, relieving neck, back, and shoulder pain.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Hormonal Health & Energy Optimization",
      description: "Understand hormonal impacts on joints and tissues, with routines designed to boost energy and reduce fatigue.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=200&fit=crop"
    },
    {
      icon: TrendingUp,
      title: "Strength & Stability for Daily Life",
      description: "Build functional strength for lifting, carrying, household tasks, and returning to active living confidently.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Long-Term Women's Wellness Guidance",
      description: "Comprehensive support for bone health, joint mobility, hormonal balance, and sustainable fitness habits.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop"
    }
  ];

  const programTypes = [
    {
      title: "Essential Recovery",
      duration: "6 weeks",
      sessions: "12 sessions",
      price: "$399",
      features: [
        "Initial post-pregnancy assessment",
        "Pelvic floor rehabilitation protocol",
        "Core strengthening & diastasis evaluation",
        "12 one-on-one video sessions (30 min each)",
        "Personalized exercise program",
        "Pain management techniques",
        "Progress tracking & adjustments",
        "Educational resources library"
      ],
      badge: "New Mothers",
      badgeColor: "bg-rose-500"
    },
    {
      title: "Comprehensive Restoration",
      duration: "12 weeks",
      sessions: "24 sessions",
      price: "$749",
      features: [
        "Everything in Essential Recovery",
        "24 one-on-one video sessions (45 min each)",
        "Advanced core & pelvic floor therapy",
        "Posture correction & spine rebalancing",
        "C-section scar mobility work (if applicable)",
        "Nutritional guidance for recovery",
        "Stress & energy management support",
        "Family education session",
        "Priority scheduling & 24/7 chat support"
      ],
      badge: "Most Popular",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Premium Wellness Mastery",
      duration: "6 months",
      sessions: "36+ sessions",
      price: "$1,299",
      features: [
        "Everything in Comprehensive Restoration",
        "36+ personalized sessions (60 min each)",
        "Complete hormonal health & joint care plan",
        "Advanced strength & stability training",
        "Return-to-exercise clearance & guidance",
        "Mental wellness & stress resilience coaching",
        "Bone & joint health optimization",
        "Lifetime access to resources & programs",
        "3 months post-program follow-up support",
        "Direct phone access to your therapist"
      ],
      badge: "Complete Care",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/preg3.jpg"
            alt="Women's health and post-pregnancy recovery"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 text-sm border-0">
              <Heart className="w-4 h-4 mr-2 inline" />
              Post-Pregnancy Recovery & Women's Health
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              FitMom
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 mb-6">
              Women's Health & Post-Pregnancy Recovery Program
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Designed to help women heal, rebuild, and thrive after pregnancy — physically, emotionally, 
              and functionally. Our evidence-based program focuses on pelvic floor restoration, core rebuilding, 
              pain relief, and long-term strength for confident, active motherhood.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                <Link to="/consultation">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Recovery Journey
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 text-lg px-8 py-6 rounded-full">
                <Link to="/consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-rose-600 mb-1">500+</div>
              <div className="text-xs text-gray-600">Mothers Recovered</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-1">92%</div>
              <div className="text-xs text-gray-600">Pain Reduction</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-pink-600 mb-1">85%</div>
              <div className="text-xs text-gray-600">Core Strength Gain</div>
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
              Comprehensive Recovery & Wellness Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our program addresses every aspect of post-pregnancy recovery and women's health, 
              helping you regain strength, confidence, and vitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-rose-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-rose-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
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

      {/* Why Choose FitMom */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why New Mothers Choose FitMom
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Evidence-Based Recovery Protocols",
                description: "Clinically proven methods for pelvic floor healing, diastasis recti management, and core restoration."
              },
              {
                icon: Heart,
                title: "Address Persistent Symptoms",
                description: "Relief from urinary leakage, hip pain, back pain, neck tension, tailbone discomfort, and fatigue."
              },
              {
                icon: Shield,
                title: "Safe & Personalized Approach",
                description: "Programs adapted to your delivery type (vaginal/C-section), current fitness level, and specific concerns."
              },
              {
                icon: TrendingUp,
                title: "Build Long-Term Strength",
                description: "Regain functional fitness for daily activities: lifting, carrying, household work, and active living."
              },
              {
                icon: Smile,
                title: "Holistic Women's Health",
                description: "Support for hormonal balance, joint health, bone density, stress management, and overall wellbeing."
              },
              {
                icon: Award,
                title: "Expert Physiotherapy Guidance",
                description: "Work with certified women's health physiotherapists who understand post-pregnancy challenges."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-2 border-rose-100 hover:shadow-xl transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Recovery Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're weeks or months postpartum, we have a program to support your unique 
              recovery journey. All packages include personalized care from certified women's health physiotherapists.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${index === 1 ? 'transform lg:scale-105 border-4 border-rose-200 shadow-xl' : 'border-2 border-gray-200'}`}>
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
                    <div className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 text-transparent bg-clip-text">
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
                  
                  <Button asChild className={`w-full ${index === 1 ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600' : 'bg-teal-600 hover:bg-teal-700'} text-lg py-6`}>
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

      {/* What We Address */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Post-Pregnancy Challenges We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care for the most common post-pregnancy and women's health concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Pelvic floor weakness & dysfunction",
              "Urinary incontinence & leakage",
              "Diastasis recti (abdominal separation)",
              "Lower back & SI joint pain",
              "Hip, groin & tailbone pain",
              "Neck & shoulder tension",
              "C-section scar mobility issues",
              "Weak core & abdominal muscles",
              "Poor posture from feeding & carrying",
              "Joint pain & hormonal impacts",
              "Chronic fatigue & low energy",
              "Bone density & osteoporosis concerns",
              "Pelvic organ prolapse symptoms",
              "Painful intercourse (dyspareunia)",
              "Stress & emotional overload",
              "Return to exercise anxiety"
            ].map((condition, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur border border-rose-100 hover:shadow-lg hover:border-rose-300 transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
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
              Your Recovery Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, supportive process designed to help you heal and regain your strength
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Share your post-pregnancy concerns and goals in a complimentary 30-minute session.",
                icon: Calendar,
                color: "from-rose-500 to-pink-500"
              },
              {
                step: "2",
                title: "Comprehensive Assessment",
                description: "Full evaluation of pelvic floor, core, posture, pain points, and movement patterns.",
                icon: Target,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "3",
                title: "Personalized Recovery Plan",
                description: "Custom program addressing your specific needs, delivery type, and recovery stage.",
                icon: Heart,
                color: "from-pink-500 to-rose-500"
              },
              {
                step: "4",
                title: "Ongoing Support & Progress",
                description: "Regular sessions, adjustments, and guidance as you rebuild strength and confidence.",
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

      {/* Testimonial Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 to-purple-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Recovery Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from mothers who transformed their post-pregnancy health with FitMom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                quote: "FitMom changed my life! Three months postpartum, I was struggling with back pain and urinary leakage. Within 8 weeks, my core strength improved dramatically, and I'm now completely leak-free. I feel stronger than ever!",
                name: "Priya Reddy",
                role: "Mother of One, 6 months postpartum",
                rating: 5
              },
              {
                quote: "After my C-section, I had persistent pain and my diastasis was 4 fingers wide. The FitMom program helped me heal my core, reduce my gap to 1 finger, and I'm now back to running and lifting my toddler with confidence!",
                name: "Anjali Sharma",
                role: "Mother of Two, 10 months postpartum",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-rose-200 hover:shadow-2xl transition-all">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
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
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-lg px-10 py-7 rounded-full shadow-lg">
              <Link to="/consultation">
                <Heart className="w-6 h-6 mr-2" />
                Start Your FitMom Journey
              </Link>
            </Button>
            <p className="text-gray-600 mt-6">Join 500+ mothers who transformed their health with FitMom</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/preg3.jpg"
            alt="Women's health recovery"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Reclaim Your Strength & Confidence?
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Don't struggle through recovery alone. Get expert guidance, personalized support, and proven 
            protocols to heal your body, regain your strength, and thrive in motherhood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-xl">
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
              <span>500+ Successful Recoveries</span>
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

export default FitMom;