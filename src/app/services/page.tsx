import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  { id: 1, name: "Classic Manicure", description: "Our basic nail care service includes nail shaping, cuticle care, and a relaxing hand massage with polish of your choice.", duration: 30, price: 25, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Gel Manicure", description: "A classic manicure with gel polish that lasts up to 14 days without chipping or peeling.", duration: 45, price: 45, image: "https://images.unsplash.com/photo-1632345031435-819519583071?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Acrylic Full Set", description: "Add length and strength to your natural nails with our premium acrylic full set.", duration: 90, price: 65, image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Nail Art", description: "Custom hand-painted designs, gems, or decals to make your nails unique.", duration: 30, price: 15, image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Deluxe Pedicure", description: "Indulge in a luxury spa pedicure with scrub, mask, and massage.", duration: 60, price: 55, image: "https://images.unsplash.com/photo-1519415510236-855906a2c5b3?q=80&w=800&auto=format&fit=crop" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-24 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-lg font-sans text-foreground/70 leading-relaxed">
              From classic care to elaborate artistry, discover our range of premium nail treatments designed for your ultimate comfort and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-accent rounded-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold text-foreground">{service.name}</h3>
                    <span className="text-primary-foreground font-sans font-bold text-lg">\${service.price}</span>
                  </div>
                  <p className="text-sm font-sans text-foreground/60 mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-accent">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40">{service.duration} mins</span>
                    <a
                      href="/book"
                      className="bg-secondary text-secondary-foreground px-6 py-2 rounded-sm text-xs font-sans font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors shadow-sm"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
