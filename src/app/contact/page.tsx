import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Input, Textarea, Button } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">Get in <br /><span className="text-secondary italic">Touch</span></h1>
                <p className="text-lg font-sans text-foreground/60 leading-relaxed max-w-md">
                  Have a question or want to book a special event? Our concierge team is ready to assist you in creating your perfect salon.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-secondary flex items-center space-x-2">
                    <MapPin size={18} />
                    <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">Studio</h3>
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    123 Elegance Blvd, Suite 100<br />
                    Beverly Hills, CA 90210
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-secondary flex items-center space-x-2">
                    <Phone size={18} />
                    <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">Direct</h3>
                  </div>
                  <p className="text-foreground/60 text-sm font-bold">(555) 123-4567</p>
                </div>

                <div className="space-y-4">
                  <div className="text-secondary flex items-center space-x-2">
                    <Mail size={18} />
                    <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">Email</h3>
                  </div>
                  <p className="text-foreground/60 text-sm">hello@shiemakeovers.com</p>
                </div>

                <div className="space-y-4">
                  <div className="text-secondary flex items-center space-x-2">
                    <Clock size={18} />
                    <h3 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em]">Hours</h3>
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Mon - Sat: 9 AM - 8 PM<br />
                    Sun: 10 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/30 p-12 md:p-20 rounded-sm border border-secondary/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-10">Send a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input id="full-name" label="Full Name" placeholder="Your name" />
                  <Input id="email-address" label="Email Address" type="email" placeholder="email@example.com" />
                </div>
                <Input id="subject" label="Subject" placeholder="How can we help?" />
                <Textarea id="message" label="Message" rows={4} placeholder="Your thoughts..." />
                <Button variant="secondary" size="lg" className="w-full mt-6 shadow-xl">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-accent/20 w-full flex items-center justify-center border-y border-accent group cursor-pointer overflow-hidden">
        <div className="text-center relative z-10 space-y-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-700">
            <MapPin size={32} className="text-secondary" />
          </div>
          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-foreground/40">Open in Google Maps</p>
        </div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </section>

      <Footer />
    </main>
  );
}
