import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const galleryImages = [
  { id: 1, category: "Acrylic", url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Gel", url: "https://images.unsplash.com/photo-1632345031435-819519583071?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Nail Art", url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "French Tips", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Bridal Nails", url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Seasonal", url: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">Our Masterpieces</h1>
            <p className="text-lg font-sans text-foreground/60 max-w-2xl mx-auto">A curated showcase of our finest artistry and bespoke designs crafted with precision and passion.</p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["All", "Acrylic", "Gel", "French Tips", "Nail Art", "Bridal Nails", "Seasonal"].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-sm border border-secondary/10 text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative aspect-[3/4] overflow-hidden group cursor-pointer rounded-sm shadow-sm border border-accent">
                <img
                  src={img.url}
                  alt={img.category}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-white font-serif font-bold text-2xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                  <div className="w-12 h-0.5 bg-white/40 mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                  <button className="text-white text-[10px] font-sans font-bold uppercase tracking-[0.3em] border border-white/40 px-6 py-3 hover:bg-white hover:text-secondary transition-all">View Details</button>
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
