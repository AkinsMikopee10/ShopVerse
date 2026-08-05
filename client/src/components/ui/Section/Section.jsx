import { cn } from "@/lib/cn";

const Section = ({ children, className }) => {
  return <section className={cn("py-12 md:py-16", className)}>{children}</section>;
};

export default Section;
