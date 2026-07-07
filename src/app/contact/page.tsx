import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">Get in Touch</h1>
              <p className="text-lg font-sans text-foreground/70 mb-12 leading-relaxed">
                Have a question or want to book a special event? Fill out the form below or reach out to us directly. We'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/20 p-4 rounded-sm text-primary-foreground">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">Location</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      123 Elegance Blvd, Suite 100<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary/20 p-4 rounded-sm text-primary-foreground">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/60">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary/20 p-4 rounded-sm text-primary-foreground">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">Email</h3>
                    <p className="text-foreground/60">hello@shiemakeovers.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-primary/20 p-4 rounded-sm text-primary-foreground">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">Hours</h3>
                    <p className="text-foreground/60">
                      Mon - Sat: 9:00 AM - 8:00 PM<br />
                      Sun: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-10 md:p-16 rounded-sm">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Name</label>
                    <input type="text" className="w-full bg-white border-b border-accent py-4 focus:border-secondary outline-none transition-colors" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Email</label>
                    <input type="email" className="w-full bg-white border-b border-accent py-4 focus:border-secondary outline-none transition-colors" placeholder="Email Address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Subject</label>
                  <input type="text" className="w-full bg-white border-b border-accent py-4 focus:border-secondary outline-none transition-colors" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Message</label>
                  <textarea rows={4} className="w-full bg-white border-b border-accent py-4 focus:border-secondary outline-none transition-colors resize-none" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full bg-secondary text-secondary-foreground py-5 rounded-sm font-sans font-bold uppercase tracking-[0.2em] text-sm hover:bg-secondary/90 transition-all shadow-lg mt-8">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-accent/30 w-full flex items-center justify-center border-t border-accent">
        <div className="text-center">
          <MapPin size={48} className="mx-auto text-primary-foreground mb-4 opacity-20" />
          <p className="text-sm font-sans font-bold uppercase tracking-widest text-foreground/20 italic">Interactive Map View</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
