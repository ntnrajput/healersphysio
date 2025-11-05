import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, HeartPulse, Handshake, Lightbulb, Users } from "lucide-react";

const AboutUs = () => {
  const coreValues = [
    {
      icon: HeartPulse,
      title: "Compassionate Care",
      description: "We put people first with genuine care and empathy."
    },
    {
      icon: Handshake,
      title: "Integrity & Trust",
      description: "Transparency, honesty, and ethical conduct in all we do."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "We evolve with evidence-based techniques and technology."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Promoting wellness and awareness at the grassroots level."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/images/bg_pic_3.jpg"
            alt="About Us"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About The Healers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by expert physiotherapist Dr. Tina Singh, The Healers is committed to restoring health, mobility, and confidence through customized care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <p className="text-lg text-gray-700 mb-6">
            Since its inception in 2023 in Bhilai, Chhattisgarh, The Healers has become a beacon of hope for individuals seeking physical rehabilitation, women's health solutions, and elder care. We believe in blending traditional physiotherapy with modern techniques to bring holistic healing.
          </p>
          <p className="text-lg text-gray-700">
            From prenatal to geriatric care, we offer specialized programs tailored to each life stage and condition. Our mission is to heal, educate, and empower every individual we serve.
          </p>
        </div>
      </section>


      {/* Founder Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <div className="w-full h-full">
            <img
              src="/src/images/pic_tina.png" // Replace with actual path
              alt="Dr. Tina Singh"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Credentials */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <h3 className="text-xl font-semibold text-teal-600 mb-2">Dr. Tina Singh (PT)</h3>
            <p className="text-gray-700 mb-4">
              Founder & Chief Physiotherapist at <strong>The Healers – Physiotherapy & Rehabilitation Centre</strong>, Bhilai.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>✔️ BPT, MPT (Orthopaedics)</li>
              <li>✔️ Former Associate Professor, SSIMS, Bhilai (2019–2023)</li>
              <li>✔️ 10+ years of clinical and academic experience</li>
              <li>✔️ Specialist in prenatal/postnatal care, geriatric, and musculoskeletal physiotherapy</li>
              <li>✔️ Passionate about empowering individuals through personalized rehabilitation</li>
            </ul>
          </div>

        </div>
      </section>


      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center py-6">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-10 h-10 text-pink-600" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute left-0 top-0 w-1/3 h-full overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1584467735871-bfc8caa1b83d?w=400&h=600&fit=crop"
            alt="Satisfied client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 italic mb-6">
              "The Healers transformed my postnatal recovery. Tina ma'am’s guidance helped me regain my strength, and I felt truly supported throughout."
            </blockquote>
            <div className="text-lg font-semibold text-gray-900">Priya Verma</div>
            <div className="text-gray-600">Fit Mom Program</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Empower Your Healing Journey</h2>
          <p className="text-lg mb-8">
            Let us be a part of your transformation. Discover a healthier, stronger, and more confident you with The Healers.
          </p>
          <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            <a href="/consultation">Book Your Free Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
