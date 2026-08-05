import { cn } from "../../../lib/cn";

const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
