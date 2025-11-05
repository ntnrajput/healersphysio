
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Gift, Clock, CheckCircle } from "lucide-react";

const PromotionSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=600&fit=crop"
          alt="Wellness and health"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="flex items-center gap-2 text-teal-200">
              <Gift className="w-6 h-6" />
              <span className="text-lg font-semibold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Start Your Journey with a
              <span className="text-yellow-300 block">FREE Consultation</span>
            </h2>
            
            <p className="text-xl text-teal-100 leading-relaxed">
              Take the first step towards better health. Our certified physiotherapists will assess 
              your needs and create a personalized treatment plan just for you.
            </p>

            <div className="flex items-center gap-2 text-teal-200">
              <Clock className="w-5 h-5" />
              <span>30-minute comprehensive assessment • No commitment required</span>
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8 py-3 h-auto font-semibold"
            >
              <Link to="/consultation">
                Claim Your Free Session
              </Link>
            </Button>
          </div>

          {/* Promo Card */}
          <div className="relative">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Gift className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Free Initial Consultation
                    </h3>
                    <p className="text-gray-600">
                      Worth $150 - Completely FREE for new clients
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Comprehensive health assessment",
                      "Personalized treatment recommendations",
                      "Exercise plan preview",
                      "Direct consultation with certified physiotherapist"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 text-left">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500 mb-4">
                      Offer expires in: <span className="font-semibold text-red-600">7 days</span>
                    </div>
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link to="/consultation">
                        Book Your Free Session Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-300 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
