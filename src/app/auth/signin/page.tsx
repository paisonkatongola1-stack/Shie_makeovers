"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/admin"
    });

    setLoading(false);

    if (response?.error) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-accent/5">
      <Navbar />
      <section className="py-24">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent border border-accent/50 rounded-sm shadow-xl p-10">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-6">Admin Sign In</h1>
            <p className="text-sm font-sans text-foreground/60 mb-8">Use your admin credentials to access bookings and admin controls.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-accent border border-accent/70 p-4 rounded-sm outline-none focus:border-primary focus:ring-primary/20"
                  placeholder="admin@shiemakeovers.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-accent border border-accent/70 p-4 rounded-sm outline-none focus:border-primary focus:ring-primary/20"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-sans font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
