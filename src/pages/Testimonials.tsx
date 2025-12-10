import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, Heart, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Fit Mom - Postnatal Recovery",
    image: "/images/tstmnl_w1.jpg",
    quote:
      "After my delivery, I was struggling with severe back pain and couldn't even lift my baby properly. Dr. Tina and her team at The Healers were a blessing. The postnatal exercises were tailored exactly to my needs, and within 8 weeks, I regained my strength completely. The home visit option was incredibly convenient as I didn't have to worry about taking my newborn out. Today, I'm not just pain-free but stronger than I was before pregnancy!",
    rating: 5,
    program: "8-week program",
    result: "100% pain relief"
  },
  {
    name: "Anil Sharma",
    title: "Golden Years - Senior Care",
    // image: "https://images.unsplash.com/photo-1582108411679-caa89b9d9160?w=400&h=400&fit=crop&crop=faces",
    image: "/images/tstmnl_m2.jpg",
    quote:
      "At 68, I had almost given up hope of walking without pain. My knees were so stiff that even climbing stairs was a nightmare. My daughter brought me to The Healers, and it changed my life. Dr. Tina's patience and the gentle exercises slowly but surely improved my mobility. After 3 months of regular therapy, I can now walk to the park, play with my grandchildren, and even do light gardening. The respect and care they showed me made all the difference.",
    rating: 5,
    program: "12-week program",
    result: "Regained independence"
  },
  {
    name: "Neha Gupta",
    title: "Nari Shakti - Women's Health",
    
    image: "/images/tstmnl_w2.jpg",
    quote:
      "I was dealing with pelvic floor issues after my second pregnancy, and it was affecting my confidence and daily life. I was embarrassed to talk about it, but Dr. Tina made me feel so comfortable. The pelvic floor therapy program was exactly what I needed. The exercises were easy to follow, and the improvement was gradual but significant. Within 6 weeks, my symptoms reduced by 80%. I'm so grateful for the empathy and expertise I received here.",
    rating: 5,
    program: "6-week specialized therapy",
    result: "80% symptom reduction"
  },
  {
    name: "Rajiv Kapoor",
    title: "ProFlex - Ergonomic Wellcare",
    image: "/images/tstmnl_m1.jpg",
    quote:
      "As a software engineer, I spend 10-12 hours daily at my desk. The chronic neck and shoulder pain had become unbearable, and I was popping painkillers every day. ProFlex program was a game-changer. The ergonomic assessment of my workstation revealed so many issues I wasn't even aware of. The stretching routines and posture correction techniques are now part of my daily routine. I haven't taken a single painkiller in the last 3 months! The virtual sessions fitted perfectly into my work schedule.",
    rating: 5,
    program: "8-week program",
    result: "Zero medication needed"
  },
  {
    name: "Meera Singh",
    title: "Prenatal Care - Fit Mom Program",
    image: "/images/tstmnl_w3.jpg",
    quote:
      "During my 7th month of pregnancy, I developed severe lower back pain and swelling in my feet. My gynecologist recommended The Healers, and it was the best decision. Dr. Tina designed a safe exercise routine that not only relieved my pain but also prepared my body for delivery. The breathing exercises and pelvic floor preparation made my labor so much easier. I delivered naturally without complications, and my recovery was remarkably quick. I highly recommend their prenatal care to every expecting mother!",
    rating: 5,
    program: "Prenatal wellness program",
    result: "Smooth delivery & quick recovery"
  },
  {
    name: "Vikram Yadav",
    title: "Post-Surgical Rehabilitation",
    image: "/images/tstmnl_m3.jpg",
    quote:
      "I underwent ACL reconstruction surgery after a cricket injury, and the orthopedic surgeon recommended physiotherapy at The Healers. The structured rehabilitation program helped me regain full range of motion in just 4 months. The team's knowledge of sports injuries was impressive. They pushed me when needed and held me back when necessary. Today, I'm back on the cricket field, playing better than before. The dedication and expertise here are unmatched!",
    rating: 5,
    program: "16-week post-surgical rehab",
    result: "Returned to competitive sports"
  },
  {
    name: "Sunita Verma",
    title: "Geriatric Care - Golden Years",
    image: "/images/tstmnl_w5.jpg",
    quote:
      "My mother suffered a stroke last year, and we were devastated seeing her bedridden. The doctors at SSIMS referred us to Dr. Tina for neuro-rehabilitation. The progress was slow initially, but the team never gave up. With consistent therapy and exercises, my mother started showing improvement. After 6 months, she can now walk with minimal support, feed herself, and speak clearly. The home visit service was a blessing as traveling was difficult. Dr. Tina's team gave us hope when we had none. Forever grateful!",
    rating: 5,
    program: "6-month neuro-rehab",
    result: "Regained mobility & speech"
  },
  {
    name: "Rohit Malhotra",
    title: "Chronic Pain Management",
    image: "/images/tstmnl_m5.jpg",
    quote:
      "I've been suffering from chronic lower back pain for 5 years due to a slip disc. I tried everything - medicines, injections, even considered surgery. A friend recommended The Healers as a last resort. The comprehensive assessment identified muscle imbalances I didn't know existed. The combination of manual therapy, core strengthening, and lifestyle modifications worked wonders. My pain level went from 8/10 to 2/10 in just 10 weeks. I can now sleep properly, exercise, and live a normal life without constant fear of pain flare-ups.",
    rating: 5,
    program: "10-week pain management",
    result: "75% pain reduction"
  },
  {
    name: "Anjali Joshi",
    title: "Corporate Wellness Program",
    image: "/images/tstmnl_w6.jpg",
    quote:
      "Our company arranged a corporate wellness session with The Healers for our entire team. As someone who works in HR and sits in meetings all day, I had developed terrible posture and frequent headaches. The ergonomic training opened my eyes to how poorly I was treating my body. Dr. Tina taught us simple desk exercises and posture techniques that take just 5 minutes but make a huge difference. My headaches have reduced by 90%, and I feel more energetic throughout the day. Many of my colleagues have reported similar benefits!",
    rating: 5,
    program: "Corporate wellness workshop",
    result: "90% headache reduction"
  },
  {
    name: "Deepak Pandey",
    title: "Sports Injury Recovery",
    image: "/images/tstmnl_m6.jpg",
    quote:
      "I'm a marathon runner and developed plantar fasciitis that threatened to end my running career. I was in so much pain that even walking was difficult. The Healers' sports rehabilitation program was exactly what I needed. The combination of manual therapy, strengthening exercises, and running technique correction not only healed my injury but also improved my performance. I recently completed a half-marathon with zero pain and my best timing ever! Dr. Tina's team understands athletes and their goals.",
    rating: 5,
    program: "12-week sports rehab",
    result: "Returned to running + PB"
  },
  {
    name: "Kavita Sinha",
    title: "Fit Mom - Diastasis Recti Recovery",
    image: "/images/tstmnl_w7.jpg",
    quote:
      "After my twins were born, I noticed a visible bulge in my abdomen that wouldn't go away despite exercise. My doctor diagnosed it as diastasis recti and recommended specialized physiotherapy. The Healers' postnatal program focused on core rehabilitation with safe, effective exercises. Dr. Tina was so patient in explaining the condition and the healing process. After 12 weeks of dedicated therapy, my abdominal separation reduced from 4 fingers to less than 1 finger! My core strength is back, and I feel confident in my body again.",
    rating: 5,
    program: "12-week core rehab",
    result: "Abdominal separation healed"
  },
  {
    name: "Sanjay Mishra",
    title: "Workplace Injury Recovery",
    image: "/images/tstmnl_m4.jpg",
    quote:
      "I work in a manufacturing unit and injured my shoulder while lifting heavy equipment. The pain was severe, and I couldn't raise my arm above shoulder level. The company insurance covered treatment at The Healers, which was fortunate. The physiotherapy sessions were intensive but effective. Dr. Tina's team used a combination of manual therapy, exercises, and workplace ergonomics training. In 8 weeks, I regained full shoulder mobility and strength. They even visited my workplace to assess and suggest modifications. I'm back to work, pain-free, and more aware of safe lifting techniques.",
    rating: 5,
    program: "8-week occupational therapy",
    result: "Full shoulder recovery"
  }
];

const stats = [
  {
    icon: Heart,
    number: "1000+",
    label: "Happy Patients",
    description: "Lives transformed"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Average Rating",
    description: "Patient satisfaction"
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "Treatment outcomes"
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Would Recommend",
    description: "To family & friends"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-pink-50 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&h=600&fit=crop"
            alt="Happy clients"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-teal-600 text-white px-4 py-2">Patient Stories</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Stories, Real Results
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Hear directly from the people whose lives have been transformed by our care at 
            The Healers - Bhilai-Durg's leading physiotherapy clinic.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-teal-100 hover:border-teal-300 transition-colors">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformative Healing Journeys
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every patient has a unique story of recovery, strength, and renewed hope
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <Card key={index} className="border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-teal-300 transition-all duration-300 group">
                <CardHeader className="relative pb-4">
                  <div className="absolute top-4 right-4 text-teal-500 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote className="w-12 h-12" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-teal-500 shadow-md"
                    />
                    <div>
                      <CardTitle className="text-lg text-gray-900 font-bold">{t.name}</CardTitle>
                      <p className="text-sm text-teal-600 font-semibold">{t.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{t.quote}"</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="text-xs border-teal-500 text-teal-700">
                      {t.program}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-green-500 text-green-700">
                      ✓ {t.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Our Patients' Progress
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visual proof of transformation - before and after rehabilitation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Postnatal Recovery</h3>
                <p className="text-gray-700 mb-4">
                  Watch how our Fit Mom program helps mothers regain strength and confidence
                </p>
                <Button variant="outline" className="border-teal-500 text-teal-700 hover:bg-teal-50">
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Mobility</h3>
                <p className="text-gray-700 mb-4">
                  See how Golden Years program helps seniors regain independence
                </p>
                <Button variant="outline" className="border-pink-500 text-pink-700 hover:bg-pink-50">
                  View Gallery
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
              <CardContent className="pt-8 text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pain Relief</h3>
                <p className="text-gray-700 mb-4">
                  Discover how patients achieved life-changing pain relief
                </p>
                <Button variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-50">
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose The Healers
            </h2>
            <p className="text-lg text-gray-600">
              What makes our patients consistently rate us 4.9/5 stars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  Personalized Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Dr. Tina took time to understand my specific condition and lifestyle. The treatment 
                  plan was customized to my needs, not a one-size-fits-all approach."
                </p>
                <p className="text-sm text-gray-500 mt-2 italic">- Recurring theme in 95% of reviews</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Expert Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "The 11+ years of experience shows in every session. The team's knowledge of latest 
                  techniques and evidence-based practice is impressive."
                </p>
                <p className="text-sm text-gray-500 mt-2 italic">- Mentioned in 92% of testimonials</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  Compassionate Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "They treat you like family, not just a patient. The empathy and encouragement 
                  during difficult recovery phases kept me motivated."
                </p>
                <p className="text-sm text-gray-500 mt-2 italic">- Highlighted in 98% of reviews</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  Proven Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "I saw measurable improvement week by week. The progress tracking and regular 
                  adjustments to my program ensured I achieved my recovery goals."
                </p>
                <p className="text-sm text-gray-500 mt-2 italic">- Success rate: 95% patients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=400&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Join over 1,000 satisfied patients who have transformed their lives at Bhilai-Durg's 
            best physiotherapy clinic. Your journey to recovery, strength, and renewed confidence 
            starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8 hover:scale-105 transition-transform">
              <Link to="/consultation">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8 hover:scale-105 transition-transform">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-teal-100">
            <Star className="w-5 h-5 text-yellow-300 fill-current" />
            <span>Rated 4.9/5 by 200+ patients</span>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">11+ Years</p>
              <p className="text-sm text-gray-600">Clinical Experience</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1000+</p>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-2xl font-bold text-gray-900">95%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-2xl font-bold text-gray-900">Home Visits</p>
              <p className="text-sm text-gray-600">Available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;