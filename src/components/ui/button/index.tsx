import { forwardRef } from "react";
import Style from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <Comp className={`${Style.button} ${className}`} ref={ref} {...props} />
    )
  }
)

Button.displayName = "Button";
export { Button };