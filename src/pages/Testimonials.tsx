import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Postnatal Recovery Program",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The personalized sessions helped me recover strength and confidence after my delivery. The attention and support I received was incredible.",
  },
  {
    name: "Anil Sharma",
    title: "Second Innings Program",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "My mobility has improved significantly. Dr. Tina's team made me feel heard and motivated throughout my therapy.",
  },
  {
    name: "Priya Mehta",
    title: "Nari Shakti Program",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "The team addressed my pelvic health issues with empathy and expertise. I feel stronger and more confident in my daily life.",
  },
  {
    name: "Rajiv Kapoor",
    title: "ProFlex - Ergonomic Training",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Their ergonomic program changed the way I sit and work. I no longer suffer from neck and back pain after long hours at the office.",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&h=600&fit=crop"
            alt="Happy clients"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Hear directly from the people whose lives have been transformed by our care.
          </p>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <Card key={index} className="border shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <CardTitle className="text-lg text-gray-900">{t.name}</CardTitle>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{t.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white text-center">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Book your free consultation today and take the first step toward a healthier, stronger you.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8">
            <Link to="/consultation">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
