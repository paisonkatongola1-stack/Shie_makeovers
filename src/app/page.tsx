import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import { Star, ShieldCheck, Sparkles, UserCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  const services = [
    { name: "Classic Manicure", price: "$25", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" },
    { name: "Gel Manicure", price: "$45", image: "https://images.unsplash.com/photo-1632345031435-819519583071?q=80&w=800&auto=format&fit=crop" },
    { name: "Nail Art Design", price: "from $15", image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-secondary mb-4">Our Specialities</h2>
            <p className="text-4xl md:text-5xl font-serif font-bold text-foreground">Featured Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">{service.name}</h3>
                <p className="text-sm font-sans font-medium text-foreground/50 uppercase tracking-widest">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
             <Link href="/services">
                <Button variant="outline">Explore All Services</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Quote className="mx-auto text-secondary mb-6 opacity-30" size={48} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", text: "The best manicure I&apos;ve ever had. The attention to detail at Shie MakeOvers is truly unmatched." },
              { name: "Emily R.", text: "A truly premium experience. I felt like a queen from the moment I walked in." },
              { name: "Jessica M.", text: "Incredible nail art! I always get so many compliments on my nails after visiting." }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-sm border border-secondary/10 shadow-sm italic relative">
                <div className="flex mb-4 text-secondary">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-foreground">&mdash; {t.name}</p>
                <div className="absolute top-0 right-0 w-2 h-full bg-primary/20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: <UserCheck className="mx-auto text-secondary mb-6" size={40} />, title: "Expert Technicians", desc: "Our staff are highly trained and experienced artists." },
              { icon: <Sparkles className="mx-auto text-secondary mb-6" size={40} />, title: "Premium Products", desc: "We use only the highest quality, non-toxic products." },
              { icon: <ShieldCheck className="mx-auto text-secondary mb-6" size={40} />, title: "Sterilized Tools", desc: "Your safety is our priority with medical-grade sterilization." },
              { icon: <Star className="mx-auto text-secondary mb-6" size={40} />, title: "Customer Satisfaction", desc: "We strive to exceed your expectations every time." },
            ].map((feature, idx) => (
              <div key={idx}>
                {feature.icon}
                <h3 className="text-lg font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-sm font-sans text-foreground/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
