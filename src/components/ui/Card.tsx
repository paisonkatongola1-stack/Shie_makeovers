import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = ({ className, hover = true, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-white border border-accent rounded-sm overflow-hidden",
        hover && "hover:shadow-xl transition-all duration-500 group",
        className
      )}
      {...props}
    />
  );
};

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("p-8", className)} {...props} />;
};

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("relative h-64 overflow-hidden", className)} {...props} />;
};
