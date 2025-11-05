
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Calendar, Clock, Video, CheckCircle, Gift } from "lucide-react";
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Consultation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards better health. Our certified physiotherapists will assess 
            your needs and create a personalized plan just for you - completely free!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span>30-minute session</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Video className="w-5 h-5 text-teal-600" />
              <span>Online video call</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              <span>No commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Consultation Request Form
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Please fill out this form so we can better understand your needs and prepare 
                    for your consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="mt-1"
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
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Service Information</h3>
                      <div>
                        <Label htmlFor="serviceInterest">Primary Service Interest *</Label>
                        <Select onValueChange={(value) => handleInputChange("serviceInterest", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
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
                      <h3 className="text-lg font-semibold text-gray-900">Health Information</h3>
                      <div>
                        <Label htmlFor="currentCondition">Current Condition or Concern *</Label>
                        <Textarea
                          id="currentCondition"
                          required
                          value={formData.currentCondition}
                          onChange={(e) => handleInputChange("currentCondition", e.target.value)}
                          placeholder="Please describe your current condition, symptoms, or areas of concern..."
                          className="mt-1 min-h-[100px]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="previousTreatment">Previous Treatment History</Label>
                        <Textarea
                          id="previousTreatment"
                          value={formData.previousTreatment}
                          onChange={(e) => handleInputChange("previousTreatment", e.target.value)}
                          placeholder="Any previous physiotherapy, medical treatments, or relevant history..."
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
                          placeholder="What would you like to achieve through physiotherapy?"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Scheduling Preferences</h3>
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
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                        >
                          I agree to the terms and conditions and privacy policy. I understand this 
                          is a free consultation with no obligation to purchase services. *
                        </label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3"
                    >
                      Request Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-2 border-teal-100 bg-teal-50">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-teal-800 flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "30-minute one-on-one consultation",
                    "Comprehensive health assessment",
                    "Personalized recommendations",
                    "Exercise plan preview",
                    "Direct access to certified physiotherapist",
                    "No obligation or commitment required"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <span>We'll review your form and contact you within 24 hours</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <span>Schedule your free consultation at a convenient time</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <span>Join your video call and start your health journey</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
