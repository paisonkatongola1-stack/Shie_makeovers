import { Card, CardHeader, CardContent, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface ServiceStepProps {
  services: Service[];
  selectedId?: string;
  onSelect: (service: Service) => void;
}

export const ServiceStep = ({ services, selectedId, onSelect }: ServiceStepProps) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-l-4 border-secondary pl-6">
        <h2 className="text-3xl font-serif font-bold text-foreground">Select a Service</h2>
        <p className="text-foreground/40 font-sans text-sm uppercase tracking-widest mt-2 font-bold">Step 1 of 4</p>
      </div>
      <div className="grid gap-6">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s)}
            className={cn(
              "flex justify-between items-center p-8 border rounded-sm transition-all text-left group",
              selectedId === s.id
                ? "border-secondary bg-secondary/5 ring-1 ring-secondary"
                : "border-accent hover:border-secondary/30 bg-white"
            )}
          >
            <div>
              <p className="font-serif font-bold text-xl group-hover:text-secondary transition-colors">{s.name}</p>
              <p className="text-xs font-sans text-foreground/40 uppercase tracking-widest mt-1 font-medium">{s.duration} mins</p>
            </div>
            <p className="font-serif font-bold text-2xl text-secondary">\${s.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
