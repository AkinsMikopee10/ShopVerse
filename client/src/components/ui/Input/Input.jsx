import { forwardRef } from "react";
import { cn } from "../../../lib/cn";

const Input = forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export default Input;
