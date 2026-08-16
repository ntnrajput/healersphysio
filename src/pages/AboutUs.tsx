import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, HeartPulse, Handshake, Lightbulb, Users, Award, Target, Heart, TrendingUp, BookOpen, Stethoscope, GraduationCap, Clock, MapPin, Building2, Home } from "lucide-react";

const AboutUs = () => {
  const coreValues = [
    {
      icon: HeartPulse,
      title: "Compassionate Care",
      description: "We put people first with genuine care and empathy, treating every patient as family."
    },
    {
      icon: Handshake,
      title: "Integrity & Trust",
      description: "Building lasting relationships through transparency, honesty, and ethical conduct in all we do."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Staying ahead with evidence-based techniques, latest research, and cutting-edge technology."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Promoting wellness awareness and health education at the grassroots level."
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Lives Transformed",
      description: "Patients successfully treated"
    },
    {
      icon: Award,
      number: "11+",
      label: "Years of Excellence",
      description: "Clinical experience"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Patient Satisfaction",
      description: "Average rating from reviews"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "In rehabilitation programs"
    }
  ];

  const specializations = [
    {
      icon: Stethoscope,
      title: "Orthopedic & Neuro",
      areas: ["Joint Pain Management", "Neurological Rehabilitation", "Sports Injuries", "Spinal Conditions"]
    },
    {
      icon: Heart,
      title: "Women's Health",
      areas: ["Prenatal Care", "Postnatal Recovery", "Pelvic Floor Therapy", "Pregnancy Wellness"]
    },
    {
      icon: Users,
      title: "Specialized Care",
      areas: ["Post-Surgical Rehab", "Geriatric Care", "Pediatric Therapy", "Pain Management"]
    },
    {
      icon: Building2,
      title: "Corporate Wellness",
      areas: ["Ergonomic Solutions", "Posture Correction", "Workplace Health", "Home Visits"]
    }
  ];

  const hospitalExperience = [
    {
      name: "Medanta the Medicity",
      location: "Gurugram",
      icon: Building2
    },
    {
      name: "Fortis Hospital",
      location: "Raigarh",
      icon: Building2
    },
    {
      name: "Shri Shankaracharya Institute of Medical Sciences",
      location: "Bhilai",
      icon: Building2
    },
    {
      name: "Asha d Hope Rehab",
      location: "Rehabilitation Center",
      icon: Building2
    },
    {
      name: "OHC - JSPL",
      location: "Angul",
      icon: Building2
    }
  ];

  const timeline = [
    {
      year: "2007-2012",
      title: "Bachelor of Physiotherapy (BPT)",
      description: "Foundation in physiotherapy science, anatomy & clinical practice."
    },
    {
      year: "2012-2014",
      title: "Master of Physiotherapy (MPT)",
      description: "Specialized in Orthopaedics, advancing expertise in musculoskeletal rehabilitation."
    },
    {
      year: "2014-2023",
      title: "Clinical Excellence Across India",
      description: "11+ years of experience at prestigious hospitals including Medanta Gurugram, Fortis Raigarh, SSIMS Bhilai, and JSPL Angul, treating thousands of patients."
    },
    {
      year: "2023",
      title: "The Healers Founded",
      description: "Establishment of The Healers Physiotherapy & Rehabilitation Centre in Bhilai-Durg, near Nehru Nagar, bringing world-class care to Chhattisgarh."
    },
    {
      year: "2024-Present",
      title: "Leading Physiotherapy Clinic",
      description: "Recognized as the best physiotherapy clinic in Bhilai & Durg, offering comprehensive services from orthopedic care to home visits."
    }
  ];

  const testimonials = [
    {
      text: "The Healers transformed my postnatal recovery. Dr. Tina's guidance helped me regain my strength, and I felt truly supported throughout. The personalized care made all the difference.",
      author: "Priya Verma",
      program: "Fit Mom Program",
      rating: 5
    },
    {
      text: "After years of chronic back pain from my desk job, ProFlex program gave me relief I never thought possible. The team understood my work constraints and created a plan that fit my lifestyle.",
      author: "Amit Patel",
      program: "ProFlex - Ergonomic Wellcare",
      rating: 5
    },
    {
      text: "My father's mobility improved drastically after joining the Golden Years program. The therapists are patient, knowledgeable, and genuinely care about their patients' wellbeing.",
      author: "Sneha Reddy",
      program: "Golden Years - Senior Care",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg_pic_3.jpg"
            alt="About The Healers"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-pink-500 text-white px-4 py-2 text-sm">Established 2023</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About The Healers
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            The Best Physiotherapy Clinic in Bhilai & Durg
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Where 11+ Years of Clinical Excellence Meets Compassionate Care – Your Partner in Health, 
            Mobility, and Transformation
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-pink-600" />
              <span className="font-semibold">Near Nehru Nagar, Bhilai-Durg</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-pink-600" />
              <span className="font-semibold">11+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-pink-600" />
              <span className="font-semibold">Home Visits Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide accessible, evidence-based physiotherapy that empowers individuals to 
                  reclaim their health, mobility, and quality of life. We strive to be the trusted 
                  partner in every patient's healing journey, combining clinical excellence with 
                  genuine compassion and personalized care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-blue-50">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as the leading physiotherapy center in Chhattisgarh, known for 
                  transformative patient outcomes and innovative rehabilitation programs. We envision 
                  a community where quality physiotherapy is accessible to all, and where prevention 
                  and wellness are valued as much as treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A story of passion, dedication, and commitment to healing
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Healers was born from a vision cultivated over 11+ years of clinical excellence across 
              India's most prestigious healthcare institutions. Founded in 2023 in Bhilai-Durg by 
              Dr. Tina Singh, our center represents the culmination of experience gained at renowned 
              hospitals including Medanta the Medicity Gurugram, Fortis Raigarh, and SSIMS Bhilai.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Located conveniently near Nehru Nagar in Bhilai-Durg, we've quickly established ourselves 
              as the best physiotherapy clinic in the region. What sets us apart is not just our clinical 
              expertise, but our commitment to making quality physiotherapy accessible – whether you visit 
              our state-of-the-art clinic or prefer the convenience of home visits.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our comprehensive services span the entire spectrum of physiotherapy care: from orthopedic 
              and neurological rehabilitation to post-surgical recovery, prenatal and postnatal care, 
              women's health, geriatric rehabilitation, and corporate wellness programs focusing on 
              ergonomics and posture correction.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Today, The Healers stands as a testament to what's possible when world-class clinical 
              expertise meets genuine compassion. We've treated over 1,000 patients, each with their 
              unique story, and we remain committed to our founding principle: providing top-notch 
              physiotherapy services that transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-2 border-pink-100">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              11+ years of clinical excellence across India's premier healthcare institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Image */}
            <div className="w-full h-full">
              <img
                src="/images/pic_tina.png"
                alt="Dr. Tina Singh - Founder & Chief Physiotherapist"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Credentials & Story */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Tina Singh (PT)</h3>
              <p className="text-xl text-pink-600 font-semibold mb-4">
                BPT (2012), MPT - Orthopaedics (2014)
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founder & Chief Physiotherapist at <strong>The Healers – Physiotherapy & 
                Rehabilitation Centre</strong>, Bhilai-Durg. Dr. Tina brings 11+ years of clinical 
                expertise from India's most prestigious healthcare institutions.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Educational Excellence</p>
                    <p className="text-gray-600 text-sm">BPT (2007-2012) • MPT Orthopaedics (2012-2014)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Extensive Experience</p>
                    <p className="text-gray-600 text-sm">11+ years of clinical practice (2014-Present)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Premier Hospital Experience</p>
                    <p className="text-gray-600 text-sm">
                      Medanta Gurugram • Fortis Raigarh • SSIMS Bhilai • JSPL Angul • Asha d Hope Rehab
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Specialized Expertise</p>
                    <p className="text-gray-600 text-sm">
                      Orthopedic • Neuro • Post-Surgical • Women's Health • Geriatric • Corporate Wellness
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Patient Philosophy</p>
                    <p className="text-gray-600 text-sm">
                      Passionate about empowering individuals through personalized, compassionate rehabilitation
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700 bg-pink-50 p-4 rounded">
                "Every patient deserves not just treatment, but a partnership in their healing journey. 
                At The Healers, we don't just treat conditions – we transform lives."
                <footer className="text-sm text-gray-600 mt-2 not-italic">— Dr. Tina Singh</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Premier Healthcare Institutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Tina Singh's journey of excellence across India's leading hospitals
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hospitalExperience.map((hospital, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-pink-100">
                <CardContent className="pt-6 pb-6">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <hospital.icon className="w-6 h-6 text-pink-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{hospital.name}</h3>
                  <p className="text-xs text-gray-600">{hospital.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Top-notch physiotherapy services covering all aspects of rehabilitation and wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <spec.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {spec.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.areas.map((area, areaIndex) => (
                      <li key={areaIndex} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                        {area}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services Banner */}
          <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Convenience at Your Doorstep</h3>
            <p className="text-lg mb-4">
              Can't visit our clinic? No problem! We offer professional home visit services 
              for your comfort and convenience.
            </p>
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              <a href="/consultation">Book a Home Visit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Professional Journey
            </h2>
            <p className="text-lg text-gray-600">
              From education to establishing Bhilai-Durg's premier physiotherapy clinic
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}>
                    <Card className="bg-white hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge className="bg-pink-500 text-white w-fit mb-2">
                          {item.year}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 && <div className="hidden md:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every patient we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center py-8 hover:shadow-xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why We're The Best in Bhilai & Durg
            </h2>
            <p className="text-lg text-gray-600">
              What makes The Healers the preferred choice for physiotherapy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200">
              <CardHeader>
                <Award className="w-10 h-10 text-pink-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Premier Hospital Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  11+ years of expertise from India's leading hospitals like Medanta and Fortis, 
                  now accessible in Bhilai-Durg with the same world-class standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200">
              <CardHeader>
                <MapPin className="w-10 h-10 text-pink-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Convenient Location & Home Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Easily accessible near Nehru Nagar with ample parking, plus we offer professional 
                  home visit services for your comfort and convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200">
              <CardHeader>
                <Users className="w-10 h-10 text-pink-600 mb-4" />
                <CardTitle className="text-xl font-bold text-gray-900">
                  Comprehensive Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  From orthopedic to neuro, post-surgical to prenatal care, geriatric to corporate 
                  wellness – all your physiotherapy needs under one roof.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real people whose lives we've touched
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-pink-200">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 text-center">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.program}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50">
              <a href="/testimonials">Read More Success Stories</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience The Healers Difference
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join over 1,000 satisfied patients who have transformed their lives at Bhilai-Durg's 
            best physiotherapy clinic. With 11+ years of expertise and top-notch services, we're 
            here to help you heal, recover, and thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100 hover:scale-105 transition-transform">
              <a href="/consultation">Book Free Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-pink-600">
              <a href="/programs">Explore Our Programs</a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5" />
              <p className="text-lg font-semibold">Visit Us:</p>
            </div>
            <p className="text-xl font-bold">The Healers - Physiotherapy & Rehabilitation Centre</p>
            <p className="text-lg">Near Nehru Nagar, Bhilai-Durg, Chhattisgarh</p>
            <p className="text-sm mt-4 opacity-90">Clinic Visits • Home Visits • Virtual Consultations</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;