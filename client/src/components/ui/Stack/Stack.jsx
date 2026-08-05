import { cn } from "@/lib/cn";

const Stack = ({ children, className }) => {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>;
};

export default Stack;
