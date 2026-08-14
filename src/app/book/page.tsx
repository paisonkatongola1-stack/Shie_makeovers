"use client";

import { useState, useId } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Calendar as CalendarIcon, Clock as ClockIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Input, Textarea } from "@/components/ui";
import { ServiceStep } from "@/components/booking/ServiceStep";
import { StaffStep } from "@/components/booking/StaffStep";
import Link from "next/link";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface Staff {
  id: string;
  name: string;
  role: string;
}

interface BookingData {
  service: Service | null;
  staff: Staff | null;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const services: Service[] = [
  { id: "1", name: "Classic Manicure", duration: 30, price: 25 },
  { id: "2", name: "Gel Manicure", duration: 45, price: 45 },
  { id: "3", name: "Acrylic Full Set", duration: 90, price: 65 },
  { id: "4", name: "Nail Art", duration: 30, price: 15 },
  { id: "5", name: "Deluxe Pedicure", duration: 60, price: 55 },
];

const staffList: Staff[] = [
  { id: "1", name: "Elena Rossi", role: "Master Technician" },
  { id: "2", name: "Sarah Chen", role: "Nail Art Specialist" },
  { id: "3", name: "Maya Williams", role: "Pedicure Expert" },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM"
];

export default function BookingPage() {
  const dateInputId = useId();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    staff: null,
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return <ServiceStep services={services} selectedId={bookingData.service?.id} onSelect={(s) => { setBookingData({...bookingData, service: s}); nextStep(); }} />;
      case 2:
        return <StaffStep staff={staffList} selectedId={bookingData.staff?.id} onSelect={(st) => { setBookingData({...bookingData, staff: st}); nextStep(); }} onBack={prevStep} />;
      case 3:
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="border-l-4 border-secondary pl-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Pick Date & Time</h2>
                <p className="text-foreground/40 font-sans text-sm uppercase tracking-widest mt-2 font-bold">Step 3 of 4</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label
                    htmlFor={dateInputId}
                    className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center"
                  >
                    <CalendarIcon size={14} className="mr-2" /> Select Date
                  </label>
                  <input
                    id={dateInputId}
                    type="date"
                    className="w-full bg-white border border-accent p-6 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-sm font-sans"
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 flex items-center">
                    <ClockIcon size={14} className="mr-2" /> Select Time
                  </span>
                  <div
                    role="group"
                    aria-label="Available appointment times"
                    className="grid grid-cols-2 gap-3"
                  >
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData({...bookingData, time})}
                        aria-pressed={bookingData.time === time}
                        className={cn(
                          "py-4 border text-[10px] font-sans font-bold rounded-sm transition-all uppercase tracking-widest",
                          bookingData.time === time
                            ? "bg-secondary text-white border-secondary shadow-lg"
                            : "border-accent hover:border-secondary/30 bg-white"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
             </div>
             <div className="flex justify-between items-center pt-10 border-t border-accent">
                <button onClick={prevStep} className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-secondary transition-colors">Back</button>
                <Button
                  disabled={!bookingData.date || !bookingData.time}
                  onClick={nextStep}
                  variant="secondary"
                >
                  Continue
                </Button>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="border-l-4 border-secondary pl-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Your Information</h2>
                <p className="text-foreground/40 font-sans text-sm uppercase tracking-widest mt-2 font-bold">Step 4 of 4</p>
            </div>

            <div className="bg-accent/30 p-8 rounded-sm mb-10 border border-secondary/10">
               <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-secondary mb-4">Booking Summary</h4>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-[8px] font-sans font-bold uppercase tracking-widest text-foreground/40">Service</p>
                    <p className="font-serif font-bold text-sm">{bookingData.service?.name}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-sans font-bold uppercase tracking-widest text-foreground/40">Technician</p>
                    <p className="font-serif font-bold text-sm">{bookingData.staff?.name}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-sans font-bold uppercase tracking-widest text-foreground/40">Appointment</p>
                    <p className="font-serif font-bold text-sm">{bookingData.date} at {bookingData.time}</p>
                  </div>
               </div>
            </div>

            <form className="space-y-6">
              <Input label="Full Name" placeholder="Jane Doe" onChange={(e) => setBookingData({...bookingData, name: e.target.value})} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Email" type="email" placeholder="jane@example.com" onChange={(e) => setBookingData({...bookingData, email: e.target.value})} />
                <Input label="Phone" type="tel" placeholder="(555) 000-0000" onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} />
              </div>
              <Textarea label="Special Notes (Optional)" rows={2} placeholder="Any specific requests?" onChange={(e) => setBookingData({...bookingData, notes: e.target.value})} />
            </form>

            <div className="flex justify-between items-center pt-10 border-t border-accent">
                <button onClick={prevStep} className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-secondary transition-colors">Back</button>
                <Button
                  disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                  onClick={nextStep}
                  variant="secondary"
                  size="lg"
                >
                  Confirm Booking
                </Button>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center py-16 space-y-10 animate-in zoom-in duration-1000">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm border border-green-100">
              <Check size={48} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Booking Confirmed!</h2>
              <p className="text-foreground/60 font-sans max-w-md mx-auto">Thank you, {bookingData.name}. Your appointment is reserved. We&apos;ve sent a confirmation email to {bookingData.email}.</p>
            </div>
            <div className="bg-white border border-accent p-10 rounded-sm text-left max-w-md mx-auto space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-secondary"></div>
              <div className="flex justify-between items-center pb-4 border-b border-accent">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40">Service</span>
                <span className="text-sm font-sans font-bold text-secondary">{bookingData.service?.name}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-accent">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40">Technician</span>
                <span className="text-sm font-sans font-bold">{bookingData.staff?.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40">Date & Time</span>
                <span className="text-sm font-sans font-bold">{bookingData.date} at {bookingData.time}</span>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="mt-8">Return Home</Button>
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-accent/10">
      <Navbar />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 md:p-20 shadow-2xl rounded-sm border border-accent relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-accent/20">
               <div
                 className="h-full bg-secondary transition-all duration-1000 ease-out"
                 style={{ width: `${(step / 5) * 100}%` }}
               ></div>
            </div>

            {renderStep()}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
