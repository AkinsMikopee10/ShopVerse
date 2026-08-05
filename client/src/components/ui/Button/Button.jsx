import { forwardRef } from "react";

import { cn } from "../../../lib/cn";
import { buttonVariants } from "./buttonVariants";

/**
 * Reusable application button.
 */
const Button = forwardRef(({ className, variant, size, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
