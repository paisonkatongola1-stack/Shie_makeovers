import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    const defaultId = useId();
    const id = props.id || defaultId;
    const errorId = `${id}-error`;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 block"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full bg-white border-b border-accent py-4 focus:border-primary outline-none transition-colors placeholder:text-foreground/20",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-[10px] text-red-500 font-sans">
            {error}
          </p>
        )}
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
  ({ className, label, error, ...props }, ref) => {
    const defaultId = useId();
    const id = props.id || defaultId;
    const errorId = `${id}-error`;

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-foreground/40 block"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full bg-white border-b border-accent py-4 focus:border-primary outline-none transition-colors resize-none placeholder:text-foreground/20",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-[10px] text-red-500 font-sans">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
