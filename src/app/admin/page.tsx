"use client";

import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";
import { LayoutDashboard, Calendar, Users, Scissors, Star, Settings, DollarSign, CheckCircle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingRecord {
  id: string;
  customer: string;
  service: string;
  price: number;
  staff: string;
  status: string;
  startTime: string;
  endTime: string;
  notes: string | null;
  createdAt: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated" && (session?.user as any)?.role === "ADMIN") {
      setLoading(true);
      setError(null);

      fetch("/api/admin/bookings")
        .then(async (res) => {
          if (!res.ok) {
            const body = await res.json().catch(() => null);
            throw new Error(body?.error || "Unable to load bookings.");
          }
          return res.json();
        })
        .then((data) => setBookings(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [status, session]);

  if (status === "loading") {
    return (
      <main className="min-h-screen bg-accent/5">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <p className="text-lg font-sans text-foreground/70">Loading admin access...</p>
        </div>
      </main>
    );
  }

  if (status === "unauthenticated") {
    return (
      <main className="min-h-screen bg-accent/5">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">
          <div className="bg-slate-900 border border-accent rounded-sm shadow-xl p-10 text-center max-w-lg w-full">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Admin access required</h1>
            <p className="text-foreground/60 mb-8">Please sign in with admin credentials to view bookings and manage the dashboard.</p>
            <button
              onClick={() => signIn("credentials", { callbackUrl: "/admin" })}
              className="bg-primary text-primary-foreground px-10 py-4 rounded-sm font-sans font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </main>
    );
  }

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <main className="min-h-screen bg-accent/5">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">
          <div className="bg-slate-900 border border-accent rounded-sm shadow-xl p-10 text-center max-w-lg w-full">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Unauthorized</h1>
            <p className="text-foreground/60 mb-8">You do not have permission to access this page.</p>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-secondary text-secondary-foreground px-10 py-4 rounded-sm font-sans font-bold uppercase tracking-widest hover:bg-secondary/90 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    );
  }

  const totalBookings = bookings.length;
  const confirmedCount = bookings.filter((booking) => booking.status === "CONFIRMED").length;
  const pendingCount = bookings.filter((booking) => booking.status === "PENDING").length;
  const totalRevenue = bookings.reduce((sum, booking) => sum + booking.price, 0);

  return (
    <main className="min-h-screen bg-accent/5">
      <Navbar />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 border-r border-accent p-6 flex flex-col">
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

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="mt-6 w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-sm font-sans font-bold uppercase tracking-widest text-xs hover:bg-secondary/90 transition-colors"
          >
            Sign Out
          </button>
        </aside>

        {/* Content Area */}
        <div className="flex-grow overflow-auto p-10">
          {activeTab === "dashboard" && (
            <div className="space-y-10">
              <header>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Admin Dashboard</h1>
                <p className="text-foreground/40 font-sans uppercase tracking-widest text-xs font-bold">Welcome back, {(session?.user as any)?.name || "Admin"}.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-slate-900 p-6 border border-accent rounded-sm shadow-sm">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40 mb-2">Total Bookings</p>
                  <p className="text-3xl font-serif font-bold text-foreground">{totalBookings}</p>
                </div>
                <div className="bg-slate-900 p-6 border border-accent rounded-sm shadow-sm">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40 mb-2">Confirmed</p>
                  <p className="text-3xl font-serif font-bold text-foreground">{confirmedCount}</p>
                </div>
                <div className="bg-slate-900 p-6 border border-accent rounded-sm shadow-sm">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40 mb-2">Pending</p>
                  <p className="text-3xl font-serif font-bold text-foreground">{pendingCount}</p>
                </div>
                <div className="bg-slate-900 p-6 border border-accent rounded-sm shadow-sm">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-foreground/40 mb-2">Total Revenue</p>
                  <p className="text-3xl font-serif font-bold text-foreground">${totalRevenue.toFixed(2)}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-accent rounded-sm shadow-sm overflow-hidden">
                <div className="p-6 border-b border-accent flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-serif font-bold">Recent Bookings</h3>
                    <p className="text-sm font-sans text-foreground/60">Latest bookings from your database.</p>
                  </div>
                  <div className="text-sm font-sans text-foreground/60">{loading ? "Refreshing..." : `${bookings.length} bookings loaded`}</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                    <thead>
                      <tr className="bg-accent/10">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Customer</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Service</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Date</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Status</th>
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-accent">
                      {error ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-sm text-red-600">{error}</td>
                        </tr>
                      ) : bookings.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-sm text-foreground/60">No bookings found.</td>
                        </tr>
                      ) : (
                        bookings.map((booking) => (
                          <tr key={booking.id} className="hover:bg-accent/5">
                            <td className="px-6 py-4 text-sm font-bold text-foreground">{booking.customer}</td>
                            <td className="px-6 py-4 text-sm text-foreground/60">{booking.service}</td>
                            <td className="px-6 py-4 text-sm text-foreground/60">{new Date(booking.startTime).toLocaleString()}</td>
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
                            <td className="px-6 py-4 text-sm font-bold text-foreground">${booking.price.toFixed(2)}</td>
                          </tr>
                        ))
                      )}
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
