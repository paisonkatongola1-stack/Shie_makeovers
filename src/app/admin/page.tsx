"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { LayoutDashboard, Calendar, Users, Scissors, Star, Settings, DollarSign, CheckCircle, Clock, XCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, Button } from "@/components/ui";
import { StatCard } from "@/components/admin/StatCard";

interface StatItem {
  name: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendType?: "up" | "down";
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats: StatItem[] = [
    { name: "Daily Bookings", value: "24", icon: <Calendar size={24} />, trend: "12%", trendType: "up" },
    { name: "Monthly Revenue", value: "$12,450", icon: <DollarSign size={24} />, trend: "5.4%", trendType: "up" },
    { name: "Popular Service", value: "Gel Manicure", icon: <Scissors size={24} /> },
    { name: "Active Staff", value: "8", icon: <Users size={24} /> },
  ];

  const recentBookings = [
    { id: "1", customer: "Evelyn Vane", service: "Gel Manicure", time: "09:00 AM", status: "CONFIRMED" },
    { id: "2", customer: "Julian Rossi", service: "Deluxe Pedicure", time: "10:30 AM", status: "PENDING" },
    { id: "3", customer: "Maya Chen", service: "Classic Manicure", time: "11:30 AM", status: "CONFIRMED" },
    { id: "4", customer: "Robert Fox", service: "Acrylic Full Set", time: "01:00 PM", status: "COMPLETED" },
  ];

  const sidebarItems = [
    { id: "dashboard", name: "Overview", icon: <LayoutDashboard size={18} /> },
    { id: "bookings", name: "Bookings", icon: <Calendar size={18} /> },
    { id: "services", name: "Services", icon: <Scissors size={18} /> },
    { id: "staff", name: "Staff", icon: <Users size={18} /> },
    { id: "reviews", name: "Reviews", icon: <Star size={18} /> },
    { id: "settings", name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <main className="min-h-screen bg-accent/10 flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-accent p-8 hidden lg:flex flex-col">
          <div className="mb-10 pl-4">
             <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-foreground/30">Admin Panel</h2>
          </div>
          <div className="space-y-2 flex-grow">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-6 py-4 rounded-sm text-[10px] font-sans font-bold uppercase tracking-widest transition-all group",
                  activeTab === item.id
                    ? "bg-secondary text-white shadow-lg"
                    : "text-foreground/40 hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {activeTab === item.id && <ChevronRight size={14} />}
              </button>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-accent">
             <button className="text-[10px] font-sans font-bold uppercase tracking-widest text-red-500 hover:text-red-700 transition-colors px-6 flex items-center">
               <XCircle size={16} className="mr-3" /> Logout
             </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow overflow-auto p-8 md:p-12">
          {activeTab === "dashboard" && (
            <div className="max-w-7xl mx-auto space-y-12">
              <header className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-secondary mb-2">Welcome Back</p>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Dashboard</h1>
                </div>
                <Button variant="secondary">
                   <Calendar className="mr-2" size={16} /> New Booking
                </Button>
              </header>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <StatCard key={idx} {...stat} />
                ))}
              </div>

              {/* Bookings Section */}
              <div className="bg-white border border-accent rounded-sm shadow-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                <div className="p-8 border-b border-accent flex justify-between items-center bg-accent/5">
                  <h3 className="text-xl font-serif font-bold">Upcoming Appointments</h3>
                  <button className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary border-b border-secondary/40 pb-1 hover:border-secondary transition-colors">View All Schedule</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead>
                      <tr className="bg-white">
                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Customer</th>
                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Service</th>
                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Time</th>
                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Status</th>
                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-foreground/40 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-accent/10 transition-colors group">
                          <td className="px-8 py-6">
                             <p className="text-sm font-bold text-foreground">{booking.customer}</p>
                             <p className="text-[10px] text-foreground/30 uppercase tracking-widest mt-0.5">Verified Client</p>
                          </td>
                          <td className="px-8 py-6 text-sm text-foreground/60">{booking.service}</td>
                          <td className="px-8 py-6 text-sm font-medium">
                             <div className="flex items-center text-foreground/70">
                               <Clock size={14} className="mr-2 text-secondary" /> {booking.time}
                             </div>
                          </td>
                          <td className="px-8 py-6">
                            <Badge variant={
                              booking.status === "CONFIRMED" ? "success" :
                              booking.status === "PENDING" ? "warning" :
                              booking.status === "COMPLETED" ? "info" : "error"
                            }>
                              {booking.status}
                            </Badge>
                          </td>
                          <td className="px-8 py-6 text-right">
                             <div className="flex justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="text-green-500 hover:bg-green-50 p-2 rounded-full border border-green-100 transition-colors shadow-sm bg-white"><CheckCircle size={18} /></button>
                               <button className="text-red-500 hover:bg-red-50 p-2 rounded-full border border-red-100 transition-colors shadow-sm bg-white"><XCircle size={18} /></button>
                             </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "dashboard" && (
            <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-in fade-in duration-700">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-6 text-foreground/10">
                <Clock size={48} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground/40 uppercase tracking-widest">{activeTab} Management</h3>
              <p className="text-foreground/20 font-sans text-sm mt-3 max-w-xs mx-auto uppercase tracking-widest font-bold">This module is currently being optimized for performance.</p>
              <Button variant="outline" size="sm" className="mt-10" onClick={() => setActiveTab("dashboard")}>Return to Overview</Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
