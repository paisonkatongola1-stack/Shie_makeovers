import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "error" | "info" | "outline";
}

export const Badge = ({ className, variant = "info", ...props }: BadgeProps) => {
  const variants = {
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    outline: "border border-accent text-foreground/60",
  };

  return (
    <span
      className={cn(
        "text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest inline-flex items-center",
        variants[variant],
        className
      )}
      {...props}
    />
  );
};
