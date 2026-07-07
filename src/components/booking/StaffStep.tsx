import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Staff {
  id: string;
  name: string;
  role: string;
}

interface StaffStepProps {
  staff: Staff[];
  selectedId?: string;
  onSelect: (staff: Staff) => void;
  onBack: () => void;
}

export const StaffStep = ({ staff, selectedId, onSelect, onBack }: StaffStepProps) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-l-4 border-secondary pl-6">
        <h2 className="text-3xl font-serif font-bold text-foreground">Select a Technician</h2>
        <p className="text-foreground/40 font-sans text-sm uppercase tracking-widest mt-2 font-bold">Step 2 of 4</p>
      </div>
      <div className="grid gap-6">
        {staff.map((st) => (
          <button
            key={st.id}
            onClick={() => onSelect(st)}
            className={cn(
              "flex items-center p-8 border rounded-sm transition-all text-left space-x-8 group",
              selectedId === st.id
                ? "border-secondary bg-secondary/5 ring-1 ring-secondary"
                : "border-accent hover:border-secondary/30 bg-white"
            )}
          >
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
              selectedId === st.id ? "bg-secondary text-white" : "bg-accent text-foreground/20 group-hover:bg-primary/20"
            )}>
              <User size={32} />
            </div>
            <div>
              <p className="font-serif font-bold text-xl group-hover:text-secondary transition-colors">{st.name}</p>
              <p className="text-xs font-sans text-foreground/40 uppercase tracking-widest mt-1 font-medium">{st.role}</p>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={onBack}
        className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-secondary transition-colors flex items-center"
      >
        <span className="mr-2">←</span> Back to Services
      </button>
    </div>
  );
};
