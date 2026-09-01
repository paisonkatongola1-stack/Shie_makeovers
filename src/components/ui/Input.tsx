import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 block"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full bg-white border-b border-accent py-4 focus:border-primary outline-none transition-colors placeholder:text-foreground/20",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-[10px] text-red-500 font-sans">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 block"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full bg-white border-b border-accent py-4 focus:border-primary outline-none transition-colors resize-none placeholder:text-foreground/20",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-[10px] text-red-500 font-sans">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
