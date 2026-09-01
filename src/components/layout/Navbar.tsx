"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground flex items-center">
              SHIE <span className="text-secondary font-light italic ml-2">MakeOvers</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-medium text-foreground/70 hover:text-secondary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book">
              <Button variant="secondary" size="sm">Book Now</Button>
            </Link>
            <button
              aria-label="Shopping Bag"
              className="text-foreground/70 hover:text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm outline-none"
            >
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              aria-label="Shopping Bag"
              className="text-foreground/70 hover:text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm outline-none"
            >
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
              className="text-foreground/70 hover:text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded-sm outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white border-b border-accent transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-sans font-medium text-foreground/70 hover:text-secondary transition-colors uppercase tracking-widest py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book" onClick={() => setIsOpen(false)}>
            <Button variant="secondary" className="w-full">Book Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
