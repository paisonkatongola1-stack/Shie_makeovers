import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  name: string;
  value: string;
  icon: ReactNode;
  trend?: string;
  trendType?: "up" | "down";
}

export const StatCard = ({ name, value, icon, trend, trendType = "up" }: StatCardProps) => {
  return (
    <div className="bg-white p-8 border border-accent rounded-sm shadow-sm flex items-center justify-between group hover:border-secondary/20 transition-all">
      <div className="space-y-2">
        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40">{name}</p>
        <p className="text-3xl font-serif font-bold text-foreground">{value}</p>
        {trend && (
           <p className={cn(
             "text-[10px] font-sans font-bold",
             trendType === "up" ? "text-green-500" : "text-red-500"
           )}>
             {trendType === "up" ? "↑" : "↓"} {trend} <span className="text-foreground/20 font-normal">vs last month</span>
           </p>
        )}
      </div>
      <div className="p-4 bg-accent/30 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
        {icon}
      </div>
    </div>
  );
};
