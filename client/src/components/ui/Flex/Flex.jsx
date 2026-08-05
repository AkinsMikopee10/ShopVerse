import { cn } from "@/lib/cn";

const Flex = ({ children, className }) => {
  return <div className={cn("flex items-center", className)}>{children}</div>;
};

export default Flex;
