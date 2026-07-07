import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardContent, Button } from "@/components/ui";
import Link from "next/link";

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

      <section className="py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-lg font-sans text-foreground/70 leading-relaxed border-l-4 border-primary pl-6">
              From classic care to elaborate artistry, discover our range of premium beauty treatments designed for your ultimate comfort and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id}>
                <CardHeader>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm shadow-sm">
                    <span className="text-xs font-sans font-bold text-secondary tracking-widest">${service.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-[300px]">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">{service.name}</h3>
                  <p className="text-sm font-sans text-foreground/60 mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-accent">
                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40">{service.duration} mins</span>
                    <Link href="/book">
                      <Button variant="secondary" size="sm">Book Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
