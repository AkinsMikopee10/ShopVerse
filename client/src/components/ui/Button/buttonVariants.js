import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] text-white hover:opacity-90",

        secondary: "bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-hover)]",

        outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--surface)]",

        danger: "bg-[var(--danger)] text-white hover:opacity-90",
      },

      size: {
        sm: "h-9 px-3 text-sm",

        md: "h-10 px-4",

        lg: "h-12 px-6 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
