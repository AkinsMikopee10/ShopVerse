import { cn } from "../../../lib/cn";

const Badge = ({ children, className }) => {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
