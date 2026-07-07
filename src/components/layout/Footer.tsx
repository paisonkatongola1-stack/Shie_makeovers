import Link from "next/link";
import { Camera, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/30 pt-16 pb-8 border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground">
              SHIE <span className="text-primary-foreground font-light italic">MakeOvers</span>
            </Link>
            <p className="mt-4 text-foreground/60 font-sans text-sm leading-relaxed">
              Beautiful MakeOvers. Professional Care. Experience the ultimate in nail artistry and luxury treatments at Shie MakeOvers.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-foreground/40 hover:text-primary-foreground transition-colors">
                <Camera size={20} />
              </Link>
              <Link href="#" className="text-foreground/40 hover:text-primary-foreground transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="#" className="text-foreground/40 hover:text-primary-foreground transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Gallery", "About", "Contact", "Book"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-sm font-sans text-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              {["Manicure", "Pedicure", "Nail Art", "Acrylic Sets", "Gel Removal"].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm font-sans text-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-sm font-sans text-foreground/60">
                123 Elegance Blvd, Suite 100<br />
                Beverly Hills, CA 90210
              </li>
              <li className="text-sm font-sans text-foreground/60">
                Phone: (555) 123-4567
              </li>
              <li className="text-sm font-sans text-foreground/60">
                Email: hello@shiemakeovers.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-sans font-medium uppercase tracking-widest text-foreground/40">
            © {new Date().getFullYear()} SHIE MAKEOVERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-[10px] font-sans font-medium uppercase tracking-widest text-foreground/40 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] font-sans font-medium uppercase tracking-widest text-foreground/40 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
