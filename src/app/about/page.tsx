import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
                  alt="Shie MakeOvers Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 -z-10 w-64 h-64 bg-primary/20 rounded-full"></div>
              <div className="absolute -top-8 -left-8 -z-10 w-48 h-48 border border-secondary/30 rounded-full"></div>
            </div>

            <div className="lg:w-1/2">
              <h4 className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-primary-foreground mb-4">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">The Essence of Elegance</h2>
              <p className="text-lg font-sans text-foreground/70 mb-6 leading-relaxed">
                Founded in 2020, Shie MakeOvers was born out of a desire to create a sanctuary where beauty meets relaxation. We believe that nail care is more than just a service—it's a form of self-expression and self-care.
              </p>
              <p className="text-lg font-sans text-foreground/70 mb-8 leading-relaxed">
                Our mission is to provide an unparalleled experience through meticulous attention to detail, the use of premium products, and a commitment to hygiene and professional care. Each of our technicians is a master of their craft, dedicated to bringing your vision to life.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-accent">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-secondary mb-2">500+</h3>
                  <p className="text-sm font-sans font-bold uppercase tracking-widest text-foreground/40">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-secondary mb-2">10+</h3>
                  <p className="text-sm font-sans font-bold uppercase tracking-widest text-foreground/40">Expert Artists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Meet Our Artists</h2>
            <p className="text-lg font-sans text-foreground/60">The talented hands behind our beautiful designs.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Elena Rossi", role: "Master Technician", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
              { name: "Sarah Chen", role: "Nail Art Specialist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
              { name: "Maya Williams", role: "Pedicure Expert", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
              { name: "Isabella Garcia", role: "Acrylic Master", img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop" },
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="aspect-[3/4] rounded-sm overflow-hidden mb-6 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs font-sans font-bold uppercase tracking-widest text-primary-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
