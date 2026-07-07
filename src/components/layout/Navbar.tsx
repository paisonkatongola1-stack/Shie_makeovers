"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground">
              SHIE <span className="text-primary-foreground font-light italic">MakeOvers</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-medium text-foreground/70 hover:text-primary-foreground transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-sm font-sans font-semibold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-all shadow-sm"
            >
              Book Now
            </Link>
            <button className="text-foreground/70 hover:text-primary-foreground transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button className="text-foreground/70 hover:text-primary-foreground transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b border-accent/50 transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-sans font-medium text-foreground/70 hover:text-primary-foreground transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-secondary text-secondary-foreground px-6 py-3 rounded-sm font-sans font-semibold uppercase tracking-widest text-xs shadow-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
