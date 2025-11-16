import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Activity, Zap, Heart, Apple, Dumbbell, Award, Clock, CheckCircle2, Star, Scale, Brain, Shield, Users, Calendar, Sparkles } from "lucide-react";

const RapidiPhy = () => {
  const programFeatures = [
    {
      icon: Target,
      title: "Personalized Weight Loss Assessment",
      description: "Comprehensive evaluation of your metabolism, body composition, fitness level, and health barriers to weight loss.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      icon: Apple,
      title: "Evidence-Based Nutrition Plan",
      description: "Customized meal plans designed for rapid yet sustainable fat loss while preserving muscle mass and energy.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop"
    },
    {
      icon: Dumbbell,
      title: "Progressive Exercise Program",
      description: "Structured workouts combining strength training, cardio, and mobility work to maximize calorie burn and metabolism.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
    },
    {
      icon: Brain,
      title: "Behavioral & Habit Coaching",
      description: "Psychology-backed strategies to overcome emotional eating, build healthy habits, and maintain motivation.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=200&fit=crop"
    },
    {
      icon: Zap,
      title: "Metabolism Optimization",
      description: "Scientific approach to boost your metabolic rate through strategic nutrition timing and exercise protocols.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      icon: Activity,
      title: "Real-Time Progress Tracking",
      description: "Weekly measurements, body composition analysis, and adjustments to keep you on track for rapid results.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=200&fit=crop"
    }
  ];

  const programTypes = [
    {
      title: "Rapid Start Program",
      duration: "4 weeks",
      sessions: "12 sessions",
      price: "$399",
      weightLoss: "4-10 kg",
      features: [
        "Initial comprehensive metabolic assessment",
        "Personalized low-calorie nutrition plan",
        "12 guided exercise sessions (30 min each)",
        "Weekly body composition tracking",
        "Meal planning templates & recipes",
        "Behavioral change toolkit",
        "Email & chat support",
        "Educational resources library"
      ],
      badge: "Quick Results",
      badgeColor: "bg-green-500"
    },
    {
      title: "Complete Transformation",
      duration: "12 weeks",
      sessions: "24 sessions",
      price: "$899",
      weightLoss: "10-20 kg",
      features: [
        "Everything in Rapid Start Program",
        "24 one-on-one sessions (45 min each)",
        "Advanced metabolism optimization plan",
        "Strength & muscle preservation training",
        "Nutritional supplementation guidance",
        "Mental wellness & stress management",
        "Habit formation coaching",
        "Plateau-breaking strategies",
        "Priority scheduling & 24/7 support"
      ],
      badge: "Most Popular",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Ultimate Weight Mastery",
      duration: "6 months",
      sessions: "48+ sessions",
      price: "$1,699",
      weightLoss: "20-40 kg",
      features: [
        "Everything in Complete Transformation",
        "48+ personalized sessions (60 min each)",
        "Advanced body recomposition program",
        "Cardiovascular fitness optimization",
        "Maintenance & relapse prevention plan",
        "Long-term lifestyle transformation coaching",
        "Group support workshops",
        "Post-weight loss skin & toning guidance",
        "3-month maintenance support included",
        "Lifetime access to all resources",
        "Direct phone access to coach"
      ],
      badge: "Best Results",
      badgeColor: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/images/rapidiphy.png"
            alt="Fast track weight loss program"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 text-sm border-0">
              <Zap className="w-4 h-4 mr-2 inline" />
              Physiotherapy-Led Weight Management
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              RapidiPhy
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-6">
              Fast-Track Weight Management Program
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Achieve rapid, sustainable, and healthy weight loss with our scientifically-designed program. 
              Combining personalized nutrition, strategic exercise, and behavioral coaching for results you can 
              see and feel — without crash diets or extreme measures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-lg px-8 py-6 rounded-full shadow-lg">
                <Link to="/consultation">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Your Transformation
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-green-500 text-green-600 hover:bg-green-50 text-lg px-8 py-6 rounded-full">
                <Link to="/consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Results Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-1">1.5-2.5kg</div>
              <div className="text-xs text-gray-600">Average Weekly Loss</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-teal-600 mb-1">10-15%</div>
              <div className="text-xs text-gray-600">Body Weight in 12 Weeks</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-1">93%</div>
              <div className="text-xs text-gray-600">Client Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-xs text-gray-600">Science-Backed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RapidiPhy Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why RapidiPhy Gets Results Fast
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our physiotherapist-led approach combines the science of metabolism with sustainable lifestyle changes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Rapid Yet Safe Weight Loss",
                description: "Lose 1.5-2.5 kg per week through evidence-based methods that protect your health and preserve muscle mass."
              },
              {
                icon: Dumbbell,
                title: "Preserve Lean Muscle",
                description: "Strategic strength training and protein optimization ensure you lose fat, not muscle, for a toned physique."
              },
              {
                icon: Zap,
                title: "Boost Metabolism Naturally",
                description: "Increase your metabolic rate through targeted exercise and nutrition timing for sustained calorie burn."
              },
              {
                icon: Shield,
                title: "No Crash Diets or Starvation",
                description: "Balanced, nutritious eating plans that fuel your body while creating the calorie deficit needed for weight loss."
              },
              {
                icon: Brain,
                title: "Break Emotional Eating Patterns",
                description: "Behavioral coaching to identify triggers, build healthy habits, and develop a positive relationship with food."
              },
              {
                icon: Heart,
                title: "Improve Overall Health",
                description: "Reduce joint pain, improve cardiovascular health, boost energy, and enhance quality of life beyond the scale."
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-green-600" />
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Weight Loss System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six powerful components working together to accelerate your weight loss journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-green-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white/95 backdrop-blur rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Is RapidiPhy Right for You?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Individuals wanting to lose 5-40+ kg",
              "People who have struggled with traditional diets",
              "Those preparing for surgery or medical procedures",
              "Individuals with joint pain or mobility limitations",
              "People with obesity-related health conditions (diabetes, high blood pressure, etc.)",
              "Anyone wanting rapid results with professional support",
              "Those recovering from weight gain after pregnancy",
              "People needing accountability and structured guidance",
              "Individuals ready to commit to lifestyle transformation",
              "Anyone tired of yo-yo dieting and want lasting results"
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-green-50 border border-green-100 hover:shadow-lg transition-all">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Packages */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Weight Loss Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you want a quick start or complete transformation, we have a program designed for your goals. 
              All packages include personalized care from certified physiotherapists and nutritionists.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${index === 1 ? 'transform lg:scale-105 border-4 border-teal-200 shadow-xl' : 'border-2 border-gray-200'}`}>
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
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
                      {program.price}
                    </div>
                    <div className="text-gray-600 font-medium">{program.duration}</div>
                    <div className="text-sm text-gray-500">{program.sessions}</div>
                    <Badge className="mt-2 bg-green-100 text-green-700 border-0">
                      Expected Loss: {program.weightLoss}
                    </Badge>
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
                  
                  <Button asChild className={`w-full ${index === 1 ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600' : 'bg-teal-600 hover:bg-teal-700'} text-lg py-6`}>
                    <Link to="/consultation">
                      Choose This Plan
                      <TrendingUp className="w-5 h-5 ml-2" />
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
              Your Weight Loss Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step process to rapid, sustainable weight loss
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation & Assessment",
                description: "Discuss your goals, evaluate your metabolism, and create your personalized weight loss blueprint.",
                icon: Calendar,
                color: "from-green-500 to-teal-500"
              },
              {
                step: "2",
                title: "Launch Your Program",
                description: "Begin your custom nutrition plan and exercise routine with expert guidance every step of the way.",
                icon: Zap,
                color: "from-teal-500 to-blue-500"
              },
              {
                step: "3",
                title: "Track & Optimize",
                description: "Weekly check-ins, body composition tracking, and plan adjustments for continuous progress.",
                icon: TrendingUp,
                color: "from-blue-500 to-purple-500"
              },
              {
                step: "4",
                title: "Maintain Your Success",
                description: "Transition to a sustainable lifestyle with maintenance strategies and ongoing support.",
                icon: Award,
                color: "from-purple-500 to-pink-500"
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
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from clients who transformed their lives with RapidiPhy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                quote: "I lost 18 kg in 12 weeks with RapidiPhy! The program was challenging but sustainable. My joint pain disappeared, my energy skyrocketed, and I finally feel confident in my body. This isn't a diet — it's a lifestyle transformation!",
                name: "Rajesh Kumar",
                role: "Lost 18 kg in 12 weeks",
                rating: 5
              },
              {
                quote: "After years of failed diets, RapidiPhy gave me the structure and accountability I needed. I lost 25 kg in 6 months and learned how to maintain it. The physiotherapy approach made all the difference for my bad knees!",
                name: "Sneha Patel",
                role: "Lost 25 kg in 6 months",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-green-200 hover:shadow-2xl transition-all">
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
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
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
            <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-lg px-10 py-7 rounded-full shadow-lg">
              <Link to="/consultation">
                <Zap className="w-6 h-6 mr-2" />
                Start Your RapidiPhy Journey
              </Link>
            </Button>
            <p className="text-gray-600 mt-6">Join hundreds who've achieved their weight loss goals with RapidiPhy</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/src/images/rapidiphy.png"
            alt="Weight loss transformation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Body & Health?
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Stop struggling with fad diets and unrealistic programs. Get rapid, sustainable results with 
            professional guidance, evidence-based methods, and a support system that ensures your success. 
            Your transformation starts today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-xl">
              <Link to="/consultation">
                <Calendar className="w-6 h-6 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Safe & Science-Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>93% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RapidiPhy;