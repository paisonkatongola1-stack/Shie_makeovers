import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative group">
              <div className="relative z-10 aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-accent">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
                  alt="Shie MakeOvers Interior"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 -z-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-1000"></div>
              <div className="absolute -top-10 -left-10 -z-10 w-48 h-48 border border-secondary/10 rounded-full"></div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-secondary">Our Story</h4>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">The Essence of <br /><span className="italic font-light text-secondary">Sophistication</span></h2>
              </div>

              <div className="space-y-6 text-lg font-sans text-foreground/70 leading-relaxed max-w-xl">
                <p>
                  Founded in 2020, Shie MakeOvers was born out of a desire to create a space where beauty meets relaxation. We believe that nail care is more than just a service—it&apos;s a form of self-expression and self-care.
                </p>
                <p>
                  Our mission is to provide an unparalleled experience through meticulous attention to detail, the use of premium products, and a commitment to hygiene and professional care. Each of our technicians is a master of their craft, dedicated to bringing your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-accent">
                <div className="space-y-2">
                  <h3 className="text-4xl font-serif font-bold text-secondary">1.2k+</h3>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/30">Loyal Clients</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-serif font-bold text-secondary">15+</h3>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/30">Master Artists</p>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/book">
                  <Button variant="secondary" size="lg">Book Your Experience</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Meet Our Visionaries</h2>
            <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-secondary">The hands that craft perfection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Elena Rossi", role: "Master Technician", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
              { name: "Sarah Chen", role: "Art Specialist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
              { name: "Maya Williams", role: "Pedicure Expert", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
              { name: "Isabella Garcia", role: "Acrylic Master", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop" },
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="aspect-[3/4] rounded-sm overflow-hidden mb-8 relative border border-accent shadow-sm">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{member.name}</h3>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/30">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
