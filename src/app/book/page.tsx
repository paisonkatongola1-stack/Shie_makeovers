"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { User, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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

const staff: Staff[] = [
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
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground">Select a Service</h2>
            <div className="grid gap-4">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setBookingData({...bookingData, service: s}); nextStep(); }}
                  className={cn(
                    "flex justify-between items-center p-6 border rounded-sm transition-all text-left",
                    bookingData.service?.id === s.id ? "border-primary bg-primary/5" : "border-accent hover:border-primary/50"
                  )}
                >
                  <div>
                    <p className="font-serif font-bold text-lg">{s.name}</p>
                    <p className="text-xs font-sans text-foreground/40 uppercase tracking-widest">{s.duration} mins</p>
                  </div>
                  <p className="font-sans font-bold text-primary-foreground">\${s.price}</p>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-foreground">Select a Technician</h2>
            <div className="grid gap-4">
              {staff.map((st) => (
                <button
                  key={st.id}
                  onClick={() => { setBookingData({...bookingData, staff: st}); nextStep(); }}
                  className={cn(
                    "flex items-center p-6 border rounded-sm transition-all text-left space-x-6",
                    bookingData.staff?.id === st.id ? "border-primary bg-primary/5" : "border-accent hover:border-primary/50"
                  )}
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-foreground/20">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-lg">{st.name}</p>
                    <p className="text-xs font-sans text-foreground/40 uppercase tracking-widest">{st.role}</p>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground">Back</button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8">
             <h2 className="text-2xl font-serif font-bold text-foreground">Select Date & Time</h2>
             <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 block mb-3">Pick a Date</label>
                  <input
                    type="date"
                    className="w-full bg-white border border-accent p-4 outline-none focus:border-primary rounded-sm"
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 block mb-3">Available Slots</label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingData({...bookingData, time})}
                        className={cn(
                          "py-3 border text-xs font-sans font-bold rounded-sm transition-all",
                          bookingData.time === time ? "bg-primary text-primary-foreground border-primary" : "border-accent hover:border-primary/50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
             </div>
             <div className="flex justify-between items-center pt-6">
                <button onClick={prevStep} className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground">Back</button>
                <button
                  disabled={!bookingData.date || !bookingData.time}
                  onClick={nextStep}
                  className="bg-secondary text-secondary-foreground px-8 py-3 rounded-sm text-xs font-sans font-bold uppercase tracking-widest disabled:opacity-50"
                >
                  Continue
                </button>
             </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Your Information</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Full Name</label>
                <input type="text" className="w-full border-b border-accent py-4 focus:border-primary outline-none" placeholder="Jane Doe" onChange={(e) => setBookingData({...bookingData, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Email</label>
                  <input type="email" className="w-full border-b border-accent py-4 focus:border-primary outline-none" placeholder="jane@example.com" onChange={(e) => setBookingData({...bookingData, email: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Phone</label>
                  <input type="tel" className="w-full border-b border-accent py-4 focus:border-primary outline-none" placeholder="(555) 000-0000" onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Special Notes (Optional)</label>
                <textarea className="w-full border-b border-accent py-4 focus:border-primary outline-none resize-none" rows={2} placeholder="Any specific requests?" onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}></textarea>
              </div>
            </form>
            <div className="flex justify-between items-center pt-6">
                <button onClick={prevStep} className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground">Back</button>
                <button
                  disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                  onClick={nextStep}
                  className="bg-secondary text-secondary-foreground px-10 py-4 rounded-sm text-xs font-sans font-bold uppercase tracking-widest shadow-lg"
                >
                  Confirm Booking
                </button>
             </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center py-10 space-y-8">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
              <Check size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Booking Confirmed!</h2>
              <p className="text-foreground/60 font-sans">Thank you, {bookingData.name}. Your appointment is all set.</p>
            </div>
            <div className="bg-accent/10 p-8 rounded-sm text-left max-w-md mx-auto space-y-4">
              <div className="flex justify-between">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40">Service</span>
                <span className="text-sm font-sans font-bold">{bookingData.service?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40">Technician</span>
                <span className="text-sm font-sans font-bold">{bookingData.staff?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-foreground/40">Date & Time</span>
                <span className="text-sm font-sans font-bold">{bookingData.date} at {bookingData.time}</span>
              </div>
            </div>
            <a href="/" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-sm text-xs font-sans font-bold uppercase tracking-widest">Return Home</a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-accent/5">
      <Navbar />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-accent rounded-sm">
            {/* Progress Bar */}
            {step < 5 && (
              <div className="flex justify-between mb-16">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex flex-col items-center flex-1 relative">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-xs z-10 transition-colors duration-500",
                      step >= s ? "bg-primary text-primary-foreground" : "bg-accent text-foreground/20"
                    )}>
                      {step > s ? <Check size={16} /> : s}
                    </div>
                    {s < 4 && (
                      <div className={cn(
                        "absolute top-5 left-1/2 w-full h-[1px] -z-0",
                        step > s ? "bg-primary" : "bg-accent"
                      )}></div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {renderStep()}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
