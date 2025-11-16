import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Gift, Clock, CheckCircle, Sparkles, ArrowRight, Calendar, Heart, Star, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const PromotionSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 lg:py-24 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=600&fit=crop"
          alt="Wellness and health promotion"
          className="w-full h-full object-cover opacity-15"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-blue-700/80"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-white space-y-8">
            {/* Limited Time Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-bold animate-pulse">
              <Sparkles className="w-5 h-5" />
              <span>Limited Time Offer - Act Now!</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Start Your Journey with a
                <span className="block text-yellow-300 mt-2">FREE Consultation</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-teal-50 leading-relaxed">
                Take the first step towards better health and wellness. Our certified physiotherapists 
                will assess your unique needs and create a personalized treatment plan designed just for you.
              </p>
            </div>

            {/* Value Proposition Points */}
            <div className="space-y-4">
              {[
                "Comprehensive 30-minute health assessment",
                "Personalized treatment recommendations",
                "No commitment or credit card required",
                "Connect with certified professionals"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-teal-50">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-yellow-300" />
                  </div>
                  <span className="text-lg font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Urgency Timer */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-yellow-300 mb-4">
                <Clock className="w-5 h-5 animate-pulse" />
                <span className="font-semibold">Offer Expires In:</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Sec' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white text-teal-700 rounded-lg p-3 mb-2">
                      <span className="text-2xl lg:text-3xl font-bold">{item.value.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="text-xs text-teal-100 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-yellow-300 hover:text-gray-900 text-xl px-10 py-7 h-auto font-bold shadow-2xl hover:shadow-yellow-300/50 transition-all rounded-full group"
            >
              <Link to="/consultation" className="flex items-center gap-3">
                <Gift className="w-6 h-6" />
                Claim Your Free Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <p className="text-sm text-teal-100 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Your privacy is protected. We'll never share your information.
            </p>
          </div>

          {/* Promo Card Side */}
          <div className="relative">
            {/* Main Promo Card */}
            <Card className="bg-white shadow-2xl border-0 overflow-hidden hover:shadow-yellow-300/20 transition-all">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center space-y-6">
                  {/* Icon with Badge */}
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Gift className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full animate-pulse flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-gray-900" />
                    </div>
                  </div>
                  
                  {/* Heading */}
                  <div>
                    <Badge className="mb-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white border-0 px-4 py-1">
                      Worth $150 - FREE for You!
                    </Badge>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Free Initial Consultation
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Completely FREE for new clients - No strings attached
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4 text-left">
                    {[
                      { icon: Calendar, text: "Comprehensive health assessment (30 min)" },
                      { icon: Heart, text: "Personalized treatment recommendations" },
                      { icon: Star, text: "Custom exercise plan preview" },
                      { icon: CheckCircle, text: "Direct consultation with certified physiotherapist" }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 bg-teal-50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium pt-2">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Social Proof */}
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-4 border border-teal-200">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 border-2 border-white"
                          ></div>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">1000+ Women Transformed</span>
                    </div>
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Average 4.9/5 rating from verified clients</p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Button asChild className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg py-6 rounded-full shadow-lg group">
                      <Link to="/consultation" className="flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Book Your Free Session Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <p className="text-xs text-gray-500 mt-3">
                      Limited slots available - Secure yours today!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative Floating Elements */}
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-300 rounded-full animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-6 h-6 bg-yellow-300 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -left-4 w-4 h-4 bg-purple-300 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { icon: Shield, label: "100% Confidential", sublabel: "Your privacy guaranteed" },
            { icon: CheckCircle, label: "Certified Experts", sublabel: "Licensed professionals" },
            { icon: Heart, label: "Personalized Care", sublabel: "Tailored to your needs" },
            { icon: Star, label: "5-Star Rated", sublabel: "1000+ happy clients" }
          ].map((badge, index) => (
            <div key={index} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all">
              <badge.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="font-bold text-lg mb-1">{badge.label}</div>
              <div className="text-xs text-teal-100">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;