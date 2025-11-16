import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Calendar, Clock, Video, CheckCircle, Gift, Star, Users, Award, Phone, Mail, MapPin, Shield, Zap, Heart, ThumbsUp, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    serviceInterest: "",
    currentCondition: "",
    previousTreatment: "",
    goals: "",
    availability: "",
    preferredTime: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Consultation Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      serviceInterest: "",
      currentCondition: "",
      previousTreatment: "",
      goals: "",
      availability: "",
      preferredTime: "",
      agreeTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const consultationBenefits = [
    {
      icon: CheckCircle,
      title: "Comprehensive Assessment",
      description: "Detailed evaluation of your condition, lifestyle, and health goals"
    },
    {
      icon: Heart,
      title: "Personalized Recommendations",
      description: "Custom treatment plan tailored to your specific needs and circumstances"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Direct consultation with Dr. Tina Singh (11+ years experience)"
    },
    {
      icon: Zap,
      title: "Actionable Insights",
      description: "Immediate tips and exercises you can start implementing right away"
    }
  ];

  const faqs = [
    {
      question: "How long is the free consultation?",
      answer: "The free consultation is a comprehensive 30-minute session where we discuss your health concerns, goals, and create a preliminary treatment plan."
    },
    {
      question: "Is the consultation really free?",
      answer: "Yes, absolutely! There are no hidden charges or obligations. This is our way of understanding your needs and helping you make an informed decision about your health."
    },
    {
      question: "What should I prepare for the consultation?",
      answer: "Have a brief list of your symptoms, any medical reports if available, and be ready to discuss your health goals. Wear comfortable clothing if you'll be demonstrating movements."
    },
    {
      question: "Can I book a consultation for someone else?",
      answer: "Yes, you can book on behalf of a family member. Please mention this in the form and provide their information along with yours."
    },
    {
      question: "Do you offer home visits for consultation?",
      answer: "Yes! While initial consultations are typically conducted online via video call, we do offer home visit consultations and treatments for those who prefer in-person care."
    },
    {
      question: "When will I be contacted after submitting the form?",
      answer: "Our team reviews all consultation requests promptly and will contact you within 24 hours to schedule your free consultation at a time that works best for you."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-pink-50 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
            alt="Consultation background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-teal-600 text-white px-4 py-2 text-sm">Limited Time Offer</Badge>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Gift className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get Your Free Expert Consultation
          </h1>
          <p className="text-2xl text-gray-700 mb-4 font-semibold">
            Worth ₹1,500 - Yours FREE Today!
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step towards better health. Our certified physiotherapists will assess 
            your needs, answer all your questions, and create a personalized plan just for you - 
            completely free with zero obligation!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Calendar className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">30-Minute Session</p>
              <p className="text-xs text-gray-600">Comprehensive evaluation</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Video className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">Online Video Call</p>
              <p className="text-xs text-gray-600">From comfort of home</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <CheckCircle className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">No Commitment</p>
              <p className="text-xs text-gray-600">Zero obligation</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Shield className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-900">100% Confidential</p>
              <p className="text-xs text-gray-600">Your privacy protected</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold">Rated 4.9/5 by 200+ patients</span>
            <span className="mx-2">•</span>
            <Users className="w-5 h-5 text-teal-600" />
            <span className="font-semibold">1000+ consultations completed</span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">11+ Years</p>
              <p className="text-sm text-gray-600">Clinical Experience</p>
            </div>
            <div>
              <Users className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">1000+</p>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div>
              <Star className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Patient Rating</p>
            </div>
            <div>
              <ThumbsUp className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Included in Your Free Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the same professional care that has helped over 1,000 patients transform their health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationBenefits.map((benefit, index) => (
              <Card key={index} className="text-center border-2 border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your Free Consultation Now
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Fill out the form below and our team will contact you within 24 hours to schedule your consultation
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full inline-flex">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">37 consultations booked this week</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-2 border-teal-100">
                <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-600"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Consultation Request Form
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Please fill out this form so we can better understand your needs and prepare 
                    for your consultation. All information is kept strictly confidential.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 font-bold">1</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="mt-1"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="mt-1"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="mt-1"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="mt-1"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="md:w-1/2">
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          required
                          value={formData.age}
                          onChange={(e) => handleInputChange("age", e.target.value)}
                          className="mt-1"
                          placeholder="Your age"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 font-bold">2</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Service Information</h3>
                      </div>
                      <div>
                        <Label htmlFor="serviceInterest">Primary Service Interest *</Label>
                        <Select onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service that interests you" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="prenatal">Prenatal Care</SelectItem>
                            <SelectItem value="postnatal">Postnatal Recovery</SelectItem>
                            <SelectItem value="womens-health">Women's Health</SelectItem>
                            <SelectItem value="ergonomic">Ergonomic & Postural Education</SelectItem>
                            <SelectItem value="geriatric">Geriatric Care</SelectItem>
                            <SelectItem value="individual">Individual Program</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Health Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 font-bold">3</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Health Information</h3>
                      </div>
                      <div>
                        <Label htmlFor="currentCondition">Current Condition or Concern *</Label>
                        <Textarea
                          id="currentCondition"
                          required
                          value={formData.currentCondition}
                          onChange={(e) => handleInputChange("currentCondition", e.target.value)}
                          placeholder="Please describe your current condition, symptoms, pain areas, or health concerns..."
                          className="mt-1 min-h-[100px]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="previousTreatment">Previous Treatment History</Label>
                        <Textarea
                          id="previousTreatment"
                          value={formData.previousTreatment}
                          onChange={(e) => handleInputChange("previousTreatment", e.target.value)}
                          placeholder="Any previous physiotherapy, surgeries, medical treatments, or relevant health history..."
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="goals">Your Health Goals *</Label>
                        <Textarea
                          id="goals"
                          required
                          value={formData.goals}
                          onChange={(e) => handleInputChange("goals", e.target.value)}
                          placeholder="What would you like to achieve through physiotherapy? (e.g., pain relief, improved mobility, return to sports)"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 font-bold">4</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Scheduling Preferences</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="availability">Best Days for You</Label>
                          <Select onValueChange={(value) => handleInputChange("availability", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select preferred days" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weekdays">Weekdays</SelectItem>
                              <SelectItem value="weekends">Weekends</SelectItem>
                              <SelectItem value="any">Any day</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="preferredTime">Preferred Time</Label>
                          <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                              <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                          className="mt-1"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                          >
                            I agree to the terms and conditions and privacy policy. I understand this 
                            is a free consultation with no obligation to purchase services. I consent 
                            to being contacted by The Healers team via phone, email, or WhatsApp. *
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg py-6 font-semibold"
                    >
                      <Gift className="w-5 h-5 mr-2" />
                      Request Free Consultation Now
                    </Button>
                    
                    <p className="text-center text-sm text-gray-500">
                      By submitting this form, you'll receive a response within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Enhanced */}
            <div className="space-y-6">
              <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50 sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-teal-800 flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    What You'll Get (Worth ₹1,500)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "30-minute one-on-one consultation",
                    "Comprehensive health assessment",
                    "Personalized recommendations",
                    "Exercise plan preview",
                    "Posture & ergonomic tips",
                    "Treatment timeline estimation",
                    "Direct access to Dr. Tina Singh",
                    "Answer to all your questions",
                    "No obligation or commitment required"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-700">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Instant Confirmation</p>
                      <p className="text-xs text-gray-600">You'll receive an email confirmation immediately after submission</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Team Review (Within 24 Hours)</p>
                      <p className="text-xs text-gray-600">Our team reviews your form and prepares for your consultation</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Schedule Your Session</p>
                      <p className="text-xs text-gray-600">We'll contact you to find a convenient time slot</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Join Your Video Call</p>
                      <p className="text-xs text-gray-600">Meet Dr. Tina Singh and start your health journey!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-pink-200 bg-pink-50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-pink-600" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-gray-600">info@thehealers.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Visit Us</p>
                      <p className="text-gray-600">Near Nehru Nagar, Bhilai-Durg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What Patients Say About Their Consultation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The free consultation was incredibly thorough. Dr. Tina took time to understand 
                  my pregnancy-related back pain and gave me practical tips I could implement 
                  immediately. Best decision I made!"
                </p>
                <p className="font-semibold text-gray-900">Neha Gupta</p>
                <p className="text-sm text-gray-600">Expecting Mother, Bhilai</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I was skeptical about online consultations, but Dr. Tina's expertise came 
                  through clearly. She diagnosed my work-related neck pain and the exercises 
                  she suggested worked wonders!"
                </p>
                <p className="font-semibold text-gray-900">Vikram Yadav</p>
                <p className="text-sm text-gray-600">IT Professional, Durg</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about your free consultation
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-teal-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-teal-600 font-bold text-sm">Q</span>
                    </div>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-12">
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Don't Let Pain Hold You Back
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Take the first step toward a pain-free, healthier life. Book your free consultation 
            today and discover how physiotherapy can transform your health!
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8 hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <a href="#top">Scroll to Form</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;