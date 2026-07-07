"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { LayoutDashboard, Calendar, Users, Scissors, Star, Settings, DollarSign, CheckCircle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { name: "Daily Bookings", value: "12", icon: <Calendar className="text-blue-500" /> },
    { name: "Monthly Revenue", value: "$8,450", icon: <DollarSign className="text-green-500" /> },
    { name: "Popular Service", value: "Gel Manicure", icon: <Scissors className="text-purple-500" /> },
    { name: "Total Customers", value: "342", icon: <Users className="text-orange-500" /> },
  ];

  const recentBookings = [
    { id: "1", customer: "Jane Cooper", service: "Gel Manicure", time: "10:00 AM", status: "CONFIRMED" },
    { id: "2", customer: "Alice Johnson", service: "Acrylic Set", time: "11:30 AM", status: "PENDING" },
    { id: "3", customer: "Robert Fox", service: "Pedicure", time: "01:00 PM", status: "COMPLETED" },
  ];

  return (
    <main className="min-h-screen bg-accent/5">
      <Navbar />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-accent p-6 flex flex-col">
          <div className="space-y-2 flex-grow">
            {[
              { id: "dashboard", name: "Dashboard", icon: <LayoutDashboard size={18} /> },
              { id: "bookings", name: "Bookings", icon: <Calendar size={18} /> },
              { id: "services", name: "Services", icon: <Scissors size={18} /> },
              { id: "staff", name: "Staff", icon: <Users size={18} /> },
              { id: "reviews", name: "Reviews", icon: <Star size={18} /> },
              { id: "settings", name: "Settings", icon: <Settings size={18} /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-sm text-sm font-sans font-bold uppercase tracking-widest transition-all",
                  activeTab === item.id ? "bg-primary text-primary-foreground" : "text-foreground/40 hover:bg-accent/30 hover:text-foreground"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow overflow-auto p-10">
          {activeTab === "dashboard" && (
            <div className="space-y-10">
              <header>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Admin Dashboard</h1>
                <p className="text-foreground/40 font-sans uppercase tracking-widest text-xs font-bold">Welcome back, Shie.</p>
              </header>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 border border-accent rounded-sm shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40 mb-1">{stat.name}</p>
                      <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="p-3 bg-accent/20 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bookings Section */}
              <div className="bg-white border border-accent rounded-sm shadow-sm overflow-hidden">
                <div className="p-6 border-b border-accent flex justify-between items-center">
                  <h3 className="text-lg font-serif font-bold">Upcoming Appointments</h3>
                  <button className="text-xs font-sans font-bold uppercase tracking-widest text-primary-foreground border-b border-primary-foreground">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead>
                      <tr className="bg-accent/10">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Customer</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Service</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Time</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Status</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-accent/5">
                          <td className="px-6 py-4 text-sm font-bold text-foreground">{booking.customer}</td>
                          <td className="px-6 py-4 text-sm text-foreground/60">{booking.service}</td>
                          <td className="px-6 py-4 text-sm text-foreground/60">{booking.time}</td>
                          <td className="px-6 py-4">
                            <span className={cn(
                              "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest",
                              booking.status === "CONFIRMED" ? "bg-green-100 text-green-700" :
                              booking.status === "PENDING" ? "bg-yellow-100 text-yellow-700" :
                              "bg-blue-100 text-blue-700"
                            )}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                             <div className="flex justify-end space-x-2">
                               <button className="text-green-500 hover:bg-green-50 p-1 rounded-sm"><CheckCircle size={18} /></button>
                               <button className="text-red-500 hover:bg-red-50 p-1 rounded-sm"><XCircle size={18} /></button>
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
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <Clock size={48} className="text-foreground/20 mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground/40 uppercase tracking-widest">{activeTab} Section</h3>
              <p className="text-foreground/20 font-sans text-sm mt-2">Under Development</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
