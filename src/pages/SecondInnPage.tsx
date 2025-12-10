import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Activity, Shield, Users, Home, Award, Clock, CheckCircle2, Star, TrendingUp, Smile, Brain, Footprints, Dumbbell, Target, Calendar, Sparkles, Zap } from "lucide-react";

const SecondInn = () => {
  const programFeatures = [
    {
      icon: Shield,
      title: "Fall Prevention & Balance Training",
      description: "Evidence-based exercises proven to reduce fall risk by 35-40%, improving stability, coordination, and confidence.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop"
    },
    {
      icon: Dumbbell,
      title: "Strength & Mobility Enhancement",
      description: "Progressive resistance training to build muscle mass, improve joint function, and maintain independence in daily activities.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Cardiovascular Fitness Program",
      description: "Low-impact aerobic exercises to strengthen your heart, improve circulation, and boost endurance safely.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=200&fit=crop"
    },
    {
      icon: Target,
      title: "Chronic Condition Management",
      description: "Specialized care for arthritis, osteoporosis, diabetes, heart disease, and other age-related health conditions.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop"
    },
    {
      icon: Brain,
      title: "Cognitive Health & Mental Wellness",
      description: "Exercise programs that enhance brain function, memory, mood, and reduce risk of cognitive decline.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=200&fit=crop"
    },
    {
      icon: Home,
      title: "Independent Living Support",
      description: "Functional training for daily activities like dressing, bathing, cooking, and household tasks to maintain autonomy.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop"
    }
  ];

  const programTypes = [
    {
      title: "Active Aging Essentials",
      duration: "8 weeks",
      sessions: "16 sessions",
      price: "$449",
      features: [
        "Comprehensive geriatric fitness assessment",
        "Fall risk evaluation & prevention plan",
        "16 guided exercise sessions (30 min each)",
        "Balance & strength training protocols",
        "Flexibility & mobility work",
        "Pain management techniques",
        "Home safety recommendations",
        "Progress tracking & modifications"
      ],
      badge: "Great Start",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Complete Vitality Program",
      duration: "16 weeks",
      sessions: "32 sessions",
      price: "$849",
      features: [
        "Everything in Active Aging Essentials",
        "32 personalized sessions (45 min each)",
        "Advanced fall prevention training",
        "Cardiovascular fitness development",
        "Chronic disease management support",
        "Nutritional guidance for seniors",
        "Social engagement activities",
        "Cognitive health exercises",
        "Family education session",
        "Priority scheduling & 24/7 support"
      ],
      badge: "Most Popular",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Lifelong Wellness Mastery",
      duration: "6 months",
      sessions: "48+ sessions",
      price: "$1,499",
      features: [
        "Everything in Complete Vitality Program",
        "48+ one-on-one sessions (60 min each)",
        "Comprehensive multi-condition care",
        "Post-surgical rehabilitation (if needed)",
        "Advanced balance & gait training",
        "Osteoporosis & bone health program",
        "Tai Chi & gentle yoga integration",
        "Group wellness classes access",
        "Caregiver training & support",
        "Lifetime resource access",
        "3-month maintenance program",
        "Direct phone access to therapist"
      ],
      badge: "Complete Care",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/scnd_inn_1.jpg"
            alt="Active seniors enjoying fitness"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 text-sm border-0">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Specialized Geriatric Physiotherapy
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Second Innings
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-6">
              Geriatric Health & Fitness Program
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Your golden years should be your strongest years. Our specialized program helps seniors 65+ maintain 
              independence, prevent falls, manage chronic conditions, and thrive with confidence, strength, and vitality. 
              Age is just a number — let's make your second innings the best one yet!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                <Link to="/consultation">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Active Aging Journey
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 text-lg px-8 py-6 rounded-full">
                <Link to="/consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Senior Assessment
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-teal-600 mb-1">35-40%</div>
              <div className="text-xs text-gray-600">Fall Risk Reduction</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-1">65+</div>
              <div className="text-xs text-gray-600">Years Young</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-1">92%</div>
              <div className="text-xs text-gray-600">Improved Mobility</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-xs text-gray-600">Evidence-Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Second Innings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Second Innings?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based geriatric care designed specifically for the unique needs of seniors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Dramatically Reduce Fall Risk",
                description: "Research-proven exercises reduce falls by 35-40%, giving you confidence to stay active and independent."
              },
              {
                icon: TrendingUp,
                title: "Maintain & Regain Strength",
                description: "Combat age-related muscle loss with progressive strength training designed for senior bodies."
              },
              {
                icon: Footprints,
                title: "Improve Balance & Mobility",
                description: "Specialized balance training enhances stability, coordination, and walking ability for safer daily living."
              },
              {
                icon: Heart,
                title: "Manage Chronic Conditions",
                description: "Expert care for arthritis, osteoporosis, heart disease, diabetes, and other age-related health issues."
              },
              {
                icon: Brain,
                title: "Boost Cognitive Health",
                description: "Physical exercise enhances memory, mental clarity, mood, and reduces risk of cognitive decline."
              },
              {
                icon: Smile,
                title: "Enhance Quality of Life",
                description: "Stay independent, active, and engaged in activities you love with friends and family."
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Senior Wellness Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six essential components working together to keep you strong, stable, and independent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-teal-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
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

      {/* Conditions We Help Manage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Age-Related Conditions We Help Manage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Arthritis & joint pain",
              "Osteoporosis & bone density loss",
              "Balance disorders & vertigo",
              "Post-fall recovery & fear of falling",
              "Parkinson's disease management",
              "Stroke rehabilitation",
              "Heart disease & cardiovascular fitness",
              "Diabetes management through exercise",
              "Chronic pain conditions",
              "Post-surgical rehabilitation (hip, knee replacements)",
              "Frailty & muscle weakness",
              "Limited mobility & flexibility",
              "Respiratory conditions (COPD)",
              "Neuropathy & nerve disorders",
              "Multiple sclerosis",
              "Alzheimer's & dementia (early stages)",
              "Incontinence issues",
              "Sleep disturbances",
              "Depression & anxiety",
              "Social isolation & loneliness"
            ].map((condition, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-teal-50 border border-teal-100 hover:shadow-lg transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Packages */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Senior Wellness Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're new to senior fitness or looking for comprehensive care, we have a program 
              tailored to your needs. All packages include personalized care from certified geriatric physiotherapists.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${index === 1 ? 'transform lg:scale-105 border-4 border-blue-200 shadow-xl' : 'border-2 border-gray-200'}`}>
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
                    <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-transparent bg-clip-text">
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
                  
                  <Button asChild className={`w-full ${index === 1 ? 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600' : 'bg-teal-600 hover:bg-teal-700'} text-lg py-6`}>
                    <Link to="/consultation">
                      Choose This Plan
                      <Heart className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Path to Active Aging
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, supportive process designed for senior safety and success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Senior Assessment",
                description: "Comprehensive evaluation of your balance, strength, mobility, and health goals — no commitment required.",
                icon: Calendar,
                color: "from-teal-500 to-blue-500"
              },
              {
                step: "2",
                title: "Personalized Care Plan",
                description: "Custom program designed for your age, abilities, health conditions, and lifestyle preferences.",
                icon: Target,
                color: "from-blue-500 to-purple-500"
              },
              {
                step: "3",
                title: "Guided Exercise Sessions",
                description: "Safe, gentle workouts led by geriatric specialists via video or in-person options.",
                icon: Activity,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "4",
                title: "Ongoing Progress & Support",
                description: "Regular check-ins, adjustments, and encouragement as you grow stronger and more confident.",
                icon: TrendingUp,
                color: "from-pink-500 to-rose-500"
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
      <section className="relative py-20 bg-gradient-to-br from-teal-50 to-purple-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Seniors Thriving with Second Innings
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from active seniors who reclaimed their independence and vitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                quote: "At 72, I was terrified of falling after a bad fall last year. Second Innings gave me my confidence back! I'm stronger, steadier, and even started gardening again. My balance has improved tremendously!",
                name: "Ramesh Krishnan",
                role: "Age 72, Retired Teacher",
                rating: 5
              },
              {
                quote: "Living with arthritis made daily tasks so painful. This program taught me safe exercises that actually reduced my joint pain. I can play with my grandchildren now without worrying about my knees!",
                name: "Savitri Devi",
                role: "Age 68, Grandmother of 4",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-teal-200 hover:shadow-2xl transition-all">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
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
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-lg px-10 py-7 rounded-full shadow-lg">
              <Link to="/consultation">
                <Sparkles className="w-6 h-6 mr-2" />
                Begin Your Second Innings
              </Link>
            </Button>
            <p className="text-gray-600 mt-6">Join hundreds of seniors living their best lives with Second Innings</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/scnd_inn_1.jpg"
            alt="Active senior living"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Best Years Are Ahead of You
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Don't let age slow you down. With the right support, exercises, and expertise, you can stay 
            strong, independent, and active for years to come. Your second innings can be your strongest — 
            let's make it happen together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-xl">
              <Link to="/consultation">
                <Calendar className="w-6 h-6 mr-2" />
                Schedule Free Assessment
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Safe & Gentle Exercises</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span>Geriatric Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>Evidence-Based Programs</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondInn;