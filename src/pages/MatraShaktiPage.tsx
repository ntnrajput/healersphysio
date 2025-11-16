import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  User, Calendar, Video, FileText, Award, Clock, CheckCircle2, Star, 
  Heart, Baby, Activity, Smile, Users, Home, Utensils, Brain,
  Target, TrendingUp, Shield, Sparkles, ArrowRight, MessageCircle
} from "lucide-react";

const MatraShakti = () => {
  const programFeatures = [
    {
      icon: Activity,
      title: "Personalized Exercise Plan",
      description: "Customized workout routines tailored to your trimester and fitness level.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
    },
    {
      icon: Target,
      title: "Monthly Body Metrics Assessment",
      description: "Regular monitoring of your physical progress and health indicators throughout pregnancy.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    },
    {
      icon: Users,
      title: "Group Exercise Sessions",
      description: "Connect with other expecting mothers while staying fit together.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Pregnancy Yoga Asanas",
      description: "Safe, pregnancy-specific yoga poses to enhance flexibility and reduce discomfort.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=200&fit=crop"
    },
    {
      icon: Brain,
      title: "Meditation & Pranayama",
      description: "Breathing techniques and mindfulness practices for mental peace and stress relief.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=200&fit=crop"
    },
    {
      icon: User,
      title: "Body Posture Analysis",
      description: "Expert evaluation and correction of posture to prevent pain and improve comfort.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    },
    {
      icon: Home,
      title: "Ergonomic Advice",
      description: "Home and workplace setup guidance for optimal comfort during pregnancy.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=200&fit=crop"
    },
    {
      icon: MessageCircle,
      title: "Personal & Family Counseling",
      description: "Emotional support and guidance for you and your family throughout the journey.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Garbh Sanskar Sessions",
      description: "Ancient wisdom-based practices for your baby's holistic development in the womb.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Couple Yoga",
      description: "Strengthen your bond while preparing for parenthood together.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop"
    },
    {
      icon: Baby,
      title: "Infant Massage Training",
      description: "Learn proper techniques to bond with and soothe your newborn.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=200&fit=crop"
    },
    {
      icon: Smile,
      title: "Infant Handling Classes",
      description: "Gain confidence in safely caring for your newborn from day one.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=200&fit=crop"
    },
    {
      icon: Utensils,
      title: "Diet & Nutritional Support",
      description: "Expert guidance on nutrition for you and your baby's optimal health.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Mental Health Support",
      description: "Dedicated psychological support for emotional well-being during pregnancy and beyond.",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=200&fit=crop"
    },
    {
      icon: Activity,
      title: "Postpartum Recovery Plan",
      description: "Structured program to help you regain strength and wellness after delivery.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    }
  ];

  const healthConditions = [
    { icon: Activity, condition: "Joint Laxity & Range Increase", description: "Manage hormonal changes affecting joint stability" },
    { icon: Activity, condition: "Edema & Nerve Compression", description: "Reduce swelling and alleviate nerve-related discomfort" },
    { icon: Target, condition: "Pelvic Floor Dysfunction", description: "Strengthen and restore pelvic floor muscles" },
    { icon: Heart, condition: "Pelvic, Hip & Groin Pain", description: "Targeted exercises to ease lower body discomfort" },
    { icon: Activity, condition: "Lower Back & SI Joint Pain", description: "Specialized treatment for pregnancy-related back pain" },
    { icon: Activity, condition: "Thoracic & Rib Pain", description: "Relief from upper body and breathing-related discomfort" },
    { icon: Target, condition: "Urinary Incontinence", description: "Pelvic floor therapy to improve bladder control" },
    { icon: Activity, condition: "Carpal Tunnel Syndrome", description: "Treatment for wrist pain and numbness" },
    { icon: Activity, condition: "Muscle Cramps", description: "Prevention and relief of painful muscle spasms" },
    { icon: Shield, condition: "Pregnancy Osteoporosis", description: "Bone health support and strengthening exercises" },
    { icon: Activity, condition: "Swollen Ankles & Varicose Veins", description: "Circulation-improving techniques and exercises" },
    { icon: Target, condition: "Weak Abdominal Muscles", description: "Safe core strengthening for pregnancy and recovery" },
    { icon: Heart, condition: "Blocked Breast Ducts", description: "Manual therapy and guidance for breastfeeding health" },
    { icon: Activity, condition: "Pelvic Misalignment", description: "Realignment techniques for optimal comfort" },
    { icon: Activity, condition: "Chronic Back & Pelvic Pain", description: "Long-term pain management strategies" },
    { icon: Target, condition: "Diastasis Recti", description: "Specialized treatment for abdominal separation" }
  ];

  const statistics = [
    {
      percentage: "20%",
      description: "of pregnant women experience pelvic pain during pregnancy",
      icon: Heart,
      color: "from-rose-500 to-pink-500"
    },
    {
      percentage: "40%+",
      description: "experience urinary incontinence during their first pregnancy",
      icon: Target,
      color: "from-purple-500 to-indigo-500"
    },
    {
      percentage: "50%",
      description: "remain incontinent at 8 weeks postpartum without intervention",
      icon: Activity,
      color: "from-blue-500 to-cyan-500"
    },
    {
      percentage: "33%",
      description: "develop new incontinence issues after childbirth",
      icon: Shield,
      color: "from-teal-500 to-emerald-500"
    },
    {
      percentage: "66%+",
      description: "of pregnant women experience back pain during pregnancy",
      icon: TrendingUp,
      color: "from-orange-500 to-amber-500"
    },
    {
      percentage: "7%",
      description: "continue to struggle with pelvic pain after birth",
      icon: Heart,
      color: "from-fuchsia-500 to-purple-500"
    }
  ];

  const whyJoinReasons = [
    {
      icon: Heart,
      title: "Manage Physiological Changes",
      description: "Navigate hormone surges, weight gain, and increased energy demands with expert support and tailored care."
    },
    {
      icon: Activity,
      title: "Reduce Pain & Discomfort",
      description: "Evidence-based exercises and therapies to minimize joint pain, back pain, and pelvic floor dysfunction throughout pregnancy."
    },
    {
      icon: Shield,
      title: "Prevent Complications",
      description: "Proactive care to reduce risk of incontinence, diastasis recti, and chronic postpartum pain."
    },
    {
      icon: Smile,
      title: "Boost Confidence & Energy",
      description: "Feel stronger, more energized, and confident in your body's ability to carry and deliver your baby."
    },
    {
      icon: Baby,
      title: "Prepare for Parenthood",
      description: "Learn essential skills for infant care, breastfeeding support, and postpartum recovery before your baby arrives."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with other expecting mothers and build a supportive network for your journey into motherhood."
    }
  ];

  const programTypes = [
    {
      title: "Essential Care Package",
      duration: "First Trimester (12 weeks)",
      sessions: "12 sessions",
      price: "$399",
      features: [
        "Initial comprehensive health assessment",
        "Personalized exercise & yoga program",
        "12 one-on-one sessions (45 min each)",
        "Monthly body metrics tracking",
        "Garbh Sanskar introduction sessions",
        "Nutrition & diet guidance",
        "Email & chat support",
        "Educational resources library"
      ],
      badge: "Perfect Start",
      badgeColor: "bg-rose-500"
    },
    {
      title: "Complete Motherhood Journey",
      duration: "Full Pregnancy (9 months)",
      sessions: "36 sessions + postnatal",
      price: "$1,299",
      features: [
        "Everything in Essential Care Package",
        "36 one-on-one sessions across all trimesters",
        "8 group exercise sessions",
        "Complete Garbh Sanskar program",
        "Couple yoga sessions (4 sessions)",
        "Personal & family counseling",
        "Infant massage & handling classes",
        "8-week postpartum recovery program",
        "Priority scheduling",
        "24/7 dedicated support"
      ],
      badge: "Most Popular",
      badgeColor: "bg-teal-500"
    },
    {
      title: "Premium Wellness & Beyond",
      duration: "Pregnancy + 6 months postnatal",
      sessions: "48+ sessions",
      price: "$1,899",
      features: [
        "Everything in Complete Motherhood Journey",
        "48+ personalized sessions (60 min each)",
        "Unlimited group sessions",
        "Advanced Garbh Sanskar & meditation",
        "Weekly progress consultations",
        "Home visit option (select areas)",
        "Extended 6-month postpartum care",
        "Mental health counseling (10 sessions)",
        "Breastfeeding support specialist",
        "Lifetime access to all resources",
        "Direct phone line to your therapist",
        "Complimentary partner wellness check"
      ],
      badge: "Ultimate Care",
      badgeColor: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-purple-100/30"></div>
          <img
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&h=800&fit=crop"
            alt="Expecting mother in peaceful setting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Signature Holistic Pregnancy Program
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              MatraShakti
            </h1>
            
            <p className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600 mb-6">
              Holistic Antenatal & Garbha Sanskar Program
            </p>
            
            <p className="text-xl lg:text-2xl text-gray-700 font-light mb-4">
              For Happy, Healthy Motherhood
            </p>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              A comprehensive prenatal, antenatal, and postnatal care program combining modern physiotherapy 
              with ancient Garbh Sanskar wisdom. Supporting you through every stage of your beautiful journey 
              to motherhood with expert care, personalized attention, and loving support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Link to="/consultation">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 text-lg px-8 py-6 rounded-full">
                <Link to="/consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-rose-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Program Features</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Mothers</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join MatraShakti Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Join MatraShakti?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Joining this program is essential for managing the physiological changes during pregnancy. 
              Our expert-guided approach helps you navigate hormone surges, weight gain, and energy demands 
              while reducing pain, preventing complications, and ensuring a healthier, safer, and more 
              confident pregnancy journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-rose-200">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-7 h-7 text-rose-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Reality of Pregnancy Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These statistics highlight why professional prenatal care is crucial for every expecting mother
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-none">
                <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                        {stat.percentage}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-rose-500 to-pink-500 border-none text-white">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-4">
                  Don't Let Statistics Become Your Story
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  With proper care, guidance, and support, you can significantly reduce these risks and enjoy a healthier, more comfortable pregnancy.
                </p>
                <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                  <Link to="/consultation">
                    Get Professional Support Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Care at Every Step
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ specialized services designed to support you from conception through postpartum recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-rose-300">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
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
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Conditions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-500 text-white px-4 py-2">
              Expert Treatment
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Common Pregnancy Concerns We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized physiotherapy care for the most common pregnancy and postpartum conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthConditions.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur border border-gray-200 hover:border-rose-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-rose-600 transition-colors">
                        {item.condition}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Experience relief and regain your strength with our evidence-based treatment approach
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600">
              <Link to="/consultation">
                Discuss Your Concerns
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Care Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible programs designed to support you through every stage of pregnancy and beyond. 
              All packages include personalized care from certified physiotherapists and holistic wellness experts.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className={`relative hover:shadow-2xl transition-all duration-300 ${index === 1 ? 'transform lg:scale-105 border-4 border-rose-200 shadow-xl' : 'border-2 border-gray-200'}`}>
                {program.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className={`${program.badgeColor} text-white px-6 py-2 text-sm shadow-lg`}>
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

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
              <CardContent className="py-6">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Not sure which package is right for you?</strong>
                </p>
                <p className="text-gray-600 mb-6">
                  Book a free consultation with our care team to discuss your needs and find the perfect program for your journey.
                </p>
                <Button asChild variant="outline" size="lg" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50">
                  <Link to="/consultation">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Journey With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, supportive process designed to give you the best possible care throughout your pregnancy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                description: "Share your story and goals with us during a complimentary 30-minute consultation call.",
                icon: MessageCircle,
                color: "from-rose-500 to-pink-500"
              },
              {
                step: "2",
                title: "Personalized Assessment",
                description: "Comprehensive health evaluation and customized treatment plan creation just for you.",
                icon: FileText,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "3",
                title: "Begin Your Program",
                description: "Start your personalized sessions with dedicated support from our expert team.",
                icon: Heart,
                color: "from-blue-500 to-purple-500"
              },
              {
                step: "4",
                title: "Continuous Care",
                description: "Regular progress tracking, adjustments, and support throughout your entire journey.",
                icon: TrendingUp,
                color: "from-teal-500 to-blue-500"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.step}
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg mx-auto -mt-10 mb-4 flex items-center justify-center">
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
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full">
          <img
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=800&fit=crop"
            alt="Happy mother"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stories of Strength & Joy
            </h2>
            <p className="text-xl text-gray-600">
              Hear from mothers who transformed their pregnancy journey with MatraShakti
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                quote: "MatraShakti was a blessing during my pregnancy. The personalized attention and holistic approach helped me manage my back pain completely. I felt empowered, supported, and ready for motherhood.",
                name: "Priya Sharma",
                role: "First-time Mother",
                rating: 5
              },
              {
                quote: "The Garbh Sanskar sessions were incredible! Not only did I stay physically fit, but the meditation and counseling helped me bond with my baby even before birth. Truly life-changing.",
                name: "Anjali Mehta",
                role: "Mother of Two",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 hover:shadow-xl transition-all">
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
                Begin Your MatraShakti Journey
              </Link>
            </Button>
            <p className="text-gray-600 mt-6 text-sm">
              Join 1000+ mothers who trusted us with their pregnancy journey
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <img
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&h=600&fit=crop"
            alt="Mother and baby"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Journey to Joyful Motherhood Starts Here
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Don't navigate pregnancy alone. Get the expert care, emotional support, and holistic guidance 
            you deserve. Every moment matters—let's make your pregnancy journey beautiful, healthy, and empowering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-full shadow-xl">
              <Link to="/consultation">
                <Calendar className="w-6 h-6 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full">
              <Link to="/contact">
                <MessageCircle className="w-6 h-6 mr-2" />
                Chat With Our Team
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6" />
              <span>1000+ Happy Mothers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>Award-Winning Care</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MatraShakti;