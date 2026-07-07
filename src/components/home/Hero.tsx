"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background with soft red/pink gradient */}
      <div className="absolute inset-0 bg-[#fff5f5] z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
              Beautiful Nails. <br />
              <span className="text-secondary italic font-light">Professional Care.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-sans text-foreground/70 mb-10 leading-relaxed"
          >
            Experience the ultimate in beauty artistry and luxury treatments. Our expert technicians are dedicated to making you look your absolute best in a serene environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/book">
              <Button size="lg" variant="secondary">Book Now</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">View Services</Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block absolute right-[-5%] top-1/2 transform -translate-y-1/2 w-1/2 aspect-square rounded-full border-[1px] border-primary/30"
      ></motion.div>
    </section>
  );
};

export default Hero;
